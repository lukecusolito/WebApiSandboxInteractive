const express = require('express');
const app = express();
const glob = require('glob');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

glob("./endpoints/*.js", function (er, files) {
    for (var i in files) {
        require(files[i])(app);
    }
});

app.listen(port, () => console.log(`WebApiSandboxInteractive listening on port ${port}!`));