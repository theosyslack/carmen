export default ({selector, newText}) => {
  if (!selector) throw new Error("selector is required.")
  if (!newText) throw new Error("newText is required.")

  return async function changeText ({page}) {
    await page.$$eval(selector, (nodes, newText) => {
      nodes.map(node => node.innerText = newText)
    }, newText)

    return {page}
  }
}