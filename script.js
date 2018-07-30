/*global loss */

"use strict";
var qH1   = document.querySelector("h1"),
    qdiv  = document.querySelector("div"),
    qImg  = document.querySelector("img"),
    qMain = document.querySelector("main");

setTimeout(function() {
  loss.console();
  qH1.innerHTML = loss.html();
  qMain.appendChild(loss.canvas());
  qImg.src = loss.image();
  document.title = loss.string();
}, 1000 * 2);

setTimeout(function() {
  qdiv.classList.add("visible");
  qMain.classList.add("hide");
  qH1.classList.add("hide");
}, 1000 * 2.5);
