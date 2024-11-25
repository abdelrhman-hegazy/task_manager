const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.json());
// app.use(express.urlencoded({extended:true}));

//routes
//get("/api/v1/tasks")         -get all the tasks
//post("/api/v1/tasks")        -create a new task
//get("/api/v1/tasks/:id")     -get single task
//petch("/api/v1/tasks/:id")   -update task
//delete("/api/v1/tasks/:id")  -delete task

app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware)

const port = process.env.PORT;
const DBURI = process.env.MONGO_URI;

const start = async () => {
  try {
    await connectDB(DBURI);
    app.listen(port, () => {
      console.log(`server listening on port: ${port}...`);
    });
  } catch (error) {
    console.error("error: " + error);
  }
};

start();
