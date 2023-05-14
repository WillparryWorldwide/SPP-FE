import React from 'react'

const Comment = ({nameOfProject, submitComment, commentData, setCommentData, handleRadioSelection, setComment, noCancel}) => {
 console.log(noCancel)
  return (
    <>
        <div className="card card-primary card-outline p-3 w-100">
            {noCancel === null && <div onClick={() => setComment(false)} className='text-primary ml-auto'>X</div>}
            <h5 className="timeline-header">Comment on <a href="#x">{nameOfProject}</a> Project</h5>
            <form onSubmit={submitComment}>
                <div className="input-group input-group-sm w-100 mb-3">
                    <textarea 
                        className="form-control form-control-navbar w-100" 
                        placeholder="comment" 
                        value={commentData.description}
                        onChange={(e)=> setCommentData((prev) => ({...prev, description: e.target.value}))}
                        rows={3} 
                        required
                    >
                    </textarea>
                
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="radioSelection" 
                        onChange={(e)=> handleRadioSelection(e)} 
                        id="exampleRadios1" 
                        value="Very Friendly" 
                        required 
                    />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        Very Friendly.
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="radioSelection" 
                        onChange={(e)=> handleRadioSelection(e)} 
                        id="exampleRadios2" 
                        value="Friendly" 
                        required
                    />
                    <label className="form-check-label" htmlFor="exampleRadios2">
                        Friendly.
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="radioSelection" 
                        onChange={(e)=> handleRadioSelection(e)} 
                        id="exampleRadios3" 
                        value="Neither friendly nor unfriendly" 
                        required
                    />
                    <label className="form-check-label" htmlFor="exampleRadios3">
                        Neither friendly nor unfriendly.
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="radioSelection" 
                        onChange={(e)=> handleRadioSelection(e)} 
                        id="exampleRadios3" 
                        value="Unfriendly" 
                        required
                    />
                    <label className="form-check-label" htmlFor="exampleRadios3">
                        Unfriendly
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="radioSelection" 
                        onChange={(e)=> handleRadioSelection(e)} 
                        id="exampleRadios3" 
                        value="Very unfriendly" 
                        required
                    />
                    <label className="form-check-label" htmlFor="exampleRadios3">
                        Very unfriendly
                    </label>
                </div>
                {commentData.radioValue !== '' && <div className="input-group input-group-sm w-100 mb-3 mt-3">
                    <input 
                        className="form-control form-control-navbar w-100" 
                        type="text" 
                        placeholder="Enter Name" 
                        value={commentData.name}
                        onChange={(e)=> setCommentData((prev) => ({...prev, name: e.target.value}))}
                        required
                    />
                    
                </div>}
                
                <div className="w-100 d-flex mt-4">
                    <button type='submit' className="btn btn-primary btn-flat btn-sm ml-auto" >Send</button>
                </div>

            </form>
        </div>
    </>
  )
}

export default Comment
