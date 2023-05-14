import { Fragment, useEffect, useState, useCallback } from "react";
import useGetProject from "../../Hooks/useGetProject";
import useUpdateProject from "../../Hooks/useupdateproject";
import { useParams } from "react-router-dom";
import GeneralTopNavigation from "../../components/generalpublic/genaraltopnavbar";

import "./generalpublic.css";
import Comment from "../../components/generalpublic/comment";
import ViewComment from "../../components/generalpublic/viewcomment";
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
      await getProject(id);
      console.log("Rendering...");
    };
    // fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  
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
                          
                                    <div className="w-100 card-image">
                                        <img
                                          src='https://media.gettyimages.com/id/513113394/photo/highway-engineer.jpg?s=612x612&w=gi&k=20&c=dcgVbCBSQfpUfVea3MUnkwRJU0m8g0LDPyJd97u2uvQ='
                                          className="card-img-top"
                                          alt="..."
                                        />
                                    </div>
                                    <div className="card-body">
                                      <p className="m-0 span">23/06/2023</p>
                                      <h5 className="card-title mb-2">
                                        Bridge Construction
                                      </h5>
                                      <h5 className="card-title mb-2">23/062023 - 19/12/2023</h5>
                                      <p className="card-text">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                      </p>
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
