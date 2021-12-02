const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];



// console.log('url:', url);
// console.log('path:', path);

request(url, (error, response, body) => {
  if (error) {
    console.error('****error:****', error);
    return;
  }

  console.log('STATUS CODE TEST;', response && response.statusCode); //Print the response code if a response was received
  console.log('body: TEST', body)


  const bytes = body.length;

  fs.writeFile(path, body, {}, () => {
    console.log(`Downloaded and saved ${bytes} to ${path}`)
  });
});

