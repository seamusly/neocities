import { config } from './config.js';
import { utils } from './utils.js';

let gallery = {};

gallery.options = {
    createGalleryOptions(root) {
        return {
            valueNames: [
                'imglink',
                'datelabel',
                'title',
                'credit',
                'category',
                'medium',
                'value',
                'key',
                'bgsize',
                'bgalign'
            ],
        item: function(values) {
            return `
                <div class="gallery-item col-lg-3 col-md-4 col-sm-6 col-12 p-2" data-medium="${values.medium}">
                    <a ${values.medium === 'artwork' ? `data-lightbox="${values.category}" href="${root}images${values.imglink}"` : `href="${root}gallery${!utils.url.isLiveSite() ? '.html' : ''}?view=${values.key}"`}">
                        <div class="gallery-card p-2">
                            <div class="gallery-card-thumb" style="background-image:url('${root}images${values.imglink}');${values.medium === 'artwork' ? (values.bgsize ? `background-size:${values.bgsize};` : '') : 'background-size:contain;'}background-position:${values.bgalign ?? 'center' }"></div>
                        </div>
                    </a>
                    <div class="mt-2 gallery-card-info text-center">
                        <p class="mb-0 gallery-card-title"><!--<a href="${root}gallery${!utils.url.isLiveSite() ? '.html' : ''}?view=${values.key}">-->${values.title}<!-- <i class="text-success fa-solid fa-arrow-up-right-from-square fa-xs"></i></a>--></p>
                        <p class="gallery-date-title opacity-75 mb-1">${values.datelabel}</p>
                        ${ values.credit ? `${`<p class="gallery-date-title opacity-75">${values.creditlink ? `<a href="${values.creditlink}"><i class="fa-solid fa-palette"></i> ${values.credit}</a>` : `<i class="fa-solid fa-user"></i> ${values.credit}`}</p>`}` : '' }
                    </div>
                </div>`
            }
        }
    },

    createGeneralOptions(root) {
        return {
            valueNames: [
                'imglink',
                'datelabel',
                'title',
                'credit',
                'creditlink',
                'category',
                'tags',
                'medium',
                'characters',
                'value',
                'key',
                'bgsize',
                'bgalign'
            ],
        item: function(values) {
            return `
                <div class="gallery-item col-lg-3 col-md-4 col-sm-6 col-12 p-2" data-tags="${values.tags.toString()}" data-medium="${values.medium}">
                    <a ${values.medium === 'artwork' ? `data-lightbox="${values.category}" href="${root}images/${values.imglink}"` : `href="${root}gallery${!utils.url.isLiveSite() ? '.html' : ''}?view=${values.key}"`}">
                        <div class="gallery-card p-2">
                            <div class="gallery-card-thumb" style="background-image:url('${root}images/${values.imglink}');${values.medium === 'artwork' ? (values.bgsize ? `background-size:${values.bgsize};` : '') : 'background-size:contain;'}background-position:${values.bgalign ?? 'center' }"></div>
                        </div>
                    </a>
                    <div class="mt-2 gallery-card-info text-center">
                        <p class="mb-0 gallery-card-title"><!--<a href="${root}gallery${!utils.url.isLiveSite() ? '.html' : ''}?view=${values.key}">-->${values.title}<!-- <i class="text-success fa-solid fa-arrow-up-right-from-square fa-xs"></i></a>--></p>
                        <p class="gallery-date-title opacity-75 mb-1">${values.datelabel}</p>
                        ${ values.credit ? `${`<p class="gallery-date-title opacity-75">${values.creditlink ? `<a href="${values.creditlink}"><i class="fa-solid fa-palette"></i> ${values.credit}</a>` : values.credit}</p>`}` : '' }
                    </div>
                </div>`
            }
        }
    },

    createSubmissionsOptions(root) {
        return {
            valueNames: [
                'imglink',
                'key',
                'title',
                'date',
                'datelabel',
                'category',
                'tags',
                'medium'
            ],
            item: function(values) {
                return `
                <div class="gallery-item col-lg-3 col-md-4 col-sm-6 col-12 p-2" data-tags="${values.tags.toString()}" data-medium="${values.medium}">
                    <a ${values.medium === 'artwork' ? `data-lightbox="${values.category}" href="${root}images/${values.imglink}"` : `href="${root}gallery${!utils.url.isLiveSite() ? '.html' : ''}?view=${values.key}"`}">
                        <div class="gallery-card p-2">
                            <div class="gallery-card-thumb" style="background-image:url('${root}images/${values.imglink}');${values.medium === 'artwork' ? '' : 'background-size:contain;'}"></div>
                        </div>
                    </a>
                    <div class="mt-2 gallery-card-info text-center">
                        <p class="mb-0 gallery-card-title"><a href="${root}gallery${!utils.url.isLiveSite() ? '.html' : ''}?view=${values.key}">${values.title} <i class="text-success fa-solid fa-arrow-up-right-from-square fa-xs"></i></a></p>
                        <p class="gallery-date-title opacity-75">${values.datelabel}</p>
                    </div>
                </div>`
            }
        };
    }
};

gallery.page = {

    setFullView() {

    },

    contentWarning(subObj) {
        let warnings = '';

        subObj.cw.forEach((warning) => {
            warnings = warnings + `<li class="mb-1"><i class="fa-solid fa-angle-right"></i> ${warning}</li>\n`;
        });

        return `
        <div class="collapse show" id="gallery-${subObj.medium}-warning">
            <div class="content-warning-container p-3 mb-4">
                <div class="d-flex flex-wrap">
                    <h5 class="col">Content Warning <i class="fas fa-warning"></i></h5>
                    <div class="col-auto mb-2"><button type="button" class="btn-close" data-bs-toggle="collapse" href="#gallery-${subObj.medium}-warning"></button></div>
                </div>
                <hr class="profile-info-divider my-2">

                <div class="px-md-2">
                    <p class="mb-2">The following work features potentially upsetting topics such as:</p>

                    <ul class="fa-ul ms-md-4 ms-2">
                        ${warnings}
                    </ul>
                </div>

                <hr class="profile-info-divider my-2">

                <div class="text-center">
                    <button class="btn-cw collapsed" data-bs-toggle="collapse" href="#gallery-${subObj.medium}-contents">Show content</button>
                </div>

            </div>
        </div>
        `
    },

    async setBaseInfo (subObj, view) {
        console.log('set base info');
        // Set the image preview
        $(`.imglink`).attr('href', `images/${subObj.imglink}`).append(`
            <img src="images/${subObj.imglink}"  class="w-100 submission-img gallery-card">
        `);

        // Set base information
        $(`.title`).html(subObj.title);
        $(`.date`).html(utils.parse.timestampFull(subObj.date));

        $(`.description`).html(subObj.description ?? '...');

        if (!subObj.cw) {
            $(`#gallery-${subObj.medium}-contents`).addClass('show');
        } else {
            $(`#gallery-${subObj.medium}-container`).prepend(this.contentWarning(subObj));
        }

        if (!subObj.medium.includes('art')) {
            $(`#gallery-writing-contents`).html(subObj.text);
            $(`#gallery-card`).remove();
            $(`#gallery-writing-card`).removeClass('d-none');
        } else {
            $(`#gallery-writing-card`).remove();
            $(`#gallery-card`).removeClass('d-none');
        }

        if (view.includes('pmdbts')) await this.setBeyondTheSeaInfo(subObj);
        return true;

    },

    setBeyondTheSeaInfo(subObj) {
        let date = subObj.date;
        if (subObj.event && subObj.event.includes('Holiday Hills'))
            subObj.event = `${subObj.event} (${utils.parse.season(date.getMonth())} ${date.getFullYear()})`;

        $(`.activity`).html(subObj.activity);
    
        let labelElem = $(`#prompt-dungeon-label`);
        let valueElem = $(`#prompt-dungeon-value`);

        if (subObj.prompt) {
            labelElem.html('Prompt');
            valueElem.html(subObj.prompt);
        } else if (subObj.dungeon) {
            labelElem.html('Dungeon');
            valueElem.html(subObj.dungeon);
        }

        if (subObj.event) {
            $(`#event-container`).removeClass('d-none');
            $(`.event`).html(subObj.event);
        }

        let credits = subObj.contributers;
        credits.forEach((credit) => {
            $(`.credits`).append(`
                <li><i class="fa-solid fa-angle-right fa-sm"></i> ${credit.link ? `<a href="${credit.link}">` : ''}${credit.user}${credit.link ? `</a>` : ''}${ credit.role ? ` <span class="submission-credit">(${credit.role})</span>` : '' }</li>
            `);
        });

        let profiles = config.pages.beyondthesea.profiles;
        let characters = subObj.characters;
        characters.forEach((char) => {
            //if (!profiles[char.name]) return;
            $(`.characters`).append(!profiles[char.name] ? `<li><i class="fa-solid fa-user fa-sm"></i> ${char.name} ┊ ${char.species}</li>` :
                `<li><i class="fa-solid fa-user fa-sm"></i> ${profiles[char.name].link ? `<a href="${config.pages.gallery.root}characters/${profiles[char.name].link}">` : ''}${char.name}${profiles[char.name].link ? `</a>` : ''} ┊ ${char.species}</li>`);
            //pmdbts.init.setLevelLogs(config.pages.gallery.root, char.name);
        });

        return true;
    }
}

export { gallery };