import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import folder from '../../assets/images/folder.svg'


import '../../assets/css/d35beeb833360611.css'
import '../../assets/css/4c4867adecdc883a.css'
import '../../assets/css/3f1327110777dc38.css'
import '../../assets/css/tailwind.css'
import DetailNav from './components/projectdetails/detailnav';
import Tab from './components/projectdetails/tab';
import BottomNav from './components/discovery/bottomnav';
import useGetProject from '../../Hooks/useGetProject';


import './projectdetails.css'
import OverView from './components/projectdetails/overview';
import Activity from './components/projectdetails/activity';
import Media from './components/projectdetails/media';
import Review from './components/projectdetails/review';


const ProjectDetails = () => {
    const { id } = useParams();
    // const [project, setProject] = useState([])
    const { fetchProject, data: project, loading: isLoading, hostUrl } = useGetProject()
    // const [isLoading, setIsLoading] = useState(false)
    const [tab, setTab] = useState(1)



  

    // const fetchProject = async () => {
    //     try {
    //         const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/project/only/${id}`);
    //         console.log(data)
    //         setProject(data.data.result)
    //         setIsLoading(true);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        fetchProject(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="appLayout_dash-contents__f3VlW">
            <div className="leftSideBar_sidebar__85S4S flex-shrink-0 z-20 w-32 bg-white py-8 justify-between">

            </div>
            <div className="appLayout_mainContents__Fvfpc overflow-y-auto flex flex-col w-full pb-16 lg:pb-0 ">
                <div className="projectPage_project-container__R1YM1 " id="project-cont">
                    <DetailNav 
                        project={project}
                    />
                    <div className="sm:hidden px-6">
                        <div className="mt-20 flex flex-col items-center">
                            <div className="w-full flex justify-between">
                                <img alt="folder" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={folder} />
                                <p className="medium w-9/12">{project?.name}</p>
                            </div>
                            <div className="mt-6 w-full flex justify-between medium">
                                <div>
                                    <p className="text-sm text-dark-grey">25</p>
                                    <p className="mt-1 text-3-xs text-input-border uppercase">Verified</p>
                                </div>
                                <div>
                                    <p className="text-sm text-dark-grey">{project?.review?.comments?.length}</p>
                                    <p className="mt-1 text-3-xs text-input-border uppercase">REVIEWS</p>
                                </div>
                                <div>
                                    <p className="text-sm text-dark-grey capitalize">positive</p>
                                    <p className="mt-1 text-3-xs text-input-border uppercase">AVG. SENTIMENT</p>
                                </div>
                            </div>
                            <p className="text-sub-text text-2-xs mt-5 text-center">{project?.description}</p>
                            <div className="mt-4 w-4/12"><button data-testid="project-btn_SPP"
                                className="undefined font-bold text-center w-full border py-2 text-xs sm:text-sm rounded-md tracking-wider flex-shrink-0 bg-accepted-light border-accepted text-accepted hover:bg-accepted hover:text-accepted-light transition ease-in-out duration-300">
                                <p className="medium text-base">SPPA</p>
                            </button></div>
                        </div>
                    </div>
                    <Tab 
                        tab={tab}
                        setTab={setTab}
                    />
                    {tab === 1 &&
                        <div className="mt-10 sm:mt-20 h-full">
                            <OverView 
                                project={project}
                            />
                        </div>
                    }
                    {tab === 2 &&
                        <div className="mt-10 sm:mt-20 p-10 h-full">
                            <Activity
                                project={project}
                            />
                        </div>
                    }
                    {tab === 3 &&
                        <div className="mt-10 sm:mt-20 h-full">
                            <Media
                                project={project}
                                hostUrl={hostUrl}
                            />
                        </div>
                    }
                    {tab === 4 &&
                        <div className="mt-10 sm:mt-20 h-full">
                            <Review
                                project={project}
                            />
                        </div>
                    }

                </div>
            </div>
            <BottomNav />
            {!isLoading ? <div className="loader_setting-loader__1qM63"><div className="loader_setting-load-line__zN4EY"></div></div> : ''}
        </div>
    )
}

export default ProjectDetails