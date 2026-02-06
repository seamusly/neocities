let utils = {};
const siteUrl = 'dragon-heist.neocities';

utils.init = {
    header(title, subtitle = null) {
        const header = $(`.page-header`);

        if (subtitle) {
            header.prepend(`
                <div class="page-header-subtitle col-12">${subtitle}</div>
            `);
        }

        header.prepend(`
            <h1 class="page-header-title mb-0">${title}</h1>
        `);
    },


    footer(linksArr, root = '') {
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
            <div class="back-to-top-container">
                <a role="button" class="btn back-to-top-btn mb-1" data-bs-toggle="tooltip" data-bs-title="Scroll to top" href="#"><i class="fa-solid fa-arrow-up"></i></a>
                <a role="button" class="btn back-to-top-btn" data-bs-toggle="tooltip" data-bs-title="Scroll to bottom" href="#footer"><i class="fa-solid fa-arrow-down"></i></a>
            </div>
        `);
    },


    profile() {
        $(`.star-collapse-link`).on('click', function() {
            $(this).toggleClass('active');
        });
    },

    warningButtons() {
        $(`.btn-cw`).each(function() {
            $(this).on('click', function() {
                if ($(this).hasClass('collapsed')) $(this).html('Show content');
                else $(this).html('Hide content');
            });
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
    },

    scrubSubmissions(subArr, suffix = '') {
        subArr.forEach((sub) => {
            let date = sub.date;
            sub.datelabel = date.getHours() ? utils.parse.timestampFull(sub.date) : utils.parse.timestampDate(sub.date);

            sub.key = `${date.getMonth() + 1}${date.getDate()}${date.getFullYear()}${date.getHours()}${date.getMinutes()}${suffix}`;
            sub = utils.parse.scrubKeys(sub);
        });
    },
}

utils.parse = {
    month(index) {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][index];
    },

    dayOfWeek(index) {
        return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][index];
    },

    timestampDate(date) {
        return `${this.month(date.getMonth()).substring(0, 3)} ${date.getDate()}, ${date.getFullYear()}`;
    },

    timestampFull(date) {
        return `${this.month(date.getMonth()).substring(0, 3)} ${date.getDate()}, ${date.getFullYear()} @ ${date.toLocaleTimeString('en-US', { timeStyle: 'short', hour12: true })}`
    },

    timestampTooltip(date) {
        return `<span data-bs-toggle="tooltip" data-bs-title="${this.dayOfWeek(date.getDay())}, ${this.month(date.getMonth())} ${date.getDate()}, ${date.getFullYear()} @ ${date.toLocaleTimeString('en-US', { timeStyle: 'short', hour12: true })}">${this.month(date.getMonth()).substring(0, 3)} ${date.getDate()}, ${date.getFullYear()}</span>`
    },

    emojiImg(variant) {
        return `${variant.toLowerCase()}.png`;
    },

    emojiVariants(text) {
        return text.match(/shiny|monster|crystalline|overgrowth|synthetic|glowlight/gi) ?? text;
    },

    inlineEmoji(text, replace, imgpath, title = replace) {
        return text.replace(replace, `<span data-bs-toggle="tooltip" data-bs-title="${title}"><img src="${imgpath}" width="16px"></span>`);
    },

    season(month) {
        if (month <= 1 || month === 11) return 'Winter';
        else if (month < 5) return 'Spring';
        else if (month < 8) return 'Summer';
        else return 'Fall';
    },

    emptyVal(val) {
        return val === '' ? null : val;
    },

    scrubKeys(obj) {
        let keys = Object.keys(obj);
        keys.forEach((key) => {
            return obj[key] = this.emptyVal(obj[key]);
        });
        return obj;
    },

    sortByDate(arr) {
        arr.sort(function(a,b){
            return new Date(a.date) - new Date(b.date);
        });
        return arr;
    },

    filterSubmissions(subList, search, val) {
        return subList.filter((sub) => sub[search].toLowerCase() === val.toLowerCase());
    }
}

utils.url = {
    isLiveSite() {
        const url = new URL(window.location.href)
        return url.href.includes(siteUrl);
    },

    getUrlParams() {
        return new URLSearchParams(window.location.search);
    },
}

export { utils };