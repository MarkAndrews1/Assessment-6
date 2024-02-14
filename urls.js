const fs = require('fs');
const axios = require('axios');
const argv = process.argv;

fs.readFile(argv[2], 'utf8', async function(err, data) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  
  const urls = data.trim().split('\n');

  for(let url of urls){
    try {
      let res = await axios.get(url);
      let hostName = new URL(url).hostname
      let fileName = `${hostName}.html`
      fs.writeFile(fileName, res.data, 'utf8', function(err){
        if(err){
            console.error(`Error occurred while writing to file ${fileName}:`, err)
        } else{
            console.log(`Wrote to ${fileName}`)
        }
      })
    } catch (err) {
        console.error(`Couldn't download: ${url}`)
    }
  }
});
  
console.log('reading file');