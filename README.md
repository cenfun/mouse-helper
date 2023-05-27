# Mouse Helper

[![](https://img.shields.io/npm/v/mouse-helper)](https://www.npmjs.com/package/mouse-helper)
![](https://img.shields.io/librariesio/dependents/npm/mouse-helper)
[![](https://badgen.net/npm/dw/mouse-helper)](https://www.npmjs.com/package/mouse-helper)
![](https://img.shields.io/github/license/cenfun/mouse-helper)

A tool to show mouse position and status for screenshots in automation test such as [Puppeteer](https://github.com/puppeteer/puppeteer) or [Playwright](https://github.com/microsoft/playwright)

## Install
```sh
npm i mouse-helper
```
## Preview Online
[https://cenfun.github.io/mouse-helper/](https://cenfun.github.io/mouse-helper/)


## Preview Screenshots
screenshot mouse move(20, 50)  
![](/docs/screenshot-move.png)  

screenshot mouse down  
![](/docs/screenshot-down.png)  

screenshot mouse none (mouse never moved)  
![](/docs/screenshot-none.png)  

## Usage
```js
require("mouse-helper")();
```
## Browser Usage
```html
<script src="dist/mouse-helper.js"></script>
<script>
    window['mouse-helper']();
</script>
```
see [/public/index.html](/public/index.html)

## Playwright Usage
```js
const { chromium } = require('playwright');

const browser = await chromium.launch();

const context = await browser.newContext();
await context.addInitScript({
    path: './node_modules/mouse-helper/dist/mouse-helper.js'
});

const page = await context.newPage();
await page.goto("your page url");

await page.evaluate(() => {
     window['mouse-helper']();
});

await page.mouse.move(20, 50);
await page.screenshot({
    path: "your screenshot path"
});

await page.mouse.down();
await page.screenshot({
    path: "your screenshot path"
});

await page.mouse.up();

```
see [/scripts/test.js](/scripts/test.js)