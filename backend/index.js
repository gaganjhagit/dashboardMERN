const express = require('express');
const app = express();
const port = 8080;

require('dotenv').config()

const router = require("./routes/userRoutes")

app.use(require('cors')());
app.use(express.json());

require('mongoose').connect(process.env.MongoLink, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('Error connecting to MongoDB:', error));

app.use('/users', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});