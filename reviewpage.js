

class Review {
    async sumOfProducts() {
        const productPrices = await $$("//tr/td[4]/strong")
        const sumOfProducts = (await (await Promise.all(productPrices.map(async (productPrice) => parseInt((await productPrice.getText()).split(".")[1].trim()))))
            .reduce((acc, price) => acc + price, 0))
        await console.log(sumOfProducts)
    }

    async totalFormattedPrice() {
        const totalValue = await $("h3 strong").getText()
        const cartTotal = parseInt(totalValue.split(".")[1].trim())
    }
}
export  default new Review()
