class Confirm {
    async confirmation() {
        await $("[class$='btn btn-success']").click()
        await $("#country").setValue("Spa")
        await $(".lds-ellipsis").waitForExist({reverse:true})
        await $("div[class='suggestions'] ul li a").click()
        await $("label[for='checkbox2']").click()
        await $("input[value='Purchase']").click()
        await expect($("div[class='alert alert-success alert-dismissible'] strong")).toHaveTextContaining("Success")
    }
}
export  default new Confirm()
