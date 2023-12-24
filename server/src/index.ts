import express from "express";
import "./db";

import noteRouter from "./routers/note";

// create a server
const app = express();

// this will parse post request coming from fetch.post() method
app.use(express.json());

// this will parse post request coming from html form
app.use(express.urlencoded({ extended: false }));

app.use("/note", noteRouter);

// listen to some port
app.listen(8000, () => {
  console.log("listening");
});