import IconSVG from "../../../Utils/svg";

const Media = ({project, hostUrl}) => {
  console.log((project.images))
  return (
    <>
      <div className="flex-grow flex flex-col h-full" data-testid="project-tab_media_content">
      <div className="projectPage_media-navbar__gDfss">
        <div className="projectPage_media-nav__Ij9ni projectPage_media-nav-active__7QEl_">
          <p>All Pictures</p>
          <div className="projectPage_active-icon__x8GtR" />
        </div>
      </div>
      
      <div className=" projectPage_gallery___fDWv">
      {
        (project.images === undefined) ?
          (
            <div className='flex h-full flex-col items-center justify-center'>
              <div className=' mx-auto'>
                  <img src={IconSVG.no_photo} alt='window wipe' className='w-96' />
              </div>
              <p className="mt-5 medium text-center text-2xl">No image yet</p>
              <p className="text-sm text-center text-input-border mt-3 w-10/12 lg:w-7/12 mx-auto">It seems that no one has updated or reviewed this project with pictures. Why not upload some with your review.</p>
              <div className="bg-white cursor-pointer text-primary hover:bg-primary hover:text-white transition ease-in-out duration-300 rounded-md px-4 py-1 mt-6">Back To Overview</div>
            </div>

          ) :
          (project.images).map((image) =>{
            return (
                <div key={image.path} className="projectPage_gallery__item__xPnf7 ">
                  <div className="projectPage_image__nKqqh">
                    <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'absolute', inset: 0}}>
                      <img alt="Second Niger Bridge" src={`${hostUrl}${image.path}`} style={{position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'}} sizes="100vw"  />
                      <noscript />
                    </span>
                  </div>
                </div>
            )
          })
      }
      </div>

      </div>
    </>
  )
}

export default Media
