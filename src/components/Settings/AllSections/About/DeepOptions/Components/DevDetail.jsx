import React from 'react'
import { CodeXml, Monitor, ShieldHalf, Star, StarIcon, User } from 'lucide-react'


const DevDetail = ({ Device, theme }) => {
    return (
        <div className={`developer flex flex-col gap-4 p-[2.5%] rounded-xl ${theme !=='dark'?'bg-(--primary-light-clr)':'bg-(--bg-dark-header)'}`}>
            <div className={`flex gap-2 font-bold text-lg ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>
                <User  className={`text-(--color-accent)`} strokeWidth={2.5} />
                <span>Developer</span>
            </div>

            <div className={`gap-3 details flex ${Device !== 'Desktop' ? 'flex-col' : 'justify-between'}`}>
                <div className={`rounded-xl left ${Device !== 'Desktop' ? 'w-full h-[20vh]' : 'w-1/4'}  bg-green-100`}></div>

                <div className={`${Device !== 'Desktop' ? 'w-full' : ''} gap-2 right w-3/4 flex flex-col`}>
                    <span className='flex flex-col'>
                        <span className={`text-lg font-bold name ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>Satish Kumar</span>
                        <span className={`role font-medium  text-[0.85rem] ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>Frontend Developer & UI Engineer</span>
                    </span>

                    <p className={`desc-about-dev font-[450] text-[0.8rem]  ${theme !== 'dark' ? 'text-(--sec-dark-clr)' : 'text-(--sec-light-clr)'}`}>
                        Hi, I’m Satish — a frontend developer focused on modern UI systems, responsive apps,smooth and dynamic user experiences.
                        HorizonOS is a personal project built to explore advanced frontend engineering concepts.

                    </p>
                </div>
            </div>

            <div className={`extra flex gap-1 items-end ${Device!=='Desktop'?'text-[0.55rem]':'text-[0.65rem]'} ${theme !== 'dark' ? 'text-(--sec-dark-clr)' : 'text-(--sec-light-clr)'}`}>
                <span className='text-(--color-accent)'><ShieldHalf size={Device!=='Desktop'?25:20} /></span>
                <span className='text-(--color-light-accent)'>
                    HorizonOS is a original independent project created for portfolio purposes. Unauthorized redistribution without credit is discouraged.
                </span>
            </div>
        </div>)
}

export default DevDetail