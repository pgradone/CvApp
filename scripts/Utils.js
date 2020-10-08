// ref: https://attacomsian.com/blog/nodejs-convert-xml-to-json#:~:text=Read%20XML%20from%20File,-If%20your%20XML&text=xml')%3B%20%2F%2F%20convert%20XML,JSON%20in%20a%20file%20fs.
const xml2js = require('xml2js');
const fs = require('fs');

// define a filename without extension
let fileName = './data/CV-ESP-Europass-20200711-Gradone-EN';

// read XML from a file
const xml = fs.readFileSync(fileName + '.xml');

// convert XML to JSON
xml2js.parseString(xml, { mergeAttrs: true }, (err, result) => {
  if (err) {
    throw err;
  }
  // result is a js object to convert to JSON
  const json = JSON.stringify(result, null, 2);
  fs.writeFileSync(fileName + '.json', json);
});
