import yargs from "yargs";
import app from './app';
import http from 'http';
import { init } from './database/db';
const argv: any = yargs
    .option("port", {
        alias: "p",
        description: "Server port",
        type: "number",
        default: 3000,
    })
    .help()
    .alias("help", "h")
    .argv;


async function start() {
    await init()
    const server = http.createServer(app.callback());
    server.listen(argv.port, () => {
        console.log(`Server listening on port ${argv.port}`);
    })
};

start();