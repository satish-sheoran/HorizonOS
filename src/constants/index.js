const BASE_MOBILE_WALLPAPER_URL = '/assets/wallpaper/mobile/';
const BASE_DESKTOP_WALLPAPER_URL = '/assets/wallpaper/desktop/';


const DEFAULT_WALLPAPER = {
    'mobile': 'morskie', //this is id of wallpapers
    'desktop': 'digital-art'

}
const Wallpapers = {
    'mobile': [
        {
            name: 'Gradient Abstract',
            id: 'gradient-abstract',
            theme: 'dark',
            txtColor: 'white',
            url: `${BASE_MOBILE_WALLPAPER_URL}gradient-abstract.webp`
        },
        {
            name: 'Space',
            id: 'space',
            theme: 'dark',
            txtColor: 'white',
            url: `${BASE_MOBILE_WALLPAPER_URL}space.webp`
        },
        {
            name: 'Digital-art',
            id: 'digital-art',
            theme: 'dark',
            txtColor: 'white',
            url: `${BASE_MOBILE_WALLPAPER_URL}digital-art.webp`
        },
        {
            name: 'Galaxy-nature',
            id: 'galaxy-nature',
            theme: 'dark',
            txtColor: 'white',
            url: `${BASE_MOBILE_WALLPAPER_URL}galaxy-nature.webp`
        },
        {
            name: 'Morskie',
            id: 'morskie',
            theme: 'light',
            txtColor: 'black',
            url: `${BASE_MOBILE_WALLPAPER_URL}morskie.webp`
        },
        {
            name: 'Modern-gradient',
            id: 'modern-gradient',
            theme: 'light',
            txtColor: 'black',
            url: `${BASE_MOBILE_WALLPAPER_URL}modern-gradient.webp`
        }
    ],
    'desktop': [
        {
            name: 'Gradient Abstract',
            id: 'gradient-abstract',
            theme: 'light',
            txtColor: 'black',
            url: `${BASE_DESKTOP_WALLPAPER_URL}gradient-abstract.webp`
        },
        {
            name: 'Space',
            id: 'space',
            theme: 'dark',
            txtColor: 'white',
            url: `${BASE_DESKTOP_WALLPAPER_URL}space.webp`
        },
        {
            name: 'Digital-art',
            id: 'digital-art',
            theme: 'dark',
            txtColor: 'white',
            url: `${BASE_DESKTOP_WALLPAPER_URL}digital-art.webp`
        },
        {
            name: 'Galaxy-nature',
            id: 'galaxy-nature',
            theme: 'dark',
            txtColor: 'white',
            url: `${BASE_DESKTOP_WALLPAPER_URL}galaxy-nature.webp`
        },
        {
            name: 'Morskie',
            id: 'morskie',
            theme: 'dark',
            txtColor: 'white',
            url: `${BASE_DESKTOP_WALLPAPER_URL}morskie.webp`
        },
        {
            name: 'Modern-gradient',
            id: 'modern-gradient',
            theme: 'light',
            txtColor: 'black',
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


const WINDOW_CONFIG = {
    calculator: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    notes: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    settings: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    clock: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };