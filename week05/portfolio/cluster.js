const cluster = require("cluster");
const os = require("os");

const numCores = os.cpus().length;

cluster.setupMaster({
    exec: __dirname + "/index.js",
});

console.log(os.cpus());
for (let i = 0; i < numCores; i++) {
    // create "node worker"
    cluster.fork();
}

cluster.on("exit", (worker) => {
    // loggin ID of worker that died
    console.log("deceased worker.process.pid: " + worker.process.pid);
    cluster.fork();
});
