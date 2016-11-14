# canvas API

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API



## Canvas-driven-background-images

https://developers.google.com/web/updates/2012/12/Canvas-driven-background-images

http://jsbin.com/odimig/269/edit?html,output

https://developer.mozilla.org/en-US/docs/Web/CSS/element

## CSS Image Values and Replaced Content Module Level 4 (Editor’s Draft, 14 November 2016)

https://drafts.csswg.org/css-images-4/#element-notation

```code
<div style="width:400px; height:400px; background:-moz-element(#myBackground1) no-repeat;">
  <p>This box uses the element with the #myBackground1 ID as its background!</p>
</div>

<div style="overflow:hidden; height:0;">
  <div id="myBackground1" style="width:1024px; height:1024px; background-image: linear-gradient(to right, red, orange, yellow, white);">
  <p style="transform-origin:0 0; transform: rotate(45deg); color:white;">This text is part of the background. Cool, huh?</p>
  </div>
</div>
``` 


```code
<div style="width:400px; height:100px; background:-moz-element(#myBackground2);">
</div>

<div style="overflow:hidden; height:0;">
  <button id="myBackground2" type="button">Evil button!</button>
</div>
``` 















