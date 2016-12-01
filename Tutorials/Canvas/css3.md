# css 

## 1.如何居中一个浮动元素

<!-- 
父元素和子元素同时左浮动，父元素相对左移动50%，
然后子元素相对右移动50%，或者子元素相对左移动-50%也就可以了。 
-->
```html
<style>
    .p{
        position:relative;
        left:50%;
        float:left;
        background: rgba(0,0,0,0.5);
    }
    .c{
        position:relative;
        float:left;
        right:50%;
        background: rgba(0,255,0,0.5);
    }
</style>

<div class="p">
    <h1 class="c">Test Float Element Center</h1>
</div>
``` 


## 2.css实现水平垂直居中
<!-- 
/**
 * 负边距+定位：水平垂直居中（Negative Margin）
 * 使用绝对定位将content的定点定位到body的中心，然后使用负margin（content宽高的一半），
 * 将content的中心拉回到body的中心，已到达水平垂直居中的效果。
 */

 ? transform: translate(-50%, -50%);
 -->
```html
<style>
    .align-center{
        position:absolute;
        background: rgba(0,0,0,0.7);
        left:50%;
        top:50%;
        width:400px;
        height:400px;
        margin-top:-200px;
        margin-left:-200px;
        border:1px dashed #333;
        text-align: center;
    }
    .unfixed-align-center{
        position:absolute;
        background: rgba(0,255,0,0.7);
        left:50%;
        top:50%;
        width:50%;
        height:50%;
        border:1px dashed #333;
        text-align: center;
        transform: translate(-50%,-50%);
    }
</style>

<div class="align-center">
    <mark>css3 实现水平垂直居中</mark>
</div>
<div class="unfixed-align-center">
    <mark>css3 实现水平垂直居中</mark>
</div>
``` 

## 3.css实现三栏布局，中间自适应 

<!-- 
/*方法一：自身浮动法。左栏左浮动，右栏右浮动。*/
??? CSS3 multi-column === column-count: 3;
http://www.w3schools.com/css/css3_multiple_columns.asp
 -->
## error
```html
<style>
    .left, .right{
        height: 300px;
        width: 200px;
    }
    .left{
        float: left;
        background-color: #0f0;
    }
    .right{
        float: right;
        background-color: #f0f;
    }
    .middle{
        height: 300px;
        margin: 0 200px;
        /*没有这行，当宽度缩小到一定程度的时候，中间的内容可能换行*/
        background-color: #0ff;
    }
</style>


<!-- 方法二：margin负值法 -->
## error
<style>
    body{
        margin: 0;
        padding: 0;
    }
    .left, .right{
        height: 300px;
        width: 200px;
        float: left;
    }
    .left{
        margin-left: -100%;
        background-color: #0f0;
    }
    .right{
        margin-left: -200px;
        background-color: red;
    }
    .middle{
        height: 300px;
        width: 100%;
        float: left;
        background-color: blue;
    }
</style>

<div class="middle">middle</div>
<div class="left">left</div>
<div class="right">right</div>


<!-- 
方法三：绝对定位法。
左右两栏采用绝对定位，分别固定于页面的左右两侧，
中间的主体栏用左右margin值撑开距离。
 -->

<style>
    body{
        margin: 0;
        padding: 0;
    }
    .left , .right{
        top: 0;
        height: 300px;
        width: 200px;
        position: absolute;
    }
    .right{
        right: 0;
        background-color: red;
    }
    .left{
        left: 0;
        background-color: #080808;
    }
    .middle{
        margin: 0 200px;
        height: 300px;
        background-color: blue;
    }
</style>

<div class="left">left</div>
<!--这种方法没有严格限定中间这栏放置何处-->
<div class="middle">middle</div>
<div class="right">right</div>

``` 

