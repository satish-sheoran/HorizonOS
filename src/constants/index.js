const BASE_MOBILE_WALLPAPER_URL = '/assets/wallpaper/mobile/';
const BASE_DESKTOP_WALLPAPER_URL = '/assets/wallpaper/desktop/';


const DEFAULT_WALLPAPER = {
    'mobile': 'morskie', //this is id of wallpapers
    'desktop': 'morskie'

}
const Wallpapers = {
    'mobile': [
        {
            name: 'Gradient Abstract',
            id: 'gradient-abstract',
            theme: 'dark',
            url: `${BASE_MOBILE_WALLPAPER_URL}gradient-abstract.webp`
        },
        {
            name: 'Space',
            id: 'space',
            theme: 'dark',
            url: `${BASE_MOBILE_WALLPAPER_URL}space.webp`
        },
        {
            name: 'Digital-art',
            id: 'digital-art',
            theme: 'dark',
            url: `${BASE_MOBILE_WALLPAPER_URL}digital-art.webp`
        },
        {
            name: 'Galaxy-nature',
            id: 'galaxy-nature',
            theme: 'dark',
            url: `${BASE_MOBILE_WALLPAPER_URL}galaxy-nature.webp`
        },
        {
            name: 'Morskie',
            id: 'morskie',
            theme: 'light',
            url: `${BASE_MOBILE_WALLPAPER_URL}morskie.webp`
        },
        {
            name: 'Modern-gradient',
            id: 'modern-gradient',
            theme: 'light',
            url: `${BASE_MOBILE_WALLPAPER_URL}modern-gradient.webp`
        }
    ],
    'desktop': [
        {
            name: 'Gradient Abstract',
            id: 'gradient-abstract',
            theme: 'light',
            url: `${BASE_DESKTOP_WALLPAPER_URL}gradient-abstract.webp`
        },
        {
            name: 'Space',
            id: 'space',
            theme: 'dark',
            url: `${BASE_DESKTOP_WALLPAPER_URL}space.webp`
        },
        {
            name: 'Digital-art',
            id: 'digital-art',
            theme: 'dark',
            url: `${BASE_DESKTOP_WALLPAPER_URL}digital-art.webp`
        },
        {
            name: 'Galaxy-nature',
            id: 'galaxy-nature',
            theme: 'dark',
            url: `${BASE_DESKTOP_WALLPAPER_URL}galaxy-nature.webp`
        },
        {
            name: 'Morskie',
            id: 'morskie',
            theme: 'dark',
            url: `${BASE_DESKTOP_WALLPAPER_URL}morskie.webp`
        },
        {
            name: 'Modern-gradient',
            id: 'modern-gradient',
            theme: 'light',
            url: `${BASE_DESKTOP_WALLPAPER_URL}modern-gradient.webp`
        }
    ]
}


const dockApps = [
    {
        id: "calculator",
        name: "Calculator",
        icon: '/assets/icons/calculator.webp',
        canOpen: true,
    },
    {
        id: "notes",
        name: "Notes",
        icon: '/assets/icons/notes.webp',
        canOpen: true,
    },
    {
        id: "settings",
        name: "Settings",
        icon: '/assets/icons/settings.webp',
        canOpen: true,
    },
    {
        id: "clock",
        name: "Clock",
        icon: '/assets/icons/clock.webp',
        canOpen: true,
    }

]

export { DEFAULT_WALLPAPER, Wallpapers, dockApps }

const INITIAL_Z_INDEX = 1000;


// fullscreen value changes when user uses window controls to make the app full screen or default one 
const WINDOW_CONFIG = {
    calculator: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, fullScreen: false, windowRatio: { width: 'w-full sm:w-[50%] md:min-w-[35%]', height: 'h-full sm:h-[50%] md:h-[65%]' }, default: { width: 'w-full sm:w-[50%] md:min-w-[35%]', height: 'h-full sm:h-[50%] md:h-[65%]' } },

    notes: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, fullScreen: false, windowRatio: { width: 'w-full md:min-w-[55%]', height: 'h-full sm:h-[90%] md:h-[75%]' }, default: { width: 'w-full md:min-w-[55%]', height: 'h-full sm:h-[90%] md:h-[75%]' } },

    settings: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, fullScreen: false, windowRatio: { width: 'w-full', height: 'h-full sm:h-[90%] md:h-[75%]' }, default: { width: 'w-full', height: 'h-full sm:h-[90%] md:h-[75%]' } },

    clock: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, fullScreen: false, windowRatio: { width: 'fit', height: 'fit' }, default: { width: 'w-[70%] md:w-[35%]', height: 'fit' } },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };


export const CALC_BTNS = [
    {
        symbol: 'AC',
        id: 'clear'
    },
    {
        symbol: 'X',
        id: 'Cut'
    },
    {
        symbol: '%',
        id: 'remainder'
    },
    {
        symbol: '/',
        id: 'divide'
    },
    {
        symbol: '7',
        id: 'seven'
    },
    {
        symbol: '8',
        id: 'eight'
    },
    {
        symbol: '9',
        id: 'nine'
    },
    {
        symbol: '*',
        id: 'multiply'
    },
    {
        symbol: '4',
        id: 'four'
    },
    {
        symbol: '5',
        id: 'five'
    },
    {
        symbol: '6',
        id: 'six'
    },
    {
        symbol: '-',
        id: 'substract'
    },
    {
        symbol: '1',
        id: 'one'
    },
    {
        symbol: '2',
        id: 'two'
    },
    {
        symbol: '3',
        id: 'three'
    },
    {
        symbol: '+',
        id: 'addition'
    },
    {
        symbol: '0',
        id: 'zero'
    },
    {
        symbol: '.',
        id: 'dot'
    },
    {
        symbol: '=',
        id: 'equals To'
    }
]