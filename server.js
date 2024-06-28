import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

app.get("/todos", (req, res) => {
  // const TODOS =
  // { id: 1, title: "Grocery Shopping", desc: "Buy milk, bread, and eggs from the store." },
  // // { id: 2, title: "Read a Book", desc: "Finish reading 'The Alchemist'." },
  // // { id: 3, title: "Workout", desc: "Complete a 30-minute cardio session." }
  const TODOS = {
    1: {
      title: "Grocery Shopping",
      desc: "Buy milk, bread, and eggs from the store.",
    },
    2: { title: "Read a Book", desc: "Finish reading 'The Alchemist'." },
    3: { title: "Workout", desc: "Complete a 30-minute cardio session." },
  };

  const id = req.query.id;
  if (id && TODOS[id]) {
    res.json({ todo: TODOS[id] }); // Adjusted to match the expected format in the frontend
  } else {
    res.status(404).send("Todo not found");
  }
});

app.listen(3000, () => {
  console.log("server running on 3000");
});
