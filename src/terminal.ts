import chalk from "chalk";
import logSymbols from "log-symbols";
import {Loader} from "./loader";

export class Terminal {

    private indent: number = 0;

    loader(text: string): Loader {
        return new Loader(text, this.indent);
    }

    group(name?: string): Terminal {
        this.indent++;

        name && console.group(chalk.bold(name));

        return this;
    }

    groupEnd(): Terminal {
        console.groupEnd();
        this.indent--;

        return this;
    }

    info(text: string): Terminal {
        console.info(`${chalk.blue('info')} ${text}`);

        return this;
    }

    warn(text: string): Terminal {
        console.info(`${chalk.yellow('warning')} ${text}`);

        return this;
    }

    error(text: string): Terminal {
        console.error(logSymbols.error, chalk.bold.red(text));

        return this;
    }

    debug(text: any): Terminal {
        console.debug(JSON.stringify(text));

        return this;
    }
}