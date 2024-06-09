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

async function testRenderPerformance(urls) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    try {
        
        await page.evaluate(() => {
            window.renderCount = 0;
            const originalRender = requestAnimationFrame;

            requestAnimationFrame = function (callback) {
                window.renderCount++;
                return originalRender(callback);
            };
        });

     
        for (const url of urls) {
            await page.goto(url, { waitUntil: 'load' });
            await page.evaluate(() => {
                const button = document.querySelector('button');
                const input = document.querySelector('input');

                for (let i = 0; i < 100; i++) {
                    window.scrollBy(0, 10);

                    if (button) {
                        button.click();
                    }

                    if (input) {
                        input.value = 'Test ' + i;
                        input.dispatchEvent(new Event('input'));
                    }
                }
            });
        }

     
        await new Promise(resolve => setTimeout(resolve, 5000));


        const renderCount = await page.evaluate(() => {
            return window.renderCount;
        });

        const renderFrequency = renderCount / 5;
        return renderFrequency;
    } catch (error) {
        console.error('Error testing render performance:', error);
        return NaN;
    } finally {
        await browser.close();
    }
}

(async () => {
    const urls = [
        'http://localhost:3000',
        'http://localhost:3000/submits',
        'http://localhost:3000/sampleLists',
        'http://localhost:3000/discussion/665c078be1fe78e987bb2913'
    ];

    const loadTime = await testPageLoadTime(urls[0]);
    console.log(`Page load time: ${loadTime} seconds`);

    const resourceLoad = await testResourceLoad(urls[0]);
    console.log(`First screen resource load: ${resourceLoad} KB`);

    const renderFrequency = await testRenderPerformance(urls);
    console.log(`Render frequency: ${renderFrequency} renders per second`);
})();
