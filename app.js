const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
// middlware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

// app.get("/api/v1/tasks",)        -- get all tasks
// app.post("/api/v1/tasks",)       -- create a new task
// app.get("/api/v1/tasks/:id",)    -- get single task
// app.patch("/api/v1/tasks/:id",)  -- update single task
// app.delete("/api/v1/tasks/:id",) -- delete single task
const PORT = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`SERVER IS LISTENING ON PORT ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
