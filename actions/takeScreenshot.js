const takeScreenshot = ({url, path}) => {
  if (!url) throw new Error("url is required.")
  if (!path) throw new Error("path is required.")

  return async ({page}) => {
    await page.goto(url);
    await page.screenshot({ path });

    return {page}
  }
}

export default takeScreenshot