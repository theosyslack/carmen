import { Command, flags } from '@oclif/command'
import open from '../page/open';
import closeBrowser from '../browser/close';
import getMeta from '../page/getMeta';
import checkUrl from '../maybe/url';

export default class Scan extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({ char: 'h' }),
    silent: flags.boolean({ char: 's' })
  }

  static args = [{ name: 'url' }]

  async run() {
    const { flags, args } = this.parse(Scan)

    const { url } = args;
    const { silent } = flags;

    const maybeUrl = checkUrl(url);

    if (maybeUrl.ok) {
      const page = await open(url);
      const meta = await getMeta(page)

      if (meta.ok) {
        !silent && console.log(meta.unwrap())
      } else {
        !silent && this.error(meta.unwrap().toString())
      }

      await closeBrowser()
    } else {
      !silent && this.error(`URL is not valid: "${url}"`)
    }
  }
}