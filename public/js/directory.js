import List from '../utilities/list.min';

const directoryOptions = {
    valueNames: [
        'name',
        'pronouns',
        'icon',
        'link',
        'tagtext',
        'tagcolor',
        'tags',
        'published'
    ],
    item: function(values) {
    return `
    <div class="${values.tags}${values.published} char-directory-container p-sm-3 py-4 px-0 col-lg-3 col-sm-4 col-12">
        <a href="${values.link}"><div class="char-directory-img" style="background-image:url('../images/character-icons/${values.icon}')"></div></a>
        <div class="char-directory-body">
            <p class="char-directory-title"><a href="${values.link}">${values.name}</a></p>
            <span class="char-directory-prns rounded" style="color:${values.tagtext}; background:${values.tagcolor}">${values.pronouns}</span>
        </div>
    </div>
    `
    }
};

const directoryValues = [
    /*
    {
        name: '',
        pronouns: '',
        icon: '',
        link: '#',
        tagtext: '',
        tagcolor: '',
        tags: 'allworlds pmdbts syzygy pokemon arpg au fandom ',
        published: 'published'
    },
    */
    {
        name: 'Grit',
        pronouns: 'he/him',
        icon: 'grit.png',
        link: '#',
        tagtext: '#fffaf8',
        tagcolor: '#932727',
        tags: 'allworlds pmdbts enochian pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Hoshikiri',
        pronouns: 'he/any',
        icon: 'hoshikiri.png',
        link: '#',
        tagtext: '#1f2d44',
        tagcolor: '#a0bedd',
        tags: 'allworlds pmdbts enochian pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Tula',
        pronouns: 'they/them',
        icon: 'tula.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#9b7777',
        tags: 'allworlds pmdbts enochian pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Gwisin',
        pronouns: 'he/any',
        icon: 'placeholder.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#736b6c',
        tags: 'allworlds pmdbts enochian pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Glory',
        pronouns: 'he/him',
        icon: 'placeholder.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#ae642d',
        tags: 'allworlds pmdbts enochian pokemon arpg au fandom ',
        published: 'unpublished'
    },
    {
        name: 'Estys',
        pronouns: 'he/she/they',
        icon: 'estys.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#854aa6',
        tags: 'allworlds pmdbts enochian pokemon arpg au fandom ',
        published: 'unpublished'
    },
    {
        name: 'Lester',
        pronouns: 'he/him',
        icon: 'lester.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#a83232',
        tags: 'allworlds pmdbts enochian pokemon arpg fandom ',
        published: 'published'
    },
    {
        name: 'Zane',
        pronouns: 'he/they',
        icon: 'placeholder.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#2e8080',
        tags: 'allworlds pmdbts enochian pokemon arpg au fandom ',
        published: 'unpublished'
    },
    {
        name: 'Valor',
        pronouns: 'she/they',
        icon: 'valor.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#993232',
        tags: 'allworlds pmdbts enochian pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Sídhe',
        pronouns: 'he/they/it',
        icon: 'placeholder.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#42826a',
        tags: 'allworlds pmdbts enochian pokemon arpg au fandom ',
        published: 'unpublished'
    },
    {
        name: 'Quasaria',
        pronouns: 'he/him',
        icon: 'quasaria.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#161335',
        tags: 'allworlds pmdbts enochian pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Pandemon',
        pronouns: 'they/it',
        icon: 'pandemon.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#41b9b9',
        tags: 'allworlds pmdbts enochian pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Titania',
        pronouns: 'they/she',
        icon: 'titania.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#279f7e',
        tags: 'allworlds pmdbts enochian pokemon arpg au fandom ',
        published: 'published'
    },

    // SYZYGY ----------------------------------------------------
    {
        name: 'Theo',
        pronouns: 'he/they',
        icon: 'theo.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#932f2f',
        tags: 'allworlds pmdbts syzygy pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Ambrosius',
        pronouns: 'he/any',
        icon: 'ambrosius.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#3451a8',
        tags: 'allworlds pmdbts syzygy pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Hawke',
        pronouns: 'he/him',
        icon: 'hawke.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#0b6693',
        tags: 'allworlds pmdbts syzygy pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Ana',
        pronouns: 'he/they',
        icon: 'ana.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#ae593e',
        tags: 'allworlds pmdbts syzygy pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Fray',
        pronouns: 'they/he',
        icon: 'fray.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#644c4c',
        tags: 'allworlds pmdbts syzygy pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Augurys',
        pronouns: 'they/them',
        icon: 'augurys-bts.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#a66f35',
        tags: 'allworlds pmdbts syzygy pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Oberon',
        pronouns: 'he/they',
        icon: 'placeholder.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#419d7b',
        tags: 'allworlds pmdbts syzygy pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Fortuna',
        pronouns: 'they/them',
        icon: 'fortuna.png',
        link: '#',
        tagtext: '#482111',
        tagcolor: '#ffd077',
        tags: 'allworlds pmdbts syzygy pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Fantaseia',
        pronouns: 'she/he/they',
        icon: 'fantaseia.png',
        link: '#',
        tagtext: '#4a1b19',
        tagcolor: '#d3a2fb',
        tags: 'allworlds pmdbts syzygy pokemon arpg au fandom ',
        published: 'unpublished'
    },
    {
        name: 'Ikelos',
        pronouns: 'he/she/they',
        icon: 'ikelos.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#774e4e',
        tags: 'allworlds pmdbts syzygy pokemon arpg au fandom ',
        published: 'unpublished'
    },
    {
        name: 'Eros',
        pronouns: 'he/him',
        icon: 'eros.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#d04e60',
        tags: 'allworlds pmdbts syzygy pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Benoit',
        pronouns: 'he/him',
        icon: 'placeholder.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#d04f4f',
        tags: 'allworlds pmdbts syzygy pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Makoto',
        pronouns: 'he/they',
        icon: 'placeholder.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#3b93bd',
        tags: 'allworlds pmdbts syzygy pokemon arpg au fandom ',
        published: 'published'
    },
    {
        name: 'Bug',
        pronouns: 'they/any',
        icon: 'placeholder.png',
        link: '#',
        tagtext: '#fff',
        tagcolor: '#67a7ce',
        tags: 'allworlds pmdbts syzygy pokemon arpg au fandom ',
        published: 'unpublished'
    },
];

let directoryList = new List('directory-characters', directoryOptions, directoryValues);