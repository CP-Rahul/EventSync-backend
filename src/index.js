const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Server is up and running on port ${ServerConfig.PORT}`);
})