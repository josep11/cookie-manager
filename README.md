# cookie-manager

Uses `chrome-cookies-secure` package to retrieve the cookies from your current Chrome instance in a format that can be injected into puppeteer page.

## Install

Add this dependency into package.json:

```json
"cookie-manager": "github:josep11/cookie-manager#semver:^0.0.2"
```

## Usage

The constructor accepts the chrome profile. It defaults to "Default" profile. To see the other profiles see chrome://version/ and set it accordingly.

```js
const puppeteer = require('puppeteer');
const CookieManager = require("cookie-manager");
const cookieManager = new CookieManager();

const url = "<the desired url you want to retrieve the cookies>";
const cookies = await cookieManager.getCookies(url);

const browser = await puppeteer.launch();
const [page] = await browser.pages();
await page.setCookie(...cookies);

//navigate to the page with the cookies set.
await page.goto(url, { waitUntil: 'domcontentloaded' });
```
