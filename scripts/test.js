const path = require('path');
const { chromium } = require('playwright');

const start = async () => {
    console.log('launch browser ...');
    const browser = await chromium.launch({
        // headless: false
    });
    const context = await browser.newContext();
    await context.addInitScript({
        path: './node_modules/mouse-helper/dist/mouse-helper.js'
    });

    const page = await context.newPage();
    await page.setViewportSize({
        width: 350,
        height: 100
    });

    console.log('mock page ...');
    await page.setContent(`<html>
    <body>
    <div>Mouse Helper (move or click your mouse)</div>
    </body>
    </html>`);

    await page.evaluate(() => {
        window['mouse-helper']();
    });

    console.log('take screenshots ...');

    console.log('screenshot-none');
    const screenshotNonePath = path.resolve(__dirname, '../docs/screenshot-none.png');
    await page.screenshot({
        path: screenshotNonePath
    });

    console.log('screenshot-move');
    await page.mouse.move(20, 50);
    const screenshotMovePath = path.resolve(__dirname, '../docs/screenshot-move.png');
    await page.screenshot({
        path: screenshotMovePath
    });

    console.log('screenshot-down');
    await page.mouse.down();
    const screenshotDownPath = path.resolve(__dirname, '../docs/screenshot-down.png');
    await page.screenshot({
        path: screenshotDownPath
    });

    await page.mouse.up();

    await browser.close();

    console.log('closed');

};

start();
