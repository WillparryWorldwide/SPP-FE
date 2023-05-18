import React from 'react'

const ViewComment = ({nameOfProject, setViewListComment, comments, noCancel}) => {
  return (
    <>
      <div className="card card-primary card-outline p-3 w-100">
            {noCancel === null && <div onClick={() => setViewListComment(false)} className='text-primary ml-auto'>X</div>}
            <p className="timeline-header">List of Comments on <a href="#x">{nameOfProject}</a> Project</p>
            {
              comments !== null && comments.map((item,index)=>{
                return <>
                  
                  <div className="tab-pane w-100 " >
                      <div className="timeline timeline-inverse mb-0">
                          <div className='w-100'>
                              
                              <div className="timeline-item m-0">
                                  <p className="timeline-header text-primary">{item.c_name}</p>

                                  <div className="timeline-body">
                                
                                      <p className='mb-0'>{item.c_description}</p>
                                      
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                  </div>
                
                </>
              })
            }
            
        </div>
    </>
  )
}

export default ViewComment
