const getAllTasks = (req, res) => {
  res.send("all users");
};
const createTask = (req, res) => {
  res.send(`hello ${req.body.name}`);
};
const getTask = (req, res) => {
  res.json({id: req.params.id});
};
const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
