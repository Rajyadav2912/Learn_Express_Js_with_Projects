// import Todo model th (table of head)

const Todo = require("../Models/todo");

// define route handler

exports.getTodo = async (req, res) => {
  try {
    // fetch all todo items from database
    const todos = await Todo.find({});

    // response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire Todo Data is Fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Server Error",
      message: err.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    // extract todo items basis on id
    const id = req.params.id;

    const todo = await Todo.findById({ _id: id });

    //data forgiven id not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Data Found with Given Id",
      });
    }

    // data for given id Found
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo Id : {${id}} data successfully fetched`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Server Error",
      message: err.message,
    });
  }
};
