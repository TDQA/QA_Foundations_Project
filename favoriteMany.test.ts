import { GoTokyo } from "./goTokyoPO";
const fs = require('fs')
const goTokyo = new GoTokyo()

test("Should do a search of several activites, favorite them and have them appear in favorite list", async () => {
    await goTokyo.navigate()
    await goTokyo.driver.sleep(5000)
    await goTokyo.click(goTokyo.closeCookies)
    await goTokyo.click(goTokyo.hikingBtn)
    await goTokyo.driver.sleep(2000)
    await goTokyo.click(goTokyo.faveButton)

    await goTokyo.search('Tokyo Skytree')
    await goTokyo.click(goTokyo.skytreeResult)
    await goTokyo.driver.sleep(2000)
    await goTokyo.click(goTokyo.faveButton)

    await goTokyo.driver.sleep(2000)
    await goTokyo.search("Studio Ghibli")
    await goTokyo.driver.sleep(2000)
    await goTokyo.click(goTokyo.ghibliActivity)
    await goTokyo.click(goTokyo.faveButton)

    await goTokyo.driver.sleep(2000)
    await goTokyo.search('ramen')
    await goTokyo.click(goTokyo.ramenResult)
    await goTokyo.driver.sleep(2000)
    await goTokyo.click(goTokyo.faveButton)

    await goTokyo.driver.sleep(2000)
    await goTokyo.search('cherry blossoms')
    await goTokyo.click(goTokyo.cherryBlossomResult)
    await goTokyo.driver.sleep(2000)
    await goTokyo.click(goTokyo.faveButton)
   
    await goTokyo.driver.sleep(2000)
    await goTokyo.search('temples')
    await goTokyo.click(goTokyo.templesResult)
    await goTokyo.driver.sleep(2000)
    await goTokyo.click(goTokyo.faveButton)
    
    await goTokyo.driver.sleep(2000)
    await goTokyo.click(goTokyo.favoriteListBtn)
    await goTokyo.driver.sleep(5000)
    
    await fs.writeFile(`${__dirname}/favoritesScreenshot.png`,
    await goTokyo.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })

    await goTokyo.driver.quit()
})