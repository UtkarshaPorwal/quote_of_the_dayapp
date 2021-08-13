var axios = require('axios');
var chalk = require('chalk');
const url = "https://quotes.rest/qod";
axios.get(url, { headers: { Accept: "application/json" } })
.then(res => {
    const quote = res.data.contents.quotes[0].quote
    const author = res.data.contents.quotes[0].author
    const log = chalk.bgCyan(`${quote} - ${author}`) 
    console.log(log)
  }).catch(err => {
    const log = chalk.red(err) 
    console.log(log)
  })

