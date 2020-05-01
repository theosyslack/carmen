import { Command, flags } from '@oclif/command'
import { bgBlue, black, blue } from 'chalk';

export default class Run extends Command {
    static description = 'describe the command here'

    static flags = {
        help: flags.help({ char: 'h' }),
        file: flags.string({ char: 'f', default: "carmen.js" }),
        silent: flags.help({ char: 's' }),
    }

    static args = []

    async run() {
        const { flags } = this.parse(Run)

        this.log(bgBlue(black` Looking for: `), blue(flags.file))
    }
}