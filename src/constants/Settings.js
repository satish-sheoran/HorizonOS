
export const SETTINGS_SECTIONS = [
    {
        title: 'About OS',
        icon: 'Info',
        options: {
            main: [{
                option: 'OS name',
                value: 'Horizon OS'
            }, {
                option: 'Storage',
                value: '20.3 GB/64 GB'
            }],
            other: [
                {
                    option: 'OS version',
                    value: '1.0.10.0 HRZNNV'
                },
                {
                    option: 'Developer',
                    value: 'Satish Sheoran'
                },
                {
                    option: 'About HorizonOS',
                    value: ''
                },
                {
                    option: 'Factory reset',
                    value: ''
                },
                {
                    option: 'Certification',
                    value: ''
                }
            ]
        },

    },
    {
        title: 'Display',
        icon: 'Monitor',
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