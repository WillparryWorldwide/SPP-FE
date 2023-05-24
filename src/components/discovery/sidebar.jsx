import React from 'react'

const SideBar = () => {
  return (
    <>
      <div className="leftSideBar_sidebar__85S4S flex-shrink-0 z-20 w-32 bg-white py-8">
        <div>
            <div className="">
                <div className="items-center flex space-x-2 mt-2 justify-center px-8">
                    <a href="/">
                        <span>
                            <span>
                                <img  alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2731%27%20height=%2724%27/%3e" />
                            </span>
                            <img alt="Eyemark" src="/_next/static/media/eyeMark.6c1915ac.svg" decoding="async" data-nimg="intrinsic" className='absolute' srcset="/_next/static/media/eyeMark.6c1915ac.svg 1x, /_next/static/media/eyeMark.6c1915ac.svg 2x" />
                        </span>
                    </a>
                    <button className="flex-shrink-0 focus:outline-none">
                        <span >
                            <span >
                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2717%27/%3e" />
                            </span>
                            <img alt="arrows" data-testid="expand-nav" src="/_next/static/media/doubleArrow.596ce5ab.svg" decoding="async" data-nimg="intrinsic" className="h-3 transform rotate-180 absolute" srcset="/_next/static/media/doubleArrow.596ce5ab.svg 1x, /_next/static/media/doubleArrow.596ce5ab.svg 2x" />
                        </span>
                    </button>
                </div>
                <div className="mt-10 mb-6  flex items-center min-h-[64px] relative justify-center bg-grey-white-2">
                    <div className="flex items-center min-w-0 mr-2">
                        <span className="mr-1 flex items-center">
                            <div className="h-10 w-10 relative">
                                <img alt="avatar" loading="lazy" decoding="async" data-nimg="fill" className="shadow rounded-full bg-black absolute h-full w-full text-transparent" src="/assets/SVG/general/eyeMark.svg" />
                            </div>
                            <span className="cursor-pointer ml-2">
                                <div className="relative">
                                    <img alt="Expand icon" loading="lazy" width="12" height="8" decoding="async" data-nimg="1" className="cursor-pointer text-transparent" src="/_next/static/media/downcaret.3b2c224b.svg" />
                                </div>
                            </span>
                        </span>
                        <span className="font-filson-mediums font-medium text-sm truncate hidden" data-testid="active-tenant">Eyemark</span>
                    </div>
                    <div className="flex items-center hidden">
                        <div className="h-[56px] bg-grey-stroke w-[1px] self-center"></div>
                        <div className="flex gap-2 ml-2">
                            <div className="cursor-pointer h-6 w-6 relative">
                                <img alt="avatar" loading="lazy" decoding="async" data-nimg="fill" className="shadow rounded-full absolute w-full h-full text-transparent" src="https://res.cloudinary.com/zst/image/upload/v1682948947/hi4tmxvrt29gcmay82f6.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-4 text-med items-center px-8">
                <div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer leftSideBar_left-nav-active__v4i8w">
                    <span>
                        <span>
                            <img  alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e" />
                        </span>
                        <img alt="icon" src="/_next/static/media/discoverIcon.dc325422.svg" decoding="async" data-nimg="intrinsic" className="leftSideBar_nav-icon__7Dhay absolute" srcset="/_next/static/media/discoverIcon.dc325422.svg 1x, /_next/static/media/discoverIcon.dc325422.svg 2x" />
                    </span>
                </div>
                {/* <div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer false">
                    <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                        <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e" style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;" />
                        </span>
                        <img alt="icon" src="/_next/static/media/eyemarkedIcon.7675d571.svg" decoding="async" data-nimg="intrinsic" className="leftSideBar_nav-icon__7Dhay" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" srcset="/_next/static/media/eyemarkedIcon.7675d571.svg 1x, /_next/static/media/eyemarkedIcon.7675d571.svg 2x" />
                    </span>
                </div>
                <div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer false">
                    <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
                        <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                            <img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e"/>
                        </span>
                        <img alt="icon" src="/_next/static/media/categoryIcon.74aa3493.svg" decoding="async" data-nimg="intrinsic" className="leftSideBar_nav-icon__7Dhay" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" srcset="/_next/static/media/categoryIcon.74aa3493.svg 1x, /_next/static/media/categoryIcon.74aa3493.svg 2x"/>
                    </span>
                </div>
                <div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer false">
                    <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                        <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e" style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;" />
                        </span>
                        <img alt="icon" src="/_next/static/media/notifications.83505658.svg" decoding="async" data-nimg="intrinsic" className="leftSideBar_nav-icon__7Dhay" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" srcset="/_next/static/media/notifications.83505658.svg 1x, /_next/static/media/notifications.83505658.svg 2x" />
                    </span>
                </div>
                <div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer false">
                    <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                        <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e" style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;" />
                        </span>
                        <img alt="icon" src="/_next/static/media/profileIcon.fe6e0860.svg" decoding="async" data-nimg="intrinsic" className="leftSideBar_nav-icon__7Dhay" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" srcset="/_next/static/media/profileIcon.fe6e0860.svg 1x, /_next/static/media/profileIcon.fe6e0860.svg 2x" />
                    </span>
                </div>
                <div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer false">
                    <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                        <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e" style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;" />
                        </span>
                        <img alt="icon" src="/_next/static/media/settingsIcon.0b9ca9d7.svg" decoding="async" data-nimg="intrinsic" className="leftSideBar_nav-icon__7Dhay" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" srcset="/_next/static/media/settingsIcon.0b9ca9d7.svg 1x, /_next/static/media/settingsIcon.0b9ca9d7.svg 2x" />
                    </span>
                </div> */}
            </div>
        </div>
        <div className="bg-grey-white-2 h-10 flex items-center pl-6 cursor-pointer">
            <span className="text-[10px] text-accepted mr-[7.5px] font-filson-medium font-medium">VERIFY EMAIL</span>
            <span className="mr-3 flex items-center">
                <img alt="external link icon" loading="lazy" width="12" height="12" decoding="async" data-nimg="1" src="/_next/static/media/linkoutside.9c88b54e.svg" />
            </span>
        </div>
        <div className="my-5 flex justify-between items-center relative px-8">
            <div className="flex items-center">
                <div className="shrink-0">
                    <img alt="avatar" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="shadow rounded-full object-cover h-10" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.9747a638.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.9747a638.png&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.9747a638.png&amp;w=96&amp;q=75" />
                </div>
                <div className="ml-2 hidden">
                    <p className="text-base font-bold"></p>
                    <p className="text-tiny font-light text-light-grey-3">@godwin5</p>
                </div>
            </div>
            <div className="shrink-0">
                <img alt="Expand icon" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" className="cursor-pointer text-transparent" src="/_next/static/media/downcirclecaret.4330b348.svg" />
            </div>
            <div className="p-4 max-w-[300px] w-max flex-shrink-0 z-above-modal rounded-md overflow-x-visible absolute py-2 place-self-end shadow-lg text-xs bg-white hidden">
                <span>
                    <ul className="space-y-2 undefined">
                        <li className="px-4 cursor-pointer flex items-center">Edit Profile</li>
                        <hr />
                        <li className="px-4 cursor-pointer flex items-center">Logout</li>
                    </ul>
                </span>
            </div>
        </div>
        <div className="bg-grey-stroke h-[1px] mx-8"></div>
        <a target="_blank" rel="noreferrer" href="https://forms.gle/CvUffCikLe7XhYWA7" className="mt-5 px-8 h-9">
            <button className="bg-sub-text flex justify-center items-center rounded-[4px] w-full py-2 font-filson-bold text-white text-xs font-bold">
                <p className="ml-1"> Feedback</p>
            </button>
        </a>
    </div>
    </>
  )
}

export default SideBar
