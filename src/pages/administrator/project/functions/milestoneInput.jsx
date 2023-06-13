import { Grid, MenuItem, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export default function MilestoneInput({milestoneText, milestone, handelMilestoneChange}) {
	return <div className="m-0 p-0">
		<div className="my-2">
			<TextField
				fullWidth
				select
				defaultValue={milestoneText.preliminaries_sum}
				name="typeOf"
				value={milestone.typeOf}
				onChange={(e) => handelMilestoneChange(e, milestone.id)}
				label="Milestone Type">
				{Object.keys(milestoneText).map((key) => (
					<MenuItem key={key} value={key}>
						{milestoneText[key]}
					</MenuItem>
				))}
			</TextField>
		</div>
		<div className={`flex`}>
			<Grid container spacing={1}>
				<Grid item xs={12} md={6} lg={3}>
					<TextField
						fullWidth type="number"
						name="quantity"
						value={milestone.quantity}
						onChange={(e) => handelMilestoneChange(e, milestone.id)}
						label="Quantity"
						placeholder="Enter quantity" />
				</Grid>
				<Grid item xs={12} md={6} lg={3}>
					<TextField
						fullWidth type="number"
						name="rate"
						value={milestone.rate}
						onChange={(e) => handelMilestoneChange(e, milestone.id)}
						label="Rate"
						placeholder="Enter rate" />
				</Grid>
				<Grid item xs={12} md={6} lg={3}>
					<TextField
						fullWidth type="number"
						name="amount"
						value={milestone.amount}
						onChange={(e) => handelMilestoneChange(e, milestone.id)}
						label="Amount"
						placeholder="Enter amount" />
				</Grid>
				<Grid item xs={12} md={6} lg={3}>
					<DatePicker
						className="w-full"
						label="Duration"
						value={milestone.duration}
						onChange={(e) => handelMilestoneChange(e, milestone.id, "duration")} />
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						multiline
						type="text"
						name="description"
						value={milestone.description}
						onChange={(e) => handelMilestoneChange(e, milestone.id)}
						label="Description"
						placeholder="Type here..." />
				</Grid>
			</Grid>
		</div>
	</div>;
}