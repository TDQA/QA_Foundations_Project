import { GoTokyo } from "./goTokyoPO";
const fs = require('fs')
const goTokyo = new GoTokyo()

test("Should do a search for an activity and favorite the page", async () => {
    await goTokyo.navigate()
    await goTokyo.driver.sleep(5000)
    await goTokyo.click(goTokyo.closeCookies)
    await goTokyo.click(goTokyo.hikingBtn)
    await goTokyo.driver.sleep(3000)
    await goTokyo.click(goTokyo.faveButton)
    await goTokyo.click(goTokyo.favoriteListBtn)
    await goTokyo.driver.sleep(5000)

    await fs.writeFile(`${__dirname}/searchScreenshot.png`,
    await goTokyo.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })

    await goTokyo.driver.quit()
})