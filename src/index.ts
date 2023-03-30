import yargs from "yargs";
import app from './app';
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

app.listen(argv.port, () => {
    console.log(`Server listening on port ${argv.port}`);
})