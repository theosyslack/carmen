import open from './open'

const close = async () => {
    const browser = await open();

    return await browser.close()
}

export default close