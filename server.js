// #imports
const express = require('express');
const cors = require('cors')



// #variable 
const config = require('./config/config')
const app = express();


// #db 
require('./config/database')(config)


// #middleware
app.use(cors());




// #server
app.listen(config.PORT, () => {
    console.log(`Running on port ${config.PORT}`)
})

// #routes
app.get('/', (req,res) => {
    res.json({
        food : 'KFC',
        drink : 'coke'
    })
})