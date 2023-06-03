


const Tab = ({setTab, tab}) => {
  return (
    <>
        <div className="sticky top-12 z-30 bg-grey-white">
            <div className="bg-grey-white w-full sticky top-0 z-30 pt-2">
                <div className="nav_search-navbar__B_TGY">
                    <div onClick={() => setTab(1)} className="nav_nav__fL7mg nav_search-nav-active__00eqb cursor-pointer"
                        data-testid="project-tab_Overview">
                        <p className={`${tab === 1 && 'text-primary'}`}>Overview</p>
                        <div className={`${tab === 1 && 'nav_active-bar__FGbx_'}`} ></div>
                    </div>
                    <div onClick={() => setTab(2)} className="nav_nav__fL7mg false nav_search-nav-active__00eqb cursor-pointer" data-testid="project-tab_Activity">
                        <p className={`${tab === 2 && 'text-primary'}`}>Activity</p>
                        <div className={`${tab === 2 && 'nav_active-bar__FGbx_'}`}></div>
                    </div>
                    <div onClick={() => setTab(3)} className="nav_nav__fL7mg false nav_search-nav-active__00eqb cursor-pointer" data-testid="project-tab_Media">
                        <p className={`${tab === 3 && 'text-primary'}`}>Media</p>
                        <div className={`${tab === 3 && 'nav_active-bar__FGbx_'}`}></div>
                    </div>
                    <div onClick={() => setTab(4)} className="nav_nav__fL7mg false nav_search-nav-active__00eqb cursor-pointer" data-testid="project-tab_Reviews">
                        <p className={`${tab === 4 && 'text-primary'}`}>Reviews</p>
                        <div className={`${tab === 4 && 'nav_active-bar__FGbx_'}`}></div>
                    </div>
                </div>
                <div className="nav_nav-base__wypU6"></div>
            </div>
        </div>
    </>
  )
}

export default Tab
