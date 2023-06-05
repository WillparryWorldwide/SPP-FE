import { randomColor } from "../../../Helper/randomcolor";


const Review = ({ project, setCommentOption }) => {
  const {colors} = randomColor()
  console.log(project?.review?.comments)
  return (
    <>
    {project?.review?.comments.slice(0).reverse().map((comment)=>{
        return (
          <div key={comment._id} className="mb-6 px-[5%]">
            
            <div
              className="bg-white rounded-lg p-4 sm:p-6 w-full mx-auto undefined"
              id="projectReviewNoReference"
            >
              <div>
                <div className="projectPage_author-details-group__DMKJG">
                  <div className="projectPage_profile-and-date__tQ8jG">
                    <div className="projectPage_display-picture__7uc1q justify-center items-center flex flex-shrink-0" style={{background: colors(`${comment.c_name}`)}}>
                      <p className="text-white font-3xl">{comment.c_name.match(/\b(\w)/g).join('').toUpperCase().substring(0, 1)}</p>
                    </div>
                    <div className="w-11/12 sm:w-10/12">
                      <div className="flex items-center space-x-2">
                        <h4 className="projectPage_review-author-name__C_D_Y flex">
                          <span className="text-black font-filson-bold hover:underline cursor-pointer">
                            {comment.c_name}
                          </span>
                          <span className="text-pearl-light-grey ml-[6px] flex">
                            <span className="mr-[3px] text-2-xs">is positive</span>
                            {/* Positive image goes here  */}
                          </span>
                        </h4>
                      </div>
                      <div className="projectPage_update-detail__O0bzg">
                        <p className="projectPage_posted__Sj_3G">7 months ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end items-center space-x-1">
                    <p className="projectPage_project-tag-text__eoUh1">CITIZEN</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="mt-2 text-xs">{comment.c_description}</p>
                </div>
                <div className="flex space-x-3 overflow-x-auto mt-3 " />
              </div>
              <div onClick={() => setCommentOption(true)}>
                <div className="flex justify-between items-center text-xs mt-7">
                  <div className="flex w-full justify-center items-center space-x-1 cursor-pointer">
                    <p className="projectPage_users-comments__pgW6w hover:underline cursor-pointer">
                      Comment on Project
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    })}
      
    </>
  );
};

export default Review;