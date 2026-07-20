export const OS_NAME = 'Horizon OS';

export const SECTIONS = [
    // About Us
    {
        Section: 'About Us',
        FileName: 'AboutUs',
        Icon: 'Info',
        Queries: null,
        SubSections: [
            {
                Section: 'Horizon OS',
                FileName: 'HorizonOS',
                Options: null
            },
            {
                Section: 'Name and Storage',
                FileName: 'NameNStorage',
                Options: [
                    {
                        Option: 'OS name',
                        FileName: 'OSName',
                        Toggleable: false,
                        action: null
                    },
                    {
                        Option: 'Storage',
                        FileName: 'Storage',
                        Toggleable: false,
                        action: null
                    },
                ]
            },
            {
                Section: 'OS Details',
                FileName: 'OsDetails',
                Options: [
                    {
                        Option: 'OS version',
                        FileName: 'OSVersion',
                        Toggleable: false,
                        action: null
                    },
                    {
                        Option: 'Developer',
                        FileName: 'Developer',
                        Toggleable: false,
                        action: null,
                    },
                    {
                        Option: 'About HorizonOS',
                        FileName: 'AboutHorizonOS',
                        Toggleable: false,
                        action: null
                    },
                    {
                        Option: 'Factory reset',
                        FileName: 'FactoryReset',
                        Toggleable: false,
                        action: null
                    },
                    {
                        Option: 'HRZN Timeline',
                        FileName: 'HRZNTimeline',
                        Toggleable: false,
                        action: null
                    }
                ]
            },
        ],
        DeepSection: [{
            Section: 'About HorizonOS',
            FileName: 'AboutHorizonOS',
            SubSections: null,
            Options: null
        }, {
            Section: 'Factory reset',
            FileName: 'Factoryreset',
            SubSections: null,
            Options: null
        }, {
            Section: 'HRZN Timeline',
            FileName: 'VersionDetails',
            SubSections: null,
            Options: null
        }]
    },
    // Display
    {
        Section: 'Display',
        FileName: 'Display',
        Icon: 'Monitor',
        Queries: [
            { query: 'Change Wallpaper' },
            { query: 'Change Time Format' }
        ],
        SubSections: [
            {
                Section: 'Colour Scheme',
                FileName: 'Theme',
                Options: [
                    {
                        Option: 'Switch theme',
                        FileName: 'ThemeSelection',
                        Toggleable: false,
                        action: null
                    },
                    {
                        Option: 'Dark mode options',
                        FileName: 'DarkOptions',
                        Toggleable: false,
                        action: null
                    },
                    {
                        Option: 'Automatic theme',
                        FileName: 'AutomaticTheme',
                        Toggleable: true,
                        action: 'AutomaticTheme'
                    },
                ]
            },
            {
                Section: 'Screen',
                FileName: 'Screen',
                Options: [
                    {
                        Option: 'Colour Scheme',
                        FileName: 'ColourScheme',
                        Toggleable: false,
                        action: null
                    },
                    {
                        Option: 'Refresh rate',
                        FileName: 'RefreshRate',
                        Toggleable: false,
                        action: null
                    }, {
                        Option: "Control Animations",
                        FileName: 'Animation',
                        Toggleable: false,
                        action: null
                    }
                ]
            },
            {
                Section: 'Font',
                FileName: 'Font',
                Options: [
                    {
                        Option: 'Font',
                        FileName: 'FontName',
                        Toggleable: false,
                        action: null
                    },
                    {
                        Option: 'Font settings',
                        FileName: 'FontSetting',
                        Toggleable: false,
                        action: null
                    },
                ]
            },
        ],
        DeepSection: [
            {
                Section: 'Dark mode options',
                FileName: 'DarkmodeoptionsDeep',
                SubSections: [
                    {
                        Section: 'Dark mode for apps',
                        FileName: 'SepDarkModeForApps',
                        Options: null
                    }, {
                        Section: 'Dark mode enabler',
                        FileName: 'DarkModeEnabler',
                        Options: null
                    }
                ],
                Options: null
            },
            {
                Section: 'Colour Scheme',
                FileName: 'ColourSchemeDeep',
                SubSections: [
                    {
                        Section: 'Accent Colour',
                        FileName: 'PickAccentColor',
                        Options: null
                    },
                    {
                        Section: 'Preview',
                        FileName: 'AccentColorPreview',
                        Options: null
                    }
                ],
                Options: null
            },
            {
                Section: 'Control Animations',
                FileName: 'ControlAnimationsDeep',
                SubSections: [
                    {
                        Section: 'Animations Speed',
                        FileName: 'ChooseAnimation',
                        Options: null
                    },
                    {
                        Section: 'Animation Style',
                        FileName: 'AnimationName',
                        Options: null
                    },
                    {
                        Section: 'Preview',
                        FileName: 'AnimationPreview',
                        Options: null
                    }
                ],
                Options: null
            },
            {
                Section: 'Font settings',
                FileName: 'FontsettingsDeep',
                SubSections: [
                    {
                        Section: 'Font Family',
                        FileName: 'FontFamily',
                        Options: null
                    }, {
                        Section: 'Font Sizes',
                        FileName: 'FontSizes',
                        Options: null
                    }
                ], Options: null
            }

        ]
    },

    // Apps
    {
        Section: 'Apps',
        FileName: 'Apps',
        Icon: 'LayoutGrid',
        Queries: [
            { query: 'Reset Settings' },
            { query: 'Different Theme For Apps' }
        ],
        SubSections: [
            {
                Section: 'Apps Related',
                FileName: 'AppsArea',
                Options: [
                    {
                        Option: 'App lock',
                        FileName: 'AppLock',
                        Toggleable: false,
                        action: null
                    },
                    {
                        Option: 'Manage apps ',
                        FileName: 'ManageApps',
                        Toggleable: false,
                        action: null
                    },
                    {
                        Option: 'Uninstall apps',
                        FileName: 'UninstallApps',
                        Toggleable: false,
                        action: null
                    }
                ]
            },
        ],

        DeepSection: [
            {
                Section: 'App lock',
                FileName: 'ApplockDeep',
                SubSections: null,
                Options: null
            }, {
                Section: 'Manage apps ',
                FileName: 'ManageappsDeep',
                SubSections: null,
                Options: null
            }, {
                Section: 'Uninstall apps',
                FileName: 'UninstallappsDeep',
                SubSections: null,
                Options: null
            }
        ]
    },

    //Additional Settings
    {
        Section: 'Additional Settings',
        FileName: 'AdditionalSettings',
        Icon: 'HousePlus',
        Queries: [
            { query: 'Factory Reset' },
        ],
        SubSections: [
            {
                Section: 'Additional',
                FileName: 'AdditionalSection',
                Options: [
                    {
                        Option: 'Reset settings',
                        FileName: 'ResetSettings',
                        Toggleable: false,
                        action: null
                    },
                    {
                        Option: 'Developer options',
                        FileName: 'DeveloperOptions',
                        Toggleable: false,
                        action: null
                    }
                ]
            },
            {
                Section: 'Device',
                FileName: 'DeviceSection',
                Options: [
                    {
                        Option: 'Change wallpaper',
                        FileName: 'WallpaperBehaviour',
                        Toggleable: false,
                        action: null
                    },
                    {
                        Option: '12hr format',
                        FileName: 'DateNTime',
                        Toggleable: true,
                        action: 'TimeFormat'

                    }
                ]
            }
        ],
        DeepSection: [
            {
                Section: 'Change wallpaper',
                FileName: 'ChangewallpaperDeep',
                SubSections: [
                    {
                        Section: 'Change Wallpaper',
                        FileName: 'wallpaperChange',
                        Options: null
                    },
                    {
                        Section: 'Preview',
                        FileName: 'WallpaperPreview',
                        Options: null
                    }
                ], Options: null
            }, {
                Section: 'Developer options',
                FileName: 'DeveloperoptionsDeep',
                SubSections: null,
                Options: null
            }, {
                Section: 'Reset settings',
                FileName: 'ResetsettingsDeep',
                SubSections: null,
                Options: []
            }

        ]
    },

]






// about section

export const DEV_DETAILS = {
    Name: 'Satish Kumar',

    Role: 'Frontend Developer & UI Engineer',

    'Description': 'Hi, I’m Satish — a frontend developer focused on modern UI systems, responsive apps,smooth and dynamic user experiences. HorizonOS is a personal project built to explore advanced frontend engineering concepts.',

    Disclaimer: 'HorizonOS is a original independent project created for portfolio purposes. Unauthorized redistribution without credit is discouraged.',

    ImgURL: '/me3.jpeg'
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
    ],
    Tablet: [
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
// About section : DONE

export const AnimationSpeedAndType = [
    {
        Name: 'Normal',
        Speed: '450ms',
        icon: 'Gauge',
        RefreshRate: '60 Hz',
        Description: 'Smooth and fluid for the best experience.'
    },
    {
        Name: 'Faster',
        Speed: '300ms',
        icon: 'Rabbit',
        RefreshRate: '90 Hz',
        Description: 'Fast animation for better experinece.'
    },
    {
        Name: 'Disabled',
        Speed: '0s',
        RefreshRate: 'Default',
        icon: 'CircleOff',
        Description: 'Disable all animations for maximum performace.'
    }
]
export const AnimationsName = [

    {
        Name: 'Smooth',
        Animation: 'sine.inOut',
        icon: 'LineSquiggle',
        description: 'Gentle acceleration and deceleration for natural motion.'
    },
    {
        Name: 'Expo Out',
        Animation: 'expo.out',
        icon: 'TrendingUp',
        description: 'Very fast start with a smooth finish.'
    },
    {
        Name: 'Back Out',
        Animation: 'back.out(3)',
        icon: 'Redo',
        description: 'Slightly overshoots before setting into place.'
    },
    {
        Name: 'Ease ',
        Animation: 'power2.out',
        icon: 'MoveRight',
        description: 'Starts quickly and slows before stopping.'
    },
    // {
    //     Name: 'Elastic Out',
    //     Animation: 'elastic.out(1,0.3)',
    //     icon: 'CctvIcon',
    //     description: 'Springs past the target.'
    // }
]

export const CSS_EASING = {
    'sine.inOut': 'cubic-bezier(0.455, 0.05, 0.55, 0.95)',
    "expo.out": 'cubic-bezier(0.19, 1, 0.22, 1)',
    "back.out(3)": 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    'power2.out': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
}

export const FONT_FAMILY = [
    {
        Name: 'System Default',
        Description: "Matches your device's native font.",
        Weights: {
            Regular: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            SemiBold: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            Bold: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            ExtraBold: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
        }
    },
    {
        Name: 'Plus Jakarta Sans',
        Description: 'A sleek, modern typeface and easy to read. ',
        Weights: {
            Regular: 'PlusSansRegular',
            SemiBold: 'PlusSansSemiBold',
            Bold: 'PlusSansBold',
            ExtraBold: 'PlusSansExtraBold'
        }
    },
    {
        Name: 'Poppins',
        Description: 'A rounded, geometric font with a friendly readability.',
        Weights: {
            Regular: 'PoppinsRegular',
            SemiBold: 'PoppinsSemiBold',
            Bold: 'PoppinsBold',
            ExtraBold: 'PoppinsExtraBold'
        }
    }
]

export const FONT_SIZES = [
    {
        SizeType: 'Large',
        Details: 'Larger font size than usual',
        Sizes: {
            ExtraLarge: '1.57rem',
            Large: '1.42rem',
            Regular: '1.27rem',
            Small: '0.87rem',
            ExtraSmall: '0.62rem'
        }
    },
    {
        SizeType: 'Default',
        Details: 'Usual font size',
        Sizes: {
            ExtraLarge: '1.5rem',
            Large: '1.35rem',
            Regular: '1.2rem',
            Small: '0.8rem',
            ExtraSmall: '0.55rem'
        }
    },
    {
        SizeType: 'Small',
        Details: 'Smaller font size than usual',
        Sizes: {
            ExtraLarge: '1.4rem',
            Large: '1.2rem',
            Regular: '1.05rem',
            Small: '0.7rem',
            ExtraSmall: '0.45rem'
        }
    }
]















