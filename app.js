const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/keys').mongoURI;
const passport = require('passport');
const path = require('path');

const jobsDBModel = require('./models/Jobs');
const jobDB = require('./routes/api/jobs');
const users = require('./routes/api/users');
const applications = require('./routes/api/applications');

//* connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log(err));
//* setup passport
app.use(passport.initialize());
require('./config/passport')(passport);

const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//* set up api routes
app.use('/api/users', users);
app.use('/api/applications', applications);
app.use('/api/jobs', jobDB)

app.listen(port, () => console.log(`server is running on port ${port}`));

//update job db every 10 mins
const cron = require('node-cron');
var cors = require('cors');
const axios = require('axios');

app.use(cors())

cron.schedule('*/20 * * * * *', () => {
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
        jobsDBModel.findOneAndUpdate(
          { _id: "6004f5e394d8c762eeeeb6f4" },
          {
            fullstack: jobs["fullstack"],
            frontend: jobs["frontend"],
            backend: jobs["backend"]
          },
          { new: true }
        )
      }, 1500)
    })
})
//* all fullstack
// https://jobs.github.com/positions.json?description=full+stack&full_time=true
//* all frontend
// https://jobs.github.com/positions.json?description=front+end&full_time=true
//* all backend
// https://jobs.github.com/positions.json?description=back+end&full_time=true

