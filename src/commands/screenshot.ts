import { Command, flags } from '@oclif/command'
import open from '../page/open';
import closeBrowser from '../browser/close';
import screenshot from '../page/screenshot';

export default class Screenshot extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({ char: 'h' }),
    out: flags.string({
      char: 'o',
      name: 'out',
      default: Date.now().toLocaleString(),
      description: 'Name of the output file. If no extension is specified, .png will be used.'
    }),
    silent: flags.boolean({ char: 's' })
  }

  static args = [{ name: 'url' }]

  async run() {
    const { flags, args } = this.parse(Screenshot)

    const { url } = args;
    const { out, silent } = flags;

    if (!url) {
      this.error("You must provide a url.")
    } else {
      const page = await open(url);

      const path = await screenshot({ fullPage: true })(page);

      if (path.ok) {
        this.log(path.unwrap().toString())
      } else {
        this.error(path.unwrap())
      }

      await closeBrowser()
    }


    // this.log(bgBlue(black` Looking for: `), blue(flags.file))
    // this.log(bgYellow(black` Running:     `), yellow("screenshot"))

    // this.log(bgYellow(black` Opening:     `), yellow("browser"))
    // this.log(bgYellow(black` Taking:      `), yellow("screenshot"))
    // await screenshot()
    // this.log(bgYellow(black` Closing:     `), yellow("browser"))
    // await closeBrowser()
  }
}