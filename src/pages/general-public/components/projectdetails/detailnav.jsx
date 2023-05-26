
import { Link, useNavigate } from 'react-router-dom';

const DetailNav = ({project}) => {
    const navigate = useNavigate()
  return (
    <>
      <div className="projectPage_header-section___pCZK fixed w-full lg:w-[calc(100%-8rem)] z-50 ">
            <div className="hidden lg:block mr-5 cursor-pointer ">
                <Link onClick={() => navigate(-1)}>
                    <img alt="back" loading="lazy" width="20" height="16" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="https://eyemark.ng/_next/static/media/arrowBack.7d6d5eda.svg" />
                </Link>
            </div>
            <div className="lg:hidden mr-5 cursor-pointer h-4">
                <Link onClick={() => navigate(-1)}>
                    <img alt="back" loading="lazy" width="14" height="24" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="https://eyemark.ng/_next/static/media/backCaret.d64bb240.svg" />
                </Link>
            </div>
            <p className="projectPage_header-text__Dzdkw">{project?.name}</p>
        </div>
    </>
  )
}

export default DetailNav
