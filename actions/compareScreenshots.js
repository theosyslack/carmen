import fs from 'fs';
import {PNG} from 'pngjs';
import pixelmatch from 'pixelmatch';

export default ({pathOne, pathTwo, pathDiff}) => {
  if (!pathOne) throw new Error("pathOne is required")
  if (!pathTwo) throw new Error("pathTwo is required")
  if (!pathDiff) throw new Error("pathDiff is required")

  return async function compareScreenshots ({}) {

    const imgOne = PNG.sync.read(fs.readFileSync(pathOne))
    const imgTwo = PNG.sync.read(fs.readFileSync(pathTwo))

    const {width, height} = imgOne
    const diff = new PNG({width, height});

    pixelmatch(imgOne.data, imgTwo.data, diff.data, width, height)


    fs.writeFileSync(pathDiff, PNG.sync.write(diff))

    return {
     context: {
       diff
     }
    }
  }
};;