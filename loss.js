/*
 * 2016-2018 Caleb Ely
 * <http://CodeTri.net>
 *
 * The MIT License
 * See LICENSE file
 */


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

export class loss {
  static string() { return `|  ||\n|| |__`; }
  static html() { return loss.string().replace("\n", "<br>"); }
  static console() { if (window.console) console.log(loss.string()); };

  static image(palette="normal", width=400, height=400) {
    return loss.canvas(palette, width, height).toDataURL("image/jpeg");
  }

  static canvas(palette="normal", width=400, height=400) {
    // Define our color palette and pull the user's choice
    // Index 0: background color
    // Index 1: text color
    const colors = {
      "normal": ["#ffffff", "#000000"],
      "inverse": ["#000000", "#ffffff"],
    };
    const color_palette = colors[palette];

    let canvas  = document.createElement("canvas"),
        ctx     = canvas.getContext("2d");

    // Size the canvas accordingly
    canvas.width = width;
    canvas.height =height;

    // Fill in the background color
    ctx.fillStyle = color_palette[0];
    ctx.rect(0, 0, width, height);
    ctx.fill();

    // Now draw the text
    ctx.font = `${width / 5}px sans-serif`;
    ctx.fillStyle = color_palette[1];
    let textWidth = ctx.measureText(loss.string()).width;
    fillTextMultiLine(ctx, loss.string(), (width / 2) - (textWidth / 3.5), height / 2.25);

    return canvas;
  }
}
