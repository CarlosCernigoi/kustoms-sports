const { Router } = require('express')
const { Users, Carts, Products } = require('../db.js')

const router = Router()

router.put('/', async (req, res) => {
  let { email, id } = req.query
  try {
    const finduser = await Users.findOne({
      where: { email: email },
    })
    if (!finduser) return res.status(200).send('User is not found')

    const product = await Products.findByPk(parseInt(id))
    if (product.available === false)
      return res.status(200).send('Product is not found')
    console.log(product)

    let cart = await Carts.findOne({
      where: { userId: finduser.id, open: 'true' },
      include: {
        model: Products,
      },
    })
    let encontro = false
    cart.products.forEach((element) => {
      if (element.id === parseInt(id)) encontro = true
    })
    if (!encontro) return res.status(200).send('No esta')
    let pricepromotion = Number.parseFloat(
      parseInt(cart.totalamount) -
        (product.promotion
          ? parseInt(product.price) * (1 - parseInt(product.promotion))
          : parseInt(product.price)),
    ).toFixed(2)
    if (await cart.removeProducts(product)) {
      await cart.update({
        totalamount: pricepromotion,
      })
      return res.status(200).send(cart)
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
