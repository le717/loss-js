# loss.js #
> A JavaScript library for adding loss to any page

## API ##
* `loss.canvas(palette="normal", width=400, height=400)`: Return a `<canvas>` of specified size of loss.
Acceptabe `palette` values is "normal" and "inverse".
* `loss.console()`: Print loss to the browser console.
* `loss.html()`: Return a loss string suitable for use in HTML.
* `loss.image(palette="normal", width=400, height=400)`: Return a JPEG image of specified size of loss.
Acceptabe `palette` values is "normal" and "inverse".
* `loss.string()`: Return a loss string.

## Usage ##
Do note that ES6+ features have been used, so unless you transpile,
a fairly modern browser is required.

1. Load your app script as a module
```html
<script src="script.js"></script>
```

2. Import the class and run the methods
```js
"use strict";

import { loss } from "./loss.js";
loss.string();  // typeof 'string'
```

## License ##
[MIT](LICENSE)

2016-2018 Caleb Ely
