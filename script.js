document.getElementById('randomButton').addEventListener('click', function() {
    // ランダムで飛ばしたいページのURLリスト
    let pages = [
        './Fukuoka.html',
        './Osaka.html',
        './Nagoya.html',
        './Tokyo.html',
        './Sapporo.html',
        ];

    // ランダムなインデックスを生成
    let randomIndex = Math.floor(Math.random() * pages.length);

    // ランダムに選ばれたページに移動
    window.location.href = pages[randomIndex];
});
