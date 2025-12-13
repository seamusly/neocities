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
    characters : {
        root: './',
        title: 'Characters'
    },
    gallery : {
        root: './',
        title: 'Gallery'
    },
    beyondthesea: {
        root: '../../',
        profiles: {
            Augurys: {
                title: 'Augurys',
                link: 'beyond-the-sea/augurys.html',
            },
            Zane: {
                title: 'Zane',
                link: 'beyond-the-sea/zane.html',
            },
            Estys: {
                title: 'Estys',
                link: ''
            }
        },
        subtitle: '✦ PMD Beyond the Sea ✦'
    }
}

export { config };