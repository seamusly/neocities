import { config } from '../js/config.js';
import { lightbox } from '../utilities/lightbox2-2.11.5/lightbox.min.js';

lightbox.option({
    'resizeDuration': 400,
    'fadeDuration': 200,
});

let createHeader = function(title, subtitle) {
    
    const header = $(`.page-header`);

    if (subtitle) {
        header.prepend(`
            <div class="page-header-subtitle">${subtitle}</div>
        `);
    }

    header.prepend(`
        <h1 class="page-header-title mb-0">${title}</h1>
    `);
}

let createFooter = function(root) {
    const footer = $(`.page-footer`);

    config.footer.links.forEach((elem) => {
        footer.append(`
            <span class="mx-lg-3 mx-2">
                <a href="${root}${elem.link}">${elem.title}</a>
            </span>
        `);
    });
}

export { createHeader, createFooter };