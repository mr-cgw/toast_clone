const express = require('express');
const router = express.Router();
const Item = require("../../models/Item");
const Group = require("../../models/Group");
const validateItem = require("../../validation/item")
const passport = require('passport');

//* create item
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { isValid, errors } = validateItem(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newItem = new Item({
      name: req.body.name,
      imgUrl: req.body.imgUrl,
      description: req.body.description,
      price: req.body.price,
      modifiers: req.body.modifiers
    })

    newItem.save().then(item => res.json(item));
  }
)

//* update item
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Item.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        imgUrl: req.body.imgUrl,
        description: req.body.description,
        price: req.body.price,
        modifiers: req.body.modifiers
      },
      { new: true }
    )
      .then(item => res.json(item))
      .catch(errors => {
        res.status(400).json(errors)
      });
  }
)

//* delete item

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Item.deleteOne({ _id: req.params.id })
      .then(() =>
        res.status(200).json({ message: "Item successfully deleted." })
      )
      .catch(errors => res.status(400).json({ errors }))
  }
);

//* get one item

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Item.find({ _id: req.params.id })
      .then(item => res.json(item[0]))
      .catch(err => res.status(400).json(err))
  }
)
//* get all item names and id
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Item.find()
      .then(groups => {
        res.json(groups.map(item => { return { name: item.name, _id: item._id } }))
      })
      .catch(err => res.status(400).json(err))
  }
)

//* get all item names and ids for one group
router.get(
  '/group/:groupId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Group.find({ _id: req.params.groupId })
      .then(group => {
        const itemArr = []
        group[0].items.forEach((itemId, idx) => {
          Item.find({ _id: itemId })
            .then(item => {
              itemArr.push(item)
              if (idx === group[0].items.length - 1) {
                res.json(itemArr.flat().map(item => { return { name: item.name, _id: item._id } }))
              }
            })
        })
      })
      .catch(err => res.status(400).json(err))
  }
)

module.exports = router;