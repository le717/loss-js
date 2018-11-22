"use strict";

import { loss } from "./loss.js";

const qH1   = document.querySelector("h1"),
      qdiv  = document.querySelector("div"),
      qImg  = document.querySelector("img"),
      qMain = document.querySelector("main");

loss.console();
qH1.innerHTML = loss.html();
qMain.appendChild(loss.canvas("inverse"));
qImg.src = loss.image();
document.title = loss.string();

setTimeout(function() {
  qdiv.classList.add("visible");
}, 1000 * 2);
