const express = require("express");
const app = express();

/**
 * root API
 */
app.get('/', (_, res)=> {
    const obj = {
        name: 'tarikul',
        email: 'tarikul@gmail.com',
    }
    //res.send(obj);
    //res.send(JSON.stringify(obj))
    res.json(obj);
});

app.listen(4000, () => {
    console.log('I am listening on 4000');
} ); 