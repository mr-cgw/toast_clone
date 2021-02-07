const express = require('express');
const router = express.Router();
const Group = require("../../models/Group");
const validateGroup = require("../../validation/group")
const passport = require('passport');

//* create group
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { isValid, errors } = validateGroup(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newGroup = new Group({
      name: req.body.name,
      items: req.body.groups
    })

    newGroup.save().then(group => res.json(group));
  }
)

//* update group
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Group.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        items: req.body.items
      },
      { new: true }
    )
      .then(group => res.json(group))
      .catch(errors => {
        res.status(400).json(errors)
      });
  }
)

//* delete group

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Group.deleteOne({ _id: req.params.id })
      .then(() =>
        res.status(200).json({ message: "Group successfully deleted." })
      )
      .catch(errors => res.status(400).json({ errors }))
  }
);

//* get one group

router.get(
  '/:groupId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Group.find({ _id: req.params.groupId })
      .then(group => res.json(group[0]))
      .catch(err => res.status(400).json(err))
  }
)
//* get all group names
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Group.find()
      .then(groups => {
        res.json(groups.map(group => group.name))
      })
      .catch(err => res.status(400).json(err))
  }
)

module.exports = router;