import React, { act, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ACCENT_COLORS } from '../../constants/style';
import * as Icons from 'lucide-react'
import gsap from 'gsap';
import { useDebounce } from '../../utils/UseDebounce';
import { setSearchInputVal } from '../../redux/features/NotesStrorage'

const Search = ({ Theme, ThemeColors, AccentColors }) => {

    const dispatch = useDispatch();
    const Device = useSelector((store) => store.Device.currDevice);
    const { Name: FontName, Weights } = useSelector(store => store.wallpaper.Font);
    const { Sizes } = useSelector(store => store.wallpaper.FontSize) //font sizes
    const { Animation } = useSelector(store => store.wallpaper.AnimationName) //animation name
    const activeTab = useSelector(store => store.Notes.activeTab) // notes tab Or task tab for notes app

    // states
    const [inputVal, setInputVal] = useState('')
    const [isFocused, setisFocused] = useState(false) //to check if input is focused
    const [showInput, setShowInput] = useState(false) //to check if input is focused

    // refs
    const inputRef = useRef(null) //to animate showing/not showing Input area

    //debounce fn
    const debounceInput = useDebounce(inputVal, 400)


    useEffect(() => { dispatch(setSearchInputVal({ inputVal })) }, [debounceInput])

    useLayoutEffect(() => {
        if (!inputRef.current) return;

        if (activeTab !== 'Notes') {
            setShowInput(false)
            setisFocused(false)
            setInputVal('')
            dispatch(setSearchInputVal({ inputVal: '' }))
        }

        gsap.to(inputRef.current, {
            scaleX: showInput ? 1 : 0,
            transformOrigin: 'left',
            duration: 0.3,
            ease: Animation ?? 'back.out(3)'
        })

    }, [showInput, activeTab])


    return (
        <div className={`flex items-center gap-1 grow`}>

            {activeTab === 'Notes' && <span style={{ color: AccentColors.CODE }} className='cursor-pointer p-1 active:scale-95'
                onClick={() => {
                    if (!showInput) setShowInput(true);
                    else {
                        if ((inputVal ?? '').trim()) setShowInput(true);
                        else {
                            setShowInput(false)
                            setInputVal('')
                        }
                    }
                }}
            >
                <Icons.Search strokeWidth={2.5} />
            </span>}
            <input
                ref={inputRef}
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                type="text"
                spellCheck={false}
                onFocus={() => setisFocused(true)}
                onBlur={() => setisFocused(false)}
                placeholder="Search City..."
                style={{
                    backgroundColor: ThemeColors.header,
                    borderColor: isFocused ? ACCENT_COLORS.find(({ COLOR }) => COLOR === 'Blue').CODE : ThemeColors.third,
                    fontSize: Device !== 'Desktop' ? Sizes.Small : `${(Sizes.Small.slice(0, -3)) * 1.1}rem`,
                    color: ThemeColors.primaryText,
                    fontFamily: Weights.SemiBold,
                }}
                className={`scale-x-0 w-full py-1.5 rounded-2xl ${Device !== 'Desktop' ? 'px-3' : 'px-2.5'} border font-semibold outline-none focus:ring-0  focus:outline-none`}
            />
        </div>
    )
}

export default Search