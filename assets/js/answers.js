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


document.addEventListener("DOMContentLoaded", function (event) {

    fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.7323742&lon=44.6987676&appid=834ad59e3db2f469ecebdc3b0bbabdf4")
        .then(response =>
            response.json())
        .then(weathe => {
            document.getElementById("title").title = weathe.title;
            // document.getElementById("icon").src = weathe.url;
            document.getElementById("main").textContent = weathe.main;
            document.getElementById("temp").textContent = weathe.temp;
            document.getElementById("temp_min").textContent = weathe.temp_min;
            document.getElementById("temp_max").textContent = weathe.temp_max;
            document.getElementById("wind").textContent = weathe.wind;
            document.getElementById("clouds").textContent = weathe.clouds;
            document.getElementById("country").textContent = weathe.country;
        })

        .catch(error => console.log(error));
});

//     "coord": { "lon": 44.6988, "lat": 41.7324 },
//     "weather": [{
//         "id": 803, "main": "Clouds",
//         "description": "broken clouds",
//         "icon": "04d"
//     }], "base": "stations",
//         "main": {
//         "temp": 299.24, "feels_like": 299.24,
//             "temp_min": 299.24,
//                 "temp_max": 299.24,
//                     "pressure": 1014,
//                         "humidity": 42,
//                             "sea_level": 1014,
//                                 "grnd_level": 930
//     },
//     "visibility": 10000,
//         "wind": { "speed": 2.84, "deg": 135, "gust": 3.65 },
//     "clouds": { "all": 57 }, "dt": 1659085625,
//         "sys": {
//         "type": 1, "id": 8862,
//             "country": "GE",
//                 "sunrise": 1659059517,
//                     "sunset": 1659111792
//     },
//     "timezone": 14400,
//         "id": 611398,
//             "name": "Tsqnet'i",
//                 "cod": 200
// }