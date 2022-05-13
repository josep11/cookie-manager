const chrome = require('chrome-cookies-secure');

class CookieManager {

    constructor(chromeProfile = 'Default') {
        this.chromeProfile = chromeProfile;
    }

    /**
    * This function shoud be in chrome-cookies-secure@1.3.2 but there is some bug and the package on npm is not the same as in github
    * Promise wrapper for the main callback function
    */
    _getCookiesPromised(uri, format, profile) {
        return new Promise((resolve, reject) => {
            chrome.getCookies(uri, format, function (err, cookies) {
                if (err) {
                    return reject(err)
                }
                resolve(cookies)
            }, profile)
        })
    }

    /**
     * @returns {Array} cookies or empty array []
     */
    async getCookies(url) {
        try {
            const cookies = await this._getCookiesPromised(url, 'puppeteer', this.chromeProfile); //3rd param is profile. Check it at "chrome://version/" and modify accordingly
            return cookies;
        } catch (err) {
            console.error(err.name);
            throw err;
        }
    }

}

module.exports = CookieManager;