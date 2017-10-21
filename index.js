const express = require('express');
const path = require('path');


const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'))
});
let port = 2020
app.listen(port,() => console.log(`lisening on port ${port}`))
