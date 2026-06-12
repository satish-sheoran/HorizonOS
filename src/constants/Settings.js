export const OS_NAME = 'Horizon OS';
export const OS_VERSION = '1.0.10.0 HRZNNV';


export const SETTINGS_SECTIONS = [
    {
        title: 'About Us',
        icon: 'Info',
        options: [
            {
                Name: 'OS name',
                value: OS_NAME
            },
            {
                Name: 'Storage',
                value: '20.3 GB/64 GB'
            },
            {
                Name: 'OS version',
                value: OS_VERSION
            },
            {
                Name: 'Developer',
                value: 'Satish Sheoran'
            },
            {
                Name: 'About HorizonOS',
                value: ''
            },
            {
                Name: 'Factory reset',
                value: ''
            },

        ],
        DeepOptions: [{
            Name: 'About HorizonOS'
        }, {
            Name: 'Factory reset'
        }],
        extraQuery: [
            {
                query: 'Change wallpaper'
            },
            {
                query: 'About Developer and Horizon OS'
            }
        ]
    },
    {
        title: 'Display',
        icon: 'Monitor',
        options: [
            {
                Name: 'Theme',
                secName: 'Colour scheme',
                options: [{
                    option: 'ThemeSelection',
                    value: '',
                }, {
                    option: 'DarkOptions',
                    value: 'Dark mode options',
                }, {
                    option: 'AutomaticTheme',
                    value: 'Automatic theme'
                }]

            },
            {
                Name: 'Screen',
                secName: 'Screen',
                options: [{
                    option: 'ColourScheme',
                    value: 'Colour Scheme',
                }, {
                    option: 'RefreshRate',
                    value: 'Refresh rate'
                }
                ]
            },
            {
                Name: 'Font',
                secName: 'Font',
                options: [{
                    option: 'FontName',
                    value: 'Font',
                }, {
                    option: 'FontSetting',
                    value: 'Font settings'
                }]
            }
        ],
        DeepOptions: [{
            Name: 'Dark mode options Deep'
        }, {
            Name: 'Colour Scheme Deep'
        }, {
            Name: 'Font settings Deep'
        }],
        extraQuery: [
            {
                query: 'Change wallpaper'
            },
            {
                query: 'About Developer and Horizon OS'
            }
        ]
    },
    {
        title: 'Apps',
        icon: 'LayoutGrid',
        options: [{
            Name: 'AppsArea',
            secName: 'App Management',
            options: [{
                option: 'SystemApps',
                value: 'System apps',
            }, {
                option: 'ManageApps',
                value: 'Manage apps'
            }, {
                option: 'UninstallApps',
                value: 'Uninstall apps'
            }, {
                option: 'AppLock',
                value: 'App lock',
            },]
        }],
        extraQuery: [
            {
                query: 'Change wallpaper'
            },
            {
                query: 'About Developer and Horizon OS'
            }
        ],
        DeepOptions: [{
            Name: 'App lock Deep'
        }, {
            Name: 'Manage apps Deep'
        }, {
            Name: 'System apps Deep'
        }, {
            Name: 'Uninstall apps Deep'
        }]
    },
    {
        title: 'Additional Settings',
        icon: 'HousePlus',
        options: [
            {
                Name: 'DeviceSection',
                secName: 'Device',
                options: [
                    {
                        option: 'WallpaperBehaviour',
                        value: 'Change wallpaper'
                    },
                    {
                        option: 'DateNTime',
                        value: '12hr format',
                    },
                ]
            }, {
                Name: 'AdditionalSection',
                secName: 'Additional',
                options: [{
                    option: 'ResetSettings',
                    value: 'Reset settings'
                }, {
                    option: 'DeveloperOptions',
                    value: 'Developer options'
                }
                ]
            }

        ],
        extraQuery: [
            {
                query: 'Change wallpaper'
            },
            {
                query: 'About Developer and Horizon OS'
            }
        ],
        DeepOptions: [{
            Name: 'Change wallpaper Deep'
        }, {
            Name: 'Developer options Deep'
        }, {
            Name: 'Reset settings Deep'
        }]

    },
    {
        title: 'Feedback',
        icon: 'MessageCircleQuestionMark',
        extraQuery: [
            {
                query: 'Change wallpaper'
            },
            {
                query: 'About Developer and Horizon OS'
            }
        ]

    }
]




// about section

export const DEV_DETAILS = {
    Name: 'Satish Kumar',

    Role: 'Frontend Developer & UI Engineer',

    'Description': 'Hi, I’m Satish — a frontend developer focused on modern UI systems, responsive apps,smooth and dynamic user experiences. HorizonOS is a personal project built to explore advanced frontend engineering concepts.',

    Disclaimer: 'HorizonOS is a original independent project created for portfolio purposes. Unauthorized redistribution without credit is discouraged.',

    ImgURL: '/src/assets/images/me3.jpeg'
}

export const PROJECT_DETAILS = {
    Mobile: [
        'HorizonOS is a browser-based interactive OS experience inspired by modern desktop environments.',

        'Built entirely with frontend technologies, it features responsive layouts, draggable windows, smooth animations, and multi-app interaction across desktop, tablet, and mobile devices.',

        'It includes apps like Notes, Calculator, Settings, Clock, and Games Arena, focused on clean UI, smooth usability, and responsive design.',

        'HorizonOS was created to explore advanced frontend engineering concepts such as state management, UI systems, animations, reusable architecture, and responsive application design.'
    ],
    Desktop: [
        'HorizonOS is a browser-based interactive operating system experience designed to stimulate the feel of a modern desktop environment.',

        'Built entirely using frontend technologies, HorizonOS combines responsive layouts, draggable windows, smooth animations, and multi-app interaction to create sin immersive and realistic user interface experience across desktop, tablet, and mobile devices.',

        'The operating system includes interactive applications such as Notes, Calculator, Settings, Clock, and Games Arena - all designed with a focus on smooth usability, clean UI architecture, and responsive behaviour.',

        'HorizonOS was created as a frontend engineering project to explore advanced concepts inculding state management, UI systems, animations, reusable architecture, and responsive application design.'
    ]
}

const BASE_TECH_URL = '/assets/icons/Tech/';

export const SETTINGS_FEATURES = [
    {
        Feat_Title: 'Draggable Windows',
        Feat_Desc: 'Move and organize elements seamlessly.',
        icon: 'Expand'
    },
    {
        Feat_Title: 'Multi-App Environment',
        Feat_Desc: 'Run multiple apps in one environment.',
        icon: 'Layers'
    },
    {
        Feat_Title: 'Responsive Design',
        Feat_Desc: 'Adapts to different screen sizes and orientations.',
        icon: 'MonitorSmartphone'
    },
    {
        Feat_Title: 'Interactive Applications',
        Feat_Desc: 'Engaging and dynamic user interactions.',
        icon: 'MousePointer2'
    },
    {
        Feat_Title: 'Smooth Animations',
        Feat_Desc: 'Fluid transitions and micro-interactions.',
        icon: 'LineSquiggle'
    },
    {
        Feat_Title: 'Real-Time Utilities',
        Feat_Desc: 'Live data , quick actions , real results.',
        icon: 'ClockFading'
    },
]
export const SETTINGS_TECHNOLOGIES = [
    {
        Tech_Name: 'ReactJS',
        icon: `${BASE_TECH_URL}ReactJS.svg`
    },
    {
        Tech_Name: 'Redux Toolkit',
        icon: `${BASE_TECH_URL}Redux.svg`
    },
    {
        Tech_Name: 'GSAP',
        icon: `${BASE_TECH_URL}GSAP.svg`
    },
    {
        Tech_Name: 'Tailwind CSS',
        icon: `${BASE_TECH_URL}TailwindCSS.svg`
    },
    {
        Tech_Name: 'Vite',
        icon: `${BASE_TECH_URL}Vite.svg`
    },
    {
        Tech_Name: 'JavaScript (ES6+)',
        icon: `${BASE_TECH_URL}JavaScript.svg`
    }
]


export const SETTINGS_FACTORY_RESET_OPTIONS = [
    {
        icon: 'Palette',
        option: 'Personalization',
        description: 'Wallpaper, themes,colors'
    },
     {
        icon: 'Folder',
        option: 'Notes & Categories',
        description: 'All notes and categories will be deleted'
    },
     {
        icon: 'Settings',
        option: 'System Settings',
        description: 'All settings will be restored to default'
    },
]