import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postApplication } from "../../actions/ApplicationActions";
import { Typography, Button, TextField } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import * as Colors from "../../Colors";
import { CssTextField, useStyles } from "../CssTextField";
const newJob = {
	company: "",
	location: "",
	position: "",
	salaryMin: 0,
	salaryMax: 0,
	url: "",
	date: "",
	note: "",
	companyLogo: "",
};

function AppPostForm({ job = newJob, currentUser, postApplication, history }) {
	const classes = useStyles();
	const [currJob, setCurrJob] = useState(job);
	const [errors, setErrors] = useState({
		company: "",
		location: "",
		position: "",
		salaryMin: "",
		salaryMax: "",
		url: "",
		date: "",
		note: "",
	});
	useEffect(() => {
		//* componentDidMount
		return () => {
			//* componentWIllUnmount
		};
	}, [errors]);
	function update(field) {
		return (e) => setCurrJob({ ...currJob, [field]: e.currentTarget.value });
	}
	const handleSubmit = () => {
		let newErrors = {
			company: "",
			location: "",
			position: "",
			salaryMin: "",
			salaryMax: "",
			url: "",
			date: "",
			note: "",
		};
		if (currJob.company === "") {
			newErrors = { ...newErrors, company: "Company cannot be empty." };
		}
		if (currJob.location === "") {
			newErrors = { ...newErrors, location: "Location cannot be empty." };
		}
		if (currJob.position === "") {
			newErrors = { ...newErrors, position: "Position cannot be empty." };
		}
		if (currJob.salaryMin === 0) {
			newErrors = { ...newErrors, salaryMin: "Minimum salary cannot be zero." };
		}
		if (currJob.salaryMax === 0) {
			newErrors = { ...newErrors, salaryMax: "Maximum salary cannot be zero." };
		}
		if (currJob.date === "") {
			newErrors = { ...newErrors, date: "Must select a date" };
		}
		if (currJob.url === "") {
			newErrors = { ...newErrors, url: "Url cannot be empty." };
		}
		setErrors(newErrors);
		console.log(currJob);
		console.log("err", newErrors);
		if (Object.values(newErrors).every((err) => err === "")) {
			setCurrJob({
				...currJob,
				user: currentUser.id,
				salaryMin: parseInt(currJob.salaryMin),
				salaryMax: parseInt(currJob.salaryMax),
				logo: currJob.companyLogo,
			});
			console.log(currJob);
			console.log("err", newErrors);
			postApplication(currJob).then(() => {
				setCurrJob(newJob);
				history.goBack();
			});
		}
	};
	const handleCancel = () => {
		history.goBack();
	};

	return job ? (
		<div className={classes.root}>
			<div className={classes.signincard} id="app-form-container">
				<div className={classes.leftPanel} id="app-form-left">
					<Typography style={{ fontSize: 18 }}>New Application</Typography>
					<div className={classes.inputs} id="app-form-left-form">
						<CssTextField
							className={classes.textField}
							required
							label="company"
							variant="outlined"
							fullWidth={true}
							value={currJob.company || ""}
							onChange={update("company")}
							inputProps={{
								className: classes.input,
							}}
						/>
						<p style={{ color: "red" }}>{errors.company}</p>

						<CssTextField
							className={classes.textField}
							required
							label="location"
							variant="outlined"
							fullWidth={true}
							value={currJob.location || ""}
							onChange={update("location")}
							inputProps={{
								className: classes.input,
							}}
						/>
						<p style={{ color: "red" }}>{errors.location}</p>
						<CssTextField
							className={classes.textField}
							required
							label="position"
							variant="outlined"
							fullWidth={true}
							value={currJob.position || ""}
							onChange={update("position")}
							inputProps={{
								className: classes.input,
							}}
						/>
						<p style={{ color: "red" }}>{errors.position}</p>
						<CssTextField
							className={classes.textField}
							required
							label="salary min"
							type="number"
							variant="outlined"
							fullWidth={true}
							value={currJob.salaryMin || 0}
							placeholder="0"
							onChange={update("salaryMin")}
							inputProps={{
								className: classes.input,
							}}
						/>
						<p style={{ color: "red" }}>{errors.salaryMin}</p>
						<CssTextField
							className={classes.textField}
							required
							label="salary max"
							variant="outlined"
							type="number"
							fullWidth={true}
							value={currJob.salaryMax || 0}
							placeholder="0"
							onChange={update("salaryMax")}
							inputProps={{
								className: classes.input,
							}}
						/>
						<p style={{ color: "red" }}>{errors.salaryMax}</p>
					</div>
				</div>
				<div className={classes.rightPanel} id="app-form-left">
					{currJob.companyLogo ? (
						<a href={job.url} target="_blank">
							<img className="app-company-logo" src={currJob.companyLogo} />
						</a>
					) : null}
					<CssTextField
						className={classes.textField}
						required
						label="url"
						variant="outlined"
						fullWidth={true}
						value={currJob.url || ""}
						onChange={update("url")}
						inputProps={{
							className: classes.input,
						}}
					/>
					<p style={{ color: "red" }}>{errors.url}</p>
					<CssTextField
						id="app-date"
						label="date"
						type="date"
						required
						value={currJob.date || ""}
						onChange={update("date")}
						className={classes.textField}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<p style={{ color: "red" }}>{errors.date}</p>

					<TextareaAutosize
						rowsMax={4}
						id="app-note"
						label="note"
						onChange={update("note")}
						aria-label="maximum height"
						placeholder="Note about this job."
						className="app-form-textarea"
					/>
					<Button onClick={handleSubmit} className={classes.submitButton}>
						SUBMIT
					</Button>
					<Button onClick={handleCancel} className={classes.submitButton}>
						CANCEL
					</Button>
				</div>
			</div>
		</div>
	) : null;
}

const mSTP = (state, ownProps) => {
	return {
		currentUser: state.session.user,
		history: ownProps.history,
		job: {
			...ownProps.location.data,
			user: state.session.user.id,
			salaryMax: 0,
			salaryMin: 0,
			logo: ownProps.location.data.hasOwnProperty("companyLogo")
				? ownProps.location.data.companyLogo
				: "",
		},
	};
};

const mDTP = (dispatch) => ({
	postApplication: (application) => dispatch(postApplication(application)),
});

export default connect(mSTP, mDTP)(AppPostForm);
