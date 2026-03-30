import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { removeCategory, setStartDeletingCat } from '../../../redux/features/NotesStrorage';


const ConfirmDeletePopUp = ({ openDeletePopUp, setOpenDeletePopUp }) => {
    const DeletPopElem = useRef(null);
    const dispatch = useDispatch();

    const theme = useSelector((store) => store.wallpaper.theme);
    const device = useSelector((store) => store.Device.currDevice);
    const deletedCategories = useSelector((store) => store.Notes.deletedCategories); //categories which are selected to delete


    useGSAP(() => {
        if (!DeletPopElem.current) return;

        gsap.fromTo(DeletPopElem.current, {
            scale: openDeletePopUp ? 0 : 1,
        }, {
            scale: openDeletePopUp ? 1 : 0,
            duration: 0.65,
            force3D: true, //to make animation a bit smooth as it deals with scales (forcw3D)
            ease: 'expo.out'
        })

    }, [openDeletePopUp])

    return (
        <div className={`${openDeletePopUp ? 'block' : 'hidden'}  delete-folder-parent absolute top-0 left-0 inset-0 flex flex-col`}>

            {/* overlay */}
            <div
                onClick={() => setOpenDeletePopUp(false)}
                className='overlay grow backdrop-blur-[0.5px] bg-[rgba(0,0,0,0.35)]'></div>


            <div ref={DeletPopElem} className={`${device === 'Mobile' ? 'w-[calc(100%-30px)]' : 'w-75'} absolute rounded-2xl py-3.5  px-2.5 gap-3 bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center
            ${theme !== 'dark' ?
                    "bg-(--bg-light-window-header)"
                    :
                    "bg-(--primary-dark-clr)"
                }`}>

                <span className='text-lg'>Delete folder</span>

                <span className={`text-sm ${theme !== 'dark' ? 'text-(--sec-light-clr)' : 'text-(--sec-light-clr)'}`}>Delete 2 items ?</span>

                <div className={`w-full flex items-center gap-2`}>

                    <button
                        onClick={() => setOpenDeletePopUp(false)}
                        className={`w-[calc(50%-2px)] py-2.5 text-sm font-bold select-none  active:scale-96 rounded-xl hover:bg-(--btn-light-hover)  ${theme !== 'dark' ? 'bg-(--primary-light-clr) text-(--primary-dark-clr)' : 'bg-(--sec-light-clr) text-(--primary-light-clr)'}`}>Cancel</button>

                    <button
                        onClick={() => {
                            dispatch(removeCategory({ category: deletedCategories }));
                            dispatch(setStartDeletingCat({ start: false })); // exit delete mode after deleting category/categories
                            setOpenDeletePopUp(false); //after delete close the pop up
                        }}
                        className={`grow  py-2.5 text-sm font-bold rounded-xl select-none bg-(--bg-ok-btn) hover:bg-(--bg-ok-btn-hover) active:bg-(--bg-ok-btn-hover) active:scale-96 text-(--primary-light-clr)`}>DELETE</button>
                </div>


            </div>
        </div>


    )
}

export default ConfirmDeletePopUp
