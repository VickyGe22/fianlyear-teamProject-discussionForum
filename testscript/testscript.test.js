const { get } = require('axios');

test('API should respond with status 200', async () => {
    const response = await get('http://localhost:3000/api/submits');
    expect(response.status).toBe(200);
}, 10000); 

test('System should handle concurrent requests', async () => {
    const requests = [];
    for (let i = 0; i < 1000; i++) {
        requests.push(get('http://localhost:3000/api/submits').catch(() => ({ status: 500 })));
    }
    const results = await Promise.all(requests);
    results.forEach(response => {
        expect(response.status).toBe(200);
    });
}, 20000); 

