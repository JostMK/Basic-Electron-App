const $ = require('jquery');
const { remote } = require('electron');

let win = remote.getCurrentWindow();

//register TitelBar clicks
$('#minimize').on('click', function () {
    win.minimize();
});

$('#maximize').on('click', function () {
    if (win.isMaximized())
        win.unmaximize();
    else
        win.maximize();
});

$('#close').on('click', function () {
    win.close();
});

//change maximize icon based on state of window
win.on('maximize', () => {
    $('#maximize').text("🗗");
});
win.on('unmaximize', () => {
    $('#maximize').text("🗖");
});