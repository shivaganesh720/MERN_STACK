import express from "express";
const app = express();
app.listen(8080, () => console.log("Server Started on port 8080"));
app.set("view engine", "ejs");
app.set("views", "views");
app.listen(5000, () => console.log("Server Started on port 5000"));

app.use(express.urlencoded({ extended: true }));

let users = [
    { name: "Shivaganesh", email: "shivaganesh@gmail.com", password: "1234" },
    { name: "Venu", email: "venu@gmail.com", password: "1234" },
    { name: "Somesh", email: "somesh@gmail.com", password: "1234" },
];

app.get("/login", (req, res) => {
    res.render("login", { error: null });
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = users.find((user) => user.email === email);
    if (user) {
        if (user.password === password) {
            res.redirect("/");
        } else {
            res.render("login", { error: "Invalid Password" });
        }
    } else {
        res.render("login", { error: "User not found" });
    }
    // res.redirect("/");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    users = [...users, req.body];
    res.redirect("/");
});

app.get("/", (req, res) => {
    res.render("dashboard", { users });
});