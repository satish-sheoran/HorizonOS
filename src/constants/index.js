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
            description: 'Smooth gradients and flowing shapes for a minimal look.',
            id: 'gradient-abstract',
            theme: 'dark',
            url: `${BASE_MOBILE_WALLPAPER_URL}gradient-abstract.webp`
        },
        {
            name: 'Space',
            description: 'Stunning views of space and the universe beyond our planet.',
            id: 'space',
            theme: 'dark',
            url: `${BASE_MOBILE_WALLPAPER_URL}space.webp`
        },
        {
            name: 'Digital Art',
            description: 'Creative digital artwork with unique colors and vibes.',
            id: 'digital-art',
            theme: 'dark',
            url: `${BASE_MOBILE_WALLPAPER_URL}digital-art.webp`
        },
        {
            name: 'Galaxy Nature',
            description: 'The beauty of galaxies and comsmic wonders in vivid detail.',
            id: 'galaxy-nature',
            theme: 'dark',
            url: `${BASE_MOBILE_WALLPAPER_URL}galaxy-nature.webp`
        },
        {
            name: 'Morskie',
            description: 'Peaceful landscapes with lakes, mountains an greenery.',
            id: 'morskie',
            theme: 'light',
            url: `${BASE_MOBILE_WALLPAPER_URL}morskie.webp`
        },
        {
            name: 'Modern Gradient',
            description: 'Clean and modern gradients for a sleek and stylish feel.',
            id: 'modern-gradient',
            theme: 'light',
            url: `${BASE_MOBILE_WALLPAPER_URL}modern-gradient.webp`
        }
    ],
    'desktop': [
        {
            name: 'Gradient Abstract',
            description: 'Smooth gradients and flowing shapes for a minimal look.',
            id: 'gradient-abstract',
            theme: 'light',
            url: `${BASE_DESKTOP_WALLPAPER_URL}gradient-abstract.webp`
        },
        {
            name: 'Space',
            description: 'Stunning views of space and the universe beyond our planet.',
            id: 'space',
            theme: 'dark',
            url: `${BASE_DESKTOP_WALLPAPER_URL}space.webp`
        },
        {
            name: 'Digital Art',
            description: 'Creative digital artwork with unique colors and vibes.',
            id: 'digital-art',
            theme: 'dark',
            url: `${BASE_DESKTOP_WALLPAPER_URL}digital-art.webp`
        },
        {
            name: 'Galaxy Nature',
            description: 'The beauty of galaxies and comsmic wonders in vivid detail.',
            id: 'galaxy-nature',
            theme: 'dark',
            url: `${BASE_DESKTOP_WALLPAPER_URL}galaxy-nature.webp`
        },
        {
            name: 'Morskie',
            description: 'Peaceful landscapes with lakes, mountains an greenery.',
            id: 'morskie',
            theme: 'dark',
            url: `${BASE_DESKTOP_WALLPAPER_URL}morskie.webp`
        },
        {
            name: 'Modern Gradient',
            description: 'Clean and modern gradients for a sleek and stylish feel.',
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
    calculator: { isOpen: false, zIndex: INITIAL_Z_INDEX, fullScreen: false, windowRatio: { width: 'w-full sm:w-[50%] md:min-w-[35%]', height: 'h-full sm:h-[50%] md:h-[65%]' }, default: { width: 'w-full sm:w-[50%] md:min-w-[35%]', height: 'h-full sm:h-[50%] md:h-[65%]' } },

    notes: { isOpen: false, zIndex: INITIAL_Z_INDEX, fullScreen: false, windowRatio: { width: 'w-full md:max-w-[75%]', height: 'h-full sm:h-[90%] md:h-[75%]' }, default: { width: 'w-full md:max-w-[75%]', height: 'h-full sm:h-[90%] md:h-[75%]' } },

    settings: { isOpen: false, zIndex: INITIAL_Z_INDEX, fullScreen: false, windowRatio: { width: 'w-full md:max-w-[75%]', height: 'h-full sm:h-[90%] md:h-[75%]' }, default: { width: 'w-full md:max-w-[75%]', height: 'h-full sm:h-[90%] md:h-[75%]' } },

    clock: { isOpen: false, zIndex: INITIAL_Z_INDEX, fullScreen: false, windowRatio: { width: 'w-full sm:w-[50%] md:min-w-[35%]', height: 'h-full sm:h-[50%] md:h-[65%]' }, default: { width: 'w-full sm:w-[50%] md:min-w-[35%]', height: 'h-full sm:h-[50%] md:h-[65%]' } },
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

export const THEMES = [
    {
        Theme: 'light'
    }, {
        Theme: 'dark'
    }]


export const ALL_APPS = [
    {
        id: "calculator",
        name: "Calculator",
        icon: '/assets/icons/calculator.webp',
        size: '24 MB',
        dataSize: '0 MB',
        version: 'v1.2.0',
        desc: 'System preferences and configuraions',
        theme: 'light',
        canOpen: true,
    },
    {
        id: "notes",
        name: "Notes",
        icon: '/assets/icons/notes.webp',
        size: '54 MB',
        dataSize: '0 MB',
        version: 'v1.5.0',
        desc: 'Create and manage your notes',
        theme: 'light',
        canOpen: true,
    },
    {
        id: "settings",
        name: "Settings",
        icon: '/assets/icons/settings.webp',
        size: '5 MB',
        dataSize: '0 MB',
        version: 'v1.3.2',
        desc: 'Perform calculations quickly',
        theme: 'light',
        canOpen: true,
    },
    {
        id: "clock",
        name: "Clock",
        icon: '/assets/icons/clock.webp',
        size: '78 MB',
        dataSize: '0 MB',
        version: 'v1.0.2',
        desc: 'View time and alarms',
        theme: 'light',
        canOpen: true,
    }
]

export const OS_Storage = '8.0 GB'


export const RESET_DETAILS = [
    {
        App: 'Calculator',
        Logo: '/assets/icons/calculator.webp',
        Description: 'Reset calculations and preferences',
        DataSize : '100KB',
        ResetsDetail: [
            'Calculation history',
            'Theme & appearance',
        ]
    },
    {
        App: 'Notes',
        Logo: '/assets/icons/notes.webp',
        Description: 'Reset notes, categories, tasks and preferences',
        DataSize : '5MB',
        ResetsDetail: [
            'All notes, tasks and categories',
            'Notes app settings',
            'Theme & preferences',
        ]
    },
    {
        App: 'Settings',
        Logo: '/assets/icons/settings.webp',
        Description: 'Reset all settings and preferences',
        DataSize : '3.4MB',
        ResetsDetail: [
            'Wallpaper & appearance',
            'Accent colors, Animations and Refresh Rate',
            'System settings and preferences',

        ]
    },
    {
        App: 'Clock',
        Logo: '/assets/icons/clock.webp',
        Description: 'Reset clocks, alarms and preferences',
        DataSize : '50KB',
        ResetsDetail: [
            'World clocks and alarms',
            'Theme & preferences',
        ]
    }
]