const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(shopRoutes);
app.use((req, res,next)=>{
    res.status(404).send('<h1>page not found</h1>')
})
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
