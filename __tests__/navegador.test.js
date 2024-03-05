const puppeteer = require('puppeteer')

describe('Mi primer test en Puppeteer', () => {

    it('Debe de abrir y cerrar el navegador', async () =>{
        //  const browser = await puppeteer.launch({
        //      headless:false
        //  })
        const browser = await puppeteer.launch({
            headless: false,
            executablePath: 'google-chrome',
            slowMo:0,
            devtools: false,
            // defaultViewport:{
            //     width: 1920,
            //     height: 1080
            // }
            // args:['--window-size=1366,768']
            defaultViewport: null
        });
        const page = await browser.newPage()
        await page.goto('https://www.winrar.es/')
        await new Promise((resolve) => setTimeout(resolve, 5000))
        //await page.waitForTimeout(5000)
        await browser.close()
    }, 10000)
})
