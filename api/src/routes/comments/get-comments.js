const { Router } = require('express')
const { Users, Comments } = require('../../db.js')

const router = Router()

router.get('/', async (req, res) => {
  let { name, gender } = req.query
  try {
    let comments = await Comments.findAll({
      where: { productname: name, productgender: gender, available: 'true' },
      include: {
        model: Users,
      },
    })

    return res.status(200).send(comments)
  } catch (error) {
    return res.status(400).json(error)
  }
})

module.exports = router
