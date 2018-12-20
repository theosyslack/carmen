import * as puppeteer from "puppeteer";
import { URL } from 'url';
import * as path from 'path';
import * as fs from 'fs';
import log from "../actions/log";

export default async (url) => {
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
            if (!fs.existsSync(currentPath)) {
                fs.mkdirSync(currentPath);
            }
            return currentPath;
        }, '');

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 6000
    });

    await page.setViewport({
        width: 1920,
        height: await page.evaluate(() => document.body.clientHeight)
    });

    log("Capturing Screen for: " + fileName, "default");

    // TODO Allow user to inject CSS to ensure we dont run into issues with VH
    // await page.addStyleTag({ content: '.home .homeHero .homeHeroVideo{height: 600px !important}' });

    await page.screenshot({
        fullPage: true,
        path: finalPath + "/" + fileName + ".png"
    });

    await page.close();
    await browser.close();
};