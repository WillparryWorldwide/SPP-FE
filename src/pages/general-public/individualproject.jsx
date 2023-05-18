import moment from "moment";
import Badge from '@mui/material/Badge';
import { useParams } from "react-router-dom";
import useGetProject from "../../Hooks/useGetProject";
import useUpdateProject from "../../Hooks/useupdateproject";
import { Fragment, useEffect, useState, useCallback } from "react";
import GeneralTopNavigation from "../../components/generalpublic/genaraltopnavbar";

import "./generalpublic.css";
import Comment from "../../components/generalpublic/comment";
import ViewComment from "../../components/generalpublic/viewcomment";
import { Doughnut } from "../../components/chart";

const PublicIndividualProject = () => {
  const { id } = useParams();
  const [viewComment, setViewComment] = useState(false);
  const [viewListComment, setViewListComment] = useState(false);
  const [comments /*setComment */] = useState(null);
  const [nameOfProject, setNameOfProject] = useState("");
  const [idOfProject, setIdOfProject] = useState("");
  const [itemOfProject, setItemOfProject] = useState("");
  const { fetchProject, data, hostUrl /* loading */ } =
    useGetProject(); /* NOTE: use it or remove loading -->*/
  const { upDAteProject, data: updateData /* loading: upDateLoading */ } =
    useUpdateProject(); /* NOTE: use it or remove updateLoading -->*/
  const [commentData, setCommentData] = useState({
    description: "",
    radioValue: "",
    name: "",
  });

  const chartData = {
    labels: [],
    datasets: [
      {
        label: 'Founded',
        data: data.funding_amount,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

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

  const displayComment = (name, id, item) => {
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
    fetchProject(id);
    console.log(data);
  }, [fetchProject, data]);

  useEffect(() => {
    const fetch = async () => {
      await getProject();
      console.log("Rendering...");
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data._id]);


  return (
    <>
      <div className="wrapper">
        {/* Header Section  */}
        <GeneralTopNavigation />
        {/* Sidebar Section  */}
        {/* <Generalsidebar /> */}
        <div className="content-wrapper ml-0 pt-5">
          <>
            {/* <ContentHeader title="Profile" /> */}

            <section className="content user-main">
              <div className="container-fluid h-100">
                <div className="row h-100">
                  {/* Main section  */}
                  <div className={`col-lg-9 h-100 overflow-y-scroll client-overflow-scroll`}>
                    <div className="card transparent">
                      <div className="card-body">
                        <div className=" body-item">

                          <div className="w-100 d-flex justify-content-center align-items-center card-image">
                            <div className="p-2">
                              <Badge color={data.open? "primary": "error"} badgeContent={data.open? "Ongoing": "Closed"}>
                                {
                                  data.images?.length && <img
                                    src={hostUrl + data?.images[0]?.path}
                                    className="card-img-top"
                                    style={{ borderRadius: "2em" }}
                                    alt="..."
                                  />
                                }
                              </Badge>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-6">
                                <p className="m-0 span"><span className="text-dark">Started</span> {moment(data.date_awarded).calendar()}</p>
                                <h5 className="mb-2 text-dark">{data.name}</h5>
                                <p className="m-0 span"><strong className="text-dark">Category</strong> {data.category}</p>
                              </div>
                              <div className="col-6">
                                <p className="m-0 span"><strong className="text-dark">Total cost</strong> NGN {data.grand_total}</p>
                                <p className="m-0 span"><strong className="text-dark">Code</strong> {data.code}</p>
                                {/* add options here */}
                              </div>
                            </div>
                            <hr />
                            <p className="card-text">{data.description}</p>

                            <hr />
                            <div className="row">
                              <div className="col-4">
                                <Doughnut data={chartData} />
                              </div>
                              <div className="col-8">
                                <h6 className="text-dark">Address</h6>
                              <p className="m-0 span"><strong className="text-dark">Location</strong> {data.location}</p>
                              <p className="m-0 span"><strong className="text-dark">LGA</strong> {data.local_goverment}</p>
                              <p className="m-0 span"><strong className="text-dark">State</strong> {data.state}</p>
                              </div>
                            </div>

                            <hr />
                            <div className="row">
                              {/* Sector */}
                              {
                                data.spp_code?._id && <div className="col-12 col-md-6 mt-3">
                                  <h6 className="text-dark">Sector</h6>
                                  <p className="span text-dark m-0"><strong className="text-dark">RC Number</strong> {data.spp_code.SPP_rc_number}</p>
                                  <p className="span text-dark m-0"><strong className="text-dark">Name</strong> {data.spp_code.SPP_name}</p>
                                  <p className="span text-dark m-0"><strong className="text-dark">Role</strong> {data.spp_code.role}</p>
                                  <p className="span text-dark m-0"><strong className="text-dark">Phone</strong> {data.spp_code.phone}</p>
                                </div>
                              }
                              {/* Sector */}
                              {
                                data.sector_code?._id && <div className="col-12 col-md-6 mt-3">
                                  <h6 className="text-dark">Sector</h6>
                                  <p className="span text-dark m-0"><strong className="text-dark">Code</strong> {data.sector_code.code}</p>
                                  <p className="span text-dark m-0"><strong className="text-dark">Name</strong> {data.sector_code.name}</p>
                                </div>
                              }
                              {/* MDA */}
                              {
                                data.mda_code?._id && <div className="col-12 col-md-6 mt-3">
                                  <h6 className="text-dark">MDA</h6>
                                  <p className="span text-dark m-0"><strong className="text-dark">Code</strong> {data.mda_code.code}</p>
                                  <p className="span text-dark m-0"><strong className="text-dark">Name</strong> {data.mda_code.name}</p>
                                </div>
                              }
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="d-none d-lg-flex">
                      <ViewComment
                        setViewListComment={setViewListComment}
                        comments={comments}
                        noCancel={'nocancel'}
                      />
                    </div>
                    <div className="d-none d-lg-flex">
                      <Comment
                        nameOfProject={nameOfProject}
                        submitComment={submitComment}
                        commentData={commentData}
                        setCommentData={setCommentData}
                        handleRadioSelection={handleRadioSelection}
                        setComment={setViewComment}
                        noCancel={'nocancel'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        </div>
      </div>

      <div className="col-12 d-lg-none position-absolute bottom-modal">
        <Comment
          nameOfProject={nameOfProject}
          submitComment={submitComment}
          commentData={commentData}
          setCommentData={setCommentData}
          handleRadioSelection={handleRadioSelection}
          noCancel={'nocancel'}
        />
      </div>
    </>
  );
};

export default PublicIndividualProject;
