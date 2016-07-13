
// function nullTest(){
// 	var abc;
// 	var myExpression = prompt("选项(1,2,3,4):num = ?");
// 	switch(myExpression){
// 		case 1: abc = alert("null instanceof undefined");
// 		break;
// 		case 2: abc = alert("null == undefined");
// 		break;
// 		case 3: abc = alert("null === undefined");
// 		break;
// 		case 4: abc = alert("NaN == NaN");
// 		break;
// 		default: abc = alert("default");
// 		break;
// 	}
// 	 document.getElementById("demo").innerHTML = abc;
// }



/*
	// Date().getDay() 返回值类型：Num
	// case "1":  !== case 1: 
	//     string !==    num
*/

function myFunction() {
    var day;
    var dayNum = new Date().getDay();
    switch (dayNumx) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case  6:
            day = "Saturday";
            break;
    }
    document.getElementById("demo").innerHTML = "Today is " + day;
}
myFunction();




/*
	// prompt("string"); 
	// prompt 返回值类型：String
	// case "1":  !== case 1: 
	//     string !==   num
*/

function nullTestNew(){
	var abc;
	var myExpression = prompt("选项(1,2,3,4):num = ?");
	switch(myExpression){
		case "1": 
		abc = "null instanceof undefined";
		console.log("null instanceof undefined");
		break;
		case "2": 
		abc = "null == undefined";
		alert("null == undefined");
		break;
		case "3": 
		abc = "null === undefined";
		alert("null === undefined");
		break;
		case "4": 
		abc = "NaN == NaN";
		alert("NaN == NaN");
		break;
		default: 
		abc = "default";
		alert("default");
		break;
	}
	 document.getElementById("demo").innerHTML = abc;
}
nullTestNew();




/*
function nullTest1(){
	if (null instanceof undefined) {
		console.log("null instanceof undefined");
		// DOM-document.js:25 Uncaught TypeError: Right-hand side of 'instanceof' is not an object
	} else if(null == undefined) {
		console.log("null == undefined");
	} else if(null === undefined) {
		console.log("null === undefined"); 
	} else if(NaN == NaN) {
		console.log("NaN == NaN")
	} else {
		console.log("default"); 
	}
}
nullTest1();

*/
/*
http://www.runoob.com/java/method-instanceof.html
instanceof是Java的一个二元操作符，类似于 ==，>，<等操作符。
instanceof是Java的保留关键字。
它的作用是测试它左边的对象是否是它右边的类的实例，返回boolean的数据类型。 
*/ 


/*if (null instanceof undefined) {
		console.log("null instanceof undefined");
		// DOM-document.js:25 Uncaught TypeError: Right-hand side of 'instanceof' is not an object
	}else{
		console.log("! Failured: null instanceof undefined");
	}*/

if(null == undefined) {
		console.log("null == undefined");
		//null == undefined
	}else{
		console.log("! Failured: null == undefined");
	}
if(null === undefined) {
		console.log("null === undefined"); 
	} else {
		console.log("! Failure: null === undefined"); 
		// ! Failure: null === undefined
	}
if(NaN == NaN) {
		console.log("NaN == NaN")
	}else {
		console.log("! Failured: NaN == NaN"); 
		// ! Failured: NaN == NaN
	}