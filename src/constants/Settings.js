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
            {
                Name: 'Certification',
                value: ''
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
        ]
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
                        option : 'WallpaperBehaviour',
                        value : 'Change wallpaper'
                    },
                    {
                        option: 'DateNTime',
                        value: '12hr format',
                    }
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
        ]

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