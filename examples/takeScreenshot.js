import carmen, {actions} from '../index.js'

carmen.run([actions.takeScreenshot({url: "http://theosyslack.com", path: "theosyslack.png"})])