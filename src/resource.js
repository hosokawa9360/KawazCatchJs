var res = {
    background: "res/images/background.png",
    titleBackground: "res/images/title_background.png",
    titleLogo: "res/images/title_logo.png",
    titleStart: "res/images/title_start.png",
    player: "res/images/player.png",
    playerCrash: "res/images/player_crash.png",
    fruits: [
        "res/images/fruit0.png",
        "res/images/fruit1.png",
        "res/images/fruit2.png",
        "res/images/fruit3.png",
        "res/images/fruit4.png",
        "res/images/fruit5.png",
        "res/images/fruit6.png"
    ],
    replayButton: "res/images/replay_button.png",
    replayButtonPressed: "res/images/replay_button_pressed.png",
    titleButton: "res/images/title_button.png",
    titleButtonPressed: "res/images/title_button_pressed.png",
    mainMusic: "res/bgm/main.mp3",
    titleMusic: "res/bgm/title.mp3",
    catchFruitEffect: "res/se/catch_fruit.mp3",
    catchGoldenEffect: "res/se/catch_golden.mp3",
    catchBombEffect: "res/se/catch_bomb.mp3",
    crashEffect: "res/se/crash.mp3",
    decideEffect: "res/se/decide.mp3"
};

var g_resources = [];
for (var i in res) {
    if(res[i].constructor === Array) {
        for(var j in res[i]) {
            g_resources.push(res[i][j]);
        }
    } else {
        g_resources.push(res[i]);
    }
}
