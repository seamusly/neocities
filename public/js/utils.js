let utils = {};

utils.init = {
    header(title, subtitle = null) {
        const header = $(`.page-header`);

        if (subtitle) {
            header.prepend(`
                <div class="page-header-subtitle">${subtitle}</div>
            `);
        }

        header.prepend(`
            <h1 class="page-header-title mb-0">${title}</h1>
        `);
    },


    footer(linksArr, root) {
        const footer = $(`.footer-content`);
        footer.append('<span>✦</span>');

        linksArr.forEach((elem) => {
            footer.append(`
                <span class="mx-lg-3 mx-2">
                    <a href="${root}${elem.link}">${elem.title}</a>
                </span>
                ${linksArr.indexOf(elem) < linksArr.length - 1 ? `<span>✦</span>` : ``}
            `);
        });

        footer.append('<span>✦</span>');
    },


    top() {
        $('body').append(`
            <div class="jump-container">
                <a role="button" class="btn jump-btn mb-1" href="#"><i class="fa-solid fa-arrow-up"></i></a>
                <a role="button" class="btn jump-btn" href="#footer"><i class="fa-solid fa-arrow-down"></i></a>
            </div>
        `);
    },


    profile() {
        $(`.profile-collapse-link`).on('click', function() {
            $(this).toggleClass('active');
        });
    },


    tooltips() {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    },


    lightbox(resizeDuration = 400, fadeDuration = 200) {
        lightbox.option({
            'resizeDuration': resizeDuration,
            'fadeDuration': fadeDuration,
        });
    }
}

export { utils };