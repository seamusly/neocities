let config = {};

config.footer = {
    links: [
        {
            title: 'Sitemap',
            link: '#',
        },
        {
            title: 'Credits',
            link: 'credits.html',
        },
    ]
};

config.pages = {
    index: {
        root: './',
        title: 'dragon-heist'
    },
    credits: {
        root: './',
        title: 'Credits'
    },
    beyondthesea: {
        root: '../../',
        title: {
            augurys: 'Augurys',
            zane: 'Zane'
        },
        subtitle: '✦ PMD Beyond the Sea ✦'
    }
}

config.filters = {
    collab: [
        'solo',
        'collab'
    ],
    medium: [
        'artwork',
        'writing'
    ],
    submission: [
        'dungeon',
        'task'
    ],
    event: [
        'holidayhills',
        'mission'
    ],
    year: [
        '2022',
        '2023',
        '2024',
        '2025',
        '2026'
    ],
    season: [
        'winter',
        'spring',
        'summer',
        'fall'
    ],
    design: [
        'olddesign',
        'gijinka',
        'feral'
    ],
}

export { config };