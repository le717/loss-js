/*
 * 2016 Caleb Ely
 * <http://CodeTri.net>
 *
 * The MIT License
 * See LICENSE file
 */


window.loss = (function() {
  "use strict";
  let loss = {};

  /**
   * @private
   * @link {http://stackoverflow.com/a/21574562}
   */
  function fillTextMultiLine(ctx, text, x, y) {
    var lineHeight = ctx.measureText("M").width * 1.3;
    var lines = text.split("\n");
    for (var i = 0; i < lines.length; ++i) {
      ctx.fillText(lines[i], x, y);
      y += lineHeight;
    }
  }

  loss.string = () => `|  ||\n|| |__`;

  loss.html = () => loss.string().replace("\n", "<br>");

  loss.console = () => { if (window.console) console.log(loss.string()); };

  loss.canvas = (width=400, height=400) => {
    let canvas  = document.createElement("canvas"),
        ctx     = canvas.getContext("2d");

    // Size the canvas and text size accordingly
    canvas.width = width;
    canvas.height = height;
    ctx.font = `${width / 5}px sans-serif`;
    let textWidth = ctx.measureText(loss.string()).width;

    // Draw the text
    fillTextMultiLine(ctx, loss.string(), (width / 2) - (textWidth / 3.5), height / 2.25);
    return canvas;
  };

  loss.image = (width=400, height=400) => loss.canvas(width, height).toDataURL("image/png");

  return loss;
}());
