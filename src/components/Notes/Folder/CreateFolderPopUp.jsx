import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { addCategory } from '../../../redux/features/NotesStrorage';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CreateFolderPopUp = ({ opencreateFolderPopUp, setOpencreateFolderPopUp }) => {
    const createFldrInputRef = useRef(null)
    const popUpElem = useRef(null);
    const dispatch = useDispatch();

    const theme = useSelector((store) => store.wallpaper.theme);
    const device = useSelector((store) => store.Device.currDevice);
    const defaultNumForDefaultFolder = useSelector((store) => store.Notes.baseNumberForDefaultFolder);
    const defaultValOfInput = 'Unnamed folder' + (defaultNumForDefaultFolder > 0 ? defaultNumForDefaultFolder : ''); // it will be the default value for input field when user create a new folder with default name, if user has already created folder with default name then it will add number at the end of default name otherwise it will be just Unnamed folder

    // pre select the input text when the popup is opened
    useEffect(() => {
        if (opencreateFolderPopUp === true) {
            createFldrInputRef.current?.select();
        }
    }, [opencreateFolderPopUp])

    useGSAP(() => {
        if (!popUpElem.current) return;

        gsap.fromTo(popUpElem.current, {
            scale: opencreateFolderPopUp ? 0 : 1,
        }, {
            scale: opencreateFolderPopUp ? 1 : 0,
            duration: 0.65,
            force3D: true, //to make animation a bit smooth as it deals with scales (forcw3D)
            ease: 'expo.out'
        })

    }, [opencreateFolderPopUp])

    return (
        <div className={`${opencreateFolderPopUp ? 'block' : 'hidden'} create-folder-parent absolute top-0 left-0 inset-0 flex flex-col`}>

            {/* overlay */}
            <div
                onClick={() => setOpencreateFolderPopUp(false)}
                className='overlay grow backdrop-blur-[0.5px] bg-[rgba(0,0,0,0.35)]'></div>

            {/* actual  */}
            <div ref={popUpElem} className={`duration-500 ease-out ${device === 'Mobile' ? 'w-[calc(100%-30px)]' : 'w-75'} absolute rounded-2xl py-3.5  px-2.5 gap-2.5 bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center
            ${theme !== 'dark' ?
                    "bg-(--bg-light-window-header)"
                    :
                    "bg-(--primary-dark-clr)"
                }
            `}>
                <span className={`duration-500 ease-out select-none font-semibold ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>New Folder</span>

                <input spellCheck={false} ref={createFldrInputRef} maxLength={80} autoFocus className={`duration-500 ease-out create-flder-input w-full border-2 border-blue-600 outline-none font-semibold rounded-2xl px-2.5 py-2 ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`} type="text" placeholder='Enter Text' defaultValue={defaultValOfInput} />

                <div className='w-full folder-creation-btns flex items-center justify-between gap-2'>
                    <button
                        onClick={() => setOpencreateFolderPopUp(false)}
                        className={`duration-500 ease-out w-[calc(50%-2px)] py-3.5 md:py-2.5 text-sm font-bold select-none  active:scale-96 rounded-xl hover:bg-(--btn-light-hover)  ${theme !== 'dark' ? 'bg-(--primary-light-clr) text-(--primary-dark-clr)' : 'bg-(--sec-light-clr) text-(--primary-light-clr)'}`}>Cancel</button>

                    <button
                        onClick={() => {
                            const inputFiled = document.querySelector('.create-flder-input');

                            const catName = inputFiled?.value?.trim() || inputFiled?.defaultValue?.trim(); // if user do not change the default name and directly click on ok then also folder will be created with default name 

                            if (!catName) return;

                            dispatch(addCategory({ category: catName, defaultName: defaultValOfInput }));
                            setOpencreateFolderPopUp(false);
                        }}
                        className={`grow  py-3.5 md:py-2.5 text-sm font-bold rounded-xl select-none bg-(--bg-ok-btn) hover:bg-(--bg-ok-btn-hover) active:bg-(--bg-ok-btn-hover) active:scale-96 text-(--primary-light-clr)`}>OK</button>

                </div>
            </div>

        </div>

    )
}

export default CreateFolderPopUp
