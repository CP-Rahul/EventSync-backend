const express = require('express');

const cors = require('cors');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

const corsOptions = {
    origin: ServerConfig.ORIGIN, 
    allowedHeaders: ['Content-Type', 'x-access-token'],
  };
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Server is up and running on port ${ServerConfig.PORT}`);
})