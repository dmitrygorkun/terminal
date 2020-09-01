import ora from "ora";
import chalk from "chalk";

export class Loader {

    private ora: ora.Ora;

    constructor(text: string, indent: number = 0) {

        this.ora = ora({
            text: chalk.grey(text),
            color: "gray",
            indent
        });

        this.ora.start();
    }

    text(text: string): Loader {
        this.ora.text = chalk.grey(text);

        return this;
    }

    stop(): Loader {
        this.ora.stop();

        return this;
    }

    succeed(text?: string): Loader {
        this.ora.succeed(text);

        return this;
    }

    warn(text?: string): Loader {
        text ? this.ora.warn(chalk.yellow(text)) : this.ora.warn();

        return this;
    }

    fail(text?: string): Loader {
        text ? this.ora.fail(chalk.red(text)) : this.ora.fail();

        return this;
    }
}