const express = require('express');
const bodyParse = require('body-parser');


const os = require('os');


const app = express();

app.get('/',(request, response)=>{
    return response
    .status(200)
    .json({
        status: true,
        mensagem: 'ok'
    });
});

app.get('/redirect', (request, response) => {
    return response.redirect(307, 'http://www.globo.com');
});


app.get('/liveness', (request, respost) => {
    return respost
    .status(200)
    .json({
        status:true,
        path: "",
        gid: "",
        uid: ""
    });

});

app.get('/readiness', (request, respost) => {
    return respost
    .status(200)
    .json({
        status:true,
        mensagem: "readiness",
        os: os.platform(),
        freemem: os.freemem(),
        homedir: os.homedir()
    });
});


module.exports = app