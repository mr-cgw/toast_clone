import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postApplication } from "../../actions/ApplicationActions";
import { Typography, Button, TextField } from "@material-ui/core";

import * as Colors from "../../Colors";
import { CssTextField, useStyles } from "../CssTextField";

function AppPostForm({ job = {}, currentUser }) {
	const classes = useStyles();
	const [currJob, setCurrJob] = useState(job);
	//* const [company, setCompany] = useState("");
	// const [companyLogo, setCompanyLogo] = useState("");
	//* const [location, setLocation] = useState("");
	//* const [position, setPosition] = useState("");
	// const [link, setLink] = useState("");
	//* const [salaryMin, setSalaryMin] = useState(0);
	//* const [salaryMax, setSalaryMax] = useState(0);
	//* const [date, setDate] = useState("");
	// const [note, setNote] = useState("");
	// const [resumeUrl, setResumeUrl] = useState("");
	useEffect(() => {
		//* componentDidMount
		return () => {
			//* componentWIllUnmount
		};
	}, []);
	function update(field) {
		return (e) => setCurrJob({ ...currJob, [field]: e.currentTarget.value });
	}

	console.log(currJob);
	return job ? (
		<div className={classes.root}>
			<div className={classes.signincard}>
				<div className={classes.leftPanel}>
					<Typography style={{ fontSize: 18 }}>New Application</Typography>
					<div className={classes.inputs}>
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
						<CssTextField
							className={classes.textField}
							required
							label="salary min"
							variant="outlined"
							fullWidth={true}
							value={currJob.salaryMin || ""}
							placeholder="0"
							onChange={update("salaryMin")}
							inputProps={{
								className: classes.input,
							}}
						/>
						<CssTextField
							className={classes.textField}
							required
							label="salary max"
							variant="outlined"
							fullWidth={true}
							value={currJob.salaryMax || ""}
							placeholder="0"
							onChange={update("salaryMax")}
							inputProps={{
								className: classes.input,
							}}
						/>
						<CssTextField
							id="app-date"
							label="date"
							type="date"
							defaultValue="2021-01-18"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
						/>
						<CssTextField
							className={classes.textField}
							type="textarea"
							rows="5"
							label="note"
							variant="outlined"
							fullWidth={true}
							value={currJob.note || ""}
							placeholder="Note to future self"
							onChange={update("note")}
							inputProps={{
								className: classes.input,
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	) : null;
}

const mSTP = (state, ownProps) => ({
	currentUser: state.session.user,
});

const mDTP = (dispatch) => ({
	postApplication: (application) => dispatch(postApplication(application)),
});

export default connect(mSTP, mDTP)(AppPostForm);
