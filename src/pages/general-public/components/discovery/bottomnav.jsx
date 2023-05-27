
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';


const BottomNav = () => {

    return (
    <>
        <div className='lg:hidden w-full justify-around sm:justify-center sm:gap-14 bg-white flex text-xs items-center py-4 fixed bottom-0 inset-x-0 appLayout_bottom-nav__CNkbR'>
            <div className="text-light-grey-2 cursor-pointer flex flex-col item-center justify-center hover:text-primary  ">
                <ExploreOutlinedIcon className="mx-auto" sx={{width: 20}} />
                <p>Discover</p>
            </div>
            <div className="text-light-grey-2 cursor-pointer flex flex-col item-center justify-center hover:text-primary  ">
                <ExploreOutlinedIcon className="mx-auto" sx={{width: 20}} />
                <p>SPPed</p>
            </div>
            <div className="text-light-grey-2 cursor-pointer flex flex-col item-center justify-center hover:text-primary  ">
                <CategoryOutlinedIcon className="mx-auto" sx={{width: 20}} />
                <p>Categories</p>
            </div>
            <div className="text-light-grey-2 cursor-pointer flex flex-col item-center justify-center hover:text-primary  ">
                <NotificationsNoneIcon className="mx-auto" sx={{width: 20}} />
                <p>Notifications</p>
            </div>
        </div>
    </>
  )
}

export default BottomNav
