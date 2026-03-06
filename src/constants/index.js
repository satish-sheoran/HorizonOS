const BASE_MOBILE_WALLPAPER_URL = '/assets/wallpaper/mobile/';
const BASE_DESKTOP_WALLPAPER_URL = '/assets/wallpaper/desktop/';


export const DEFAULT_WALLPAPER = {
    'mobile': 'space', //this is id of wallpapers
    'desktop': 'gradient-abstract'

}
export const Wallpapers = {
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
        }
    ]
}