import { BasePage } from "./basePage"
import { By } from "selenium-webdriver"

export class GoTokyo extends BasePage {
    // Search for activity and favorite the page selectors
    hikingBtn: By = By.xpath('(//span[text()="Hiking a Japanese Mountain without Leaving Tokyo: Head to Mt. Takao for Trails and Hike-Friendly Takeout"])[1]')
    favoriteListBtn: By = By.xpath('(//a[@data-target="tmp_my_favorites"])[1]')
    favoriteList: By = By.xpath('//div[text()="My Favorites"]')
    faveButton: By = By.className("top_icon_heart")
    
    // Search for several places and favorite them selectors
    startSearch: By = By.className("setting_item setting_item_search")
    searchField: By = By.id("sch_keyword")
    skytreeResult: By = By.xpath('//p[text()="Tokyo Skytree - a 360 view of Tokyo from above the clouds"]')
    ghibliActivity: By = By.xpath('//p[text()="See the Fantastic World of Studio Ghibli From a New Perspective"]') 
    ramenResult: By = By.xpath('//p[text()="Oodles of Noodles—A Guide to Eating Ramen in Tokyo"]')
    cherryBlossomResult: By = By.xpath('//p[text()="When and where to see cherry blossoms in Tokyo in 2023"]')
    templesResult: By = By.xpath('//p[text()="Route 13: Visit Places of Spiritual Calm of Temples, Nature, Sophisticated Streets, and the Japanese Spirit"]')
    
    // Search for Tokyo Brochuers selectors
    planTrip: By = By.xpath('//a[text()="Plan Your Trip"]')
    brochures: By = By.xpath('(//a[text()="TOKYO Brochures"])[1]')
    categorySearch: By = By.xpath('(//a[text()="Search by Category/Tag"])[1]')
    landmarksBrochure: By = By.xpath('//span[text()="Landmarks"]')
    sightseeingGuide: By = By.xpath('//a[text()="Tokyo Sightseeing Accessibility Guide ..."]')
    viewBrochure: By = By.xpath('(//a[@class="btn"])[2]')
    doNotAcceptCookies: By = By.className("onetrust-close-btn-handler onetrust-close-btn-ui banner-close-button ot-close-icon")
    brochureControls: By = By.xpath('//i[@class="acti-icon acti-open"]')
    nextPage: By = By.xpath('//i[@class="acti-icon acti-few"]')

    // Download pdf of Subway Map selectors
    pdfDownloads: By = By.xpath('(//a[text()="Helpful PDF Downloads"])[1]')
    subwayMap: By = By.xpath('//a[text()="Tokyo Railway and Subway Map(PDF:1,677KB)"]')
    closeCookies: By = By.className("onetrust-close-btn-handler onetrust-close-btn-ui banner-close-button ot-close-icon")

    // Change font size and color selectors
    sizeColor: By = By.xpath('//a[text()="Font Size and Color"]')
    fontSize: By = By.xpath('//input[@class="text_size_up"]')
    fontSizeSet: By = By.className("fs_set text_size_set")
    color: By = By.xpath('(//input[@id="color_black"])[1]')
    colorSet: By = By.className("fs_set changestyle_set")
    pageReset: By = By.xpath('(//a[text()="New & Now"])[1]')

    constructor() {
        super({url: 'https://www.gotokyo.org/en/index.html'})
    }

    async search(searchWords: string) {
        await this.click(this.startSearch)
        return this.setInput(this.searchField, `${searchWords}\n`)
    }

    async tabSwitch(numberWindow: number) {
        let myTabs = await this.driver.getAllWindowHandles()
        await this.driver.switchTo().window(myTabs[numberWindow])
        await this.driver.sleep(1000)
    }
    
}