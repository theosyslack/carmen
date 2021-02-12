import carmen, {actions} from '../module/index.js'

const takeScreenshot = actions.takeScreenshot({path: "theosyslack.png"})
const takeSecondScreenshot = actions.takeScreenshot({path: "theosyslack-2.png"})
const goToHomepage = actions.goTo("http://theosyslack.com")
const changeTitleToNonsense = actions.changeText({selector: "h1", newText: "Theo Syslack's Websight"})

carmen.run([goToHomepage, takeScreenshot, changeTitleToNonsense, takeSecondScreenshot])