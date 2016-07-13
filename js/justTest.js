function justTest(num){
	if(num>3){
		return num+1
	}
};
var result = justTest(2);
// console.log(result);


// 
function myonclick(){
	alert("document.addEventListener().myonclick!");
}


/*
console.log("document.body:\n");
console.log(document.body);

console.log("document.anchors:\n");
console.log(document.anchors);

console.log(":\n");
console.log();
*/


var User = {
	count:1,
	getCount: function(){
		return this.count;
	}
};

console.log(User.getCount());

var func = User.getCount;

console.log(func());









/*
	VM77:1 Uncaught ReferenceError: justTest1 is not defined
	    at <anonymous>:1:1(anonymous function) @ VM77:1
	justTest(2);
*/ 

/*
	result 的值是？
	A: 3
	B: 程序出错
	C: Null
	D: 4
	E: undefined
*/ 
// key: E 



/*
	http://www.w3schools.com/jsref/dom_obj_document.asp

	HTML DOM Nodes
	In the HTML DOM (Document Object Model), everything is a node:

	The document itself is a document node
	All HTML elements are element nodes
	All HTML attributes are attribute nodes
	Text inside HTML elements are text nodes
	Comments are comment nodes


	The Document Object
	When an HTML document is loaded into a web browser, it becomes a document object.
	The document object is the root node of the HTML document and the "owner" of all other nodes:
	(element nodes, text nodes, attribute nodes, and comment nodes).
	The document object provides properties and methods to access all node objects, from within JavaScript.

	Tip: The document is a part of the Window object and can be accessed as window.document.

	Browser Support
	Object					
	Document	Yes	Yes	Yes	Yes	Yes
	The Document Object is supported in all major browsers.
*/

/*

	Document Object Properties and Methods
	The following properties and methods can be used on HTML documents:

	Property / Method	Description
	document.activeElement	Returns the currently focused element in the document
	document.addEventListener()	Attaches an event handler to the document
	document.adoptNode()	Adopts a node from another document
	document.anchors	Returns a collection of all <a> elements in the document that have a name attribute
	document.applets	Returns a collection of all <applet> elements in the document
	document.baseURI	Returns the absolute base URI of a document
	document.body	Sets or returns the document's body (the <body> element)
	document.close()	Closes the output stream previously opened with document.open()
	document.cookie	Returns all name/value pairs of cookies in the document
	document.createAttribute()	Creates an attribute node
	document.createComment()	Creates a Comment node with the specified text
	document.createDocumentFragment()	Creates an empty DocumentFragment node
	document.createElement()	Creates an Element node
	document.createTextNode()	Creates a Text node
	document.doctype	Returns the Document Type Declaration associated with the document
	document.documentElement	Returns the Document Element of the document (the <html> element)
	document.documentMode	Returns the mode used by the browser to render the document
	document.documentURI	Sets or returns the location of the document
	document.domain	Returns the domain name of the server that loaded the document
	document.domConfig	Obsolete. Returns the DOM configuration of the document
	document.embeds	Returns a collection of all <embed> elements the document
	document.forms	Returns a collection of all <form> elements in the document
	document.getElementById()	Returns the element that has the ID attribute with the specified value
	document.getElementsByClassName()	Returns a NodeList containing all elements with the specified class name
	document.getElementsByName()	Returns a NodeList containing all elements with a specified name
	document.getElementsByTagName()	Returns a NodeList containing all elements with the specified tag name
	document.hasFocus()	Returns a Boolean value indicating whether the document has focus
	document.head	Returns the <head> element of the document
	document.images	Returns a collection of all <img> elements in the document
	document.implementation	Returns the DOMImplementation object that handles this document
	document.importNode()	Imports a node from another document
	document.inputEncoding	Returns the encoding, character set, used for the document
	document.lastModified	Returns the date and time the document was last modified
	document.links	Returns a collection of all <a> and <area> elements in the document that have a href attribute
	document.normalize()	Removes empty Text nodes, and joins adjacent nodes
	document.normalizeDocument()	Removes empty Text nodes, and joins adjacent nodes
	document.open()	Opens an HTML output stream to collect output from document.write()
	document.querySelector()	Returns the first element that matches a specified CSS selector(s) in the document
	document.querySelectorAll()	Returns a static NodeList containing all elements that matches a specified CSS selector(s) in the document
	document.readyState	Returns the (loading) status of the document
	document.referrer	Returns the URL of the document that loaded the current document
	document.removeEventListener()	Removes an event handler from the document (that has been attached with the addEventListener() method)
	document.renameNode()	Renames the specified node
	document.scripts	Returns a collection of <script> elements in the document
	document.strictErrorChecking	Sets or returns whether error-checking is enforced or not
	document.title	Sets or returns the title of the document
	document.URL	Returns the full URL of the HTML document
	document.write()	Writes HTML expressions or JavaScript code to a document
	document.writeln()	Same as write(), but adds a newline character after each statement

*/

/*
	Warning !!!

	In the W3C DOM Core, the Document object inherits all properties and methods from the Node object.
	Many of these properties and methods make no sense used on documents.
	Avoid using these node object properties and methods on HTML document objects:

	Property / Method	Reason for avoiding

	document.attributes	Documents don't have attributes
	document.hasAttributes()	Documents don't have attributes
	document.nextSibling	Documents don't have siblings
	document.nodeName	This is always #document
	document.nodeType	This is always 9 (DOCUMENT_NODE)
	document.nodeValue	Documents don't have an node value
	document.ownerDocument	Documents don't have an owner document
	document.ownerElement	Documents don't have an owner element
	document.parentNode	Documents don't have a parent node
	document.previousSibling	Documents don't have siblings
	document.textContent	Documents don't have a text content

*/