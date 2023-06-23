
export default function canMilestoneBeCompleted(organiseMilestone) {
	const allStones = [];
	organiseMilestone.forEach((m, i, arr) => {
		m.forEach(r => {
			allStones.push(r);
		});

		if (i >= arr.length - 1) {

			for (let i = 0; i < allStones.length; i++) {
				const stone = allStones[i];

				// helps me add the next milestone id to the current one
				if (allStones[i + 1]) allStones[i].next = allStones[i + 1]._id;
				
				// if the milestone is the first and not completed showbutton is true
				if(i === 0 && !stone.completed) stone.showButton = true;

				// if current milestone is completed, set the next milestone to showButton to true
				if (stone.completed) {
					if (allStones[i + 1]) allStones[i + 1].showButton = allStones[i + 1] ? true : false;
				}
			}
		}
	});
}