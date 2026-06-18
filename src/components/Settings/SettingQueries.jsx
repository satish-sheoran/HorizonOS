import React from 'react'
import { toast } from 'react-toastify'
import { MessageCircleQuestionMark, UserRoundPen } from 'lucide-react'
import { COMMON_COLORS } from '../../constants/style'

const SettingQueries = ({ Theme, fullScreen, Device, ThemeColors,AccentColors , Section,Queries }) => {
    return (
       Queries ? <div className={` flex  ${Device !== 'Desktop' ? 'w-full h-fit' : !fullScreen ? 'w-full h-fit' : 'p-[2.5%] w-3/10 h-full pt-10 justify-center sticky left-0 top-0'}`}>

            <div className={`${!fullScreen ? 'w-full' : 'w-fit'} h-fit flex flex-col gap-4`}>

                <div style={{backgroundColor : ThemeColors.third}} className={`duration-500 ease-out flex flex-col gap-2 rounded-xl 
                    py-4 px-5 `}>

                    <p style={{color : ThemeColors.primaryText}} className={`duration-500 ease-out w-fit font-bold select-none`}>Need other settings?</p>

                    <div style={{color : COMMON_COLORS.Blue}} className={`w-fit flex flex-col gap-1 text-sm select-none`}>

                        {Queries?.map(({ query }, idx) => {
                            return <span key={idx}
                                onClick={() => toast.info('Querying Still Under Development')}
                                className='active:opacity-75 hover:opacity-75'>{query}</span>
                        })
                        }
                    </div>
                </div>

                {fullScreen && Device === 'Desktop' && <div style={{color : ThemeColors.primaryText}} className={`w-fit flex flex-col gap-2.5 ${Theme !== 'dark' ? 'text-(--primary-dark-clr)' : 'text-(--primary-light-clr)'}`}>
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
        :
        <></>
    )
}

export default SettingQueries