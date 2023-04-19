class LoginPage {
    get userName() {
        return $("input[name='username']")
    }

    get password() {
        return $("//input[@type='password']")
    }

    get signIn() {
        return $("#signInBtn")
    }

    async Login(userName,password) {
        await this.userName.setValue(userName)
        await this.password.setValue(password)
        await this.signIn.click()
    }

}
export  default new LoginPage()
