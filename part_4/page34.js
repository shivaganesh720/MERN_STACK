import express from "express"
const app = express()
app.listen(8080, () => console.log("Server Started"));
app.set("view engine", "ejs")
app.set("Views", "Views")
app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});