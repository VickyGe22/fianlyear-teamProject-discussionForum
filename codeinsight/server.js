const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`主进程 ${process.pid} 正在运行，使用 ${numCPUs} 个CPU`);

    for (let i = 0; i < numCPUs; i++) {
        console.log(`正在启动第 ${i + 1} 个工作进程`);
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`工作进程 ${worker.process.pid} 已退出，退出码：${code}，信号：${signal}`);
    });
} else {
    http.createServer((req, res) => {
        console.log(`工作进程 ${process.pid} 处理请求`);
        res.writeHead(200);
        res.end('hello world\n');
    }).listen(3000);

    console.log(`工作进程 ${process.pid} 已启动，监听端口 3000`);
}
