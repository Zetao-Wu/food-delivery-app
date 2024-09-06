import express from 'express';
import { removeFromCart, getCart, addToCart } from '../controllers/cartController';

const cartRouter = express.Router();

cartRouter.post("/add", addToCart);
cartRouter.post("/remove", removeFromCart);
cartRouter.post("/get", getCart);








export default cartRouter;