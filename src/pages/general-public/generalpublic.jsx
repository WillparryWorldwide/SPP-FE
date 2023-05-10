import { Fragment, useEffect, useState, useCallback } from 'react'
// import TopNavBar from '../../layout/TopNavBar'
// import Navigation from '../../layout/Navigation'
// import { useAppContext } from '../../context/AppContext'
// import LoginPassword from '../../components/LoginPassword'
// import ContentHeader from '../../components/ContentHeader'
// import avatar from '../../layout/assets/images/avatar.png'
// import image from '../../layout/assets/images/photo1.png'
import useGetAllProject from '../../Hooks/usegetallproject'
import useUpdateProject from '../../Hooks/useupdateproject'
import Generalsidebar from '../../components/generalpublic/generalsidebar'
import GeneralTopNavigation from '../../components/generalpublic/genaraltopnavbar'

import './generalpublic.css'
import Comment from '../../components/generalpublic/comment'
import ViewComment from '../../components/generalpublic/viewcomment'
const Layout = () => {
    const url = process.env.REACT_APP_BASE_URL
    const [viewComment, setViewComment] = useState(false)
    const [viewListComment, setViewListComment] = useState(false)
    const [comments, setComment] = useState(null)
    const [nameOfProject, setNameOfProject] = useState('')
    const [idOfProject, setIdOfProject] = useState('')
    const [itemOfProject, setItemOfProject] = useState('')
    const { fetchProject, data, /* loading */ } = useGetAllProject() /* NOTE: use it or remove loading -->*/
    const { upDAteProject, data: updateData, /* loading: upDateLoading */ } = useUpdateProject(); /* NOTE: use it or remove updateLoading -->*/
    const [filter, /* setFilter*/] = useState('') /* NOTE: use it or remove selFilter -->*/
    const [commentData, setCommentData] = useState({
        description: '',
        radioValue: '',
        name: ''
    })
    // const { site_name, } = useAppContext()
    document.body.classList.remove('hold-transition', 'login-page', 'register-page')
    document.body.classList.add('hold-transition', 'sidebar-mini', 'layout-fixed', 'layout-navbar-fixed', 'layout-footer-fixed')

    const displayComment = (name, id, item) => {
        setIdOfProject(id)
        setItemOfProject(item)
        setNameOfProject(name)
        setViewComment(true)
    }
    const displayListComment = (item) => {
        console.log(item.review.comments)
        setComment(item.review.comments)
        setViewListComment(true)
    }
    const submitComment = async (e) => {
        e.preventDefault()
        console.log(idOfProject)
        await upDAteProject(idOfProject, commentData, itemOfProject)
        await getProject()
        setNameOfProject('');
        setCommentData({
            description: '',
            radioValue: '',
            name: ''
        })

        setItemOfProject('');
        setNameOfProject('');
        setViewComment(false);
    }
    const handleRadioSelection = (event) => {
        setNameOfProject('')
        setCommentData((prev) => ({ ...prev, radioValue: event.target.value }))
    }

    const getProject = useCallback(async () => {
        console.log('i ran');
        fetchProject(filter);
        console.log(data);
    }, [fetchProject, filter, data]);

    useEffect(() => {
        getProject();
        console.log("Rendering...");
    }, [updateData]);

    return (
        <>
            <div className="wrapper">
                {/* Header Section  */}
                <GeneralTopNavigation />
                {/* Sidebar Section  */}
                <Generalsidebar />
                <div className="content-wrapper">
                    <>
                        {/* <ContentHeader title="Profile" /> */}
                        <div className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <form className="form-inline">
                                            <div className="input-group input-group-sm w-100">
                                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-navbar" type="submit">
                                                        <i className="fas fa-search"></i>
                                                    </button>
                                                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                                        <i className="fas fa-times"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="float-sm-right">
                                            <img src="" alt="logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="content user-main">
                            <div className="container-fluid h-100">
                                <div className="row h-100">
                                    {/* Main section  */}
                                    <div className={`${(viewComment || viewListComment) ? ' col-lg-9 ' : " col-lg-12 "}  h-100 overflow-y-scroll client-overflow-scroll`}>
                                        <div className="card">
                                            <div className="card-header p-2">
                                                <ul className="nav nav-pills">
                                                    <li className="nav-item"><a className="nav-link active" href="#project" data-toggle="tab">All Project</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="#timeline" data-toggle="tab">Completed Project</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="#settings" data-toggle="tab">Uncompleted Project</a></li>
                                                </ul>
                                            </div>
                                            <div className="card-body">
                                                <div className="tab-content">
                                                    {/* All projects tab  */}
                                                    <div className="active tab-pane" id="project">
                                                        <div className="row">

                                                            {
                                                                data !== null && data.map((item, index) => {
                                                                    return (
                                                                        <Fragment key={item._id}>
                                                                            <div className="tab-pane w-100 " >
                                                                                <div className="timeline timeline-inverse">
                                                                                    <div className='w-100'>

                                                                                        <div className="timeline-item m-0">
                                                                                            <span className="time"><i className="far fa-clock"></i>{new Date(item.date_awarded).toLocaleDateString()}</span>

                                                                                            <h3 className="timeline-header"><a href="#x">{item.name}</a> Project</h3>

                                                                                            <div className="timeline-body">
                                                                                                <div>
                                                                                                    {item.images.length > 0 && item.images.map((image, indexes) => {
                                                                                                        return (
                                                                                                            <div className='d-inline mr-3 mb-3'>
                                                                                                                <img src={url + '/' + image.path} alt="..." key={indexes} className='' />
                                                                                                            </div>
                                                                                                        )
                                                                                                    })
                                                                                                    }
                                                                                                </div>
                                                                                                <p>{item.description}</p>

                                                                                            </div>
                                                                                            <div className="timeline-footer">
                                                                                                <div onClick={() => displayComment(item.name, item._id, item)} className="btn btn-warning btn-flat btn-sm mr-3 text-white">Comment</div>
                                                                                                <div onClick={() => displayListComment(item)} className="btn btn-warning btn-flat btn-sm text-white">View comment</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </Fragment>
                                                                    )
                                                                })
                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Comment section  */}
                                    {(viewComment || viewListComment) &&

                                        <div className='col-lg-3'>
                                            {/* View Comment  */}
                                            {viewListComment && <div className='d-none d-lg-flex'>
                                                <ViewComment
                                                    setViewListComment={setViewListComment}
                                                    comments={comments}
                                                />

                                            </div>}
                                            {/* Send Comment  */}
                                            {viewComment && <div className='d-none d-lg-flex'>
                                                <Comment
                                                    nameOfProject={nameOfProject}
                                                    submitComment={submitComment}
                                                    commentData={commentData}
                                                    setCommentData={setCommentData}
                                                    handleRadioSelection={handleRadioSelection}
                                                />
                                            </div>}
                                        </div>
                                    }
                                </div>
                            </div>
                        </section>
                    </>
                </div>
            </div>

            {viewComment &&
                <div className='col-12 d-lg-none position-absolute bottom-modal'>
                    <Comment
                        nameOfProject={nameOfProject}
                        submitComment={submitComment}
                        commentData={commentData}
                        setCommentData={setCommentData}
                        handleRadioSelection={handleRadioSelection}
                    />
                </div>}
        </>
    )
}

export default Layout