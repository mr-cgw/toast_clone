import React, { useState, useEffect } from "react";
import PieChar from "./pieChar";

function AllCharts({ currentUser, applications, fetchApplications }) {
	useEffect(() => {
		if (currentUser) {
			fetchApplications(currentUser.id);
		}
	}, []);
	console.log(applications);
	return <PieChar applications={applications} />;
}

export default AllCharts;
