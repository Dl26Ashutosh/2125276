const express =  require('express');
const router = require('./routes/routes');
const app = express();
const PORT = 4000;

// cross-origin module
const cors = require('cors')

const bodyParser = require('body-parser')
app.use(router);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
  