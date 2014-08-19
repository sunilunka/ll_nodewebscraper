var http = require('http');
var request = require('request');
var cheerio = require('cheerio');
// var scraper = require('./scraper.js')

var targetPage = process.argv[2];


function getPage(targetPage){

  request(targetPage, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      console.log(body);
    };
  }); //.on("error", function(e){
    //   console.log("Got error " + e.message);
    // });
};


getPage(targetPage);