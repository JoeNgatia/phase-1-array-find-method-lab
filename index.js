// superbowlWin.js

function superbowlWin(record) {
    const win = record.find(game => game.result === "W" && game.team === "Denver Broncos");
    return win ? win.year : undefined;
}

module.exports = superbowlWin;
// superbowlWin.js

function superbowlWin(record) {
    const win = record.find(game => game.result === "W" && game.team === "Denver Broncos");
    return win ? win.year : undefined;
}

module.exports = superbowlWin;
