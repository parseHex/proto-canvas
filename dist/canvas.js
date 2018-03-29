!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.canvas=n():t.canvas=n()}(window,function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);var o={};e.d(o,"rect",function(){return l}),e.d(o,"circle",function(){return u}),e.d(o,"ellipse",function(){return f}),e.d(o,"line",function(){return s}),e.d(o,"text",function(){return x});var r={};e.d(r,"clear",function(){return d}),e.d(r,"resetTransform",function(){return p}),e.d(r,"onClick",function(){return h});var c={canvas:null,ctx:null,backgroundCanvas:null,backgroundCtx:null};const i={fill:"#ECEFF1",stroke:"#455A64"},a=2*Math.PI;function l(t){t.fill=t.fill||i.fill,t.stroke=t.stroke||i.stroke,c.ctx.fillStyle=t.fill,c.ctx.strokeStyle=t.stroke,c.ctx.beginPath(),c.ctx.rect(t.x,t.y,t.width,t.height),c.ctx.fill(),c.ctx.stroke(),c.ctx.closePath()}function u(t){delete t.ry,f(t)}function f(t){t.fill=t.fill||i.fill,t.stroke=t.stroke||i.stroke,t.ry=t.ry||t.rx,c.ctx.fillStyle=t.fill,c.ctx.strokeStyle=t.stroke,c.ctx.beginPath(),c.ctx.ellipse(t.x,t.y,t.rx,t.ry,0,0,a),c.ctx.fill(),c.ctx.closePath()}function s(t){t.color=t.color||i.stroke,t.lineWidth=t.lineWidth||1,c.ctx.strokeStyle=t.color,c.ctx.lineWidth=t.lineWidth,c.ctx.beginPath(),c.ctx.moveTo(t.point1.x,t.point1.y),c.ctx.lineTo(t.point2.x,t.point2.y),c.ctx.stroke(),c.ctx.closePath()}function x(t){t.color=t.color||"red",t.fontName=t.fontName||"sans-serif",t.sizePX=t.sizePX||12,c.ctx.font=t.sizePX+"px "+t.fontName,c.ctx.fillStyle=t.color,c.ctx.fillText(t.text,t.x,t.y)}function d(){c.ctx.clearRect(0,0,c.canvas.width,c.canvas.height)}function p(){c.ctx.setTransform(1,0,0,1,0,0)}function h(t){c.canvas.addEventListener("click",function(n){const e={x:n.offsetX,y:n.offsetY};t(e)})}let y,v,k,m,g,b=!1,C=!1,P=-1,w="white",F=1,S=!1;function j(t){if(y=t.loopFunction,b=t.timing||!1,C=t.clearEachFrame||!1,w=t.background||"white",F=Math.floor(60/(t.framerate||60)),v={x:0,y:0,width:c.canvas.width,height:c.canvas.height,strokeStyle:"transparent",fillStyle:w},c.backgroundCanvas){const t=c.canvas,n=c.ctx;c.canvas=c.backgroundCanvas,c.ctx=c.backgroundCtx,l(v),c.canvas=t,c.ctx=n,S=!0}}function T(t){c.canvas=t,c.ctx=t.getContext("2d")}function E(t){c.backgroundCanvas=t,c.backgroundCtx=t.getContext("2d")}requestAnimationFrame(function t(){++P%F==0&&(b&&(k=performance.now()),C&&d(),S||l(v),y&&y(P),b&&(m=performance.now(),g=k-k,x({x:5,y:c.canvas.height-5,text:`Frame time: ${m.toFixed(1)}ms`}))),requestAnimationFrame(t)}),e.d(n,"setCanvas",function(){return T}),e.d(n,"setBackgroundCanvas",function(){return E}),e.d(n,"setLoop",function(){return j}),e.d(n,"draw",function(){return o}),e.d(n,"utility",function(){return r})}])});