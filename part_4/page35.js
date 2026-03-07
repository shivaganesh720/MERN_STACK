import express, { Router } from 'express';
const app = express();
const productRouter = express.Router();
const userRouter = express.Router();

productRouter.get("/list", (req, res) => {
    res.send("Product List");
});

userRouter.get("/list", (req, res) => {
    res.send("User List");
});

app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen(5000, () => console.log("Server is running on port 5000"));