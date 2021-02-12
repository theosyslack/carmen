import wait from "../utils/wait.js"

export default ({selector}) => {
  if (!selector) throw new Error("selector is required.")

  return async function scrollTo ({page}) {

    await page.$eval(selector, (node) => {
      node.scrollIntoView()
    })

    return {page}
  }
}