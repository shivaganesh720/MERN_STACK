import express from "express";
import session from "express-session";
import expressLayouts from "express-ejs-layouts";
const app = express();
app.use(expressLayouts);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");
app.listen(8080, () => console.log("Server Started on port 8080"));
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: "mysecretkey",
        resave: false,
        saveUninitialized: false,
    }),
);

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
            req.session.user = user;        //session id gets created and stored in the browser cookie and session data is stored in the server memory.   check in browser, inspect element, application, cookies, you can see the session id cookie.  and in the server memory you can see the session data stored with the session id as the key.
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
    if (req.session.user) {
        res.render("dashboard", { users });
    } else {
        res.redirect("/login");
    }

});
