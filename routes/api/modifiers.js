const express = require('express');
const router = express.Router();
const Modifier = require("../../models/Modifier");
const Item = require("../../models/Item");
const validateModifier = require("../../validation/modifier")
const passport = require('passport');

//* create modifier
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { isValid, errors } = validateModifier(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newModifier = new Modifier({
      name: req.body.name,
      price: req.body.price
    })

    newModifier.save().then(modifier => res.json(modifier));
  }
)

//* update modifier
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Modifier.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        price: req.body.price
      },
      { new: true }
    )
      .then(modifier => res.json(modifier))
      .catch(errors => {
        res.status(400).json(errors)
      });
  }
)

//* delete modifier

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Modifier.deleteOne({ _id: req.params.id })
      .then(() =>
        res.status(200).json({ message: "Modifier successfully deleted." })
      )
      .catch(errors => res.status(400).json({ errors }))
  }
);

//* get one modifier

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Group.find({ _id: req.params.id })
      .then(modifier => res.json(modifier[0]))
      .catch(err => res.status(400).json(err))
  }
)
//* get all modifier names and id
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Modifier.find()
      .then(modifiers => {
        res.json(modifiers.map(modifier => { return { name: modifier.name, _id: modifier._id } }))
      })
      .catch(err => res.status(400).json(err))
  }
)

//* get all modifier names and ids for one item
router.get(
  '/item/:itemId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Item.find({ _id: req.params.itemId })
      .then(item => {
        const modifierArr = []
        item.modifiers.forEach((modId, idx) => {
          Modifier.find({ _id: modId })
            .then(mod => {
              modifierArr.push(mod)
              if (idx === item.modifiers.length - 1) {
                res.json(modifierArr.map(mod => { return { name: mod.name, _id: mod._id } }))
              }
            })
        })
      })
      .catch(err => res.status(400).json(err))
  }
)

module.exports = router;