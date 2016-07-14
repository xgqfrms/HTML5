测试题（笔试）
HTML&JavaScript
不定项选择题（共50题，每题2分，总分100分）
1)
2)
3)
4)
5) 下面关于JavaScript语言正确的是（b）。（单选） a) JavaScript在运行之前需要手工编译 b) JavaScript是能在浏览器里面运行的脚本语言 c) JavaScript是Java语言的一个分支 d) JavaScript是服务器端的脚本语言 JavaScript包含在一个(X)HTML文档中的方法主要有（a，b，c，d）。（多选） a) 使用script元素在XHTML中直接嵌入JavaScript语句 b) 将JavaScript源文件通过script元素的src属性链接到XHTML文档 c) 使用伪URL方式加入到超链接 d) 脚本包含在XHTML事件处理程序属性中 不属于JavaScript数据类型的是（d）。（单选） Number a) Undefined b) String c) Float d) 下面语句中那些可以创建一个数组（ac）。（多选） var array=new Array(); a) var array={„a‟,‟b‟,1}; b) var array=[„1‟,‟a‟,4]; c) var array=(„1‟,2,3); d) function justTest（num）{
if(num>3){
return num+1;
}
}
var result=justTest(2);
result的值是（e）(单选）
3 a)
b) 程序出错
Null c)
4 d)
Undefined e)
6)
7)
8)
9)
10) var a =false;
var b = 0;（默认转化为false，1为true） 运算结果为true的表达式是（b）（单选）
a=b a)
a= =b b)
a= = =b c)
a instanceof b d)
请选择结果为真的表达式（b）（单选）
null instanceof undefined a)
null = = undefined b) 下面那些语句可以创建一个不为空的对象（abd）。（多选） var obj=new Object(); a) var obj={}; b) var obj; c) var obj=new Date(); d) var result=2+5+"8"; result的值是（e）（单选） 258 a) “258” b) 78 c) 15 d) “78” e) 以下哪些是javascript的内置对象Global的函数（ab）。（多选） ParseInt a) Eval b) c) Alert 窗口的 d) SetTimeOut 窗口的 foo对象有att属性，怎么获取att的值：（ac）。（多选） a) foo.att b) foo{"att"} c) foo.getAttribute(“att”) d) foo("att") 11)
12)
13)
14)
c) d) null = = = undefined NaN = = NaN CSS 定位类型有（ abcd）。 (多选) a) Static（默认的定位） relative b) absolute c) fixed d) 以下那些标签是块级元素（c）。（单选） label a) Img b) div c) input d) 元素的盒模型包括（bcd）。（多选） a) 内容 Margin b) padding c) border d)
15题和16题基于下面这段程序：
<html>
<body>
<script>
function foo() {
// 在此处添加代码
for( var i = 0; i < rg.length; i++ )
{
)
{
alert("你选择了第" + (i+1) + "个单选框"); }
}
return false;
}
</script>
<body>
<form name="form1" onsubmit="return foo();"> <input type="radio" name="radioGroup"/>
<input type="radio" name="radioGroup"/>
<input type="radio" name="radioGroup"/>
<input type="radio" name="radioGroup"/>
<input type="radio" name="radioGroup"/>
<input type="radio" name="radioGroup"/>
<input type="submit"/>
</form>
</body>
</html>
15)
16)
17) <script>
function test()
{
{
alert("不能超过50个字符！");
document.a.b.focus();
return false;
}
}
</script>
<form name=”a” onsubmit="return test()">
<textarea name="b" cols="40" wrap="VIRTUAL" rows="6"></textarea> <input type="submit" name="Submit" value="check">
</form>
空白处应填写的代码（c）(单选)
a) document.a.b.value.length( )>50
b) document.a.b.length>50
c) document.a.b.value.length>50
document.getElementById(„b‟).value.length>50 d) (单选)__c__ a) rg[i].selected b) rg[i].select c) rg[i].checked d) rg[i].check (单选) __c_ GetElementById a) getElementsByTagName b) getElementsByName c) getElementByName d)
18) function fucCheckNUM(NUM)
{
var regex=/^\d+$/; (NUM)){
//说明有字符是数字
alert(“字符是数字”);
}
else{
//说明是数字
alert(“字符不是数字”);
}
（单选）__a_
Test a)
Matchs b)
c) Match（字符串才是它）
pattern d)
19题和20题基于以下代码：
以下这段代码用来实现让页面上所有的超链接当鼠标移上去时，下划线消失的操作
<style type=”text/css”>
.mouseon{
text-decoration:none;
}
<style>
<script>
window.onload=function(){
var allLinks=document.;
for(var i=0;i<allLinks.length;i++){
allLinks.=function(){
;
};
};
</script>
19)
(单选)__d_ Class a) class b) Classname c)

d) className
20) (单选)__d__
a) Mouseon
b) “.mouseon”
c) .mouseon
d) “mouseon”
21、22题基于以下代码
以下这段代码实现是通过点击按钮的方式使方块每次向右移动5个像素 <head>
<title></title>
<style type="text/css">
#block{
position: absolute;
width: 20px;
height: 20px;
background: Red;
top: 100px;
left: 0px
}
</style>
<script type="text/javascript">
var blockX=0;
function moveBlock(){
’block’);
blockX+=5;
=blockX+"px";
}
</script>
</head>
<body>
<div id="block"></div>
<input type="button" value="移动" onclick=" moveBlock();" /> </body>
21) (单选) __b__
document.getElementsById a)
document.getElementById b)
document.getElementsByTagName c)
document.getElementByTagName d)
22)
23)
24) 将下面这个节点里面的文本改为“simple”的语句是(c )(单选)
var node=document.getElementById(“sample”);
.........
<span id="sample">This is a sample</span>
node.value=”simple”; a)
node.nodeValue=”simple”; b)
node.firstChild.nodeValue=”simple”; c)
node. appendChild(document.createTextNode("simple"); d)
将下面这个节点里面的文本改为“simple”的语句是( c ) (单选) var node=document.getElementById(“sample”);
.........
<span id="sample">This is a sample</span>
node.InnerHtml=”simple”; a)
node.innerHtml=”simple”; b)
node.innerHTML=”simple”; c)
node.value=”simple”; d) DOM里面创建元素节点的方法是(a ) (单选) createElement() a) createTextNode() b) createComment() c) createAttribute() d) (单选)__c__ blockDiv.rules.left a) blockDiv.style.rules.left b) blockDiv.style.left c) blockDiv.styles.left d) 25)
26)*
javaScript的事件流包括以下以个阶段（a,b ）（多选） a) 事件捕获阶段 b) 事件冒泡阶段 c) 事件处理阶段 d) 事件回滚阶段
27)
以下关于javaScript事件的描述正确的有（ad ）（多选）
a) b) c) d) 目前，浏览器对传统事件处理程序的指派方法的支持，比对现代事件处理程序指派方法的支持更好。 传统事件处理程序可以为一个事件指派多个处理方法。 使用现代事件处理程序指派方法，IE和DOM是一样的。 现代事件处理程序可以为一个事件指派多个处理方法。
28)*
CSS 选择器的优先级从高到低是（ad ）（多选） a) 内联>内嵌>外部样式 b) !important>Id>class>伪类> element >* c) !important>Id> element >class>伪类>* d) !important>Id>class>element>伪类>*
29)*
以下关于javaScript操作样式表描述正确的有（ab ）（多选） a) 页面中的每个元素，都有一个style属性。 b) 可以使用style.样式名来操作元素的样式。 c) 操作元素.style.样式名时，样式名和CSS样式的名称总是相同的。 d) 使用style属性可以操作外部样式表。
30)*
以下关于javaScript事件描述正确的有（abd ）（多选） a) javaScript事件可分为鼠标事件，键盘事件，HTML事件。 b) 刷新页面的时候，会触发load事件和unload事件。 c) 事件一旦开始触发，事件的冒泡传播就不可以被终止。 d) 在某些事件如submit的事件代码中返回false，可以阻止默认行为的
发生。
31)*
想要把窗口导航到新的页面，下面那些语句是正确的（d ）（单选） window.URL=”http://www.sina.com.cn” a) document.location=”http://www.sina.com.cn” b) location.URL=”http://www.sina.com.cn” c) location.href=”http://www.sina.com.cn” d)
32)-- 下面那些情况不能在老式浏览器中使用innerHTML属性（ad ）（多选）
a) 向select元素里面添加option

47)
b) c) d) 弹出对话框，显示“2” 弹出对话框，显示“1”，再弹对话框，显示“2” 浏览器报JS错误
有以下代码：（单选）c/d <input type=button id=mybutton/> <script> document.getElementById("mybutton").click(function(){ alert("1"); }); document.getElementById("mybutton").click(function(){ alert("2"); }); </script>执行结果为 a) 弹出对话框，显示“1” b) 弹出对话框，显示“2” c) 弹出对话框，显示“1”，再弹对话框，显示“2” d) 浏览器报JS错误
48)* 有如下定义（多选cd）
<span id="aa">test</span>
要改变span的背景色代码为：
document.getElementById("aa").background-color=red"; a)
document.getElementById("aa").backgroundColor=red"; b)
document.getElementById("aa").style.backgroundColor=red"; c)
$("#aa").css({backgroundColor:red}); d)
$(".aa").css({background-color:red}); e)
49)
有如下样式定义（单选a） <script>
alert(parseInt("12y12"));
</script>
执行结果为：
12 a)
12y12 b)
NaN c)
d) 浏览器显示JS异常
得到元素的第一个儿子节点是调用元素对象的（单选c）
next() a)
childNodes b)
firstChild() c)
parentElement() d) 50)