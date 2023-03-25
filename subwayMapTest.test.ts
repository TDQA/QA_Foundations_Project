import { GoTokyo } from "./goTokyoPO";
const fs = require('fs')
const goTokyo = new GoTokyo()

test("Should download pdf of Tokyo subway map", async () => {
    await goTokyo.navigate()
    await goTokyo.click(goTokyo.planTrip)
    await goTokyo.click(goTokyo.pdfDownloads)
    await goTokyo.click(goTokyo.closeCookies)
    await goTokyo.click(goTokyo.subwayMap)
    await goTokyo.driver.sleep(2000)
    await goTokyo.tabSwitch(1)
    await fs.writeFile(`${__dirname}/subwayMapScreenshot.png`,
    await goTokyo.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })
    await goTokyo.driver.quit()
})