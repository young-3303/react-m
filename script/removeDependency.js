import readline from "readline";
import {exec} from "child_process";

// 创建readline接口
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter the name of the dependency to remove: ', packageName => {
    if (!packageName) {
        console.log('No package name provided. Exiting...');
        rl.close();
        return;
    }

    // 运行npm卸载命令
    exec(`npm uninstall ${packageName}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            rl.close();
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            rl.close();
            return;
        }

        console.log(`Package '${packageName}' has been removed.`);
        console.log(stdout);
        rl.close();
    });
});
