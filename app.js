const express = require('express');

const app = express();

const db =require("./Config/mongoos-connection")

const cookieParser = require("cookie-parser");
const path = require('path');
const { log } = require('console');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');


app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);



app.listen(4000, () => {
  console.log("Server is connected")
});

