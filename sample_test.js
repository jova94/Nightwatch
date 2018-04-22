module.exports = {
    'Sample e2e tests' : function(client) {
        client
            .url('http://localhost:5000')
            .waitForElementVisible{'body', 2000}
            .assert.title('News Flash')
            .assert.visible('h1.text-center')
            .assert.containsText('h1.text-center', 'Welcome to News Flash')
            .end();
    }

};