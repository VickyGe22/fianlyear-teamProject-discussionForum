const puppeteer = require('puppeteer');

async function testPageLoadTime(url) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    try {
        const startTime = Date.now();
        await page.goto(url, { waitUntil: 'load' });
        const loadTime = Date.now() - startTime;
        return loadTime / 1000; 
    } catch (error) {
        console.error('Error loading page:', error);
    } finally {
        await browser.close();
    }
}

async function testResourceLoad(url) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    let totalBytes = 0;

    page.on('response', response => {
        const length = response.headers()['content-length'];
        if (length) {
            totalBytes += parseInt(length, 10);
        }
    });

    try {
        await page.goto(url, { waitUntil: 'load' });
        return totalBytes / 1024; 
    } catch (error) {
        console.error('Error loading resources:', error);
    } finally {
        await browser.close();
    }
}

(async () => {
    const url = 'http://localhost:3000'; 
    const loadTime = await testPageLoadTime(url);
    console.log(`Page load time: ${loadTime}m`);

    const resourceLoad = await testResourceLoad(url);
    console.log(`The resource is loaded on the first screen: ${resourceLoad}KB`);
})();
