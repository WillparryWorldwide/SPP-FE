import { useEffect, useState, useCallback } from "react";
import useGetAllProject from "../../Hooks/usegetallproject";
import useUpdateProject from "../../Hooks/useupdateproject";
import { Link } from "react-router-dom"
import GeneralTopNavigation from "../../components/generalpublic/genaraltopnavbar";
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import GeneralSideBar from "../../components/generalpublic/generalsidebar";
import AgricultureIcon from '@mui/icons-material/Agriculture';
import TrainIcon from '@mui/icons-material/Train';
import GroupsIcon from '@mui/icons-material/Groups';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import PowerIcon from '@mui/icons-material/Power';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SchoolIcon from '@mui/icons-material/School';
import Tooltip from '@mui/material/Tooltip';

import "./generalpublic.css";
import Comment from "../../components/generalpublic/comment";
import ViewComment from "../../components/generalpublic/viewcomment";
const GeneralPub = () => {
  const [viewComment, setViewComment] = useState(false);
  const [viewListComment, setViewListComment] = useState(false);
  const [comments /*setComment */] = useState(null);
  const [nameOfProject, setNameOfProject] = useState("");
  const [idOfProject, setIdOfProject] = useState("");
  const [itemOfProject, setItemOfProject] = useState("");
  const { fetchProject, data, hostUrl /* loading */ } = useGetAllProject(); /* NOTE: use it or remove loading -->*/
  const { upDAteProject, data: updateData /* loading: upDateLoading */ } = useUpdateProject(); /* NOTE: use it or remove updateLoading -->*/
  const [filter,  setFilter] = useState(""); /* NOTE: use it or remove selFilter -->*/
  const [commentData, setCommentData] = useState({
    description: "",
    radioValue: "",
    name: "",
  });
  // const { site_name, } = useAppContext()
  document.body.classList.remove(
    "hold-transition",
    "login-page",
    "register-page"
  );
  document.body.classList.add(
    "hold-transition",
    "sidebar-mini",
    "layout-fixed",
    "layout-navbar-fixed",
    "layout-footer-fixed"
  );

  const displayComment = (name, id, item, e) => {
    e.stopPropagation();
    e.preventDefault();
    setIdOfProject(id);
    setItemOfProject(item);
    setNameOfProject(name);
    setViewComment(true);
  };
  // const displayListComment = (item) => {
  //     console.log(item.review.comments)
  //     setComment(item.review.comments)
  //     setViewListComment(true)
  // }
  const submitComment = async (e) => {
    e.preventDefault();
    console.log(idOfProject);
    await upDAteProject(idOfProject, commentData, itemOfProject);
    await getProject();
    setNameOfProject("");
    setCommentData({
      description: "",
      radioValue: "",
      name: "",
    });

    setItemOfProject("");
    setNameOfProject("");
    setViewComment(false);
  };
  const handleRadioSelection = (event) => {
    setNameOfProject("");
    setCommentData((prev) => ({ ...prev, radioValue: event.target.value }));
  };

  const getProject = useCallback(async () => {
    console.log("i ran");
    fetchProject(filter);
  }, [fetchProject, filter, data]);

  
  console.log(filter);

  useEffect(() => {
    const fetch = async () => {
      await getProject();
      console.log("Rendering...");
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateData]);

  return (
    <>
      <div className="wrapper">
        {/* Header Section  */}
        <GeneralTopNavigation />
        {/* Sidebar Section  */}
        <GeneralSideBar 
          setFilter={setFilter}
          filter={filter}
        />
        <div className="content-wrapper  public-body">
          <>
            {/* <ContentHeader title="Profile" /> */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="mb-2 mt-2 filter-button text-xs overflow-y-scroll-x client-overflow-scroll d-md-none">
                      <Tooltip title="Agriculture">
                        <button onClick={() => setFilter('agriculture')} type="button" className={`text-inherit sidebarbutton ${filter === 'agriculture' && 'sidebarbutton-active'}`}>
                          <AgricultureIcon sx={{
                          width: 20,                        
                          }}/><p className='pl-1 md-hidden ' >Agriculture</p>
                        </button>
                      </Tooltip>
                      <Tooltip title="Major Roads">
                      <button onClick={() => setFilter('major roads')}  type="button"  className={`text-inherit sidebarbutton ${filter === 'major roads' && 'sidebarbutton-active'}`}>
                      <AddRoadIcon sx={{
                        width: 20,
                        }} /><p className='pl-1 md-hidden  '>Major Roads</p>
                      </button>
                      </Tooltip>
                      <Tooltip title="Railway">
                      <button onClick={() => setFilter('railway')}  type="button"  className={`text-inherit sidebarbutton ${filter === 'railway' && 'sidebarbutton-active'}`}>
                        <TrainIcon sx={{
                        width: 20,                        
                        }} /><p className='pl-1 md-hidden  '>Railway</p>
                      </button>
                      </Tooltip>
                      <Tooltip title="Most Discussed">
                      <button onClick={() => setFilter('most discussed')}  type="button"  className={`text-inherit sidebarbutton ${filter === 'most discussed' && 'sidebarbutton-active'}`}>
                        <GroupsIcon sx={{
                        width: 20,                        
                        }} /><p className='pl-1 md-hidden  '>Most Discussed</p>
                      </button>
                      </Tooltip>
                      <Tooltip title="Bridges">
                      <button onClick={() => setFilter('bridges')}  type="button"  className={`text-inherit sidebarbutton ${filter === 'bridges' && 'sidebarbutton-active'}`}>
                        <AgricultureIcon sx={{
                        width: 20,                        
                        }} /><p className='pl-1 md-hidden  '>Bridges</p>
                      </button>
                      </Tooltip>
                      <Tooltip title="Power">
                      <button onClick={() => setFilter('power')}  type="button"  className={`text-inherit sidebarbutton ${filter === 'power' && 'sidebarbutton-active'}`}>
                        <PowerIcon sx={{
                        width: 20,                        
                        }} /><p className='pl-1 md-hidden  '>Power</p>
                      </button>
                      </Tooltip>
                      <Tooltip title="Renewable Energy">
                      <button onClick={() => setFilter('renewable energy')}  type="button"  className={`text-inherit sidebarbutton ${filter === 'renewable energy' && 'sidebarbutton-active'}`}>
                        <ElectricBoltIcon sx={{
                        width: 20,                        
                        }} /><p className='pl-1 md-hidden  '>Renewable Energy</p>
                      </button>
                      </Tooltip>
                      <Tooltip title="Health">
                      <button onClick={() => setFilter('health')}  type="button"  className={`text-inherit sidebarbutton ${filter === 'health' && 'sidebarbutton-active'}`}>
                      <HealthAndSafetyIcon sx={{
                        width: 20,                        
                        }} /><p className='pl-1 md-hidden  '>Health</p>
                      </button>
                      </Tooltip>
                      <Tooltip title="Schools">
                      <button onClick={() => setFilter('schools')}  type="button"  className={`text-inherit sidebarbutton ${filter === 'schools' && 'sidebarbutton-active'}`}>
                      <SchoolIcon sx={{
                        width: 20,                        
                        }} /><p className='pl-1 md-hidden  '>Schools</p>
                      </button>
                      </Tooltip>
                    </div>
              </div>
            </div>
            <section className="content user-main">
              <div className="container-fluid h-100">
                <div className="row h-100">
                  {/* Main section  */}
                  <div
                    className={`${
                      viewComment || viewListComment
                        ? " col-lg-9 "
                        : " col-lg-12 "
                    }  h-100 overflow-y-scroll client-overflow-scroll`}
                  >
                    <div className="card transparent">
                      <div className="card-header p-2">
                        <ul className="nav nav-pills">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#project"
                              data-toggle="tab"
                            >
                              All Project
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#timeline"
                              data-toggle="tab"
                            >
                              Completed Project
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#settings"
                              data-toggle="tab"
                            >
                              Uncompleted Project
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        {/* <div className="tab-content"> */}
                        {/* All projects tab  */}
                        {/* <div className="active tab-pane" id="project"> */}
                        <div className=" body-item">
                          {data !== null &&
                            data.map((item, index) => {
                              return (
                                <div key={item._id} className='col-12 col-sm-6 col-md-4 col-xl-3'>
                                  <Link to={`/${item._id}`}
                                    className="card w-100 card-t-radius overflow-hidden"
                                  
                                  >
                                      {item.images.length > 0 && (
                                        
                                        <div className="w-100 card-image">
                                            <img
                                              src={hostUrl + item.images[0].path}
                                              className="card-img-top"
                                              alt="..."
                                            />
                                            <div className="stage">
                                              <p className="mb-0">Ungoing</p>
                                            </div>
                                        </div>
                                      )}
                                    <div className="card-body text-dark pl-2 pr-2">
                                      <div className="w-100 title-div">
                                        <p className="word-break card-title mb-1 color-black font-semibold line-clamp-2">
                                          {item.name}
                                        </p>
                                      </div>
                                      <div className="flex w-100">
                                        <div className="fill-available p-0 ">
                                          <p className="mb-1 text-xs line-clamp">Total Project Cost</p>
                                          <p className=" color-black font-mediumbold text-xlg mb-2 line-clamp">₦{item.funding_amount}</p>
                                        </div>
                                        <div className="col-4 p-0 ">
                                          <p className="mb-1 text-xs line-clamp">State</p>
                                          <p className=" color-black font-mediumbold text-xlg mb-2 line-clamp">{item.state}</p>
                                        </div>
                                      </div>
                                        
                                    <IconButton aria-label="comment" className="comment-button" sx={{
                                        background: '#3878F4',
                                      }}
                                      onClick={(e) =>
                                        displayComment(
                                          item.name,
                                          item._id,
                                          item,
                                          e
                                        )
                                      }>
                                      <CommentIcon sx={{
                                        width: 12,
                                        color: '#fff',
                                      }}/>
                                      <p className="mb-0 ml-1 text-white text-xxs">Comment</p>
                                    </IconButton>
                                    </div>
                                  </Link>
                                </div>
                              );
                            })}
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                  {/* Comment section  */}
                  {(viewComment || viewListComment) && (
                    <div className="col-lg-3">
                      {/* View Comment  */}
                      {viewListComment && (
                        <div className="d-none d-lg-flex">
                          <ViewComment
                            setViewListComment={setViewListComment}
                            comments={comments}
                          />
                        </div>
                      )}
                      {/* Send Comment  */}
                      {viewComment && (
                        <div className="d-none d-lg-flex">
                          <Comment
                            nameOfProject={nameOfProject}
                            submitComment={submitComment}
                            commentData={commentData}
                            setCommentData={setCommentData}
                            handleRadioSelection={handleRadioSelection}
                            setComment={setViewComment}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </section>
          </>
        </div>
      </div>

      {viewComment && (
        <div className="col-12 d-lg-none position-absolute bottom-modal">
          <Comment
            nameOfProject={nameOfProject}
            submitComment={submitComment}
            commentData={commentData}
            setCommentData={setCommentData}
            handleRadioSelection={handleRadioSelection}
          />
        </div>
      )}
    </>
  );
};
export default GeneralPub;
