import { Command, flags } from '@oclif/command'
import pipe from '../page/pipe';
import go from '../page/go';
import getTitle from '../page/getTitle';
import closeBrowser from '../browser/close';

export default class Test extends Command {
  static description = 'test out some pipeline'

  static flags = {
  }

  static args = [{ name: 'url' }]

  async run() {

    const results = await pipe([go("http://google.com"), getTitle, go("http://theosyslack.com"), getTitle])

    console.log(results.map(r => r.unwrap()));

    await closeBrowser()

    // this.log(bgBlue(black` Looking for: `), blue(flags.file))
    // this.log(bgYellow(black` Running:     `), yellow("screenshot"))

    // this.log(bgYellow(black` Opening:     `), yellow("browser"))
    // this.log(bgYellow(black` Taking:      `), yellow("screenshot"))
    // await screenshot()
    // this.log(bgYellow(black` Closing:     `), yellow("browser"))
    // await closeBrowser()
  }
}