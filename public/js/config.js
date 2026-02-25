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
        {
            title: 'Links',
            link: 'links.html',
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
    links: {
        root: './',
        title: 'Links'
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
            Estys: {
                title: 'Estys',
                link: ''
            },
            Glory: {
                title: 'Glory',
                link: 'beyond-the-sea/glory.html',
            },
            Masaru: {
                title: 'Masaru',
                link: 'beyond-the-sea/masaru.html',
            },
            Polly: {
                title: 'Polly',
                link: 'beyond-the-sea/polly.html',
            },
            Ulan: {
                title: 'Ulán',
                link: 'beyond-the-sea/ulan.html',
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