export default ({path}) => {
  if (!path) throw new Error("path is required.")

  return async function takeScreenshot ({page}) {
    await page.screenshot({ path, fullPage: true });

    return {page}
  }
}