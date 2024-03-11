// import Todo model th (table of head)

const Todo = require("../Models/todo");

// define route handler

exports.createTodo = async (req, res) => {
  try {
    // extract title & description from req.body
    const { title, description } = req.body;

    // create a new Todo obj & insert in DB
    const response = await Todo.create({ title, description });

    // send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfull",
    });
  } catch (err) {
    console.error(err);
    console.log(err),
      res.status(500).json({
        success: false,
        data: "internal server error",
        message: err.message,
      });
  }
};
