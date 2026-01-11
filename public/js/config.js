let config = {};

config.footer = {
    links: [
        {
            title: 'Home',
            link: 'index.html',
        },
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
            Ana: {
                title: 'Ana',
                link: 'beyond-the-sea/ana.html'
            },
            Augurys: {
                title: 'Augurys',
                link: 'beyond-the-sea/augurys.html',
            },
            Benoit: {
                title: 'Benoit',
                link: 'beyond-the-sea/benoit.html',
            },
            Glory: {
                title: 'Glory',
                link: 'beyond-the-sea/glory.html',
            },
            Estys: {
                title: 'Estys',
                link: ''
            },
            Polly: {
                title: 'Polly',
                link: 'beyond-the-sea/polly.html',
            },
            Zane: {
                title: 'Zane',
                link: 'beyond-the-sea/zane.html',
            }
        },
        subtitle: '✦ PMD Beyond the Sea ✦'
    }
}

export { config };