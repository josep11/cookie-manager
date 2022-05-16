const CookieManager = require("../CookieManager");
const cookieManager = new CookieManager();

describe('Cookie Manager Test', () => {
    it('should construct', () => {
        expect(cookieManager).toBeTruthy();
    });

    it('should get Chrome cookies', async () => {
        const url = "https://www.google.com/";
        const cookies = await cookieManager.getCookies(url);
        expect(cookies).toBeTruthy();
        expect(cookies).toBeInstanceOf(Array);
        expect(cookies.length).toBeGreaterThan(0);
    });
});