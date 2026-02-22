import React from "react";

const CourseCard = ({ title = "Course Title", description = "Short course description" }) => {
	return (
		<article className="border rounded-lg p-4 shadow-sm">
			<h3 className="text-lg font-semibold">{title}</h3>
			<p className="mt-2 text-sm text-gray-600">{description}</p>
			<div className="mt-4">
				<button className="text-blue-600 font-medium">View course</button>
			</div>
		</article>
	);
};

export default CourseCard;
