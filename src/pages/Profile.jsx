import React, { useEffect, useState } from 'react'
import ContentHeader from '../components/ContentHeader'
import avatar from '../layout/assets/images/avatar.png'
import image from '../layout/assets/images/photo1.png'
import { Link } from 'react-router-dom'
import ProjectModal from '../components/ProjectModal'
import { useAuthUser } from 'react-auth-kit'

const Profile = () => {

    const userData = useAuthUser()
    const [projects, setProjects] = useState([{id: 1}]);
    const [ProjectModalState, setprojectModalState] = useState(false)

    // TODO: Find use or delete
    // const handleProjectEdit = (e) => {
    //     e.preventDefault();
    //     window.toastr.info('Project clicked')
    // }

    useEffect(() => {

    }, [])

    return (
        <>
            <ContentHeader title="Profile" />
            <ProjectModal status={ProjectModalState} key={ProjectModalState} />
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className='col-md-6 col-lg-3'>
                            <div className="card card-primary card-outline">
                                <div className="card-body box-profile">
                                    <div className="text-center">
                                        <img className="profile-user-img img-fluid img-circle" src={avatar} alt="" />
                                    </div>
                                    <h3 className="profile-username text-center">{`${userData()?.firstname} ${userData()?.lastname}`}</h3>
                                    <p className="text-muted text-center">{userData()?.role.toUpperCase()}</p>
                                    {userData()?.role === 'contractor' && <ul className="list-group list-group-unbordered mb-3">
                                        <li className="list-group-item">
                                            <b>Number of Projects</b> <a className="float-right">1,322</a>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Pending Projects</b> <a className="float-right">543</a>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Completed Projects</b> <a className="float-right">13,287</a>
                                        </li>
<<<<<<< HEAD
                                    </ul>}
=======
                                    </ul>
                                    <a href="#x" className="btn btn-primary btn-block"><b>Follow</b></a>
>>>>>>> 8724d857cb3b6be7a29c80f5cf04bfa001179a6d
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="card">
                                <div className="card-header p-2">
                                    <ul className="nav nav-pills">
                                        {userData()?.role === 'contractor' && <>
                                            <li className="nav-item"><a className="nav-link active" href="#project" data-toggle="tab">Project</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#timeline" data-toggle="tab">Timeline</a></li>
                                        </>}
                                        <li className="nav-item"><a className={userData()?.role === 'admin' ? 'nav-link active' : 'nav-link'} href="#settings" data-toggle="tab">Settings</a></li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content">
                                        <div className={userData()?.role === 'contractor' ? 'tab-pane active' : 'tab-pane'} id="project">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    {
                                                        projects.map((project, index) => (
                                                            <Link onClick={() => setprojectModalState(!ProjectModalState)}>
                                                                <div className="card mb-2 bg-gradient-dark">
                                                                    <img className="card-img-top" src={image} alt="" />
                                                                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                                                                        <h5 className="card-title text-primary text-white">Card Title</h5>
                                                                        <a href="/" className="text-white">Last update 2 mins ago</a>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="timeline">
                                            <div className="timeline timeline-inverse">
                                                <div className="time-label">
                                                    <span className="bg-danger">
                                                        10 Feb. 2014
                                                    </span>
                                                </div>
                                                <div>
                                                    <i className="fas fa-envelope bg-primary"></i>

                                                    <div className="timeline-item">
                                                        <span className="time"><i className="far fa-clock"></i> 12:05</span>

<<<<<<< HEAD
                                                        <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>
=======
                                                        <h3 class="timeline-header"><a href="#x">Support Team</a> sent you an email</h3>
>>>>>>> 8724d857cb3b6be7a29c80f5cf04bfa001179a6d

                                                        <div className="timeline-body">
                                                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                                            weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                                            jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                                            quora plaxo ideeli hulu weebly balihoo...
                                                        </div>
<<<<<<< HEAD
                                                        <div className="timeline-footer">
                                                            <a href="#" className="btn btn-primary btn-sm">Read more</a>
                                                            <a href="#" className="btn btn-danger btn-sm">Delete</a>
=======
                                                        <div class="timeline-footer">
                                                            <a href="#x" class="btn btn-primary btn-sm">Read more</a>
                                                            <a href="#x" class="btn btn-danger btn-sm">Delete</a>
>>>>>>> 8724d857cb3b6be7a29c80f5cf04bfa001179a6d
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <i className="fas fa-user bg-info"></i>

                                                    <div className="timeline-item">
                                                        <span className="time"><i className="far fa-clock"></i> 5 mins ago</span>

<<<<<<< HEAD
                                                        <h3 className="timeline-header border-0"><a href="#">Sarah Young</a> accepted your friend request
=======
                                                        <h3 class="timeline-header border-0"><a href="#x">Sarah Young</a> accepted your friend request
>>>>>>> 8724d857cb3b6be7a29c80f5cf04bfa001179a6d
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div>
                                                    <i className="fas fa-comments bg-warning"></i>

                                                    <div className="timeline-item">
                                                        <span className="time"><i className="far fa-clock"></i> 27 mins ago</span>

<<<<<<< HEAD
                                                        <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post</h3>
=======
                                                        <h3 class="timeline-header"><a href="#x">Jay White</a> commented on your post</h3>
>>>>>>> 8724d857cb3b6be7a29c80f5cf04bfa001179a6d

                                                        <div className="timeline-body">
                                                            Take me to your leader!
                                                            Switzerland is small and neutral!
                                                            We are more like Germany, ambitious and misunderstood!
                                                        </div>
<<<<<<< HEAD
                                                        <div className="timeline-footer">
                                                            <a href="#" className="btn btn-warning btn-flat btn-sm">View comment</a>
=======
                                                        <div class="timeline-footer">
                                                            <a href="#x" class="btn btn-warning btn-flat btn-sm">View comment</a>
>>>>>>> 8724d857cb3b6be7a29c80f5cf04bfa001179a6d
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="time-label">
                                                    <span className="bg-success">
                                                        3 Jan. 2014
                                                    </span>
                                                </div>
                                                <div>
                                                    <i className="fas fa-camera bg-purple"></i>

                                                    <div className="timeline-item">
                                                        <span className="time"><i className="far fa-clock"></i> 2 days ago</span>

<<<<<<< HEAD
                                                        <h3 className="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>
=======
                                                        <h3 class="timeline-header"><a href="#x">Mina Lee</a> uploaded new photos</h3>
>>>>>>> 8724d857cb3b6be7a29c80f5cf04bfa001179a6d

                                                        <div className="timeline-body">
                                                            <img src="https://placehold.it/150x100" alt="..." />
                                                            <img src="https://placehold.it/150x100" alt="..." />
                                                            <img src="https://placehold.it/150x100" alt="..." />
                                                            <img src="https://placehold.it/150x100" alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <i className="far fa-clock bg-gray"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={userData()?.role === 'admin' ? 'tab-pane active' : 'tab-pane'} id="settings">
                                            <form className="form-horizontal">
                                                <div className="form-group row">
                                                    <label for="old-password" className="col-sm-4 col-form-label">Old Password</label>
                                                    <div className="col-sm-8">
                                                        <input type="password" className="form-control" id="old-password" placeholder="Enter Old Password" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label for="new-password" className="col-sm-4 col-form-label">New Password</label>
                                                    <div className="col-sm-8">
                                                        <input type="password" className="form-control" id="new-password" placeholder="Enter New Password" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label for="re-type-password" className="col-sm-4 col-form-label">Re-type Password</label>
                                                    <div className="col-sm-8">
                                                        <input type="password" className="form-control" id="re-type-password" placeholder="Re-type Password" />
                                                    </div>
                                                </div>
<<<<<<< HEAD
                                                <div className="form-group row">
                                                    <div className="offset-sm-4 col-sm-10">
                                                        <button type="submit" className="btn btn-danger">Submit</button>
=======
                                                <div class="form-group row">
                                                    <label for="inputExperience" class="col-sm-2 col-form-label">Experience</label>
                                                    <div class="col-sm-10">
                                                        <textarea class="form-control" id="inputExperience" placeholder="Experience"></textarea>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="inputSkills" class="col-sm-2 col-form-label">Skills</label>
                                                    <div class="col-sm-10">
                                                        <input type="text" class="form-control" id="inputSkills" placeholder="Skills" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="offset-sm-2 col-sm-10">
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox" /> I agree to the <a href="#x">terms and conditions</a>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="offset-sm-2 col-sm-10">
                                                        <button type="submit" class="btn btn-danger">Submit</button>
>>>>>>> 8724d857cb3b6be7a29c80f5cf04bfa001179a6d
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile