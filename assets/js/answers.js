function answer() {
    document.getElementById('answer').innerHTML = "Звёзды говорят: ";

    let word = ["Да нет наверно.",
        "А мы не знаем,мы не видели.",
        "Не переживай!",
        "Нельзя! Но если очень хочется, то можно.",
        "Ой всё!",
        "Делай что должен и будь что будет.",
        "Покупай.",
        "С кем не бывает.",
        "Иногда.",
        "Можно.",
        "Только спросонья и в тапочках.",
        "Когда отключат Интернет.",
        "Конечно, так и будет.",
        "Странный вопрос.",
        "Такое у звёзд не спрашивают",
        "Динозавров убил не метеорит."
    ];

    let index = Math.abs(Math.round(Math.random() * word.length - 1));

    document.getElementById('answer').innerHTML += word[index];
};


function predictions() {
    document.getElementById('predictions').innerHTML = "Кофейная гуща: ";

    let word = ["Ты станешь королём.",
        "Ой, я тебе сейчас такооооое расскажу!",
        "Действуй! Но осторожно. Но лучше не надо.",
        "Котики тебе помогут.",
        "Ой всё!",
        "Белки умеют кусаться.",
        "Не все йогурты одинаково полезны.",
        "Ураган заждался новую Элли.",
        "Кирпичи тебе не помогут.",
        "Маслом кашу не испортишь!",
        "Работа не волк. Никто не волк, кроме волка",
        "Андроиды нынче не те.",
        "Смотри под ноги, лужа может оказаться входом в метро.",
        "Добро обязательно победит зло. Поставит на колени. И зверски убьет."
    ];

    let index = Math.abs(Math.round(Math.random() * word.length - 1));

    document.getElementById('predictions').innerHTML += word[index];
};

