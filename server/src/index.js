const http = require('http');
const mongoose = require('mongoose');

const app = require('./app')
const PORT = 5000
main().catch(err => console.log(err));



const server = http.createServer(app)

async function main() {
    await mongoose.connect('mongodb+srv://ihesinuloisreal:yahweh0852@profile.fnozd.mongodb.net/');
    console.log("Connected to Database");
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})