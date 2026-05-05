import React from 'react'
import { toast } from 'react-toastify'
import { MessageCircleQuestionMark, UserRoundPen } from 'lucide-react'
import { SETTINGS_SECTIONS } from '../../constants/Settings'

const ExtraQuery = ({ theme, Device, fullScreen, Section }) => {
    return (
        <div className={`flex  pt-3 pb-5 px-[2.5%] md:px-[2%] ${Device !== 'Desktop' ? 'w-full h-fit' : !fullScreen ? 'w-full h-fit' : 'w-3/10 h-full pt-10 justify-center sticky left-0 top-0'}`}>

            <div className={`${!fullScreen ? 'w-full' : 'w-fit'} h-fit flex flex-col gap-4`}>

                <div className={`flex flex-col gap-2 rounded-xl 
                    ${!fullScreen ?
                        `py-4 px-5 ${theme !== 'dark' ? 'bg-(--bg-light-window-header)' : 'bg-(--primary-dark-clr)'}`
                        : ''}
                    `}>

                    <p className={`w-fit ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'} font-bold select-none`}>Need other settings?</p>

                    <div className={`w-fit flex flex-col gap-1 text-(--text-currCat) text-sm select-none`}>

                        {SETTINGS_SECTIONS.find(({ title }) => title === Section)?.extraQuery?.map(({ query }, idx) => {
                            return <span key={idx}
                                onClick={() => toast.info('Feature Coming Soon...')}
                                className='active:opacity-75 hover:opacity-75'>{query}</span>
                        })
                        }
                    </div>
                </div>

                {fullScreen && Device === 'Desktop' && <div className={`w-fit flex flex-col gap-2.5 ${theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>
                    <div
                        onClick={() => toast.info('Feature Coming Soon...')}
                        className='hover:opacity-80 flex gap-2 items-center text-sm font-semibold select-none'>
                        <span><MessageCircleQuestionMark size={20} strokeWidth={2} /></span>
                        <span>Get help</span>
                    </div>
                    <div
                        onClick={() => toast.info('Feature Coming Soon...')}
                        className='hover:opacity-80 flex gap-2 items-center text-sm font-semibold select-none'>
                        <span><UserRoundPen size={20} strokeWidth={2} /></span>
                        <span>Give feedback</span>
                    </div>
                </div>}
            </div>

        </div >
    )
}

export default ExtraQuery