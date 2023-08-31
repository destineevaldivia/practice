const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8081;

const _dirname = path.resolve();
app.use(cors());



app.get('/', (req,res) => {
    res.sendFile(path.join(_dirname, 'index.html'));
})

app.listen(PORT, () => {
    console.log('My server is running on port ${PORT}')
});