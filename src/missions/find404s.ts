import * as puppeteer from 'puppeteer';

export default async () => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.goto('https://retail.johnsonville.com');

    let resultAnchors = await page.evaluate(() => {
        let elements = Array.from(document.querySelectorAll('a')).map(link => link.href)
        return elements; // Return our data array
    });

    console.log(resultAnchors);

    // for (let anchor of resultAnchors) {
    //     await page.goto(anchor);
    //     await page.on('response', response => {
    //         if (response.status() > 399)
    //             console.log("response code: ", anchor, response.status());
    //         // do something here
    //     });
    //     // let response = await page.on('response', resp => {
    //     //     var header = resp.headers();
    //     //     return header['content-disposition'];
    //     // });
    //     // console.log(response);
    // }





    await browser.close();
};
