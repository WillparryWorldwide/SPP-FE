
import CircularProgress from '@mui/material/CircularProgress';

const Comment = ({ nameOfProject, submitComment, commentData, setCommentData, handleRadioSelection, setComment, noCancel, upDateLoading }) => {
	console.log(noCancel)
	return (
		<>
			<div className="bg-white border-t-2 rounded-lg border-primary p-3 w-80">
				{noCancel === null && <div className='text-primary flex '><p onClick={() => noCancel()} className='ml-auto px-2'>X</p></div>}
				<h5 className="timeline-header">Comment on <a href="#x">{nameOfProject}</a> Project</h5>
				<form onSubmit={submitComment} className='w-full text-sm'>
					<div className="input-group input-group-sm w-full mb-3">
						<textarea
							className="border p-2 outline-none w-full rounded-md"
							placeholder="comment"
							value={commentData.description}
							onChange={(e) => setCommentData((prev) => ({ ...prev, description: e.target.value }))}
							rows={3}
							required
						>
						</textarea>

					</div>
					<div className="form-check">
						<input
							className="mr-2"
							type="radio"
							name="radioSelection"
							onChange={(e) => handleRadioSelection(e)}
							id="exampleRadios1"
							value="Not Good"
							required
						/>
						<label className="form-check-label" htmlFor="exampleRadios1">
							Not Good.
						</label>
					</div>
					<div className="form-check">
						<input
							className="mr-2"
							type="radio"
							name="radioSelection"
							onChange={(e) => handleRadioSelection(e)}
							id="exampleRadios2"
							value="Neutral"
							required
						/>
						<label className="form-check-label" htmlFor="exampleRadios2">
							Neutral.
						</label>
					</div>
					<div className="form-check">
						<input
							className="mr-2"
							type="radio"
							name="radioSelection"
							onChange={(e) => handleRadioSelection(e)}
							id="exampleRadios3"
							value="Good"
							required
						/>
						<label className="form-check-label" htmlFor="exampleRadios3">
							Good.
						</label>
					</div>
					<div className="form-check">
						<input
							className="mr-2"
							type="radio"
							name="radioSelection"
							onChange={(e) => handleRadioSelection(e)}
							id="exampleRadios4"
							value="Very Good"
							required
						/>
						<label className="form-check-label" htmlFor="exampleRadios4">
							Very Good
						</label>
					</div>
					<div className="form-check">
						<input
							className="mr-2"
							type="radio"
							name="radioSelection"
							onChange={(e) => handleRadioSelection(e)}
							id="exampleRadios5"
							value="Excellent"
							required
						/>
						<label className="form-check-label" htmlFor="exampleRadios5">
							Excellent
						</label>
					</div>
					{commentData.radioValue !== '' && <div className="input-group input-group-sm w-100 mb-3 mt-3">
						<input
							className="border p-2 outline-none w-full rounded-md"
							type="text"
							placeholder="Enter Name"
							value={commentData.name}
							onChange={(e) => setCommentData((prev) => ({ ...prev, name: e.target.value }))}
							required
						/>

					</div>}

					<div className="w-100 d-flex mt-4">
						<button type='submit' className="border-2 rounded-md text-primary border-primary w-24 py-1 hover:text-white hover:bg-primary" >{upDateLoading ? <CircularProgress size={18} sx={{ height: 2, width: 2 }} /> : 'Send'}</button>
					</div>

				</form>
			</div>
		</>
	)
}

export default Comment
