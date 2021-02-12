import fs from 'fs';
import {PNG} from 'pngjs';
import pixelmatch from 'pixelmatch';

export default ({path1, path2, pathDiff}) => {
  if (!path1) throw new Error("path1 is required")
  if (!path2) throw new Error("path2 is required")
  if (!pathDiff) throw new Error("pathDiff is required")

  return async function compareScreenshots ({}) {
    const img1 = PNG.sync.read(fs.readFileSync(path1))
    const img2 = PNG.sync.read(fs.readFileSync(path2))

    const {width, height} = img1
    const diff = new PNG({width, height});

    pixelmatch(img1.data, img2.data, diff.data, width, height)

    fs.writeFileSync(pathDiff, PNG.sync.write(diff))

    return {
      context: {
        img1,
        img2,
        diff
      }
    }
  }
};;