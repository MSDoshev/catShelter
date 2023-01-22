const express = require('express');
const config = require('./config/index')

const app = express();

app.get('/', (req, res) => {

    res.send('Test, express')

})
app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));