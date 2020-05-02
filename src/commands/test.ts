import { Command, flags } from '@oclif/command'
import pipe from '../page/pipe';
import go from '../page/go';
import screenshot from '../page/screenshot';
import getTitle from '../page/getTitle';
import closeBrowser from '../browser/close';
import { PageAction } from '../types/PageAction';
import { PathLike } from 'fs';
import { err } from '../labs/Result';

export default class Test extends Command {
  static description = 'test out some pipeline'

  static flags = {
  }

  static args = [{ name: 'url' }]

  async run() {

    const saveScreenshotAsTitle: PageAction<PathLike, Error> = async (page) => {
      const title = await getTitle(page);

      if (title.ok) {
        const formattedTitle = formatAsFileName(title.unwrap())
        const result = await screenshot({ path: formattedTitle + ".png", fullPage: true })(page);

        return result
      } else {
        return title;
      }
    }

    const results = await pipe(go("http://google.com"), saveScreenshotAsTitle)

    console.log(results.map(r => r.unwrap()));

    await closeBrowser()
  }
}

const formatAsFileName = (string: string) => {
  return string.trim().replace(/(\W)+/g, '-').toLowerCase();
}