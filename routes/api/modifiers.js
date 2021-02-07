const express = require('express');
const router = express.Router();
const Modifier = require("../../models/Modifier");
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
//* get all modifier names
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Modifier.find()
      .then(modifiers => {
        res.json(modifiers.map(modifier => modifier.name))
      })
      .catch(err => res.status(400).json(err))
  }
)

module.exports = router;