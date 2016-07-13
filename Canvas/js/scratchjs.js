/*! scratchjs - v0.0.3dev1 - 2013-06-02 */
var Scratch = {};

Scratch.Enum = {
  MouseMove: "mousemove",
  MouseOver: "mouseover",
  MouseOut: "mouseout",
  MouseDown: "mousedown",
  MouseUp: "mouseup",
  MouseDragMove: "mousedragmove",
  MouseDragOver: "mousedragover",
  MouseDragOut: "mousedragout",
  MouseDrop: "mousedrop",
  WidgetTypeNone: "none",
  WidgetTypeBoard: "board",
  WidgetTypeNode: "node",
  WidgetTypeDock: "dock",
  DockInput: "dockinput",
  DockOutput: "dockoutput",
  SVG: {
    Circle: "circle",
    Rect: "rect",
    Path: "path"
  }
};

Scratch.API = {};


Scratch.Util = (function() {

  function NewSVGCircle(attr) {
    var obj;
    obj = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    obj.setAttribute("id", attr.id);
    obj.setAttribute("cx", attr.x);
    obj.setAttribute("cy", attr.y);
    obj.setAttribute("r", attr.r);
    obj.setAttribute("style", attr.style);
    return obj;
  }

  function NewSVGRect(attr) {
    var obj;
    obj = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    obj.setAttribute("id", attr.id);
    obj.setAttribute("x", attr.x);
    obj.setAttribute("y", attr.y);
    obj.setAttribute("width", attr.w);
    obj.setAttribute("height", attr.h);
    obj.setAttribute("style", attr.style);
    return obj;
  }

  function NewSVGPath(attr) {
    var obj;
    obj = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    obj.setAttribute("id", attr.id);
    obj.setAttribute("d", attr.d);
    obj.setAttribute("style", attr.style);
    return obj;
  }

  /// private function
  function AddSVG(objParent, type, attr) {
    var objChild;
    if (type == Scratch.Enum.SVG.Circle) {
      objChild = NewSVGCircle(attr);
      objParent.appendChild(objChild);
    } else if (type == Scratch.Enum.SVG.Rect) {
      objChild = NewSVGRect(attr);
      objParent.appendChild(objChild);
    } else if (type == Scratch.Enum.SVG.Path) {
      objChild = NewSVGPath(attr);
      objParent.appendChild(objChild);
    }
    return objChild;
  }

  function RemoveSVG(objChild) {
    var objParent = objChild.parentNode;
    objParent.removeChild(objChild);
  }

  return {

    /// public function
    SVG: {
        add: AddSVG,
        remove: RemoveSVG
    }

  };

})();


/// state machine of scratch
Scratch.StatusMachine = function(objroot) {
  if (objroot === undefined || objroot === null) {
    return;
  }

  if (objroot.scratch === undefined || objroot.scratch === null) {
    objroot.scratch = {};
  }
  objroot.scratch.statusmachine = this;

  var ssm = this;
  objroot.onmouseup = function(evt) {
    ssm.unset();
  };

  this._root = objroot;
  this._objs = [];
  this._current = undefined;
};

Scratch.StatusMachine.prototype = {

  set: function(obj) {
    this._current = obj;
  },

  unset: function() {
    if (this._current === undefined) {
      return;
    }
    this._current.setAttribute("pointer-events", "all");
    delete this._current;
  },

  interest: function(obj) {
    this._objs.push(obj);
  },

  disinterest: function(obj) {
    for (var i = 0; i < this._objs.length; ++i) {
      if (this._objs[i] != obj) {
        continue;
      }
      this._objs.splice(i, 0);
    }
  }
};

Scratch.API.CreateStatusMachine = function(obj) {
  if (obj === undefined || obj === null) {
    return undefined;
  }
  if (obj.scratch === undefined || obj.scratch === null) {
    obj.scratch = {};
  }
  if (obj.scratch.statusmachine !== undefined) {
    return obj.scratch.statusmachine;
  }
  return new Scratch.StatusMachine(obj);
};

Scratch.API.DestroyStatusMachine = function(obj) {
  if (obj === undefined || obj === null) {
    return;
  }
  if (obj.scratch === undefined) {
    return;
  }
  if (obj.scratch.statusmachine !== undefined) {
    delete obj.scratch.statusmachine;
  }
  delete obj.scratch;
};

Scratch.Event = function(obj, sm) {

  if (obj === undefined || obj === null || sm === undefined || sm === null) {
    return;
  }

  if (obj.scratch === undefined) {
    obj.scratch = {};
  }
  obj.scratch.event = this;

  obj.onmousemove = function(evt) {
    var evtid = Scratch.Enum.MouseMove;
    if (obj.scratch.event._sm._current !== undefined) {
      evtid = Scratch.Enum.MouseDragMove;
    }
    var fnc = this.scratch.event._evts[evtid];
    if (fnc === undefined) {
      return;
    }
    fnc(evt, this.scratch.event._sm);
  };

  obj.onmouseover = function(evt) {
    var evtid = Scratch.Enum.MouseOver;
    if (obj.scratch.event._sm._current !== undefined) {
      evtid = Scratch.Enum.MouseDragOver;
    }
    var fnc = this.scratch.event._evts[evtid];
    if (fnc === undefined) {
      return;
    }
    fnc(evt, this.scratch.event._sm);
  };

  obj.onmouseout = function(evt) {
    var evtid = Scratch.Enum.MouseOut;
    if (obj.scratch.event._sm._current !== undefined) {
      evtid = Scratch.Enum.MouseDragOut;
    }
    var fnc = this.scratch.event._evts[evtid];
    if (fnc === undefined) {
      return;
    }
    fnc(evt, this.scratch.event._sm);
  };

  obj.onmousedown = function(evt) {
    var fnc = this.scratch.event._evts[Scratch.Enum.MouseDown];
    if (fnc === undefined) {
      return;
    }
    fnc(evt, this.scratch.event._sm);
    this.scratch.event._sm.set(this);
  };

  obj.onmouseup = function(evt) {
    var evtid = Scratch.Enum.MouseUp;
    if (obj.scratch.event._sm._current !== undefined) {
      evtid = Scratch.Enum.MouseDrop;
    }
    var fnc = this.scratch.event._evts[evtid];
    if (fnc === undefined) {
      return;
    }
    fnc(evt, this.scratch.event._sm);
  };

  this._obj = obj;
  this._sm = sm;
  this._evts = {};
  
};

Scratch.Event.prototype = {

  interest: function() {
    this._sm.interest(this._obj);
    return this;
  },

  disinterest: function() {
    this._sm.disinsterest(this._obj);
    return this;
  },

  on: function(evtid, fnc) {
    if (fnc === undefined || fnc === null) {
      return;
    }
    this._evts[evtid] = fnc;
    return this;
  },

  off: function(evtid) {
    var fnc = this._evts[evtid];
    if (fnc === undefined) {
      return;
    }
    delete this._evts[evtid];
    return this;
  },

  call: function(evtid, evt) {
    var fnc = this._evts[evtid];
    if (fnc === undefined || fnc === null) {
      return;
    }
    fnc(evt);
  }

};

Scratch.API.CreateEvent = function(obj, sm) {
  if (obj === undefined || obj === null) {
    return undefined;
  }
  if (obj.scratch === undefined) {
    obj.scratch = {};
  }
  if (obj.scratch.event !== undefined) {
    return obj.scratch.event;
  }
  return new Scratch.Event(obj, sm);
};

Scratch.API.DestroyEvent = function(obj) {
  if (obj === undefined || obj === null) {
    return;
  }
  if (obj.scratch === undefined) {
    return;
  }
  if (obj.scratch.event !== undefined) {
    delete obj.scratch.event;
  }
};

Scratch.Widget = function(obj) {

  /// private functions
  function CreateWidget(objNew) {
    if (objNew.scratch === undefined) {
      objNew.scratch = {};
    }
    if (objNew.scratch.widget === undefined) {
      objNew.scratch.widget = {};
    }
    if (objNew.scratch.widget.type === undefined) {
      objNew.scratch.widget.type = Scratch.Enum.WidgetTypeNone;
    }
  }

  function DestroyWidget(objOld) {
    delete objOld.scratch.widget;
  }

  function IsAvailable(objBeChecked) {
    if (objBeChecked === undefined) {
      return false;
    }
    if (objBeChecked.scratch === undefined) {
      return false;
    }
    if (objBeChecked.scratch.widget === undefined) {
      return false;
    }
    return true;
  }

  CreateWidget(obj);

  return {

    /// public functions
    type: function() {
      if (!IsAvailable(obj)) {
        return Scratch.Enum.WidgetTypeNone;
      }
      return obj.scratch.widget.type;
    },

    board: function() {
      obj.scratch.widget.type = Scratch.Enum.WidgetTypeBoard;
    },

    node: function(objBoard) {
      obj.scratch.widget.type = Scratch.Enum.WidgetTypeNode;
      obj.scratch.widget.node = {};
      obj.scratch.widget.node.board = objBoard;
    },

    dock: function(objNode, docktype) {
      obj.scratch.widget.type = Scratch.Enum.WidgetTypeDock;
      obj.scratch.widget.dock = {};
      obj.scratch.widget.dock.node = objNode;
      obj.scratch.widget.dock.type = docktype;
    },

    empty: function() {
      DestroyWidget(obj);
    }

  };
  
};

if (Scratch.API === undefined) {
  Scratch.API = {};
}
