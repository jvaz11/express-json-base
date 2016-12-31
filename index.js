var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

// Prettifies json response body using 2 spaces for indentation
app.set('json spaces', 2)

// Respond to `GET` requests made to the "https://my-project-name.heroku.com/"
app.get('/', function(req, res) {
    var responseObject = {
        foo: 'bar',
        number: 42
    };
    res.json(responseObject);
})

// Respond to `POST` requests made to the "https://my-project-name.heroku.com/some-order"
app.post('/some-order', function(req, res) {
    var responseObject = {
    	createdAt: new Date().toISOString(),
        id: 12345,
        firstName: 'Newt',
        lastName: 'Scamander',
        orderLineItems: [{
            name: 'Hufflepuff Robes',
            quantity: 1,
            price: 738.75,
            sku: 'sdf652s1d'
        }, {
            name: 'Barn Owl',
            quantity: 1,
            price: 12000.55,
            sku: 'kj54t9e'
        }, {
            name: 'Parchment',
            quantity: 1,
            price: 6.75,
            sku: 'pdfnk3'
        }]
    };
    res.json(responseObject);
})

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})
