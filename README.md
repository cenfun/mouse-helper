# mouse-helper
> A tool to show mouse position and status for screenshots in automation test such as [Puppeteer](https://github.com/puppeteer/puppeteer) or [Playwright](https://github.com/microsoft/playwright)

## Online Preview
[https://cenfun.github.io/mouse-helper/](https://cenfun.github.io/mouse-helper/)

## Install
```sh
npm i mouse-helper
```

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

## Screenshots
screenshot mouse move(20, 50)  
![](/docs/screenshot-move.png)  

screenshot mouse down  
![](/docs/screenshot-down.png)  

screenshot mouse none (mouse never moved)  
![](/docs/screenshot-none.png)  

see [/scripts/index.js](/scripts/index.js)