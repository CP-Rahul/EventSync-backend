const express = require('express');

const { ServerConfig } = require('./config');

const app = express();

app.listen(ServerConfig.PORT, async () => {
    console.log(`Server is up and running on port ${ServerConfig.PORT}`);
})