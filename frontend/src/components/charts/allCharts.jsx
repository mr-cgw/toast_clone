import React, { useState, useEffect } from "react";
import PieChar from "./pieChar";

function AllCharts({ currentUser, applications, fetchApplications }) {
	useEffect(() => {
		if (currentUser) {
			fetchApplications(currentUser.id);
		}
	}, []);
	return <PieChar applications={applications} />;
}

export default AllCharts;
