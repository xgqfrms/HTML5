"use strict";

var dragged;

// document ???
var css_red = "color: #f00; font-size: 23px;"
var css_green = "color: #0f0; font-size: 23px;"
var css_blue = "color: #00f; font-size: 23px;"
var css_purple = "color: #f0f; font-size: 23px;"

/* 可拖动的目标元素会触发事件 */
document.addEventListener("dragstart", function(e) {
    console.log("%c dragstart", css_red);
    // 保存拖动元素的引用(ref)
    dragged = e.target;
    // dataset/classlist
    // DataTransfer
    // 使其半透明
    e.target.style.opacity = 0.5;
}, false);
document.addEventListener("drag", function(e) {
    console.log(`drag`);
}, false);
document.addEventListener("dragend", function(e) {
    console.log("%c dragend", css_purple);
    // 重置透明度
    e.target.style.opacity = "";
}, false);

/* 放下目标节点时触发事件 */
document.addEventListener("dragenter", function(e) {
    console.log(`dragenter`);
    // 当可拖动的元素进入可放置的目标高亮目标节点
    if (e.target.className == "dropzone") {
        e.target.style.background = "purple";
    }
}, false);
document.addEventListener("dragover", function(e) {
    console.log(`dragover`);
    // 阻止默认动作
    e.preventDefault();
}, false);
document.addEventListener("dragleave", function(e) {
    console.log(`dragleave`);
    // 当拖动元素离开可放置目标节点，重置其背景
    if (e.target.className == "dropzone") {
        e.target.style.background = "";
    }
}, false);
document.addEventListener("drop", function(e) {
    console.log("%c drop", css_green);
    // 阻止默认动作
    e.preventDefault();
    // 移动拖动的元素到所选择的放置目标节点
    if (e.target.className === "dropzone") {
        e.target.style.background = "";
        // 删除自己DOM
        dragged.parentNode.removeChild(dragged);
        // 保存的拖动元素的引用(ref)
        e.target.appendChild(dragged);
    }
}, false);











//todo