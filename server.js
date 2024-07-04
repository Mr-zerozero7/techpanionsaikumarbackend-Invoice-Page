const express = require('express');
const cors = require('cors')
const connectDB = require('./config/mongoose');
const formRoutes = require('./routes/formRoutes')

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use(formRoutes)

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});