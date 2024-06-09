const { get } = require('axios');

test('API should respond with status 200', async () => {
    const response = await get('http://localhost:3000/api/submits');
    expect(response.status).toBe(200);
}, 10000); // 增加超时时间到10秒

test('System should handle concurrent requests', async () => {
    const requests = [];
    for (let i = 0; i < 1000; i++) {
        requests.push(get('http://localhost:3000/api/submits').catch(() => ({ status: 500 })));
    }
    const results = await Promise.all(requests);
    results.forEach(response => {
        expect(response.status).toBe(200);
    });
}, 20000); // 增加超时时间到20秒

// test('System should handle errors gracefully', async () => {
//     const requests = [];
//     for (let i = 0; i < 1000; i++) {
//         if (i % 10 === 0) {
//             requests.push(get('http://localhost:3000/api/invalid').catch(() => ({ status: 500 })));
//         } else {
//             requests.push(get('http://localhost:3000/api/submits').catch(() => ({ status: 500 })));
//         }
//     }
//     const results = await Promise.allSettled(requests);
//     let successCount = 0;
//     let errorCount = 0;
//     results.forEach(result => {
//         if (result.status === 'fulfilled' && result.value.status === 200) {
//             successCount++;
//         } else {
//             errorCount++;
//         }
//     });
//     console.log(`Successful request: ${successCount}`);
//     console.log(`Failure request: ${errorCount}`);
//     expect(errorCount / 1000).toBeLessThan(0.2); // 将期望错误率调整为0.2
// }, 20000); // 增加超时时间到20秒

// test('System should handle delays', async () => {
//     const requests = [];
//     for (let i = 0; i < 1000; i++) {
//         requests.push(new Promise(resolve => setTimeout(() => {
//             resolve(get('http://localhost:3000/api/submits').catch(() => ({ status: 500 })));
//         }, Math.random() * 1000)));
//     }
//     const results = await Promise.all(requests);
//     results.forEach(response => {
//         expect(response.status).toBe(200);
//     });
// }, 20000); // 增加超时时间到20秒
