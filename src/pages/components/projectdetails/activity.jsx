import SiteImages from "../../../Utils/images";
import useProjectMilestone from '../../../Hooks/useProjectMilestone';
import { Fragment, useEffect } from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import moment from 'moment';

const Activity = ({project, hostUrl}) => {
	const { pMilestone, fetchProjectMilestone } = useProjectMilestone();
	const options = { month: 'long', year: 'numeric', day: 'numeric' };



  useEffect(()=>{
		if(project){
			fetchProjectMilestone(project._id);
		}
	}, [project])

  

  return (
    <>
      {
        (pMilestone.length > 0) ?
        (pMilestone).map((milestone, index) =>{
          return (
              <Fragment key={index}>
                  <Timeline position="alternate" sx={{
                      [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.1,
                      },
                    }}>
                    <TimelineItem>
                      <TimelineOppositeContent color="text.secondary">
                        <p className="text-[8px] md:text-xs">{(new Date(milestone.start_date)).toLocaleDateString('en-US', options)}</p>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot sx={[(milestone.completed && {background: "#007bff"})]} />
                        <TimelineConnector sx={[(milestone.completed && {background: "#007bff"})]} />
                      </TimelineSeparator>
                      <TimelineContent>
                        <div className="bg-white rounded-lg p-2 sm:p-4 md:p-6 w-full mx-auto undefined" id="projectReviewNoReference">
                          <div>
                            <div className="projectPage_author-details-group__DMKJG">
                              <div className="projectPage_profile-and-date__tQ8jG">
                                <div className="w-11/12 sm:w-10/12">
                                  <div className="flex items-center space-x-2">
                                    <h4 className="projectPage_review-author-name__C_D_Y flex">
                                      <span className="text-black font-filson-bold hover:underline cursor-pointer">level {milestone.level}</span>
                                      
                                    </h4>
                                  </div>
                                  <div className="projectPage_update-detail__O0bzg">
                                    <p className="projectPage_posted__Sj_3G flex">
                                      <span className="mr-1">End Date:</span> {(new Date(milestone.duration)).toLocaleDateString('en-US', options)}
                                    </p>
                                  </div>
                                  <div className="projectPage_update-detail__O0bzg">
                                    <p className="projectPage_posted__Sj_3G flex text-[10px] md:text-xs">
                                      <span className="mr-1">Duration:</span>
                                      {(((moment.duration(moment(milestone.duration).diff(moment(milestone.start_date))))._data).days > 0) && <span className="mr-1">{`${((moment.duration(moment(milestone.duration).diff(moment(milestone.start_date))))._data).days} days`}</span>}
                                      {(((moment.duration(moment(milestone.duration).diff(moment(milestone.start_date))))._data).months > 0) && <span className="mr-1">{ `${((moment.duration(moment(milestone.duration).diff(moment(milestone.start_date))))._data).months} months`}</span>}
                                      {(((moment.duration(moment(milestone.duration).diff(moment(milestone.start_date))))._data).years > 0) && <span className="mr-1">{ `${((moment.duration(moment(milestone.duration).diff(moment(milestone.start_date))))._data).years} years`}</span>}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* <div className="flex justify-end items-center space-x-1">
                                <p className="projectPage_project-tag-text__eoUh1">CITIZEN</p>
                              </div> */}
                            </div>
                            <div className="mt-3">
                              <p className="projectPage_post-title__ZttU3 text-[10px] md:text-xs">Status: {milestone.status}</p>
                              <p className="mt-2 text-[10px] md:text-xs">{milestone.description}</p>
                            </div>
                            {(milestone.images > 0) && 
                                milestone.images.map((image)=>{
                                  (
                                    <div className="flex space-x-3 overflow-x-auto mt-3 client-overflow-scroll">
                                      <div className="projectPage_image-container__J5qdk w-6/12">
                                        <div className="projectPage_post-image__KWgTS">
                                          <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'absolute', inset: 0}}>
                                            <img alt="image" src={`${hostUrl}${image.path}`} decoding="async" data-nimg="fill" style={{position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'}} sizes="100vw" srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzst%2Fimage%2Fupload%2Ff_auto%2Fq_auto%2Fv1666256916%2Fprojects%2Fa179721e-b905-4fa1-a157-9f72dc9fb2c4%2Freviews%2Fl1gu8yigt909lak3f7q7.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzst%2Fimage%2Fupload%2Ff_auto%2Fq_auto%2Fv1666256916%2Fprojects%2Fa179721e-b905-4fa1-a157-9f72dc9fb2c4%2Freviews%2Fl1gu8yigt909lak3f7q7.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzst%2Fimage%2Fupload%2Ff_auto%2Fq_auto%2Fv1666256916%2Fprojects%2Fa179721e-b905-4fa1-a157-9f72dc9fb2c4%2Freviews%2Fl1gu8yigt909lak3f7q7.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzst%2Fimage%2Fupload%2Ff_auto%2Fq_auto%2Fv1666256916%2Fprojects%2Fa179721e-b905-4fa1-a157-9f72dc9fb2c4%2Freviews%2Fl1gu8yigt909lak3f7q7.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzst%2Fimage%2Fupload%2Ff_auto%2Fq_auto%2Fv1666256916%2Fprojects%2Fa179721e-b905-4fa1-a157-9f72dc9fb2c4%2Freviews%2Fl1gu8yigt909lak3f7q7.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzst%2Fimage%2Fupload%2Ff_auto%2Fq_auto%2Fv1666256916%2Fprojects%2Fa179721e-b905-4fa1-a157-9f72dc9fb2c4%2Freviews%2Fl1gu8yigt909lak3f7q7.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzst%2Fimage%2Fupload%2Ff_auto%2Fq_auto%2Fv1666256916%2Fprojects%2Fa179721e-b905-4fa1-a157-9f72dc9fb2c4%2Freviews%2Fl1gu8yigt909lak3f7q7.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzst%2Fimage%2Fupload%2Ff_auto%2Fq_auto%2Fv1666256916%2Fprojects%2Fa179721e-b905-4fa1-a157-9f72dc9fb2c4%2Freviews%2Fl1gu8yigt909lak3f7q7.jpg&w=3840&q=75 3840w" />
                                            <noscript />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                )
                                })
                            }
                          </div>
                        </div>

                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
              </Fragment>
          )
        }) :
        (
          <div className='flex h-full flex-col items-center justify-center'>
            <div className=' mx-auto'>
                <img src={SiteImages.developer} alt='window wipe' className='w-96' />
            </div>
            <p className="mt-5 medium text-center text-2xl">Sorry! We don't have any updates available</p>
            <p className="text-sm text-center text-input-border mt-3 w-10/12 lg:w-7/12 mx-auto">Unfortunately, we have not posted any update on this project. Kindly SPP and check back with us in the near future.</p>
            <div className="bg-white cursor-pointer text-primary hover:bg-primary hover:text-white transition ease-in-out duration-300 rounded-md px-4 py-1 mt-6">Back To Overview</div>
          </div>

        )
          
      }
       {/* <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            12:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            9:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Repeat</TimelineContent>
        </TimelineItem>
      </Timeline> */}
    </>
  )
}

export default Activity
