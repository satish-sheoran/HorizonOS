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
                options: []

            },
            {
                Name: 'Screen',
                options: []
            },
            {
                Name: 'Font',
                options: []
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