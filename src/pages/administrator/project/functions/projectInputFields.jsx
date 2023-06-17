import { Grid, MenuItem, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

export default function ProjectInputField({ inputDetails, handelInputChange, contractors, sectors, mdas, tagsExample, local_goverment_arr, setImageText, imageText }) {
	return <Grid container spacing={1}>
		<Grid item xs={12}>
			<TextField
				fullWidth
				type="text"
				name={inputDetails.name.name}
				value={inputDetails.name.value}
				onChange={handelInputChange}
				label="Title" />
		</Grid>
		<Grid item xs={12} md={6} lg={4}>
			<DemoContainer sx={{ width: "100%" }} components={['DatePicker']}>
				<DatePicker
					className="w-full"
					label="Duration"
					value={inputDetails.duration.value}
					onChange={(e) => handelInputChange(e, inputDetails.duration.name)} />
			</DemoContainer>
		</Grid>
		<Grid item xs={12} md={6} lg={4}>
			<DemoContainer components={['DatePicker']}>
				<DatePicker
					className="w-full"
					label="Date Awarded"
					value={inputDetails.date_awarded.value}
					onChange={(e) => handelInputChange(e, inputDetails.date_awarded.name)} />
			</DemoContainer>
		</Grid>
		<Grid item xs={12} md={6} lg={4}>
			<DemoContainer components={["TextField"]}>
				<TextField
					fullWidth type="number"
					name={inputDetails.funding_amount.name}
					value={inputDetails.funding_amount.value}
					onChange={handelInputChange}
					label="Funding" />
			</DemoContainer>
		</Grid>
		<Grid item xs={12} md={6} lg={4}>
			<TextField
				inputProps={{
					readOnly: true
				}}
				fullWidth
				type="text"
				name={inputDetails.state.name}
				value={inputDetails.state.value}
				onChange={handelInputChange}
				label="State" />
		</Grid>
		<Grid item xs={12} md={6} lg={4}>
			<TextField
				fullWidth
				select
				defaultValue={local_goverment_arr[0]}
				name={inputDetails.local_goverment.name}
				value={inputDetails.local_goverment.value}
				onChange={handelInputChange}
				label="LGA">
				{local_goverment_arr.map((option) => (
					<MenuItem key={option} className="uppercase" value={option}>
						{option}
					</MenuItem>
				))}
			</TextField>
		</Grid>
		<Grid item xs={12} md={6} lg={4}>
			<TextField
				fullWidth
				type="text"
				name={inputDetails.location.name}
				value={inputDetails.location.value}
				onChange={handelInputChange}
				label="Location" />
		</Grid>
		<Grid item xs={12} md={6} lg={4}>
			<TextField
				fullWidth
				select
				defaultValue=""
				name={inputDetails.spp_code.name}
				value={inputDetails.spp_code.value}
				onChange={handelInputChange}
				label="Contractor">
				{contractors.map((option) => (
					<MenuItem key={option._id} value={option._id}>
						{option.SPP_name}
					</MenuItem>
				))}
			</TextField>
		</Grid>
		<Grid item xs={12} md={6} lg={4}>
			<TextField
				fullWidth
				select
				defaultValue=""
				name={inputDetails.sector_code.name}
				value={inputDetails.sector_code.value}
				onChange={handelInputChange}
				label="Sector">
				{sectors.map((option) => (
					<MenuItem key={option._id} value={option._id}>
						{option.name}
					</MenuItem>
				))}
			</TextField>
		</Grid>
		<Grid item xs={12} md={6} lg={4}>
			<TextField
				fullWidth
				select
				defaultValue=""
				name={inputDetails.mda_code.name}
				value={inputDetails.mda_code.value}
				onChange={handelInputChange}
				label="MDA">
				{mdas.map((option) => (
					<MenuItem key={option._id} value={option._id}>
						{option.name}
					</MenuItem>
				))}
			</TextField>
		</Grid>
		<Grid item xs={12} md={6} lg={4}>
			<TextField
				fullWidth
				select
				defaultValue={tagsExample[0]}
				name={inputDetails.category.name}
				value={inputDetails.category.value}
				onChange={handelInputChange}
				label="Category">
				{tagsExample.map((option) => (
					<MenuItem key={option} className="uppercase" value={option}>
						{option}
					</MenuItem>
				))}
			</TextField>
		</Grid>
		<Grid item xs={12} md={6} lg={4}>
			<TextField
				inputProps={{
					readOnly: true
				}}
				fullWidth
				type="number"
				name={inputDetails.grand_total.name}
				value={inputDetails.grand_total.value}
				onChange={handelInputChange}
				label="Total"
				placeholder="Total" />
		</Grid>
		<Grid item xs={12} md={6} lg={4}>
			<input
				accept="image/*"
				className=""
				style={{ display: 'none' }}
				id="file"
				multiple
				type="file"
				onChange={(e) => setImageText(e.target.files.length)} />
			<label htmlFor="file">
				<button
					data-testid="login-button"
					type="button"
					onClick={(e) => e.currentTarget.parentElement.click()}
					className="w-full rounded-full bg-primary text-white py-3 text-center">
					<p className="medium">
						{imageText ? `Uploading ${imageText} Image(s)` : "Upload Images"}
					</p>
				</button>
			</label>
		</Grid>
		<Grid item xs={12}>
			<TextField
				fullWidth
				multiline
				type="text"
				name={inputDetails.description.name}
				value={inputDetails.description.value}
				onChange={handelInputChange}
				label="Description"
				placeholder="Type here..." />
		</Grid>
	</Grid>;
}
