import loginPage from "../pageobjects/loginPage.js"
import Shop from "../pageobjects/Shop.js"
import Review from "../pageobjects/reviewpage.js"
import Confirm from "../pageobjects/confirmPage.js"

it('should Complete End to End Test', async()=> {
    const products = ['iphone X', 'Blackberry']
    await browser.maximizeWindow()
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    await loginPage.Login('rahulshettyacademy', 'learning')
    await Shop.checkout.waitForExist()
    await Shop.addProductsToCart(products)
    await $("#navbarResponsive > ul > li > a").click()
    await Review.sumOfProducts()
    await Review.totalFormattedPrice()
    await Confirm.confirmation()
});