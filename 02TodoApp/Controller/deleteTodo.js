// import Todo model th (table of head)

const Todo = require("../Models/todo");

// define route handler

exports.deleteTodo = async (req, res) => {
  try {
    //  delete basis on id
    const { id } = req.params;

    await Todo.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Todo Successfully DELETED",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
