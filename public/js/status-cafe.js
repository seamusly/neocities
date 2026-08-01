const feedURL = 'https://status.cafe/users/dragon-heist.atom';

const monthString = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

let parsedDate = function(dateString) {
    const date = new Date(Date.parse(dateString));
    return `${monthString[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

try {
    fetch('https://dragon-heist.neocities.org/js/emojis.json')
    .then(response => response.text())
    .then(text => JSON.parse(text))
    .then(emojis => getStatusCafe(emojis));

} catch (error) {
    console.error('Failed to load emoji data:', error);
}

function getStatusCafe(emojis) {
    fetch(feedURL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        const postLimit = 8;
        const entries = data.querySelectorAll("entry");
        let html = (entries.length < 1) ? `<p>No statuses yet.</p>` : '';
        if (entries.length > 1) {
            for (let i = 0; i < postLimit; i++) {
                let emoji = entries[i].querySelector("title").innerHTML.slice(0, 15).replace('dragon-heist ', '').trim();
                //let title = emojiList[emoji] ? emojiList[emoji].css : emoji;

                const emojiObj = emojis[emoji];
                let title = `<i class="em" aria-label="${emojiObj.name}" style="background-image:url('https://raw.githubusercontent.com/twitter/twemoji/refs/heads/master/assets/72x72/${emojiObj.hex}.png');"></i>`;

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
}