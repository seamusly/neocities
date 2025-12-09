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
        branch: 'Bounty Hunters',
        teamtype: 'Two-Leader Team',
        rank: 'Master',
        rankpoints: 'MAX',
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
    }
}

export { pmdbts };