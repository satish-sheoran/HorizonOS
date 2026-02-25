const BASE_MOBILE_WALLPAPER_URL = '/assets/wallpaper/mobile/';
const BASE_DESKTOP_WALLPAPER_URL = '/assets/wallpaper/desktop/';


export const DEFAULT_WALLPAPER = {
    'mobile': 'blue-abstract', //this is id of wallpapers
    'desktop': 'space'

}
export const Wallpapers = {
    'mobile': [
        {
            'name': 'Blue Abstract',
            'id': 'blue-abstract',
            'url': `${BASE_MOBILE_WALLPAPER_URL}blue-abstract.webp`
        },
        {
            'name': 'Dark Purple',
            'id': 'dark-purple',
            'url': `${BASE_MOBILE_WALLPAPER_URL}dark-purple.webp`
        },
        {
            'name': 'Glossy Green',
            'id': 'glossy-green',
            'url': `${BASE_MOBILE_WALLPAPER_URL}glossy-green.webp`
        },
        {
            'name': 'Gradient Abstract',
            'id': 'gradient-abstract',
            'url': `${BASE_MOBILE_WALLPAPER_URL}gradient-abstract.webp`
        },
        {
            'name': 'Space',
            'id': 'space',
            'url': `${BASE_MOBILE_WALLPAPER_URL}space.webp`
        }
    ],
    'desktop': [
        {
            'name': 'Blue Abstract',
            'id': 'blue-abstract',
            'url': `${BASE_DESKTOP_WALLPAPER_URL}blue-abstract.webp`
        },
        {
            'name': 'Dark Purple',
            'id': 'dark-purple',
            'url': `${BASE_DESKTOP_WALLPAPER_URL}dark-purple.webp`
        },
        {
            'name': 'Glossy Green',
            'id': 'glossy-green',
            'url': `${BASE_DESKTOP_WALLPAPER_URL}glossy-green.webp`
        },
        {
            'name': 'Gradient Abstract',
            'id': 'gradient-abstract',
            'url': `${BASE_DESKTOP_WALLPAPER_URL}gradient-abstract.webp`
        },
        {
            'name': 'Space',
            'id': 'space',
            'url': `${BASE_DESKTOP_WALLPAPER_URL}space.webp`
        }
    ]
}