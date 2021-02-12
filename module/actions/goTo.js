export default (url) => {
  if (!url) throw new Error("url is required.")

  return async function goTo ({page}) {
    const idle = page.waitForNavigation({ waitUntil: 'networkidle2' })
    await page.goto(url);

    await idle
    return {page}
  }
}