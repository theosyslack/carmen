import * as puppeteer from "puppeteer";
import { URL } from 'url';
import * as path from 'path';
import * as fs from 'fs';

const takeScreenshot = async () => {

    let url = "https://retail.johnsonville.com/recipe/brat-hot-tub.html";
    let { hostname, pathname } = new URL(url);
    let folderPath = pathname.replace(path.extname(pathname), "");
    let lastIndex = folderPath.lastIndexOf("/");
    let fileName = folderPath.substring(lastIndex + 1);
    folderPath = folderPath.substring(0, lastIndex);

    let finalPath = "screenshots/" + hostname + folderPath;

    if (fileName == "") {
        fileName = "home";
    }

    finalPath
        .split(path.sep)
        .reduce((prevPath, folder) => {
            const currentPath = path.join(prevPath, folder, path.sep);
            if (!fs.existsSync(currentPath)){
                fs.mkdirSync(currentPath);
            }
            return currentPath;
        }, '');

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1024
    });

    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: finalPath + "/" + fileName + ".png" });
    await page.close();
    await browser.close();
};

takeScreenshot();