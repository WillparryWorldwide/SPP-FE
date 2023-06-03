// Import Dependency
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

// Import Components
import Icon from '../icon/icons'

const CommentModal = ()=>{
  const [deleteOption, setDeleteOption] = useState(false)

  const DeletePopUp = ({ children, title, confirmButtonText, cancelButton, confirmButtonTextAction, loading }) => {

    // handle cancel delete function
    const HandleDeleteCancel = () =>{
      setDeleteOption(false)
      console.log('i ran')
    }

    return (
      <div onClick={HandleDeleteCancel} className='fixed p-5 top-0 left-0 w-full h-full bg-black/[.3] flex justify-center items-center dark:bg-blackshade/[.3] z-[1000] '>
          <div 
            className='bg-white w-fit rounded-lg max-h-fit dark:bg-darkbg p-4'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex justify-center items-center p-2 border-b-1 border-faintwhite dark:border-mobiledarkborder md:dark:border-darkborder'>
              <p className='text-black dark:text-grey26 font-bold text-lg'>{title}</p>
            </div>
            <div className='my-10 text-center dark:text-white text-black'>
              { children }
            </div>
            { confirmButtonText && 
                <div className='flex justify-between items-center'>
                  {cancelButton && <button onClick={HandleDeleteCancel} className="py-2 px-3 md:px-4 bg-transparent border-1 border-primary dark:border-hovericon text-primary dark:text-hovericon rounded-full font-semibold flex items-center w-fit text-xs"> 
                      {cancelButton}
                      <div className='w-3 h-3 stroke-primary dark:stroke-hovericon ml-2'>
                        <Icon cancel='cancel' />
                      </div>
                  </button>}
                  <button onClick={() => confirmButtonTextAction()} className="py-2 px-3 md:px-4 bg-primary text-white  border-1 border-primary rounded-full font-semibold flex items-center ml-auto w-fit text-xs"> 
                  { loading ? <div className='text-center w-16'> <FontAwesomeIcon icon={faSpinner} size="lg"  spin/> </div> : <> {confirmButtonText} <div className='w-4 h-3 stroke-white ml-2'> <Icon check='check' /> </div> </>}
                  </button>
                </div>
            }
          </div>
        
      </div>
    )
  }

  return {deleteOption, setDeleteOption, DeletePopUp}
}



export default CommentModal
