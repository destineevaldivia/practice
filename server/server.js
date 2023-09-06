const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8081;

const _dirname = path.resolve();

//app.use is how you load your middleware fxn into express so that it knows to use it
app.use(cors());



app.get('/', (req,res) => {
    res.sendFile(path.join(_dirname, 'index.html'));
})

app.listen(PORT, () => {
    console.log('My server is running on port ${PORT}')
});


