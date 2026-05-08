import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());
// Define a route for GET requests to the root URL
app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.get("/course", (req, res) => {
  console.log("/course been hit by client");
  res.json("CIS 131 - Exam 4");
});

const pets = [
  { id: 1, type: "dog", name: "Diesel" },
  { id: 2, type: "cat", name: "Milo" },
  { id: 3, type: "bird", name: "Sky" },
];

app.get("/pets/search", (req, res) => {
  console.log("client hit /pets/search");
  const {type, name} = req.query;
  console.log(type)
    console.log(name)
  if (type !== undefined) {
    const pet = pets.find((p) => p.type == type)
    res.json(pet)
  } else if (name !== undefined) {
    const pet = pets.find((p) => p.name == name)
    res.json(pet)
  } else {
    const pet = pets.find(p => p.name == name && p.type == type)
    res.json(pet)
  }
});

app.get("/pets", (req, res) => {
  console.log("Client just hit /pets endpoint.");
  res.json(pets);
});

app.get("/pets/:id", (req, res) => {
  const petId = req.params.id;
  res.json(pets.find((x) => petId == x.id));
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
