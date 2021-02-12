
export default () => {
  return async function waitForLoading ({page}) {
    await page.waitForNavigation({ waitUntil: 'networkidle2' })
    return {page}
  }
}