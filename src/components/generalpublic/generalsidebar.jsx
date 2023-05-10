
import { Link } from 'react-router-dom'

const generalsidebar = () => {
  return (
    <>
    
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/" className="brand-link">
                <img src="" alt="logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">SPPA</span>
            </Link>
            
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="info">
                        <Link to="/profile" className="d-block">Filter Category</Link>
                    </div>
                </div>=
                
                <nav className="mt-2 public-sidebar">
                    
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    
                        <li className="nav-item">
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link to="" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>LGA</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Price</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p> </p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
                    {/* <ul>
                        <li className="flex-sm-fill text-white text-sm-left nav-link active" href="/jf">LGA</li>
                        <li className="flex-sm-fill text-white text-sm-left nav-link" href="/jf">Longer nav link</li>
                        <li className="flex-sm-fill text-white text-sm-left nav-link" href="/jf">Link</li>
                        <li className="flex-sm-fill text-white text-sm-left nav-link" href="/jf">Link</li>
                        <li className="flex-sm-fill text-white text-sm-left nav-link" href="/jf">Link</li>
                    </ul> */}
                </nav>
            </div>
            {/* <Navigation /> */}
        </aside>
      
    </>
  )
}

export default generalsidebar
