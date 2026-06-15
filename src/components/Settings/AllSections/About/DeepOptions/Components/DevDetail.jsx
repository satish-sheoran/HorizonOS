import React from 'react'
import { CodeXml, Monitor, ShieldHalf, Star, StarIcon, User } from 'lucide-react'
import { DEV_DETAILS } from '../../../../../../constants/Settings'


const DevDetail = ({ Device, Theme,ThemeColors,AccentColors }) => {
    return (
        <div className={`developer flex flex-col gap-4 p-[2.5%] rounded-2xl ${Theme !== 'dark' ? 'bg-(--primary-light-clr)' : 'bg-(--bg-dark-header)'}`}>
            <div className={`flex gap-2 font-bold text-lg ${Theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>
                <User className={`text-(--color-accent)`} strokeWidth={2.5} />
                <span>Developer</span>
            </div>

            <div className={`gap-3 details flex ${Device !== 'Desktop' ? 'flex-col' : 'justify-between'}`}>

                <div className={`rounded-2xl flex items-center justify-center left ${Device !== 'Desktop' ? 'w-full h-[20vh]' : 'w-1/4'}`}>

                    <img src={DEV_DETAILS.ImgURL} alt="Developer's pic" className={`${Device !== 'Desktop' ? 'w-1/2 h-full rounded-2xl' : 'w-full rounded-3xl'} object-cover`} />

                </div>

                <div className={` ${Device !== 'Desktop' ? 'w-full' : 'justify-center'} gap-2 right w-3/4 flex flex-col`}>
                    <span className='flex flex-col'>
                        <span className={`text-lg font-bold name ${Theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>{DEV_DETAILS.Name}</span>
                        <span className={`role font-medium  text-[0.85rem] ${Theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>{DEV_DETAILS.Role}</span>
                    </span>

                    <p className={`desc-about-dev font-[450] text-[0.8rem]  ${Theme !== 'dark' ? 'text-(--sec-dark-clr)' : 'text-(--sec-light-clr)'}`}>
                        {DEV_DETAILS.Description}

                    </p>
                </div>
            </div>

            <div className={`extra flex gap-1 items-end ${Device !== 'Desktop' ? 'text-[0.55rem]' : 'text-[0.65rem]'} ${Theme !== 'dark' ? 'text-(--sec-dark-clr)' : 'text-(--sec-light-clr)'}`}>
                <span className='text-(--color-accent)'><ShieldHalf size={Device !== 'Desktop' ? 25 : 20} /></span>
                <span className='text-(--color-light-accent)'>
                    {DEV_DETAILS.Disclaimer}
                </span>
            </div>
        </div>)
}

export default DevDetail