const express = require('express');
const router = express.Router();
const Menu = require("../../models/Menu");
const validateMenu = require("../../validation/menu")
const passport = require('passport');

//* create menu
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { isValid, errors } = validateMenu(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newMenu = new Menu({
      name: req.body.name,
      groups: req.body.groups
    })

    newMenu.save().then(menu => res.json(menu));
  }
)

//* update menu
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Menu.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        groups: req.body.groups
      },
      { new: true }
    )
      .then(menu => res.json(menu))
      .catch(errors => {
        res.status(400).json(errors)
      });
  }
)

//* delete menu

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Menu.deleteOne({ _id: req.params.id })
      .then(() =>
        res.status(200).json({ message: "Menu successfully deleted." })
      )
      .catch(errors => res.status(400).json({ errors }))
  }
);

//* get one menu

router.get(
  '/:menuId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Menu.find({ _id: req.params.menuId })
      .then(menu => res.json(menu))
      .catch(err => res.status(400).json(err))
  }
)

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Menu.find()
      .then(menus => {
        res.json(menus.map(menu => menu.name))
      })
      .catch(err => res.status(400).json(err))
  }
)

module.exports = router;