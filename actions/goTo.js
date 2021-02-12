export default (url) => {
  if (!url) throw new Error("url is required.")

  return async function goTo ({page}) {
    await page.goto(url);
    return {page}
  }
}