const path = require('path');
const EC = require('eight-colors');
const PCR = require('puppeteer-chromium-resolver');

let browser;
const launchBrowser = async () => {
    if (browser) {
        return browser;
    }
    EC.logCyan('launching browser ...');
    const stats = await PCR({});
    browser = await stats.puppeteer.launch({
        headless: true,
        //devtools: true,
        args: [
            '--no-sandbox',
            '--no-default-browser-check',
            '--disable-setuid-sandbox',
            '--disable-translate',
            '--disable-gpu',
            '--disable-infobars',
            '--disable-notifications',
            '--disable-save-password-bubble',
            '--start-maximized'
        ],
        ignoreDefaultArgs: [
            '--hide-scrollbars',
            '--enable-automation'
        ],
        executablePath: stats.executablePath
    }).catch(function(error) {
        EC.logRed(error);
    });
    return browser;
};

const closeBrowser = async () => {
    if (browser) {
        await browser.close();
    }
};

const delay = (ms) => {
    return new Promise((resolve) => {
        if (ms) {
            setTimeout(resolve, ms);
        } else {
            setImmediate(resolve);
        }
    });
};

const start = async () => {
    await launchBrowser();
    const page = await browser.newPage();
    await page.setViewport({
        width: 350,
        height: 100
    });
    const url = path.resolve(__dirname, '../public/index.html');
    EC.logCyan(`open page ${url} ...`);
    await page.goto(url);
    delay(500);

    //delay(10 * 1000);
    //screenshot

    const screenshotNonePath = path.resolve(__dirname, '../docs/screenshot-none.png');
    await page.screenshot({
        path: screenshotNonePath
    });

    delay(500);

    await page.mouse.move(20, 50);
    const screenshotMovePath = path.resolve(__dirname, '../docs/screenshot-move.png');
    await page.screenshot({
        path: screenshotMovePath
    });

    delay(500);

    await page.mouse.down();
    const screenshotDownPath = path.resolve(__dirname, '../docs/screenshot-down.png');
    await page.screenshot({
        path: screenshotDownPath
    });

    await page.mouse.up();

    await closeBrowser();
};

start();
