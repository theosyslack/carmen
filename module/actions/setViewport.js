export default ({width = 1400, height = 900} = {}) => {
  if (!width) throw new Error("width is required.")
  if (!height) throw new Error("height is required.")

  return async function goTo ({page}) {

    await page.setViewport({
      width,
      height
    });

    return {page}
  }
}