var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public_html'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get('/api/', function(request, response) {
  response.send('API is running')
})

app.get('/api/test', function(request, response) {
  response.send({
  	key: "value"
  })
})

app.listen(app.get('port'), function() {
  console.log("Hello there! Your Node app is running at localhost:" + app.get('port'))
})