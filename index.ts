import * as puppeteer from 'puppeteer';
import { CODES } from './src/codes';

const main = async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();

  await page.goto('https://worldle.teuteuf.fr/');
  let img = await page.waitForSelector('img.h-full');
  // @ts-ignore
  let imgSrc = await page.evaluate(img => img.src, img);

  let countryCode = imgSrc.replace('https://', '').split('/')[3];
  console.log("Today's answer is:", CODES[countryCode]);
  browser.close();
};

main();