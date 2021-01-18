const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const JobsDB = require("../../models/Jobs");
const axios = require('axios')


router.post('/',
  (req, res) => {
    const jobs = {};
    const jobMapper = (arr, side) => {
      const res = {};
      arr.forEach(job => {
        const currId = job.id
        res[currId] = {
          id: currId,
          company: job.company,
          position: job.title,
          location: job.location,
          createdAt: job.created_at,
          companyLogo: job.company_logo
        }
      })
      jobs[side] = res
    }
    axios.get("https://jobs.github.com/positions.json?description=full+stack&full_time=true")
      .then(res => {
        jobMapper(res.data, "fullstack")
      })
      .then(
        setTimeout(() => {
          axios.get("https://jobs.github.com/positions.json?description=front+end&full_time=true")
            .then(res => {
              jobMapper(res.data, "frontend")
            })
        }, 1000)
      )
      .then(
        setTimeout(() => {
          axios.get("https://jobs.github.com/positions.json?description=back+end&full_time=true",)
            .then(res => {
              jobMapper(res.data, "backend")
            })
        }, 1500)
      )
      .then(() => {
        setTimeout(() => {
          const newJobsDB = new JobsDB({
            fullstack: jobs["fullstack"],
            frontend: jobs["frontend"],
            backend: jobs["backend"]
          })
          newJobsDB.save().then(jobsDB => res.json(jobsDB))

        }, 2000)
      })


  }
)
//!universal jobsDB
//* 6004f5e394d8c762eeeeb6f4
router.get("/",
  (req, res) => {
    JobsDB.find({ _id: "6004f5e394d8c762eeeeb6f4" })
      .then(db => res.json(db))
      .catch(err => res.status(400).json(err))
  }
)

router.patch("/",
  (req, res) => {
    const jobs = {};
    const jobMapper = (arr, side) => {
      const res = {};
      arr.forEach(job => {
        const currId = job.id
        res[currId] = {
          id: currId,
          company: job.company,
          position: job.title,
          location: job.location,
          createdAt: job.created_at,
          companyLogo: job.company_logo
        }
      })
      jobs[side] = res
    }
    axios.get("https://jobs.github.com/positions.json?description=full+stack&full_time=true")
      .then(res => {
        jobMapper(res.data, "fullstack")
      })
      .then(
        setTimeout(() => {
          axios.get("https://jobs.github.com/positions.json?description=front+end&full_time=true")
            .then(res => {
              jobMapper(res.data, "frontend")
            })
        }, 500)
      )
      .then(
        setTimeout(() => {
          axios.get("https://jobs.github.com/positions.json?description=back+end&full_time=true",)
            .then(res => {
              jobMapper(res.data, "backend")
            })
        }, 1000)
      )
      .then(() => {
        setTimeout(() => {
          JobsDB.findOneAndUpdate(
            { _id: "6004f5e394d8c762eeeeb6f4" },
            {
              fullstack: jobs["fullstack"],
              frontend: jobs["frontend"],
              backend: jobs["backend"]
            },
            { new: true }
          )
            .then(db => res.json(db))
            .catch(errors => {
              res.status(400).json({ errors: errors })
            })

        }, 1500)
      })
  }
)
module.exports = router;
