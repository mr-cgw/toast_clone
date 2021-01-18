const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Application = require('../../models/Application');
const validateApplication = require('../../validation/application');

//* create application
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { isValid, errors } = validateApplication(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newApplication = new Application({
      user: req.body.user, //*userId
      company: req.body.company,
      position: req.body.position,
      location: req.body.location,
      link: req.body.link,
      salaryMin: req.body.salaryMin,
      salaryMax: req.body.salaryMax,
      note: req.body.note,
      date: req.body.date,
    });

    newApplication.save().then((application) => res.json(application));
  }
);

//* update application

router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Application.findOneAndUpdate(
      { _id: req.params.id },
      {
        company: req.body.company,
        position: req.body.position,
        location: req.body.location,
        link: req.body.link,
        salaryMin: req.body.salaryMin,
        salaryMax: req.body.salaryMax,
        note: req.body.note,
        date: req.body.date,
      },
      { new: true }
    )
      .then((application) => res.json(application))
      .catch((errors) => {
        res.status(400).json({
          errors: errors,
        });
      });
  }
);

//* delete application

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Application.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          message: 'Application deleted...',
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error });
      });
  }
);

//* get all applications under one user

router.get(
  '/user/:userId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Application.find({ user: req.params.userId })
      .then((applications) => res.json(applications))
      .catch((err) => res.status(400).json(err));
  }
);

router.get(
  '/:applicationId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Application.find({ _id: req.params.applicationId })
      .then((application) => res.json(application))
      .catch((err) => res.status(400).json(err));
  }
);

module.exports = router;
