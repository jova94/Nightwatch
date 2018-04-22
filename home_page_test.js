module.exports = {
    'Home page tests' : function(client) {
        client
            .url('http://localhost:5000')
            .waitForElementVisible('bodu', 3000)
            .assert.visible('#sign-up-form-btn')
            .assert.visible('#login-form-btn')
            .click('#sign-up-form-btn')
            .waitForElementVisible('#sign-up-form', 2000)
            .setValue('#update-firstname', '')
            .setValue('#update-lastname', '')
            .setValue('#update-username', 'primjer@gmail.com')
            .setValue('#update-password', 'Primjer1')
            .click('#sign-up-btn',)
            .waitForElementVisible('p.error-msg.white-text.center', 2000)
            .assert.visible('p.error-msg.white-text.center')
            .assert.visible('p.error-msg.white-text.center', 'Please enter a first name')
            .end();
    }
}