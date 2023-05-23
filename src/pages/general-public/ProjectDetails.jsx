import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import folder from '../../assets/images/folder.svg'
// import CircularProgressbar from '../../assets/images/completed.svg'


import '../../assets/css/d35beeb833360611.css'
import '../../assets/css/4c4867adecdc883a.css'
import '../../assets/css/3f1327110777dc38.css'
import '../../assets/css/tailwind.css'

const ProjectDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const [project, setProject] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchProject = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/project/only/${id}`);
            console.log(data)
            setProject(data.data.result)
            setIsLoading(true);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProject()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="appLayout_dash-contents__f3VlW">
            <div className="leftSideBar_sidebar__85S4S flex-shrink-0 z-20 w-32 bg-white py-8 justify-between">

            </div>
            <div className="appLayout_mainContents__Fvfpc overflow-y-auto flex flex-col w-full pb-16 lg:pb-0 ">
                <div className="projectPage_project-container__R1YM1 " id="project-cont">
                    <div className="projectPage_header-section___pCZK ">
                        <div className="hidden lg:block mr-5 cursor-pointer ">
                            <Link onClick={() => navigate(-1)}>
                                <img alt="back" loading="lazy" width="20" height="16" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="https://eyemark.ng/_next/static/media/arrowBack.7d6d5eda.svg" />
                            </Link>
                        </div>
                        <div className="lg:hidden mr-5 cursor-pointer h-4">
                            <Link onClick={() => navigate(-1)}>
                                <img alt="back" loading="lazy" width="14" height="24" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="https://eyemark.ng/_next/static/media/backCaret.d64bb240.svg" />
                            </Link>
                        </div>
                        <p className="projectPage_header-text__Dzdkw">{project?.name}</p>
                    </div>
                    <div className="sm:hidden px-6">
                        <div className="mt-12 flex flex-col items-center">
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
                            <div className="mt-4 w-4/12"><button data-testid="project-btn_eyemark"
                                className="undefined font-bold text-center w-full border py-2 text-xs sm:text-sm rounded-md tracking-wider flex-shrink-0 bg-accepted-light border-accepted text-accepted hover:bg-accepted hover:text-accepted-light transition ease-in-out duration-300">
                                <p className="medium text-base">Eyemark</p>
                            </button></div>
                        </div>
                    </div>
                    <div className="sticky top-12 z-30 bg-grey-white">
                        <div className="bg-grey-white w-full bg-white sticky top-0 z-30 pt-2">
                            <div className="nav_search-navbar__B_TGY">
                                <div className="nav_nav__fL7mg nav_search-nav-active__00eqb cursor-pointer"
                                    data-testid="project-tab_Overview">
                                    <p>Overview</p>
                                    <div className="nav_active-bar__FGbx_"></div>
                                </div>
                                <div className="nav_nav__fL7mg false cursor-pointer" data-testid="project-tab_Activity">
                                    <p>Activity</p>
                                    <div className="nav_active-bar__FGbx_"></div>
                                </div>
                                <div className="nav_nav__fL7mg false cursor-pointer" data-testid="project-tab_Media">
                                    <p>Media</p>
                                    <div className="nav_active-bar__FGbx_"></div>
                                </div>
                                <div className="nav_nav__fL7mg false cursor-pointer" data-testid="project-tab_Reviews">
                                    <p>Reviews</p>
                                    <div className="nav_active-bar__FGbx_"></div>
                                </div>
                            </div>
                            <div className="nav_nav-base__wypU6"></div>
                        </div>
                    </div>
                    <div className="mt-12  h-full">
                        <div className="flex-shrink-0">
                            <p className="px-6 pb-10 hidden sm:block projectPage_project-name__LJ03Z" data-testid="project-name">{project.name}</p>
                            <div className="flex items-start flex-wrap lg:flex-nowrap justify-between mb-7 px-6 mt-5">
                                <div className="w-full lg:w-9/12">
                                    <div className="">
                                        <p className="text-2-xs text-light-grey-2"></p>
                                        <div className="mt-1">
                                            <p className="text-2-xs uppercase text-input-border">SUPERVISING MDA</p>
                                            <div className="flex items-center space-x-2 flex-shrink-0 mt-1 cursor-pointer">
                                                <div className="h-6 w-6 sm:h-10 sm:w-10 rounded-full object-cover">
                                                    <img alt="Nigerian Railway Mordernization (Idu to Kaduna)" width="100" height="100" decoding="async" data-nimg="1" className="h-6 w-6 sm:h-10 sm:w-10 rounded-full object-cover" style={{ color: 'transparent', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', backgroundImage: 'url()' }} src="" />
                                                </div>
                                                <p className="text-sm lg:text-lg medium" data-testid="project-display_name">FEDERAL MINISTRY OF TRANSPORT </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-7/12 lg:w-3/12 flex-shrink-0 mt-4 lg:mt-0">
                                    <div className="projectPage_project-location-card__f7FjG">
                                        <div className="flex items-center text-xs space-x-1">
                                            <p className="text-dark-grey medium">
                                                <span className=""><span className="capitalize">FCT-ABUJA</span><span className="text-light-grey-2"> &amp; 1 more</span></span></p>
                                        </div>
                                        <div className="flex items-center justify-between mt-4 text-2-xs">
                                            <p className="uppercase medium text-input-border">STATES</p>
                                            <div className="relative group-seeall" data-testid="project-geo_location_see_all"><button
                                                className="flex items-center space-x-1 cursor-pointer focus:outline-none">
                                                <p className="text-dark-grey medium mr-1">See All</p><span
                                                    style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0', padding: '0', position: 'relative', maxWidth: '100%' }}>
                                                    <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0', padding: '0', maxWidth: '100%' }}>
                                                        <img style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0', padding: '0' }} alt="" aria-hidden="true" src="" />
                                                    </span>
                                                    <img alt="" src="" className="" style={{ position: 'absolute', top: '0', left: '0', bottom: '0', right: '0', boxSizing: 'border-box', padding: '0', border: 'none', margin: 'auto', display: 'block', width: '0', height: '0', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} /></span>
                                            </button>
                                                <div className="w-40 lg:w-52 p-4 right-2 top-5 absolute rounded-lg bg-white z-40 hidden"
                                                    style={{ boxShadow: '0px 9px 45px rgba(61, 132, 172, 0.2)' }}>
                                                    <p className="text-sm medium text-accepted mb-5">All States</p>
                                                    <div className="flex items-center space-x-3">
                                                        <p className="text-accepted medium">•</p>
                                                        <p className="medium text-dark-grey text-sm mb-1">Municipal Area Council, FCT-ABUJA</p>
                                                    </div>
                                                    <div className="flex items-center space-x-3">
                                                        <p className="text-accepted medium">•</p>
                                                        <p className="medium text-dark-grey text-sm mb-1">Igabi, KADUNA</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:hidden px-6 mb-5">
                                <div className="flex items-center space-x-3 py-5 border-b border-grey-stroke">
                                    <p className="text-accepted">•</p>
                                    <div>
                                        <p className="text-xs uppercase">1001100</p>
                                        <p className="text-input-border text-2-xs uppercase">project CODE</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 py-5 border-b border-grey-stroke">
                                    <p className="text-accepted">•</p>
                                    <div>
                                        <p className="text-xs">CONSTRUCTION</p>
                                        <p className="text-input-border text-2-xs uppercase">SECTOR</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 py-5">
                                    <p className="text-accepted">•</p>
                                    <div>
                                        <p className="text-xs">-</p>
                                        <p className="text-input-border text-2-xs uppercase">DEPARTMENT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="projectPage_project-info-cards__3SQz7">
                                <div className="flex flex-col lg:flex-row w-full lg:space-x-2">
                                    <div className="bg-white rounded-lg p-4 mb-2 flex justify-between items-center w-full lg:w-6/12">
                                        <div className="flex flex-col justify-between w-5/12">
                                            <div>
                                                <p className="text-2xl capitalize medium">Completed</p>
                                                <p className="projectPage_project-info-card-title__qwoK4">PROJECT STATUS</p>
                                            </div>
                                        </div>
                                        <div className="w-6/12 flex flex-col justify-center">
                                            <div data-test-id="CircularProgressbarWithChildren">
                                                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                                <svg class="CircularProgressbar " viewBox="0 0 100 100" data-test-id="CircularProgressbar"><path class="CircularProgressbar-trail" d="
      M 50,50
      m 0,-47
      a 47,47 0 1 1 0,94
      a 47,47 0 1 1 0,-94
    " stroke-width="6" fill-opacity="0" style={{ strokeDasharray: '295.31px, 295.31px; stroke-dashoffset: 0px' }}></path><path class="CircularProgressbar-path" d="
      M 50,50
      m 0,-47
      a 47,47 0 1 1 0,94
      a 47,47 0 1 1 0,-94
    " stroke-width="6" fill-opacity="0" style={{ stroke: 'rgb(97, 182, 132)', strokeDasharray: '295.31px, 295.31px; stroke-dashoffset: 88.5929px', }}></path></svg>
                                                    <div data-test-id="CircularProgressbarWithChildren__children"
                                                        style={{ position: 'absolute', width: '100%', height: '100%', marginTop: '-100%',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                        <p className="" data-testid="project-percentage_completed">50%</p>
                                                        <p className="text-2-xs text-input-border uppercase">completed</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 mb-2">
                                        <div className="flex space-x-2 h-1/2">
                                            <div className="w-6/12">
                                                <div className="projectPage_project-info-card___Ix8v h-full"><span
                                                    style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden',width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0',padding: '0', position: 'relative', maxWidth: '100%' }}></span>
                                                    <div>
                                                        <p className="projectPage_project-info-card-content__YOwSw uppercase"
                                                            data-testid="project-total_project_cost">₦291.71B</p>
                                                        <p className="projectPage_project-info-card-title__qwoK4">TOTAL PROJECT COST</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-6/12">
                                                <div className="projectPage_project-info-card___Ix8v h-full"><span
                                                    style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden',width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0',padding: '0', position: 'relative', maxWidth: '100%' }}></span>
                                                    <div>
                                                        <p className="projectPage_project-info-card-content__YOwSw" data-testid="project-timeline">5
                                                            Years</p>
                                                        <p className="projectPage_project-info-card-title__qwoK4">PROJECT TIMELINE</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex space-x-2 h-1/2 pt-2">
                                            <div className="w-6/12">
                                                <div className="projectPage_project-info-card___Ix8v h-full"><span
                                                    style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden',width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0',padding: '0', position: 'relative', maxWidth: '100%' }}></span>
                                                    <div>
                                                        <p className="projectPage_project-info-card-content__YOwSw " data-testid="project-start_date">
                                                            1st Oct 2009</p>
                                                        <p className="projectPage_project-info-card-title__qwoK4">START DATE</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-6/12">
                                                <div className="projectPage_project-info-card___Ix8v h-full"><span
                                                    style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden',width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0',padding: '0', position: 'relative', maxWidth: '100%' }}></span>
                                                    <div>
                                                        <p className="projectPage_project-info-card-content__YOwSw " data-testid="project-end_date">30th
                                                            Dec 2014</p>
                                                        <p className="projectPage_project-info-card-title__qwoK4">END DATE</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row w-full lg:space-x-2">
                                    <div className="flex mb-2 w-full lg:w-6/12 space-x-2">
                                        <div className="w-6/12">
                                            <div className="projectPage_project-info-card___Ix8v relative">
                                                <div className="mb-6 flex justify-between items-center w-full"><span
                                                    style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden',width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0',padding: '0', position: 'relative', maxWidth: '100%' }}></span>
                                                    <div className="relative group-appro">
                                                        <div className="" data-testid="project-appropriated_more_info"><button className=""><span
                                                            style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden',width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0',padding: '0', position: 'relative', maxWidth: '100%' }}></span></button>
                                                        </div>
                                                        <div
                                                            className="w-52 lg:w-72 p-4 z-10 false absolute rounded-lg bg-white -left-20 sm:left-0 hidden"
                                                            style={{ boxShadow: '0px 9px 45px rgba(61, 132, 172, 0.2)' }}
                                                            data-testid="project-appropriated_more_info_dropdown">
                                                            <div className="lg:hidden absolute top-4 right-4 h-4"><span
                                                                style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden',width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0',padding: '0', position: 'relative', maxWidth: '100%' }}></span>
                                                            </div>
                                                            <p className="text-sm medium text-accepted ">Appropriation Breakdown</p>
                                                            <p className="text-xs text-light-grey-2 mt-2 medium">Total</p>
                                                            <p className="mt-0.5 pb-2 border-b border-light-grey-4 medium">_</p>
                                                            <div className="mt-2"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="projectPage_project-info-card-content__YOwSw uppercase"
                                                        data-testid="project-total_appropriated">_</p>
                                                    <p className="projectPage_project-info-card-title__qwoK4">TOTAL APPROPRIATED</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-6/12">
                                            <div className="projectPage_project-info-card___Ix8v"><span
                                                style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden',width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0',padding: '0', position: 'relative', maxWidth: '100%' }}></span>
                                                <div>
                                                    <p className="projectPage_project-info-card-content__YOwSw uppercase"
                                                        data-testid="project-amount_spent_so_far">_</p>
                                                    <p className="projectPage_project-info-card-title__qwoK4">AMOUNT SPENT SO FAR</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex mb-2 w-full lg:w-6/12 space-x-2">
                                        <div className="w-6/12">
                                            <div className="projectPage_project-info-card___Ix8v"><span
                                                style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden',width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0',padding: '0', position: 'relative', maxWidth: '100%' }}></span>
                                                <div>
                                                    <p className="projectPage_project-info-card-content__YOwSw"
                                                        data-testid="project-shildren_project">None</p>
                                                    <p className="projectPage_project-info-card-title__qwoK4">CHILDREN PROJECT</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-6/12">
                                            <div className="projectPage_project-info-card___Ix8v"><span
                                                style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden',width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0',padding: '0', position: 'relative', maxWidth: '100%' }}></span>
                                                <div>
                                                    <p className="projectPage_project-info-card-content__YOwSw" data-testid="project-page_views">
                                                        31.38K</p>
                                                    <p className="projectPage_project-info-card-title__qwoK4">PAGE VIEWS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 text-dark-grey">
                                <div className="projectPage_project-overview-card__6pxG4">
                                    <h2 className="medium">Project Description</h2>
                                    <p className="text-input-border text-sm">Below explains what this project is all about.</p>
                                    <div className="mt-6 text-sm"><span className="" data-testid="project-description">The Idu – Kaduna railway is
                                        part of the Nigerian Railway Modernization Project, consisting of the realization of a new
                                        standard gauge railway line from Lagos to Kano with connections to Abuja, via Minna and Kaduna, a
                                        total length of 1315 km. Estimated project cost is US$876 million</span></div>
                                </div>
                            </div>
                            <div className="mt-4 px-6">
                                <div className="projectPage_project-overview-card__6pxG4">
                                    <p className="medium">Contractors</p>
                                    <p className="text-input-border text-sm">Below are the contractors working on this project.</p>
                                    <div className="mt-6 flex items-center flex-wrap space-x-5 overflow-x-auto"
                                        data-testid="project-contractors">
                                        <div className="bg-grey-white space-x-3 px-3 py-2 flex items-center rounded"><img
                                            alt="contractor-avatar" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                                            className="h-8"
                                            style={{ color: 'transparent', backgroundSize: 'cover', backgroundPosition: '50% 50%',backgroundRepeat: 'no-repeat', backgroundImage: 'url()' }} />
                                            <p className="text-sm medium">Ccecc Nigeria Limited</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 px-6">
                                <div className="projectPage_project-overview-card__6pxG4">
                                    <p className="medium">Sustainable Development Goal<span
                                        className="text-2-xs text-light-grey-5">(0)</span></p>
                                    <p className="text-input-border text-sm">Below are the Sustainable Development Goals this project targets.
                                    </p>
                                    <div className="mt-3 flex flex-wrap items-center" data-testid="project-sustainable_development_goals">
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="mt-4 px-6">
                                    <div className="projectPage_project-overview-card__6pxG4">
                                        <p className="medium mb-4">Project Location <span className="text-2-xs text-light-grey-5">2</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="px-6">
                                    <div className="projectPage_project-overview-card__6pxG4">
                                        <div className="flex justify-between">
                                            <p className="medium">Project Reviews </p>
                                            <div className="projectPage_see-all__FjyO9" data-testid="project-review_view_all">view all</div>
                                        </div>
                                        <div className="mt-8 flex flex-col lg:flex-row lg:items-center">
                                            <div className="lg:w-5/12">
                                                <p className="uppercase medium text-input-border text-xs">general sentiment</p>
                                                <div className="mt-2 flex items-center space-x-2"><img alt="sentiment" loading="lazy" width="24"
                                                    height="24" decoding="async" data-nimg="1" className="h-6" style={{ color: 'transparent' }}
                                                    src="https://eyemark.ng/_next/static/media/positive.c5fdf05d.svg" />
                                                    <p className="text-xl medium capitalize">positive</p>
                                                </div>
                                                <p className="mt-2 text-2-xs text-light-grey-2">4 Reviews</p>
                                            </div>
                                            <div className="w-full lg:w-7/12 flex flex-col space-y-2 mt-3 lg:mt-0">
                                                <div className="flex items-center space-x-2 w-full text-xs">
                                                    <div className="flex items-center w-7/12 sm:w-4/12 justify-between">
                                                        <p className="capitalize">positive</p><img alt="sentiment" loading="lazy" width="15" height="15"
                                                            decoding="async" data-nimg="1" className="h-4" style={{ color: 'transparent' }}
                                                            src="https://eyemark.ng/_next/static/media/positive.c5fdf05d.svg" />
                                                    </div>
                                                    <div className="relative rounded-full bg-input-border h-1 w-7/12">
                                                        <div className="projectPage_filler__lgYZx" style={{ width: '100%' }}></div>
                                                    </div>
                                                    <p className="text-light-grey-2 text-right">4</p>
                                                </div>
                                                <div className="flex items-center space-x-2 w-full text-xs">
                                                    <div className="flex items-center w-7/12 sm:w-4/12 justify-between">
                                                        <p className="capitalize">neutral</p><img alt="sentiment" loading="lazy" width="15" height="15"
                                                            decoding="async" data-nimg="1" className="h-4" style={{ color: 'transparent' }}
                                                            src="https://eyemark.ng/_next/static/media/neutral.fdf19325.svg" />
                                                    </div>
                                                    <div className="relative rounded-full bg-input-border h-1 w-7/12">
                                                        <div className="projectPage_filler__lgYZx" style={{ width: '0%' }}></div>
                                                    </div>
                                                    <p className="text-light-grey-2 text-right">0</p>
                                                </div>
                                                <div className="flex items-center space-x-2 w-full text-xs">
                                                    <div className="flex items-center w-7/12 sm:w-4/12 justify-between">
                                                        <p className="capitalize">negative</p><img alt="sentiment" loading="lazy" width="15" height="15"
                                                            decoding="async" data-nimg="1" className="h-4" style={{ color: 'transparent' }}
                                                            src="https://eyemark.ng/_next/static/media/negative.844d95f8.svg" />
                                                    </div>
                                                    <div className="relative rounded-full bg-input-border h-1 w-7/12">
                                                        <div className="projectPage_filler__lgYZx" style={{ width: '0%' }}></div>
                                                    </div>
                                                    <p className="text-light-grey-2 text-right">0</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-8 w-full">
                                <div className="flex justify-between px-6">
                                    <p className="medium">Project Updates <span
                                        className="text-2-xs text-light-grey-5">(0)</span></p>
                                    <div className="projectPage_see-all__FjyO9" data-testid="project-see_all">see all</div>
                                </div>
                                <div className="projectPage_project-update-list__ChjQW"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {!isLoading ? <div className="loader_setting-loader__1qM63"><div className="loader_setting-load-line__zN4EY"></div></div> : ''}
        </div>
    )
}

export default ProjectDetails