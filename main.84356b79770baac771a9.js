(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,n,e){},QfWi:function(t,n,e){"use strict";e.r(n);e("L1EO");var o={btnStart:document.querySelector('button[data-action="start"]'),btnStop:document.querySelector('button[data-action="stop"]'),body:document.querySelector("body")},r=null;o.btnStart.addEventListener("click",(function(){o.btnStart.setAttribute("disabled","disabled"),r=setInterval((function(){var t=a[c(0,a.length)];o.body.style.backgroundColor=t}),1e3)})),o.btnStop.addEventListener("click",(function(){o.btnStart.removeAttribute("disabled"),clearInterval(r)}));var a=["#5146F2","#2196F3","#4CAF50","#FF9800","#009688","#795548"];var c=function(t,n){return Math.floor(Math.random()*(n-t+1)+t)}}},[["QfWi",1]]]);
//# sourceMappingURL=main.84356b79770baac771a9.js.map