let express = require("express");

const app = express();
const morgan = require("morgan");
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/test", (req, res) =>
  res.send(" <h1 style='color: green;'>Hello</h1> ")
);

app.get("/favorite-movie/:name/otherthing/:age", (req, res) => {
  console.log(req.params);
  res.status(200);
  if (req.params.name === "Gary") {
    res.send("The Big Lebowski");
    return;
  } else if (req.params.name === "Pete") {
    res.send("The Penguins of Madagascar");
    return;
  }
  if (req.params.age < 13) {
    res.send("Must be a PG movie please");
    return;
  }
});
app.listen(3000, () => {
  console.log("Running on port 3000");
});
