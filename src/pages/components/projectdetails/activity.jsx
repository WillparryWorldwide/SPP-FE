import SiteImages from "../../../Utils/images";

const Activity = () => {
  return (
    <>
    <div className='flex h-full flex-col items-center justify-center'>
      <div className=' mx-auto'>
          <img src={SiteImages.developer} alt='window wipe' className='w-96' />
      </div>
      <p className="mt-5 medium text-center text-2xl">Sorry! We don't have any updates available</p>
      <p className="text-sm text-center text-input-border mt-3 w-10/12 lg:w-7/12 mx-auto">Unfortunately, we have not posted any update on this project. Kindly SPP and check back with us in the near future.</p>
      <div className="bg-white cursor-pointer text-primary hover:bg-primary hover:text-white transition ease-in-out duration-300 rounded-md px-4 py-1 mt-6">Back To Overview</div>
  </div>
    </>
  )
}

export default Activity
