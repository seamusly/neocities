const feedURL = 'https://status.cafe/users/dragon-heist.atom';

const emojiList = {
    "🙂": {
        css: '<i class="em em-slightly_smiling_face" aria-role="presentation" aria-label="SLIGHTLY SMILING FACE"></i>',
        img: ''
    },
    "😎": {
        css: '<i class="em em-sunglasses" aria-role="presentation" aria-label="SMILING FACE WITH SUNGLASSES"></i>',
        img: ''
    },
    "😛": {
        css: '<i class="em em-stuck_out_tongue" aria-role="presentation" aria-label="FACE WITH STUCK-OUT TONGUE"></i>',
        img: ''
    },
    "🥰": {
        css: '<i class="em em-smiling_face_with_3_hearts" aria-role="presentation" aria-label="SMILING FACE WITH SMILING EYES AND THREE HEARTS"></i>',
        img: ''
    },
    "😂": {
        css: '<i class="em em-joy" aria-role="presentation" aria-label="FACE WITH TEARS OF JOY"></i>',
        img: ''
    },
    "❤️": {
        css: '<i class="em em-heart" aria-role="presentation" aria-label="HEAVY BLACK HEART"></i>',
        img: ''
    },
    "💔": {
        css: '<i class="em em-broken_heart" aria-role="presentation" aria-label="BROKEN HEART"></i>',
        img: ''
    },
    "😇": {
        css: '<i class="em em-innocent" aria-role="presentation" aria-label="SMILING FACE WITH HALO"></i>',
        img: ''
    },
    "👽": {
        css: '<i class="em em-alien" aria-role="presentation" aria-label="EXTRATERRESTRIAL ALIEN"></i>',
        img: ''
    },
    "😱": {
        css: '<i class="em em-scream" aria-role="presentation" aria-label="FACE SCREAMING IN FEAR"></i>',
        img: ''
    },
    "😭": {
        css: '<i class="em em-sob" aria-role="presentation" aria-label="LOUDLY CRYING FACE"></i>',
        img: ''
    },
    "🥹": {
        css: '<i class="em em-face_holding_back_tears" aria-role="presentation" aria-label="FACE HOLDING BACK TEARS"></i>',
        img: ''
    },
    "🤔": {
        css: '<i class="em em-thinking_face" aria-role="presentation" aria-label="THINKING FACE"></i>',
        img: ''
    },
    "🧐": {
        css: '<i class="em em-face_with_monocle" aria-role="presentation" aria-label="FACE WITH MONOCLE"></i>',
        img: ''
    },
    "😶": {
        css: '<i class="em em-no_mouth" aria-role="presentation" aria-label="FACE WITHOUT MOUTH"></i>',
        img: ''
    },
    "😯": {
        css: '<i class="em em-astonished" aria-role="presentation" aria-label="ASTONISHED FACE"></i>',
        img: ''
    },
    "🤒": {
        css: '<i class="em em-face_with_thermometer" aria-role="presentation" aria-label="FACE WITH THERMOMETER"></i>',
        img: ''
    },
    "😡": {
        css: '<i class="em em-rage" aria-role="presentation" aria-label="POUTING FACE"></i>',
        img: ''
    },
    "🥺": {
        css: '<i class="em em-pleading_face" aria-role="presentation" aria-label="FACE WITH PLEADING EYES"></i>',
        img: ''
    },
    "🥱": {
        css: '<i class="em em-yawning_face" aria-role="presentation" aria-label="YAWNING FACE"></i>',
        img: ''
    },
    "🥳": {
        css: '<i class="em em-partying_face" aria-role="presentation" aria-label="FACE WITH PARTY HORN AND PARTY HAT"></i>',
        img: ''
    },
    "🤖": {
        css: '<i class="em em-robot_face" aria-role="presentation" aria-label="ROBOT FACE"></i>',
        img: ''
    },
    "💀": {
        css: '<i class="em em-skull" aria-role="presentation" aria-label="SKULL"></i>',
        img: ''
    },
    "😴": {
        css: '<i class="em em-sleeping" aria-role="presentation" aria-label="SLEEPING FACE"></i>',
        img: ''
    },
    "🙃": {
        css: '<i class="em em-upside_down_face" aria-role="presentation" aria-label="UPSIDE-DOWN FACE"></i>',
        img: ''
    },
    "🤐": {
        css: '<i class="em em-zipper_mouth_face" aria-role="presentation" aria-label="ZIPPER-MOUTH FACE"></i>',
        img: ''
    },
    "🤩": {
        css: '<i class="em em-star-struck" aria-role="presentation" aria-label="GRINNING FACE WITH STAR EYES"></i>',
        img: ''
    },
    "👀": {
        css: '<i class="em em-eyes" aria-role="presentation" aria-label="EYES"></i>',
        img: ''
    },
    "🔥": {
        css: '<i class="em em-fire" aria-role="presentation" aria-label="FIRE"></i>',
        img: ''
    },
    "❄️": {
        css: '<i class="em em-snowflake" aria-role="presentation" aria-label="SNOWFLAKE"></i>',
        img: ''
    },
    "✨": {
        css: '<i class="em em-sparkles" aria-role="presentation" aria-label="SPARKLES"></i>',
        img: ''
    },
    "💡": {
        css: '<i class="em em-bulb" aria-role="presentation" aria-label="ELECTRIC LIGHT BULB"></i>',
        img: ''
    },
    "🌧": {
        css: '<i class="em em-rain_cloud" aria-role="presentation" aria-label=""></i>',
        img: ''
    },
    "🌙": {
        css: '<i class="em em-crescent_moon" aria-role="presentation" aria-label="CRESCENT MOON"></i>',
        img: ''
    },
    "🌈": {
        css: '<i class="em em-rainbow" aria-role="presentation" aria-label="RAINBOW"></i>',
        img: ''
    },
    "💤": {
        css: '<i class="em em-zzz" aria-role="presentation" aria-label="SLEEPING SYMBOL"></i>',
        img: ''
    },
    "🐶": {
        css: '<i class="em em-dog" aria-role="presentation" aria-label="DOG FACE"></i>',
        img: ''
    },
    "🐱": {
        css: '<i class="em em-cat" aria-role="presentation" aria-label="CAT FACE"></i>',
        img: ''
    },
    "☀️": {
        css: '<i class="em em-sunny" aria-role="presentation" aria-label="BLACK SUN WITH RAYS"></i>',
        img: ''
    },
};

const monthString = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

let parsedDate = function(dateString) {
    const date = new Date(Date.parse(dateString));
    return `${monthString[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

fetch(feedURL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        const postLimit = 8;
        const entries = data.querySelectorAll("entry");
        let html = (entries.length < 1) ? `<p>No statuses yet.</p>` : '';
        if (entries.length > 1) {
            for (i = 0; i < postLimit; i++) {
                let emoji = entries[i].querySelector("title").innerHTML.slice(0, 15).replace('dragon-heist ', '');
                let title = emojiList[emoji] ? emojiList[emoji].css : emoji;
                let content = entries[i].querySelector("content").textContent.trim();
                let dateString = parsedDate(entries[i].querySelector("published").innerHTML.slice(0,10));
                html += `
                    <div class="sc-box p-3${i < postLimit - 1 ? ' mb-2' : ''}">
                        <div class="mb-1">
                            <span class="sc-emoji">${title}</span>
                            <span class="sc-spacer mx-1">✦</span>
                            <span class="sc-date">${dateString}</span>
                        </div>
                        <div>${content}</div>
                    </div>
                `;
            }
            document.getElementById("feed-reader").innerHTML = html;
        }
    });