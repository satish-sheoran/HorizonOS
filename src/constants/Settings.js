export const OS_NAME = 'Horizon OS';
export const OS_VERSION = '1.0.10.0 HRZNNV';

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
                    },
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
                        Section: 'Dark mode enabler',
                        FileName: 'DarkModeEnabler',
                        Options: [ //this
                            {
                                Option: 'Dark mode',
                                FileName: '',
                                Toggleable: true,
                                action: 'seprateDarkMode'
                            }
                        ]
                    }, {
                        Section: 'Dark mode for apps',
                        FileName: 'SepDarkModeForApps',
                        Options: [
                            {
                                Option: '',
                                FileName: '',
                                Toggleable: true,
                                action: 'seprateDarkMode'
                            }, {
                                Option: '',
                                FileName: '',
                                Toggleable: true,
                                action: 'seprateDarkMode'
                            }, {
                                Option: '',
                                FileName: '',
                                Toggleable: true,
                                action: 'seprateDarkMode'
                            }, {
                                Option: '',
                                FileName: '',
                                Toggleable: true,
                                action: 'seprateDarkMode'
                            }
                        ]
                    }
                ],
                Options: null
            }, {
                Section: 'Colour Scheme',
                FileName: 'ColourSchemeDeep',
                SubSections: null,
                Options: null
            }, {
                Section: 'Font settings',
                FileName: 'FontsettingsDeep',
                SubSections: null,
                Options: null
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
                        Option: 'System apps',
                        FileName: 'SystemApps',
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
                Section: 'System apps',
                FileName: 'SystemappsDeep',
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
                SubSections: null,
                Options: null
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

    // Feedback
    {
        Section: 'Feedback',
        FileName: 'Feedback',
        Icon: 'MessageCircleQuestionMark',
        Queries: null,
        SubSections: null,
        DeepOptions: null
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

















