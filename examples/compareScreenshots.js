import carmen, {actions} from '../module/index.js'

const goToHomepage = actions.goTo("http://theosyslack.com")
const takeScreenshot = actions.takeScreenshot({path: "theosyslack.png"})
const changeTitleToNonsense = actions.changeText({selector: "h1", newText: "Theo Syslack's WEbsite"})
const takeSecondScreenshot = actions.takeScreenshot({path: "theosyslack-2.png"})
const compareScreenshots = actions.compareScreenshots({pathOne: "theosyslack.png", pathTwo: "theosyslack-2.png", pathDiff: "theosyslack-diff.png"})


carmen.run([goToHomepage, takeScreenshot, changeTitleToNonsense, takeSecondScreenshot, compareScreenshots])