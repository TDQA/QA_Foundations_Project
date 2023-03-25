import { GoTokyo } from "./goTokyoPO";
const fs = require('fs')
const goTokyo = new GoTokyo()

describe('GoTokyo Test', () => {
    test("Should search for brochure and view it in browser", async () => {
        await goTokyo.navigate()
        await goTokyo.click(goTokyo.planTrip)
        await goTokyo.click(goTokyo.brochures)
        await goTokyo.tabSwitch(1)
        await goTokyo.click(goTokyo.doNotAcceptCookies)
        await goTokyo.click(goTokyo.categorySearch)
        await goTokyo.click(goTokyo.landmarksBrochure)
        await goTokyo.click(goTokyo.sightseeingGuide)
        await goTokyo.click(goTokyo.viewBrochure)
        await goTokyo.driver.sleep(2000)
        await goTokyo.tabSwitch(2)
        await goTokyo.driver.sleep(5000)
        await goTokyo.click(goTokyo.brochureControls)
        await goTokyo.click(goTokyo.nextPage)
        await goTokyo.click(goTokyo.nextPage)
        await fs.writeFile(`${__dirname}/brochureScreenshot.png`,
        await goTokyo.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.error(e)
            else console.log('Save Successful')
        })
            await goTokyo.driver.quit()
    })
})


