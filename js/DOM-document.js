// event handler
function myonclick(){
	alert("document.addEventListener() : myonclick!");
}

function nullTest(){
	var abc;
	var xxx = prompt("选项(1,2,3,4):string = ?");
	// prompt("string"); 
	// prompt 返回值l类型：String
	// case "1":  !== case 1: 
	//     string !==     num
	switch(xxx) {
		case "1": 
		abc = "null instanceof undefined";
		break;
		case "2": 
		abc = "null == undefined";
		break;
		case "3": 
		abc = "null === undefined";
		break;
		case "4": 
		abc = "NaN == NaN";
		break;
		default: 
		abc = alert("default");
		break;
	}
	document.getElementById("demo").innerHTML = abc;
}

// nullTest();

console.log("document.body:\n");
console.log(document.body);

console.log("document.anchors:\n");
console.log(document.anchors);

// console.log("document.focus():\n");
// console.log(document.focus());
// DOM-document.js:14 Uncaught TypeError: document.focus is not a function

// console.log("document.bgColor():\n");
// console.log(document.bgColor());
// DOM-document.js:17 Uncaught TypeError: document.bgColor is not a function

// console.log(":\n");
// console.log();

// console.log(":\n");
// console.log();

// console.log(":\n");
// console.log();

// console.log(":\n");
// console.log();

// console.log(":\n");
// console.log();

// console.log(":\n");
// console.log();

// console.log(":\n");
// console.log();

// console.log(":\n");
// console.log();

// console.log(":\n");
// console.log();

// console.log(":\n");
// console.log();

// console.log(":\n");
// console.log();

// console.log(":\n");
// console.log();

// console.log(":\n");
// console.log();


// console.log(":\n");
// console.log();

// console.log(":\n");
// console.log();

// console.log(":\n");
// console.log();

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
	document.activeElement	abc =s the currently focused element in the document
	document.addEventListener()	Attaches an event handler to the document
	document.adoptNode()	Adopts a node from another document
	document.anchors	abc =s a collection of all <a> elements in the document that have a name attribute
	document.applets	abc =s a collection of all <applet> elements in the document
	document.baseURI	abc =s the absolute base URI of a document
	document.body	Sets or abc =s the document's body (the <body> element)
	document.close()	Closes the output stream previously opened with document.open()
	document.cookie	abc =s all name/value pairs of cookies in the document
	document.createAttribute()	Creates an attribute node
	document.createComment()	Creates a Comment node with the specified text
	document.createDocumentFragment()	Creates an empty DocumentFragment node
	document.createElement()	Creates an Element node
	document.createTextNode()	Creates a Text node
	document.doctype	abc =s the Document Type Declaration associated with the document
	document.documentElement	abc =s the Document Element of the document (the <html> element)
	document.documentMode	abc =s the mode used by the browser to render the document
	document.documentURI	Sets or abc =s the location of the document
	document.domain	abc =s the domain name of the server that loaded the document
	document.domConfig	Obsolete. abc =s the DOM configuration of the document
	document.embeds	abc =s a collection of all <embed> elements the document
	document.forms	abc =s a collection of all <form> elements in the document
	document.getElementById()	abc =s the element that has the ID attribute with the specified value
	document.getElementsByClassName()	abc =s a NodeList containing all elements with the specified class name
	document.getElementsByName()	abc =s a NodeList containing all elements with a specified name
	document.getElementsByTagName()	abc =s a NodeList containing all elements with the specified tag name
	document.hasFocus()	abc =s a Boolean value indicating whether the document has focus
	document.head	abc =s the <head> element of the document
	document.images	abc =s a collection of all <img> elements in the document
	document.implementation	abc =s the DOMImplementation object that handles this document
	document.importNode()	Imports a node from another document
	document.inputEncoding	abc =s the encoding, character set, used for the document
	document.lastModified	abc =s the date and time the document was last modified
	document.links	abc =s a collection of all <a> and <area> elements in the document that have a href attribute
	document.normalize()	Removes empty Text nodes, and joins adjacent nodes
	document.normalizeDocument()	Removes empty Text nodes, and joins adjacent nodes
	document.open()	Opens an HTML output stream to collect output from document.write()
	document.querySelector()	abc =s the first element that matches a specified CSS selector(s) in the document
	document.querySelectorAll()	abc =s a static NodeList containing all elements that matches a specified CSS selector(s) in the document
	document.readyState	abc =s the (loading) status of the document
	document.referrer	abc =s the URL of the document that loaded the current document
	document.removeEventListener()	Removes an event handler from the document (that has been attached with the addEventListener() method)
	document.renameNode()	Renames the specified node
	document.scripts	abc =s a collection of <script> elements in the document
	document.strictErrorChecking	Sets or abc =s whether error-checking is enforced or not
	document.title	Sets or abc =s the title of the document
	document.URL	abc =s the full URL of the HTML document
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