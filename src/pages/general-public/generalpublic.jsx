import { Fragment, useEffect, useState, useCallback } from "react";
import useGetAllProject from "../../Hooks/usegetallproject";
import useUpdateProject from "../../Hooks/useupdateproject";
import { Link } from "react-router-dom"
// import Generalsidebar from '../../components/generalpublic/generalsidebar'
import GeneralTopNavigation from "../../components/generalpublic/genaraltopnavbar";

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
  const { fetchProject, data, hostUrl /* loading */ } =
    useGetAllProject(); /* NOTE: use it or remove loading -->*/
  const { upDAteProject, data: updateData /* loading: upDateLoading */ } =
    useUpdateProject(); /* NOTE: use it or remove updateLoading -->*/
  const [filter /* setFilter*/] =
    useState(""); /* NOTE: use it or remove selFilter -->*/
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
    fetchProject(filter);
    console.log(data);
  }, [fetchProject, filter, data]);

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
        {/* <Generalsidebar /> */}
        <div className="content-wrapper ml-0">
          <>
            {/* <ContentHeader title="Profile" /> */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2 mt-2 filter-button">
                  <button type="button" class="btn btn-outline-primary">
                    Primary
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    Primary
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    Primary
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    Primary
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    Primary
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    Primary
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    Primary
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    Primary
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    Primary
                  </button>
                  {/* <div className="col-sm-6">
                    <div className="float-sm-right">
                      <img
                        src=""
                        alt="logo"
                        className="brand-image img-circle elevation-3"
                        style={{ opacity: ".8" }}
                      />
                    </div>
                  </div> */}
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
                                <Fragment key={item._id}>
                                  <Link to={`/${item._id}`}
                                    className="card "
                                    style={{ width: "18rem" }}
                                  >
                                    <div className="w-100 card-image">
                                      {item.images.length > 0 && (
                                        <img
                                          src={hostUrl + item.images[0].path}
                                          className="card-img-top"
                                          alt="..."
                                        />
                                      )}
                                    </div>
                                    <div className="card-body">
                                      <p className="m-0 span">
                                        {new Date(
                                          item.date_awarded
                                        ).toLocaleDateString("en-GB")}{" "}
                                      </p>
                                      <h5 className="card-title mb-2">
                                        Name: {item.name}
                                      </h5>
                                      <h5 className="card-title mb-2">
                                        Duration:{" "}
                                        {`${new Date(
                                          item.date_awarded
                                        ).toLocaleDateString(
                                          "en-GB"
                                        )} - ${new Date(
                                          item.duration
                                        ).toLocaleDateString("en-GB")}`}
                                      </h5>
                                      <p className="card-text">
                                        {item.description}
                                      </p>
                                      <button
                                        onClick={() =>
                                          displayComment(
                                            item.name,
                                            item._id,
                                            item
                                          )
                                        }
                                        className="btn btn-primary"
                                      >
                                        Comment
                                      </button>
                                    </div>
                                  </Link>
                                </Fragment>
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
