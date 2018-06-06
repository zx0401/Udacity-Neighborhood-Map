var express = require('express');
var request = require('request');
var url = require('url');
var qs = require("querystring");

var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/search', function(req, res) {
    var query = qs.stringify(url.parse(req.url, true).query);

    request({
        url: 'https://api.yelp.com/v3/businesses/search?' + query,
        headers: {
            'Authorization': 'Bearer SY9Ni4Jev64CYlZfBBd--5HfibRzAHqM2B3cmw_PmKxtetj5Sm9EXMT5aa0-B5NSrUV32miSM3lewT0QI-jo1-P66M05UMXlW5RrLpcCNpIo8dAFbo0dsAd-6W4QW3Yx'
        }
    }).pipe(res);
});

app.listen(8080);