import { forwardRef } from "react";

const InputForm = (ref, { /*commentData, */ handleRadioSelection, setCommentData, handleSubmit }) => {
    return (
        <>
        <form key='form1' ref={ref} onSubmit={handleSubmit} id='myform' className="block">
                  <div className="relative flex mt-5">
                      <p className="text-3-xs text-input-border absolute left-3 top-2">Enter Name</p>
                      <input 
                        // ref={nameRef}
                        // key='name'
                        // autoFocus={nameRef.current === document.activeElement}
                        // value={commentData.name}
                        onChange={(e) => setCommentData((prev) => ({...prev, name: e.target.value}))}
                        className="projectPage_text-input__cGTC_ focus:border-accepted w-full" 
                        required
                      />
                  </div>
                  <div className="relative mt-3">
                    <p className="text-3-xs text-input-border absolute left-3 top-2">What’s the summary of your review?</p>
                    <p className="text-3-xs text-accepted absolute right-3 top-2">Required</p>
                    <textarea 
                    key='review'
                    //   ref={reviewRef}
                      // autoFocus={reviewRef.current === document.activeElement}
                    //   value={commentData.description}
                      onChange={(e) => setCommentData((prev) => ({...prev, description: e.target.value}))}
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
                          onChange={(e)=> handleRadioSelection(e)} 
                          id="exampleRadios1" 
                        //   checked={(commentData.radioValue).toLowerCase() === 'Very Friendly'.toLowerCase()}
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
                          onChange={(e)=> handleRadioSelection(e)} 
                        //   checked={(commentData.radioValue).toLowerCase() === 'Friendly'.toLowerCase()}
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
                          onChange={(e)=> handleRadioSelection(e)} 
                        //   checked={(commentData.radioValue).toLowerCase() === 'Neither friendly nor unfriendly'.toLowerCase()}
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
                          onChange={(e)=> handleRadioSelection(e)} 
                        //   checked={(commentData.radioValue).toLowerCase() === 'Unfriendly'.toLowerCase()}
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
                          onChange={(e)=> handleRadioSelection(e)} 
                        //   checked={(commentData.radioValue).toLowerCase() === 'Very unfriendly'.toLowerCase()}
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
        </>
        );
  }
  
  const ForwardRefInputForm = forwardRef(InputForm)
export default ForwardRefInputForm