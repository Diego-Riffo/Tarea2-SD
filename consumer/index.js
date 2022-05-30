const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const { Kafka } = require("kafkajs");


const app = express()
dotenv.config()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use(cors())
var port = process.env.PORT || 5000;

var kafka = new Kafka({
  clientId: "my-app",
  brokers: ["kafka:9092"],
});
const consumer = kafka.consumer({ groupId: "test-group" });


app.get('/', (req, res) => {
  res.send('Hola soy el consumer')
  main();
})
var value = null;
var json = {};
var registro = {};
var bloqueados = {};

const main = async () => {
 
};




app.get("/", async (req, res) => {
    res.send("Hola soy el consumer");
});

app.listen(port, () => {
  console.log(`API RUN AT http://localhost:${port}`);
});

