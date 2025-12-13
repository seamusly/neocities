import { utils } from './utils.js';
let images = {};

images.pmdbts = {
    others: [
        {
            imglink: `/commissions/zane-bts-normal_old.webp`,
            date: new Date(2024, 10 - 1, 20),
            title: 'Gijinka Design v1',
            credit: 'evaporatedmilkx',
            creditlink: 'https://toyhou.se/evaporatedmilkx',
            category: 'Others',
            tags: 'commission gijinka',
            medium: 'artwork',
            characters: [ 'Zane' ],
            value: '15,000p',
            bgsize: '200%',
            bgalign: '10% 5%'
        },
        {
            imglink: `/commissions/zane-bts-ashen_old.webp`,
            date: new Date(2024, 10 - 1, 20),
            title: 'Gijinka Design v2',
            credit: 'evaporatedmilkx',
            creditlink: 'https://toyhou.se/evaporatedmilkx',
            category: 'Others',
            tags: 'commission gijinka',
            medium: 'artwork',
            characters: [ 'Zane' ],
            value: '0p',
            bgsize: '200%',
            bgalign: '10% 5%'
        },
        {
            imglink: `/character-refs/zane-gijinka-v1.webp`,
            date: new Date(2025, 12 - 1, 2),
            title: 'Gijinka Lines',
            credit: 'NyandereMuffins',
            creditlink: 'https://www.deviantart.com/nyanderemuffins',
            category: 'Others',
            tags: 'commission gijinka',
            medium: 'artwork',
            characters: [ 'Zane' ],
            value: '$15 USD',
            bgsize: '150%',
            bgalign: '70% 5%'
        },
        {
            imglink: `/character-refs/zane-applin.webp`,
            date: new Date(2025, 12 - 1, 2),
            title: 'Applin Design',
            category: 'Personal',
            tags: 'personal feral',
            medium: 'artwork',
            characters: [ 'Zane' ],
        },
        {
            imglink: `/character-icons/zane-bts-orange.webp`,
            date: new Date(2025, 12 - 1, 11),
            title: 'Chibi Icon v1',
            credit: 'helloaerin',
            creditlink: 'https://toyhou.se/helloaerin',
            category: 'Others',
            tags: 'commission gijinka',
            medium: 'artwork',
            characters: [ 'Zane' ],
            value: '$0.50 USD'
        },
        {
            imglink: `/character-icons/zane-bts-brown.webp`,
            date: new Date(2025, 12 - 1, 11),
            title: 'Chibi Icon v2',
            credit: 'helloaerin',
            creditlink: 'https://toyhou.se/helloaerin',
            category: 'Others',
            tags: 'commission gijinka',
            medium: 'artwork',
            characters: [ 'Zane' ],
            value: '$0 USD'
        }
    ],

    submissions: [
        // Oct 30, 2023 - Solo Dungeon
        {
            imglink: 'dungeons/2023-10-30_islesofparadise_solo.webp',
            title: 'Fire Watching',
            date: new Date(2023, 10 - 1, 30, 5, 31),
            activity: 'Dungeon',
            dungeon: 'Isles of Paradise',
            item: 'Wonder Chest',
            levels: {
                gained: 4,
                bonus: 5
            },
            tags: ['pokemon', 'pmdbts', 'feral', 'solo'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                }
            ],
            characters: [
                {
                    name: 'Zane',
                    team: 'Enochian',
                    species: 'Paradox Monster Litwick',
                    startlvl: 1
                },
                {
                    name: 'Mirage',
                    team: 'Enochian',
                    species: 'Spooky Ditto'
                },
                {
                    name: 'Rose',
                    team: 'Enochian',
                    species: 'Magpie Rookidee'
                },
                {
                    name: 'Ikaros',
                    team: 'Enochian',
                    species: 'Cleffa'
                }
            ],
            description: ''
        },

        // Oct 30, 2023 - HH Collab
        {
            imglink: 'dungeons/2023-10-30_halloweentown_collab.webp',
            title: 'OoOo, Haunted!',
            date: new Date(2023, 10 - 1, 30, 12, 30),
            activity: 'Dungeon',
            dungeon: 'Halloween Town',
            event: 'Holiday Hills',
            tags: ['pokemon', 'pmdbts', 'feral', 'collab'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                    role: 'background',
                },
                {
                    user: 'AtlasBarelyAnimates',
                    link: 'https://toyhou.se/AtlasBarelyAnimates',
                    role: 'characters',
                }
            ],
            characters: [
                {
                    name: 'Zane',
                    team: 'Enochian',
                    species: 'Paradox Monster Litwick'
                },
                {
                    name: 'Estys',
                    team: 'Enochian',
                    species: 'Wooper Shiny (Paldea)'
                }
            ],
            description: ''
        },

        // Nov 7, 2023 - HH Task
        {
            imglink: 'tasks/2023-11-07_costumeparty_solo.webp',
            title: 'Extravagant Extras',
            date: 'Nov 7, 2023 @ 5:36 PM',
            date: new Date(2023, 11 - 1, 7, 5 + 12, 36),
            activity: 'Task',
            prompt: '01 | Costume Party!',
            event: 'Holiday Hills',
            tags: ['pokemon', 'pmdbts', 'gijinka', 'solo'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                }
            ],
            characters: [
                {
                    name: 'Zane',
                    team: 'Enochian',
                    species: 'Paradox Monster Litwick',
                },
                {
                    name: 'Mirage',
                    team: 'Enochian',
                    species: 'Spooky Ditto'
                },
                {
                    name: 'Tula',
                    team: 'Enochian',
                    species: 'Hue Morelull'
                }
            ],
            description: `<p>Mirage's job isn't like the rest of them, but Blue Mage does have banger outfits so they get to appear here in all of the different sets! Eos gets spoiled by having a third cosplay outfit, this time as the fairy they get their namesake from ✨</p>`
        },

        // Nov 11, 2023 -  Solo Dungeon
        {
            imglink: 'dungeons/2023-11-11_fuzzytundra_solo.webp',
            title: 'Cold Nights, Fuzzy Feelings',
            date: new Date(2023, 11 - 1, 11, 3, 48),
            activity: 'Dungeon',
            dungeon: 'Fuzzy Tundra',
            item: 'Wonder Chest',
            levels: {
                gained: 4,
                bonus: 3
            },
            tags: ['pokemon', 'pmdbts', 'feral', 'solo'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                }
            ],
            characters: [
                {
                    name: 'Zane',
                    team: 'Enochian',
                    species: 'Paradox Monster Litwick',
                    startlvl: 10
                },
                {
                    name: 'Mirage',
                    team: 'Enochian',
                    species: 'Spooky Ditto'
                },
                {
                    name: 'Ikaros',
                    team: 'Enochian',
                    species: 'Cleffa'
                },
                {
                    name: 'Raiju',
                    team: 'Enochian',
                    species: 'Pinkan Piplup'
                }
            ],
            description: ''
        },

        // Nov 12, 2023 - Solo Dungeon
        {
            imglink: 'dungeons/2023-11-12_fuzzytundra_solo.webp',
            title: 'A (Mostly) Quiet Moment',
            date: new Date(2023, 11 - 1, 12, 12, 17),
            activity: 'Dungeon',
            dungeon: 'Fuzzy Tundra',
            item: 'Wonder Chest',
            levels: {
                gained: 3,
                bonus: 5
            },
            tags: ['pokemon', 'pmdbts', 'feral', 'solo'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                }
            ],
            characters: [
                {
                    name: 'Zane',
                    team: 'Enochian',
                    species: 'Paradox Monster Litwick',
                    startlvl: 17
                },
                {
                    name: 'Mirage',
                    team: 'Enochian',
                    species: 'Spooky Ditto'
                },
                {
                    name: 'Glory',
                    team: 'Enochian',
                    species: 'Torchic'
                },
                {
                    name: 'Harpe',
                    team: 'Enochian',
                    species: 'Black Shuck Lillipup'
                }
            ],
            description: ''
        },

        // Nov 13, 2023 - Solo Dungeon
        {
            imglink: 'dungeons/2023-11-13_treeshroudforest_solo.webp',
            title: 'A Lesson in History',
            date: new Date(2023, 11 - 1, 13, 2, 15),
            activity: 'Dungeon',
            dungeon: 'Treeshroud Forest',
            item: 'Wonder Chest',
            levels: {
                gained: 1,
                bonus: 2
            },
            tags: ['pokemon', 'pmdbts', 'feral', 'solo'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                }
            ],
            characters: [
                {
                    name: 'Zane',
                    team: 'Enochian',
                    species: 'Paradox Monster Litwick',
                    startlvl: 25
                },
                {
                    name: 'Ikaros',
                    team: 'Enochian',
                    species: 'Cleffa'
                },
                {
                    name: 'Rose',
                    team: 'Enochian',
                    species: 'Magpie Rookidee'
                },
                {
                    name: 'Mirage',
                    team: 'Enochian',
                    species: 'Spooky Ditto'
                }
            ],
            description: ''
        },

        // Nov 14, 2023 - Solo Dungeon 1
        {
            imglink: 'dungeons/2023-11-14_stompstumppeak1_solo.webp',
            title: 'In Small Packages',
            date: new Date(2023, 11 - 1, 14, 6, 8),
            activity: 'Dungeon',
            dungeon: 'Stompstump Peak',
            levels: {
                gained: 2
            },
            tags: ['pokemon', 'pmdbts', 'feral', 'solo'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                }
            ],
            characters: [
                {
                    name: 'Zane',
                    team: 'Enochian',
                    species: 'Paradox Monster Litwick',
                    startlvl: 28
                },
                {
                    name: 'Ikaros',
                    team: 'Enochian',
                    species: 'Cleffa'
                },
                {
                    name: 'Rose',
                    team: 'Enochian',
                    species: 'Magpie Rookidee'
                },
                {
                    name: 'Mirage',
                    team: 'Enochian',
                    species: 'Spooky Ditto'
                }
            ],
            description: ''
        },

        // Nov 14, 2023 - Solo Dungeon 2
        {
            imglink: 'dungeons/2023-11-14_stompstumppeak2_solo.webp',
            title: 'Enthused Exploration',
            date: new Date(2023, 11 - 1, 14, 1 + 12, 41),
            activity: 'Dungeon',
            dungeon: 'Stompstump Peak',
            levels: {
                gained: 3
            },
            tags: ['pokemon', 'pmdbts', 'feral', 'solo'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                }
            ],
            characters: [
                {
                    name: 'Zane',
                    team: 'Enochian',
                    species: 'Paradox Monster Litwick',
                    startlvl: 30
                },
                {
                    name: 'Ikaros',
                    team: 'Enochian',
                    species: 'Cleffa'
                },
                {
                    name: 'Rose',
                    team: 'Enochian',
                    species: 'Magpie Rookidee'
                },
                {
                    name: 'Mirage',
                    team: 'Enochian',
                    species: 'Spooky Ditto'
                }
            ],
            description: ''
        },

        // Jan 8, 2024 - HH Collab
        {
            imglink: 'dungeons/2024-01-08_winterwonderland_collab.webp',
            title: 'Cold Wintery Stroll',
            date: new Date(2024, 1 - 1, 8, 10, 3),
            activity: 'Dungeon',
            dungeon: 'Winter Wonderland',
            event: 'Holiday Hills',
            tags: ['pokemon', 'pmdbts', 'feral', 'collab'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                    role: 'characters',
                },
                {
                    user: 'LettersofSky',
                    link: 'https://toyhou.se/LettersofSky',
                    role: 'background',
                }
            ],
            characters: [
                {
                    name: 'Estys',
                    team: 'Enochian',
                    species: 'Wooper Shiny (Paldea)'
                },
                {
                    name: 'Mirage',
                    team: 'Enochian',
                    species: 'Spooky Ditto'
                }
            ],
            description: ''
        },

        // Jan 8, 2024 - Collab Dungeon 1
        {
            imglink: 'dungeons/2024-01-08_cloudyheavens1_collab.webp',
            title: 'Cloudy Heavens',
            date: new Date(2024, 1 - 1, 8, 10 + 12, 58),
            activity: 'Dungeon',
            dungeon: 'Cloudy Heavens',
            levels: {
                gained: 5
            },
            tags: ['pokemon', 'pmdbts', 'feral', 'collab', 'legendary'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                    role: 'background'
                },
                {
                    user: 'evaporatedmilkx',
                    role: 'characters',
                    link: 'https://toyhou.se/evaporatedmilkx'
                }
            ],
            characters: [
                {
                    name: 'Tula',
                    team: 'Enochian',
                    species: 'Hue Morelull',
                },
                {
                    name: 'Asura',
                    team: 'Enochian',
                    species: 'Astral Sizzlipede'
                }
            ],
            description: ''
        },

        // Jan 8, 2024 - Collab Dungeon 2
        {
            imglink: 'dungeons/2024-01-08_cloudyheavens2_collab.webp',
            title: 'Cloudy Heavens',
            date: new Date(2024, 1 - 1, 8, 11 + 12, 1),
            activity: 'Dungeon',
            dungeon: 'Cloudy Heavens',
            levels: {
                gained: 5
            },
            tags: ['pokemon', 'pmdbts', 'feral', 'collab', 'legendary'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                    role: 'background'
                },
                {
                    user: 'NyandereMuffins',
                    role: 'characters',
                    link: 'https://www.deviantart.com/nyanderemuffins'
                }
            ],
            characters: [
                {
                    name: 'Tula',
                    team: 'Enochian',
                    species: 'Hue Morelull',
                },
                {
                    name: 'Sabriel',
                    team: 'Enochian',
                    species: 'Phantump Shiny'
                }
            ],
            description: ''
        },

        // Jan 12, 2024 - HH Collab 1
        {
            imglink: 'dungeons/2024-01-12_winterwonderland1_collab.webp',
            title: 'Snowy Expeditions',
            date: new Date(2024, 1 - 1, 12, 10 + 12, 5),
            activity: 'Dungeon',
            dungeon: 'Winter Wonderland',
            event: 'Holiday Hills',
            tags: ['pokemon', 'pmdbts', 'feral', 'collab'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                    role: 'background',
                },
                {
                    user: '.pears',
                    link: 'https://toyhou.se/PearsBears',
                    role: 'characters',
                }
            ],
            characters: [
                {
                    name: 'Zane',
                    team: 'Enochian',
                    species: 'Paradox Monster Litwick'
                },
                {
                    name: 'Mirage',
                    team: 'Enochian',
                    species: 'Spooky Ditto'
                }
            ],
            description: ''
        },

        // Jan 12, 2024 - HH Collab 2
        {
            imglink: 'dungeons/2024-01-12_winterwonderland2_collab.webp',
            title: 'Snowy Expeditions',
            date: new Date(2024, 1 - 1, 12, 10 + 12, 52),
            activity: 'Dungeon',
            dungeon: 'Winter Wonderland',
            event: 'Holiday Hills',
            tags: ['pokemon', 'pmdbts', 'feral', 'collab'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                    role: 'background',
                },
                {
                    user: 'Keiava',
                    role: 'character lines',
                    link: 'https://www.deviantart.com/keiava'
                },
                {
                    user: 'NyandereMuffins',
                    role: 'character colours',
                    link: 'https://www.deviantart.com/nyanderemuffins'
                }
            ],
            characters: [
                {
                    name: 'Glory',
                    team: 'Enochian',
                    species: 'Torchic'
                }
            ],
            description: ''
        },

        // Jan 18, 2024 - HH Collab
        {
            imglink: 'dungeons/2024-01-18_winterwonderland_collab.webp',
            title: 'Playful Pines',
            date: new Date(2024, 1 - 1, 18, 1, 28),
            activity: 'Dungeon',
            dungeon: 'Winter Wonderland',
            event: 'Holiday Hills',
            tags: ['pokemon', 'pmdbts', 'feral', 'collab'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                    role: 'characters',
                },
                {
                    user: 'NyandereMuffins',
                    role: 'background',
                    link: 'https://www.deviantart.com/nyanderemuffins'
                }
            ],
            characters: [
                {
                    name: 'Raiju',
                    team: 'Enochian',
                    species: 'Pinkan Piplup'
                },
                {
                    name: 'Ikaros',
                    team: 'Enochian',
                    species: 'Cleffa'
                }
            ],
            description: ''
        },

        // Feb 13, 2024 - HH Solo
        {
            imglink: 'dungeons/2024-02-13_winterwonderland_solo.webp',
            title: 'Stacking Through the Snow',
            date: new Date(2024, 2 - 1, 13, 7 + 12, 32),
            activity: 'Dungeon',
            dungeon: 'Winter Wonderland',
            event: 'Holiday Hills',
            tags: ['pokemon', 'pmdbts', 'feral', 'solo'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                }
            ],
            characters: [
                {
                    name: 'Zane',
                    team: 'Enochian',
                    species: 'Paradox Monster Litwick'
                },
                {
                    name: 'Tula',
                    team: 'Enochian',
                    species: 'Hue Morelull'
                },
                {
                    name: 'Mirage',
                    team: 'Enochian',
                    species: 'Spooky Ditto'
                }
            ],
            description: ''
        },

        // Feb 15, 2024 - Collab Dungeon
        {
            imglink: 'dungeons/2024-02-15_beaverhills_collab.webp',
            title: 'Even Investigators Need Their Rest',
            date: new Date(2024, 2 - 1, 15, 4, 41),
            activity: 'Dungeon',
            dungeon: 'Beaver Hills',
            prompt: 'BH03 | Investigate the sinkholes!',
            levels: {
                gained: 1
            },
            tags: ['pokemon', 'pmdbts', 'feral', 'collab', 'mission'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                    role: 'characters'
                },
                {
                    user: 'Keiava',
                    role: 'background'
                }
            ],
            characters: [
                {
                    name: 'Zane',
                    team: 'Enochian',
                    species: 'Paradox Monster Litwick',
                    startlvl: 33
                },
                {
                    name: 'Mirage',
                    team: 'Enochian',
                    species: 'Spooky Ditto'
                }
            ],
            description: ''
        },

        // Feb 22, 2024 - Solo Dungeon
        {
            imglink: 'dungeons/2024-02-22_abyssalbadlands_solo.webp',
            title: 'Suspicion in the Shadows',
            date: new Date(2024, 2 - 1, 22, 7 + 12, 19),
            activity: 'Dungeon',
            dungeon: 'Abyssal Badlands',
            item: 'Wonder Chest',
            levels: {
                gained: 2,
                bonus: 5
            },
            tags: ['pokemon', 'pmdbts', 'feral', 'solo'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                }
            ],
            characters: [
                {
                    name: 'Zane',
                    team: 'Enochian',
                    species: 'Paradox Monster Litwick',
                    startlvl: 34
                },
                {
                    name: 'Lester',
                    team: 'Enochian',
                    species: 'Happy Zorua',
                    startlvl: 1
                },
                {
                    name: 'Estys',
                    team: 'Enochian',
                    species: 'Wooper Shiny (Paldea)'
                },
                {
                    name: 'Mirage',
                    team: 'Enochian',
                    species: 'Spooky Ditto'
                }
            ],
            description: ''
        },

        // Feb 25, 2024 - Solo Dungeon
        {
            imglink: 'dungeons/2024-02-25_tallestofgrassplains_solo.webp',
            title: 'Most Flammable of Grass Plains',
            date: new Date(2024, 2 - 1, 25, 4 + 12, 45),
            activity: 'Dungeon',
            dungeon: 'Tallest of Grass Plains',
            item: 'Tera Orb',
            levels: {
                gained: 1,
                bonus: 10
            },
            tags: ['pokemon', 'pmdbts', 'feral', 'solo'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                }
            ],
            characters: [
                {
                    name: 'Zane',
                    team: 'Enochian',
                    species: 'Paradox Monster Litwick',
                    startlvl: 41
                },
                {
                    name: 'Lester',
                    team: 'Enochian',
                    species: 'Happy Zorua',
                    startlvl: 8
                },
                {
                    name: 'Estys',
                    team: 'Enochian',
                    species: 'Wooper Shiny (Paldea)'
                },
                {
                    name: 'Mirage',
                    team: 'Enochian',
                    species: 'Spooky Ditto'
                }
            ],
            description: ''
        },

        // Mar 23, 2024 - Collab Dungeon
        {
            imglink: 'dungeons/2024-03-23_enchantedwoods_collab.webp',
            title: 'Tense, Yet Whimsical',
            date: new Date(2024, 3 - 1, 23, 11 + 12, 46),
            activity: 'Dungeon',
            dungeon: 'Enchanted Woods',
            item: 'Wonder Chest',
            levels: {
                gained: 4,
                bonus: 5
            },
            tags: ['pokemon', 'pmdbts', 'feral', 'collab'],
            medium: 'artwork',
            contributers: [
                {
                    user: 'dragon-heist',
                    role: 'background'
                },
                {
                    user: 'NyandereMuffins',
                    role: 'character lines',
                    link: 'https://www.deviantart.com/nyanderemuffins'
                },
                {
                    user: 'embea',
                    role: 'character colours/shading',
                    link: 'https://www.deviantart.com/embea'
                }
            ],
            characters: [
                {
                    name: 'Lester',
                    team: 'Enochian',
                    species: 'Happy Zorua',
                    startlvl: 19
                }
            ],
            description: ''
        },

    ]
}

utils.init.scrubSubmissions(images.pmdbts.submissions, '.pmdbts');
utils.parse.sortByDate(images.pmdbts.submissions);

utils.init.scrubSubmissions(images.pmdbts.others, '.other');
utils.parse.sortByDate(images.pmdbts.others);

export { images };