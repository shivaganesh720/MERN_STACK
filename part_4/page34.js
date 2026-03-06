import express from "express"
const app = express()
app.listen(8080, () => console.log("Server Started"));
app.set("view engine", "ejs")
app.set("Views", "Views")

app.listen(5000, () => console.log("Server Started"));

const users = [
    { username: "shivaganesh", email: "shivaganesh@gmail.com", password: "1234"},
    { username: "Venu", email: "venu@gmail.com", password: "1234" },
    { username: "Vivek", email: "Vivek@gmail.com", password: "1234" }
];
app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/", (req, res) => {
    res.render("dashboard");
});