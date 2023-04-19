class Shop {
    get checkout() {
        return $("*=Checkout")
    }

    async addProductsToCart(products) {
        const cards = await $$("div[class='card h-100']")
        for (let i=0; i<cards.length; i++) {
            const card = await cards[i].$("div h4 a")
            if (products.includes(await card.getText())) {
                await cards[i].$(".card-footer button").click()
            }
        }
    }
}
export  default new Shop()
