import { GoTokyo } from "./goTokyoPO";
const fs = require('fs')
const goTokyo = new GoTokyo()

test("Should change the font size and color of webpage", async () => {
    await goTokyo.navigate()
    await goTokyo.click(goTokyo.sizeColor)
    await goTokyo.click(goTokyo.closeCookies)
    await goTokyo.click(goTokyo.fontSize)
    await goTokyo.click(goTokyo.fontSizeSet)
    await goTokyo.driver.sleep(2000)
    await goTokyo.click(goTokyo.color)
    await goTokyo.click(goTokyo.colorSet)
    await goTokyo.click(goTokyo.pageReset)
    await goTokyo.driver.sleep(4000)
    await fs.writeFile(`${__dirname}/changeFontSizeColorScreenshot.png`,
    await goTokyo.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })
    await goTokyo.driver.quit()

})