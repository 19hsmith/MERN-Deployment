const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors(), express.json());

const connectDb = require('./config/mongoose.config');
connectDb();

const petRouter = require('./routes/pet.route');
app.use('/api', petRouter);

const port = 8000;    
app.listen(port, () => console.log(`Listening on port: ${port}`) );