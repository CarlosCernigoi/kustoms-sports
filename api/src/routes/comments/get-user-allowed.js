require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const { Users, Carts, Products, cartproducts } = require("../../db.js");

const router = Router();

router.get('/', async (req, res) => {
    let { email, name } = req.query;
  try {
    const user = await Users.findOne({
      where: { email: email },
    });
    let cart = await Carts.findAll({
      where: { userId: user.id, open: "false" },
      include: {
        model: Products,
    },
    });
    for (let i = 0; i < cart.length ; i++) {
        const prodxcart = cart[i].products
        console.log("prodxcart", prodxcart)
        for (let j = 0; j < prodxcart.length; j++) {
            if (prodxcart[j].name === name){
                return res.status(200).send("User allowed")
            }
        }        
    }
    return res.status(400).send("User not allowed")
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;