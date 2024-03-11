// import Todo model th (table of head)

const Todo = require("../Models/todo");

// define route handler

exports.updateTodo = async (req, res) => {
  try {
    // update in the basis of id
    const { id } = req.params;
    const { title, description } = req.body;

    //
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );

    // Data forgiven id not found
    res.status(200).json({
      success: true,
      data: todo,
      message: `Update Successfull on this Id ${id}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      data: "Server error",
    });
  }
};
