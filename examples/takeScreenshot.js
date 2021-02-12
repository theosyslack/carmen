import carmen, {actions} from '../index.js'

const takeScreenshot = actions.takeScreenshot({path: "theosyslack.png"})
const goToHomepage = actions.goTo("http://theosyslack.com")

carmen.run([goToHomepage, takeScreenshot])