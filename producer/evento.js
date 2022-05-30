"use strict";
const avsc = require("avsc");

const schema = avsc.Type.forSchema({
  type: "record",
  fields: [
    {
      name: "username",
      type: "string",
    },
    {
      name: "password",
      type: "string",
    },
    {
      name: "date",
      type: "string",
    },
  ],
});

module.exports = {
  schema,
};