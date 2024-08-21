document.getElementById('randomButton').addEventListener('click', function() {
    // ランダムで飛ばしたいページのURLリスト
    var pages = [
        './Fukuoka.html',
        './Osaka.html',
        './Nagoya.html',
        './Tokyo.html',
        './Sapporo.html',
        ];

    // ランダムなインデックスを生成
    var randomIndex = Math.floor(Math.random() * pages.length);

    // ランダムに選ばれたページに移動
    window.location.href = pages[randomIndex];
});