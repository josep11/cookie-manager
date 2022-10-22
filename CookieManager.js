const chrome = require("chrome-cookies-secure");

class CookieManager {
	constructor(chromeProfile = "Default") {
		this.chromeProfile = chromeProfile;
	}

	/**
	 * @param {string} url
	 * @returns {Promise<Array>} cookies or empty array []
	 */
	async getCookies(url) {
		try {
			const cookies = await chrome.getCookiesPromised(
				url,
				"puppeteer",
				this.chromeProfile
			); //3rd param is profile. Check it at "chrome://version/" and modify accordingly
			return cookies;
		} catch (err) {
			console.error(err.name);
			throw err;
		}
	}
}

module.exports = CookieManager;
