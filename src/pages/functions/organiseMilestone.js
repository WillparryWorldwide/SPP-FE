const organiseMilestone = (milestones) => {
	let levelNo = 0;

	milestones.forEach(m => {
		if (m.level > levelNo) levelNo = m.level;
	});

	return () => {
		const result = [];

		milestones.forEach((m) => {
			if (!Array.isArray(result[m.level])) result[m.level] = [];
			result[m.level].push(m);
		});

		return result;
	}
}

export default organiseMilestone;