import { utils } from './utils.js';
import { images } from './images.js';
let pmdbts = {};

pmdbts.teams = {
    enochian: {
        name: 'Enochian',
        branch: 'Bounty Hunters',
        teamtype: 'Two-Leader Team',
        rank: 'Master',
        rankpoints: 'MAX',
    },
    syzygy: {
        name: 'Syzygy',
        branch: 'Rescuers',
        teamtype: 'Two-Leader Team',
        rank: 'Silver',
        rankpoints: '7 RP',
    }
}

pmdbts.init = {
    setTeam(teamname) {
        let data = pmdbts.teams[teamname.toLowerCase()];
        Object.keys(data).forEach((key) => {
            if (!$(`[data-teaminfo="${key}"]`)) return;
            $(`[data-teaminfo="${key}"]`).html(data[key]);

            if (data[key].toUpperCase() === 'MAX') {
                $(`[data-teaminfo="${key}"]`).addClass('text-danger');
            }
        });
    },

    setLevelLogs(root, character) {
        let logsArr = images.pmdbts.submissions.filter((sub) => sub.characters.filter((char) => char.name === character && char.startlvl).length > 0);

        let levelLogs = $(`#level-logs-body`);
        logsArr.forEach((log) => {
            let charObj = log.characters.find((char) => char.name === character);
            levelLogs.append(`
                <tr>
                    <td>${utils.parse.timestampTooltip(log.date)}</td>
                    <td><a href="${root}gallery.html?view=${log.key}">${log.title}</a></td>
                    <td>${log.activity}</td>
                    <td>${log.dungeon ? log.dungeon : log.prompt}</td>
                    <td>+${log.levels.gained}</td>
                    <td>${!log.levels.bonus ? '--' : `+${log.levels.bonus} <span data-bs-toggle="tooltip" data-bs-title="+${log.levels.bonus} from ${log.item}"><img src="${root}images/misc/${log.item.toLowerCase().replace(' ', '-')}-pixel.png"></span>`}</td>
                    <td>${charObj.startlvl} <i class="fa-solid fa-arrow-right text-success"></i> ${charObj.startlvl + log.levels.gained + (log.levels.bonus ?? 0)}</td>
                </tr>
            `);
        });
    }
}

export { pmdbts };