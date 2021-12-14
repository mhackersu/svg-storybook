var express = require('express');
var app = express();
var server = require('http').Server(app);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));

app.listen(app.get('port'), function() {
      console.log('Node app on port', app.get('port'))
    });
