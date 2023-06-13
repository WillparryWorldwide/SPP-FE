// Import Dependency
import { useEffect, useRef, useState } from "react";
import useUpdateProject from "../../../Hooks/useupdateproject";
import CircularProgress from '@mui/material/CircularProgress';


// Import Components




const CommentModal = () => {
	const [commentOption, setCommentOption] = useState(false)
	const { upDAteProject, loading, data } = useUpdateProject();
	const [commentData, setCommentData] = useState({
		description: "",
		radioValue: "",
		name: "",
	});
	const nameRef = useRef()
	const reviewRef = useRef(null)
  const cursorPositionRef = useRef(0);

	const CommentPopUp = ({ project }) => {
		// handle cancel delete function
		const HandleDeleteCancel = () => {
			setCommentOption(false)
			console.log('i ran')
		}

		const handleRadioSelection = (event) => {
			setCommentData((prev) => ({ ...prev, radioValue: event.target.value }));
		};

		const handleSubmit = async (e) => {
			e.preventDefault()
			await upDAteProject(project._id, commentData);
		}

		useEffect(() => {
			if (data) {
				setCommentData({
					description: "",
					radioValue: "",
					name: "",
				});
				setCommentOption(false)
			}
		}, [data]);

    useEffect(() => {
		if(reviewRef.current === document.activeElement){
		reviewRef.current.setSelectionRange(cursorPositionRef.current, cursorPositionRef.current);
		}
	});

  const handleReviewChange = (event) => {
    // Store the cursor position before updating the value
    const { selectionStart, selectionEnd } = event.target;
    cursorPositionRef.current = selectionStart;

    // setValue(event.target.value);
    setCommentData((prev) => ({ ...prev, description: event.target.value }))
  };

		return (
			<div onClick={HandleDeleteCancel} className='fixed p-2 md:p-5 top-0 left-0 w-full h-full bg-black/[.3] flex justify-center items-center z-[1000] '>
				<div
					className='bg-white w-full md:w-5/6 lg:w-3/6 rounded-lg max-h-[90%] overflow-scroll client-overflow-scroll'
					onClick={(e) => e.stopPropagation()}
				>
					<div className='text-center p-4'>
						<div className="flex justify-between items-center">
							<div className="flex items-center space-x-3">
								<h4 className="text-xs medium truncate">{project.name}</h4>
							</div>
							<p onClick={() => setCommentOption(false)} className='text-lg text-black'>X</p>
						</div>
						<form key='form1' onSubmit={handleSubmit} id='myform' className="block">
							<div className="relative flex mt-5">
								<p className="text-3-xs text-input-border absolute left-3 top-2">Enter Name</p>
								<input
									ref={nameRef}
									key='name'
									autoFocus={nameRef.current === document.activeElement}
									value={commentData.name}
									onChange={(e) => setCommentData((prev) => ({ ...prev, name: e.target.value }))}
									className="projectPage_text-input__cGTC_ focus:border-accepted w-full"
									required
								/>
							</div>
							<div className="relative mt-3">
								<p className="text-3-xs text-input-border absolute left-3 top-2">What’s the summary of your review?</p>
								<p className="text-3-xs text-accepted absolute right-3 top-2">Required</p>
								<textarea
									key='review'
									ref={reviewRef}
									autoFocus={reviewRef.current === document.activeElement}
									value={commentData.description}
									onChange={(e) => handleReviewChange(e)}
									className="w-full h-32 projectPage_text-area__carzK focus:border-accepted"
									required
								/>
							</div>
							<div>
								<div className="flex justify-start items-center form-check">
									<input
										className="mr-2"
										type="radio"
										name="radioSelection"
										onChange={(e) => handleRadioSelection(e)}
										id="exampleRadios1"
										checked={(commentData.radioValue).toLowerCase() === 'Very Friendly'.toLowerCase()}
										value="Very Friendly"
										required
									/>
									<label className="text-xs" htmlFor="exampleRadios1">
										Very Friendly.
									</label>
								</div>
								<div className="flex justify-start items-center form-check">
									<input
										className="mr-2"
										type="radio"
										name="radioSelection"
										onChange={(e) => handleRadioSelection(e)}
										checked={(commentData.radioValue).toLowerCase() === 'Friendly'.toLowerCase()}
										id="exampleRadios2"
										value="Friendly"
										required
									/>
									<label className="text-xs" htmlFor="exampleRadios2">
										Friendly.
									</label>
								</div>
								<div className="flex justify-start items-center form-check">
									<input
										className="mr-2"
										type="radio"
										name="radioSelection"
										onChange={(e) => handleRadioSelection(e)}
										checked={(commentData.radioValue).toLowerCase() === 'Neither friendly nor unfriendly'.toLowerCase()}
										id="exampleRadios3"
										value="Neither friendly nor unfriendly"
										required
									/>
									<label className="text-xs" htmlFor="exampleRadios3">
										Neither friendly nor unfriendly.
									</label>
								</div>
								<div className="flex justify-start items-center form-check">
									<input
										className="mr-2"
										type="radio"
										name="radioSelection"
										onChange={(e) => handleRadioSelection(e)}
										checked={(commentData.radioValue).toLowerCase() === 'Unfriendly'.toLowerCase()}
										id="exampleRadios4"
										value="Unfriendly"
										required
									/>
									<label className="text-xs" htmlFor="exampleRadios4">
										Unfriendly
									</label>
								</div>
								<div className="flex justify-start items-center form-check">
									<input
										className="mr-2"
										type="radio"
										name="radioSelection"
										onChange={(e) => handleRadioSelection(e)}
										checked={(commentData.radioValue).toLowerCase() === 'Very unfriendly'.toLowerCase()}
										id="exampleRadios5"
										value="Very unfriendly"
										required
									/>
									<label className="text-xs" htmlFor="exampleRadios5">
										Very unfriendly
									</label>
								</div>
							</div>
						</form>

					</div>
					{/* { confirmButtonText && 
                <div className='flex justify-between items-center'>
                  {cancelButton && <button onClick={HandleDeleteCancel} className="py-2 px-3 md:px-4 bg-transparent border-1 border-primary dark:border-hovericon text-primary dark:text-hovericon rounded-full font-semibold flex items-center w-fit text-xs"> 
                      {cancelButton}
                      <div className='w-3 h-3 stroke-primary dark:stroke-hovericon ml-2'>
                        <Icon cancel='cancel' />
                      </div>
                  </button>}
                  <button onClick={() => confirmButtonTextAction()} className="py-2 px-3 md:px-4 bg-primary text-white  border-1 border-primary rounded-full font-semibold flex items-center ml-auto w-fit text-xs"> 
                   {confirmButtonText} 
                  </button>
                </div>
            } */}
					<div className="px-8 py-3 text-sm flex space-x-3 justify-end bg-primary">
						<button onClick={() => HandleDeleteCancel()} className="py-2 px-5 hover:bg-sky-700 rounded-full text-white medium">
							<p>Discard</p>
						</button>
						<button form="myform" className="py-2 px-5 rounded-full medium text-white bg-features-brown cursor-not-allowed">
							{loading ? <CircularProgress size={10} sx={{ color: 'white' }} /> : <p>Post</p>}
						</button>
					</div>

				</div>

			</div>
		)
	}
	return { commentOption, setCommentOption, CommentPopUp, data }
}



export default CommentModal