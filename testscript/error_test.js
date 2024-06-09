import { get } from 'axios';

test('API should respond with status 200', async () => {
    const response = await get('https://yourapi.com/search?query=example');
    expect(response.status).toBe(200);
});

test('System should handle concurrent requests', async () => {
    const requests = [];
    for (let i = 0; i < 1000; i++) {
        requests.push(get('https://yourapi.com/search?query=example'));
    }
    const results = await Promise.all(requests);
    results.forEach(response => {
        expect(response.status).toBe(200);
    });
});

test('System should handle errors gracefully', async () => {
    const requests = [];
    for (let i = 0; i < 1000; i++) {
        if (i % 10 === 0) {
            requests.push(get('https://yourapi.com/search?query=invalid'));
        } else {
            requests.push(get('https://yourapi.com/search?query=example'));
        }
    }
    const results = await Promise.allSettled(requests);
    let successCount = 0;
    let errorCount = 0;
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            expect(result.value.status).toBe(200);
            successCount++;
        } else {
            errorCount++;
        }
    });
    console.log(`成功请求数: ${successCount}`);
    console.log(`失败请求数: ${errorCount}`);
    expect(errorCount / 1000).toBeLessThan(0.1);
});

test('System should handle delays', async () => {
    const requests = [];
    for (let i = 0; i < 1000; i++) {
        requests.push(new Promise(resolve => setTimeout(() => {
            resolve(get('https://yourapi.com/search?query=example'));
        }, Math.random() * 1000)));
    }
    const results = await Promise.all(requests);
    results.forEach(response => {
        expect(response.status).toBe(200);
    });
});
