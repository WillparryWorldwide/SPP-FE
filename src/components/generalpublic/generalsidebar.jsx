
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.png'
import AgricultureIcon from '@mui/icons-material/Agriculture';
import TrainIcon from '@mui/icons-material/Train';
import GroupsIcon from '@mui/icons-material/Groups';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import PowerIcon from '@mui/icons-material/Power';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SchoolIcon from '@mui/icons-material/School';
import TuneIcon from '@mui/icons-material/Tune';
import Tooltip from '@mui/material/Tooltip';

const generalsidebar = ({setFilter, filter, setDisplayMenu, displayMenu}) => {
  return (
    <>
        <aside className={`main-sidebar sidebar-light-primary elevation-4 public-sidebar relative ${displayMenu && 'public-sidebar-active'}`}>
            <Link to="/" className="brand-link brand-link-pub transparent ">
                <img src={logo} alt="logo" className="brand-image" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">SPPA</span>
            </Link>
            <p onClick={() =>setDisplayMenu(prev => !prev)} className='cancel'>X</p>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex ">
                    <div className="info w-100">
                        <Link to="/profile" className="d-flex justify-center">
                          <TuneIcon sx={{
                          width: 30,                        
                          }}/><span className='ml-2 d-md-none d-lg-block'>Filter Category</span></Link>
                        {/* <button className='d-block'>
                          <TuneIcon sx={{
                          width: 20,                        
                          }}/><p className='pl-1 md-hidden ' >Filter Category</p>
                        </button> */}
                    </div>
                </div>
                
                <nav className="mt-2 public-sidebar w-100">
                  <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false"> 
                    <div className="row mb-2 mt-2 filter-button text-xs">
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
                  </ul>
                </nav>
            </div>
            {/* <Navigation /> */}
        </aside>
      
    </>
  )
}

export default generalsidebar
