"use strict";
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { Kafka } = require("kafkajs");


const app = express();
dotenv.config();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 3000;
var host = process.env.PORT || '0.0.0.0';
///////////////////////////////////////////////////////////////

var kafka = new Kafka({
  clientId: "my-app",
  brokers: ["kafka:9092"],
});

///////////////////////

//-------------------------------------------


app.post("/login", (req, res) => {
  (async () => {
      const producer = kafka.producer();
      await producer.connect();
      const { username, password } = req.body;
      var time = Math.floor(new Date() / 1000);
      let user = {
        username: username,
        password: password,
        tiempo: time.toString()
      }
      await producer.send({
        topic: "test-topic",
        //value: JSON.stringify(user)
        messages: [{ value: JSON.stringify(user) }],
      })
      await producer.disconnect();
      //await admin.disconnect();
      res.json(user);
  })();
});

/////////////////////////




app.get("/", async (req, res) => {
    res.send("Hola soy el producer");
});

app.listen(port, () => {
  console.log(`API RUN AT http://localhost:${port}`);
});

