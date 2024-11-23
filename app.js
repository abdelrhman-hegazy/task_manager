const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
require("dotenv").config();

// middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded)

//routes
//get("/api/v1/tasks")         -get all the tasks
//post("/api/v1/tasks")        -create a new task
//get("/api/v1/tasks/:id")     -get single task
//petch("/api/v1/tasks/:id")   -update task
//delete("/api/v1/tasks/:id")  -delete task
app.use("/api/v1/tasks", tasks);

const port = 3000;

app.listen(port, () => {
  console.log(`server listening on port: ${port}...`);
});
