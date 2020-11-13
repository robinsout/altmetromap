/* eslint-disable no-magic-numbers */
export default [
    {
        'id'               : 1,
        'lineId'           : '1',
        'name_original'    : 'Бульвар Рокоссовского',
        'name_translit'    : 'Bulvar Rokossovskogo',
        'name_translation' : 'Bull w!ire Rock or s!olves cover',
        'links'            : [
            {
                'node_id' : 2,
                'time'    : 145,
            },
        ],
        'active'             : true,
        'under_construction' : false,
    },
    {
        'id'     : 2,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 1,
                'time'    : 155,
            },
            {
                'node_id' : 3,
                'time'    : 215,
            },
        ],
        'name_translit' : 'Cherkizovskaya',
        'name_original' : 'Черкизовская',
    },
    {
        'id'     : 3,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 2,
                'time'    : 230,
            },
            {
                'node_id' : 4,
                'time'    : 185,
            },
        ],
        'name_translit' : 'Preobrazhenskaya Ploschad',
        'name_original' : 'Преображенская площадь',
    },
    {
        'id'     : 4,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 3,
                'time'    : 200,
            },
            {
                'node_id' : 5,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Sokolniki',
        'name_original' : 'Сокольники',
    },
    {
        'id'     : 5,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 4,
                'time'    : 115,
            },
            {
                'node_id' : 6,
                'time'    : 105,
            },
        ],
        'name_translit' : 'Krasnoselskaya',
        'name_original' : 'Красносельская',
    },
    {
        'id'     : 6,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 5,
                'time'    : 100,
            },
            {
                'node_id' : 7,
                'time'    : 110,
            },
            {
                'node_id' : 81,
                'time'    : 360,
            },
        ],
        'name_translit' : 'Komsomolskaya',
        'name_original' : 'Комсомольская',
    },
    {
        'id'     : 7,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 6,
                'time'    : 115,
            },
            {
                'node_id' : 8,
                'time'    : 100,
            },
        ],
        'name_translit' : 'Krasnye Vorota',
        'name_original' : 'Красные ворота',
    },
    {
        'id'     : 8,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 7,
                'time'    : 90,
            },
            {
                'node_id' : 9,
                'time'    : 115,
            },
            {
                'node_id' : 98,
                'time'    : 180,
            },
            {
                'node_id' : 178,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Chistye Prudy',
        'name_original' : 'Чистые пруды',
    },
    {
        'id'     : 9,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 8,
                'time'    : 115,
            },
            {
                'node_id' : 10,
                'time'    : 105,
            },
            {
                'node_id' : 124,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Lubyanka',
        'name_original' : 'Лубянка',
    },
    {
        'id'     : 10,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 9,
                'time'    : 95,
            },
            {
                'node_id' : 11,
                'time'    : 100,
            },
            {
                'node_id' : 30,
                'time'    : 300,
            },
        ],
        'name_translit' : 'Ohotny Ryad',
        'name_original' : 'Охотный ряд',
    },
    {
        'id'     : 11,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 10,
                'time'    : 100,
            },
            {
                'node_id' : 12,
                'time'    : 95,
            },
            {
                'node_id' : 154,
                'time'    : 360,
            },
            {
                'node_id' : 51,
                'time'    : 300,
            },
            {
                'node_id' : 64,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Biblioteka imeni Lenina',
        'name_original' : 'Библиотека им. Ленина',
    },
    {
        'id'     : 12,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 11,
                'time'    : 90,
            },
            {
                'node_id' : 13,
                'time'    : 125,
            },
        ],
        'name_translit' : 'Kropotkinskaya',
        'name_original' : 'Кропоткинская',
    },
    {
        'id'     : 13,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 12,
                'time'    : 125,
            },
            {
                'node_id' : 14,
                'time'    : 145,
            },
            {
                'node_id' : 87,
                'time'    : 300,
            },
        ],
        'name_translit' : 'Park Kultury',
        'name_original' : 'Парк культуры',
    },
    {
        'id'     : 14,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 13,
                'time'    : 140,
            },
            {
                'node_id' : 15,
                'time'    : 100,
            },
        ],
        'name_translit' : 'Frunzenskaya',
        'name_original' : 'Фрузенская',
    },
    {
        'id'     : 15,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 14,
                'time'    : 100,
            },
            {
                'node_id' : 16,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Sportivnaya',
        'name_original' : 'Спортивная',
    },
    {
        'id'     : 16,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 15,
                'time'    : 205,
            },
            {
                'node_id' : 17,
                'time'    : 265,
            },
        ],
        'name_translit' : 'Vorobyevy Gory',
        'name_original' : 'Воробьевы горы',
    },
    {
        'id'     : 17,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 16,
                'time'    : 265,
            },
            {
                'node_id' : 18,
                'time'    : 175,
            },
        ],
        'name_translit' : 'Universitet',
        'name_original' : 'Университет',
    },
    {
        'id'     : 18,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 17,
                'time'    : 175,
            },
            {
                'node_id' : 19,
                'time'    : 170,
            },
        ],
        'name_translit' : 'Prospekt Vernadskogo',
        'name_original' : 'Проспект Вернадского',
    },
    {
        'id'     : 19,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 18,
                'time'    : 170,
            },
            {
                'node_id' : 20,
                'time'    : 175,
            },
        ],
        'name_translit' : 'Yugo-Zapadnaya',
        'name_original' : 'Юго-Западная',
    },
    {
        'id'     : 20,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 19,
                'time'    : 175,
            },
        ],
        'name_translit' : 'Troparyovo',
        'name_original' : 'Тропарёво',
    },
    {
        'id'     : 199,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 20,
                'time'    : 180,
            },
            {
                'node_id' : 200,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Rumyantsevo',
        'name_original' : 'Румянцево',
    },
    {
        'id'     : 200,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 199,
                'time'    : 180,
            },
            {
                'node_id' : 201,
                'time'    : 240,
            },
        ],
        'name_translit' : 'Salaryevo',
        'name_original' : 'Саларьево',
    },
    {
        'id'     : 201,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 200,
                'time'    : 240,
            },
            {
                'node_id' : 202,
                'time'    : 240,
            },
        ],
        'name_translit' : 'Filatov Lug',
        'name_original' : 'Филатов луг',
    },
    {
        'id'     : 202,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 201,
                'time'    : 240,
            },
            {
                'node_id' : 203,
                'time'    : 240,
            },
        ],
        'name_translit' : 'Prokshino',
        'name_original' : 'Прокшино',
    },
    {
        'id'     : 203,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 202,
                'time'    : 240,
            },
            {
                'node_id' : 204,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Olkhovaya',
        'name_original' : 'Ольховая',
    },
    {
        'id'     : 204,
        'lineId' : '1',
        'links'  : [
            {
                'node_id' : 203,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Kommunarka',
        'name_original' : 'Коммунарка',
    },
    {
        'id'     : 21,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 22,
                'time'    : 140,
            },
        ],
        'name_translit' : 'Rechnoy Vokzal',
        'name_original' : 'Речной вокзал',
    },
    {
        'id'     : 22,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 21,
                'time'    : 160,
            },
            {
                'node_id' : 23,
                'time'    : 200,
            },
        ],
        'name_translit' : 'Vodny Station',
        'name_original' : 'Водный стадион',
    },
    {
        'id'     : 23,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 22,
                'time'    : 195,
            },
            {
                'node_id' : 24,
                'time'    : 175,
            },
        ],
        'name_translit' : 'Voykovskaya',
        'name_original' : 'Войковская',
    },
    {
        'id'     : 24,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 23,
                'time'    : 170,
            },
            {
                'node_id' : 25,
                'time'    : 130,
            },
        ],
        'name_translit' : 'Sokol',
        'name_original' : 'Сокол',
    },
    {
        'id'     : 25,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 24,
                'time'    : 135,
            },
            {
                'node_id' : 26,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Aeroport',
        'name_original' : 'Аэропорт',
    },
    {
        'id'     : 26,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 25,
                'time'    : 175,
            },
            {
                'node_id' : 27,
                'time'    : 170,
            },
        ],
        'name_translit' : 'Dinamo',
        'name_original' : 'Динамо',
    },
    {
        'id'     : 27,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 26,
                'time'    : 180,
            },
            {
                'node_id' : 28,
                'time'    : 120,
            },
            {
                'node_id' : 78,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Belorusskaya',
        'name_original' : 'Белорусская',
    },
    {
        'id'     : 28,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 27,
                'time'    : 115,
            },
            {
                'node_id' : 29,
                'time'    : 105,
            },
        ],
        'name_translit' : 'Mayakovskaya',
        'name_original' : 'Маяковская',
    },
    {
        'id'     : 29,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 28,
                'time'    : 100,
            },
            {
                'node_id' : 30,
                'time'    : 115,
            },
            {
                'node_id' : 153,
                'time'    : 240,
            },
            {
                'node_id' : 123,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Tverskaya',
        'name_original' : 'Тверская',
    },
    {
        'id'     : 30,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 29,
                'time'    : 120,
            },
            {
                'node_id' : 31,
                'time'    : 160,
            },
            {
                'node_id' : 10,
                'time'    : 300,
            },
            {
                'node_id' : 50,
                'time'    : 240,
            },
        ],
        'name_translit' : 'Teatralnaya',
        'name_original' : 'Театральная',
    },
    {
        'id'     : 31,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 30,
                'time'    : 160,
            },
            {
                'node_id' : 32,
                'time'    : 140,
            },
            {
                'node_id' : 100,
                'time'    : 180,
            },
            {
                'node_id' : 142,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Novokuznetskaya',
        'name_original' : 'Новокузнецкая',
    },
    {
        'id'     : 32,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 31,
                'time'    : 135,
            },
            {
                'node_id' : 33,
                'time'    : 200,
            },
            {
                'node_id' : 84,
                'time'    : 240,
            },
        ],
        'name_translit' : 'Paveletskaya',
        'name_original' : 'Павелецкая',
    },
    {
        'id'     : 33,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 32,
                'time'    : 215,
            },
            {
                'node_id' : 198,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Avtozavodskaya',
        'name_original' : 'Автозаводская',
    },
    {
        'id'     : 198,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 33,
                'time'    : 180,
            },
            {
                'node_id' : 34,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Tehnopark',
        'name_original' : 'Технопарк',
    },
    {
        'id'     : 34,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 198,
                'time'    : 120,
            },
            {
                'node_id' : 35,
                'time'    : 235,
            },
        ],
        'name_translit' : 'Kolomenskaya',
        'name_original' : 'Коломенская',
    },
    {
        'id'     : 35,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 34,
                'time'    : 230,
            },
            {
                'node_id' : 36,
                'time'    : 195,
            },
            {
                'node_id' : 192,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Kashirskaya',
        'name_original' : 'Каширская',
    },
    {
        'id'     : 36,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 35,
                'time'    : 185,
            },
            {
                'node_id' : 37,
                'time'    : 145,
            },
        ],
        'name_translit' : 'Kantemirovskaya',
        'name_original' : 'Кантемировская',
    },
    {
        'id'     : 37,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 36,
                'time'    : 155,
            },
            {
                'node_id' : 38,
                'time'    : 175,
            },
        ],
        'name_translit' : 'Tsaritsyno',
        'name_original' : 'Царицыно',
    },
    {
        'id'     : 38,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 37,
                'time'    : 185,
            },
            {
                'node_id' : 39,
                'time'    : 145,
            },
        ],
        'name_translit' : 'Orehovo',
        'name_original' : 'Орехово',
    },
    {
        'id'     : 39,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 38,
                'time'    : 150,
            },
            {
                'node_id' : 40,
                'time'    : 150,
            },
        ],
        'name_translit' : 'Domodedovskaya',
        'name_original' : 'Домодедовская',
    },
    {
        'id'     : 40,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 39,
                'time'    : 150,
            },
            {
                'node_id' : 41,
                'time'    : 265,
            },
            {
                'node_id' : 191,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Krasnogvardeyskaya',
        'name_original' : 'Красногвардейская',
    },
    {
        'id'     : 41,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 40,
                'time'    : 265,
            },
        ],
        'name_translit' : 'Alma-Atinskaya',
        'name_original' : 'Алма-Атинская',
    },
    {
        'id'     : 42,
        'lineId' : '3',
        'links'  : [
            {
                'node_id' : 43,
                'time'    : 155,
            },
        ],
        'name_translit' : 'Shyolkovskaya',
        'name_original' : 'Щёлковская',
    },
    {
        'id'     : 43,
        'lineId' : '3',
        'links'  : [
            {
                'node_id' : 42,
                'time'    : 150,
            },
            {
                'node_id' : 44,
                'time'    : 185,
            },
        ],
        'name_translit' : 'Pervomayskaya',
        'name_original' : 'Первомайская',
    },
    {
        'id'     : 44,
        'lineId' : '3',
        'links'  : [
            {
                'node_id' : 43,
                'time'    : 200,
            },
            {
                'node_id' : 45,
                'time'    : 195,
            },
        ],
        'name_translit' : 'Izmaylovskaya',
        'name_original' : 'Измайловская',
    },
    {
        'id'     : 45,
        'lineId' : '3',
        'links'  : [
            {
                'node_id' : 44,
                'time'    : 200,
            },
            {
                'node_id' : 46,
                'time'    : 175,
            },
        ],
        'name_translit' : 'Partizanskaya',
        'name_original' : 'Партизанская',
    },
    {
        'id'     : 46,
        'lineId' : '3',
        'links'  : [
            {
                'node_id' : 45,
                'time'    : 165,
            },
            {
                'node_id' : 47,
                'time'    : 130,
            },
        ],
        'name_translit' : 'Semyonovskaya',
        'name_original' : 'Семёновская',
    },
    {
        'id'     : 47,
        'lineId' : '3',
        'links'  : [
            {
                'node_id' : 46,
                'time'    : 125,
            },
            {
                'node_id' : 48,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Elektrozavodskaya',
        'name_original' : 'Электрозаводская',
    },
    {
        'id'     : 48,
        'lineId' : '3',
        'links'  : [
            {
                'node_id' : 47,
                'time'    : 120,
            },
            {
                'node_id' : 49,
                'time'    : 235,
            },
        ],
        'name_translit' : 'Baumanskaya',
        'name_original' : 'Бауманская',
    },
    {
        'id'     : 49,
        'lineId' : '3',
        'links'  : [
            {
                'node_id' : 47,
                'time'    : 360,
            },
            {
                'node_id' : 50,
                'time'    : 195,
            },
            {
                'node_id' : 179,
                'time'    : 180,
            },
            {
                'node_id' : 82,
                'time'    : 240,
            },
        ],
        'name_translit' : 'Kurskaya',
        'name_original' : 'Курская',
    },
    {
        'id'     : 50,
        'lineId' : '3',
        'links'  : [
            {
                'node_id' : 49,
                'time'    : 190,
            },
            {
                'node_id' : 51,
                'time'    : 125,
            },
            {
                'node_id' : 30,
                'time'    : 240,
            },
        ],
        'name_translit' : 'Ploschad Revolycii',
        'name_original' : 'Площадь революции',
    },
    {
        'id'    : 51,
        'links' : [
            {
                'node_id' : 50,
                'time'    : 125,
            },
            {
                'node_id' : 52,
                'time'    : 160,
            },
            {
                'node_id' : 11,
                'time'    : 300,
            },
            {
                'node_id' : 64,
                'time'    : 180,
            },
            {
                'node_id' : 154,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Arbatskaya',
        'name_original' : 'Арбатская',
        'lineId'        : '3',
    },
    {
        'id'    : 52,
        'links' : [
            {
                'node_id' : 51,
                'time'    : 155,
            },
            {
                'node_id' : 53,
                'time'    : 115,
            },
        ],
        'name_translit' : 'Smolenskaya',
        'name_original' : 'Смоленская',
        'lineId'        : '3',
    },
    {
        'id'    : 53,
        'links' : [
            {
                'node_id' : 52,
                'time'    : 120,
            },
            {
                'node_id' : 54,
                'time'    : 325,
            },
            {
                'node_id' : 88,
                'time'    : 180,
            },
            {
                'node_id' : 67,
                'time'    : 240,
            },
        ],
        'name_translit' : 'Kievskaya',
        'name_original' : 'Киевская',
        'lineId'        : '3',
    },
    {
        'id'    : 54,
        'links' : [
            {
                'node_id' : 53,
                'time'    : 325,
            },
            {
                'node_id' : 55,
                'time'    : 325,
            },
            {
                'node_id' : 196,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Park Pobedy',
        'name_original' : 'Парк Победы',
        'lineId'        : '3',
    },
    {
        'id'    : 55,
        'links' : [
            {
                'node_id' : 54,
                'time'    : 325,
            },
            {
                'node_id' : 56,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Slavyansky Bulvar',
        'name_original' : 'Славянский бульвар',
        'lineId'        : '3',
    },
    {
        'id'    : 56,
        'links' : [
            {
                'node_id' : 55,
                'time'    : 205,
            },
            {
                'node_id' : 57,
                'time'    : 200,
            },
            {
                'node_id' : 76,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Kuntsevskaya',
        'name_original' : 'Кунцевская',
        'lineId'        : '3',
    },
    {
        'id'     : 57,
        'lineId' : '3',
        'links'  : [
            {
                'node_id' : 56,
                'time'    : 190,
            },
            {
                'node_id' : 58,
                'time'    : 195,
            },
        ],
        'name_translit' : 'Molodezhnaya',
        'name_original' : 'Молодежная',
    },
    {
        'id'     : 58,
        'lineId' : '3',
        'links'  : [
            {
                'node_id' : 57,
                'time'    : 195,
            },
            {
                'node_id' : 59,
                'time'    : 565,
            },
        ],
        'name_translit' : 'Krylatskoye',
        'name_original' : 'Крылатское',
    },
    {
        'id'     : 59,
        'lineId' : '3',
        'links'  : [
            {
                'node_id' : 58,
                'time'    : 565,
            },
            {
                'node_id' : 60,
                'time'    : 265,
            },
        ],
        'name_translit' : 'Strogino',
        'name_original' : 'Строгино',
    },
    {
        'id'     : 60,
        'lineId' : '3',
        'links'  : [
            {
                'node_id' : 59,
                'time'    : 265,
            },
            {
                'node_id' : 61,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Myakinino',
        'name_original' : 'Мякинино',
    },
    {
        'id'     : 61,
        'lineId' : '3',
        'links'  : [
            {
                'node_id' : 60,
                'time'    : 205,
            },
            {
                'node_id' : 62,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Volokolamskaya',
        'name_original' : 'Волоколамская',
    },
    {
        'id'     : 62,
        'lineId' : '3',
        'links'  : [
            {
                'node_id' : 61,
                'time'    : 205,
            },
            {
                'node_id' : 63,
                'time'    : 145,
            },
        ],
        'name_translit' : 'Mitino',
        'name_original' : 'Митино',
    },
    {
        'id'     : 63,
        'lineId' : '3',
        'links'  : [
            {
                'node_id' : 62,
                'time'    : 145,
            },
        ],
        'name_translit' : 'Pyatnitskoye Shosse',
        'name_original' : 'Пятницкое шоссе',
    },
    {
        'id'     : 64,
        'lineId' : '4',
        'links'  : [
            {
                'node_id' : 65,
                'time'    : 90,
            },
            {
                'node_id' : 11,
                'time'    : 180,
            },
            {
                'node_id' : 51,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Aleksandrovsky Sad',
        'name_original' : 'Александровский сад',
    },
    {
        'id'    : 65,
        'links' : [
            {
                'node_id' : 64,
                'time'    : 90,
            },
            {
                'node_id' : 66,
                'time'    : 125,
            },
        ],
        'name_translit' : 'Arbatskaya',
        'name_original' : 'Арбатская',
        'lineId'        : '4',
    },
    {
        'id'    : 66,
        'links' : [
            {
                'node_id' : 65,
                'time'    : 125,
            },
            {
                'node_id' : 67,
                'time'    : 140,
            },
        ],
        'name_translit' : 'Smolenskaya',
        'name_original' : 'Смоленская',
        'lineId'        : '4',
    },
    {
        'id'    : 67,
        'links' : [
            {
                'node_id' : 66,
                'time'    : 145,
            },
            {
                'node_id' : 68,
                'time'    : 445,
            },
            {
                'node_id' : 70,
                'time'    : 135,
            },
            {
                'node_id' : 53,
                'time'    : 240,
            },
            {
                'node_id' : 88,
                'time'    : 360,
            },
        ],
        'name_translit' : 'Kievskaya',
        'name_original' : 'Киевская',
        'lineId'        : '4',
    },
    {
        'id'     : 68,
        'lineId' : '4',
        'links'  : [
            {
                'node_id' : 67,
                'time'    : 445,
            },
            {
                'node_id' : 69,
                'time'    : 145,
            },
            {
                'node_id' : 195,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Vystavochnaya',
        'name_original' : 'Выставочная',
    },
    {
        'id'     : 69,
        'lineId' : '4',
        'links'  : [
            {
                'node_id' : 68,
                'time'    : 145,
            },
        ],
        'name_translit' : 'Mezhdunarodnaya',
        'name_original' : 'Международная',
    },
    {
        'id'     : 70,
        'lineId' : '4',
        'links'  : [
            {
                'node_id' : 71,
                'time'    : 125,
            },
            {
                'node_id' : 67,
                'time'    : 130,
            },
        ],
        'name_translit' : 'Studencheskaya',
        'name_original' : 'Стеденческая',
    },
    {
        'id'     : 71,
        'lineId' : '4',
        'links'  : [
            {
                'node_id' : 70,
                'time'    : 120,
            },
            {
                'node_id' : 72,
                'time'    : 150,
            },
        ],
        'name_translit' : 'Kutuzovskaya',
        'name_original' : 'Кутузовская',
    },
    {
        'id'     : 72,
        'lineId' : '4',
        'links'  : [
            {
                'node_id' : 71,
                'time'    : 155,
            },
            {
                'node_id' : 73,
                'time'    : 145,
            },
        ],
        'name_translit' : 'Fili',
        'name_original' : 'Фили',
    },
    {
        'id'     : 73,
        'lineId' : '4',
        'links'  : [
            {
                'node_id' : 72,
                'time'    : 160,
            },
            {
                'node_id' : 74,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Bagrationovskaya',
        'name_original' : 'Багратионовская',
    },
    {
        'id'     : 74,
        'lineId' : '4',
        'links'  : [
            {
                'node_id' : 73,
                'time'    : 110,
            },
            {
                'node_id' : 75,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Filyovsky Park',
        'name_original' : 'Филёвский парк',
    },
    {
        'id'     : 75,
        'lineId' : '4',
        'links'  : [
            {
                'node_id' : 74,
                'time'    : 115,
            },
            {
                'node_id' : 76,
                'time'    : 135,
            },
        ],
        'name_translit' : 'Pionerskaya',
        'name_original' : 'Пионерская',
    },
    {
        'id'     : 76,
        'lineId' : '4',
        'links'  : [
            {
                'node_id' : 75,
                'time'    : 130,
            },
            {
                'node_id' : 56,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Kuntsevskaya',
        'name_original' : 'Кунцевская',
    },
    {
        'id'     : 77,
        'lineId' : '5',
        'links'  : [
            {
                'node_id' : 78,
                'time'    : 190,
            },
            {
                'node_id' : 88,
                'time'    : 160,
            },
            {
                'node_id' : 122,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Krasnopresnenskaya',
        'name_original' : 'Краснопресненская',
    },
    {
        'id'     : 78,
        'lineId' : '5',
        'links'  : [
            {
                'node_id' : 77,
                'time'    : 195,
            },
            {
                'node_id' : 79,
                'time'    : 130,
            },
            {
                'node_id' : 27,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Belorusskaya',
        'name_original' : 'Белорусская',
    },
    {
        'id'     : 79,
        'lineId' : '5',
        'links'  : [
            {
                'node_id' : 78,
                'time'    : 120,
            },
            {
                'node_id' : 80,
                'time'    : 155,
            },
            {
                'node_id' : 151,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Novoslobodskaya',
        'name_original' : 'Новослободская',
    },
    {
        'id'     : 80,
        'lineId' : '5',
        'links'  : [
            {
                'node_id' : 79,
                'time'    : 150,
            },
            {
                'node_id' : 81,
                'time'    : 155,
            },
            {
                'node_id' : 96,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Prospekt Mira',
        'name_original' : 'Проспект Мира',
    },
    {
        'id'    : 81,
        'links' : [
            {
                'node_id' : 80,
                'time'    : 165,
            },
            {
                'node_id' : 82,
                'time'    : 170,
            },
            {
                'node_id' : 6,
                'time'    : 360,
            },
        ],
        'name_translit' : 'Komsomolskaya',
        'name_original' : 'Комсомольская',
        'lineId'        : '5',
    },
    {
        'id'     : 82,
        'lineId' : '5',
        'links'  : [
            {
                'node_id' : 81,
                'time'    : 180,
            },
            {
                'node_id' : 83,
                'time'    : 165,
            },
            {
                'node_id' : 49,
                'time'    : 240,
            },
            {
                'node_id' : 179,
                'time'    : 360,
            },
        ],
        'name_translit' : 'Kurskaya',
        'name_original' : 'Курская',
    },
    {
        'id'     : 83,
        'lineId' : '5',
        'links'  : [
            {
                'node_id' : 82,
                'time'    : 160,
            },
            {
                'node_id' : 84,
                'time'    : 130,
            },
            {
                'node_id' : 126,
                'time'    : 180,
            },
            {
                'node_id' : 141,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Taganskaya',
        'name_original' : 'Таганская',
    },
    {
        'id'     : 84,
        'lineId' : '5',
        'links'  : [
            {
                'node_id' : 83,
                'time'    : 135,
            },
            {
                'node_id' : 85,
                'time'    : 115,
            },
            {
                'node_id' : 32,
                'time'    : 240,
            },
        ],
        'name_translit' : 'Paveletskaya',
        'name_original' : 'Павелецкая',
    },
    {
        'id'     : 85,
        'lineId' : '5',
        'links'  : [
            {
                'node_id' : 84,
                'time'    : 110,
            },
            {
                'node_id' : 86,
                'time'    : 105,
            },
            {
                'node_id' : 156,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Dobryninskaya',
        'name_original' : 'Добрынинская',
    },
    {
        'id'     : 86,
        'lineId' : '5',
        'links'  : [
            {
                'node_id' : 85,
                'time'    : 115,
            },
            {
                'node_id' : 87,
                'time'    : 115,
            },
            {
                'node_id' : 101,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Oktyabrskaya',
        'name_original' : 'Октябрьская',
    },
    {
        'id'     : 87,
        'lineId' : '5',
        'links'  : [
            {
                'node_id' : 86,
                'time'    : 125,
            },
            {
                'node_id' : 88,
                'time'    : 175,
            },
            {
                'node_id' : 13,
                'time'    : 300,
            },
        ],
        'name_translit' : 'Park Kultury',
        'name_original' : 'Парк культуры',
    },
    {
        'id'     : 88,
        'lineId' : '5',
        'links'  : [
            {
                'node_id' : 87,
                'time'    : 170,
            },
            {
                'node_id' : 77,
                'time'    : 180,
            },
            {
                'node_id' : 53,
                'time'    : 180,
            },
            {
                'node_id' : 67,
                'time'    : 360,
            },
        ],
        'name_translit' : 'Kievskaya',
        'name_original' : 'Киевская',
    },
    {
        'id'     : 89,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 90,
                'time'    : 170,
            },
        ],
        'name_translit' : 'Medvedkovo',
        'name_original' : 'Медведково',
    },
    {
        'id'     : 90,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 89,
                'time'    : 160,
            },
            {
                'node_id' : 91,
                'time'    : 155,
            },
        ],
        'name_translit' : 'Babushkinskaya',
        'name_original' : 'Бабушкинская',
    },
    {
        'id'     : 91,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 90,
                'time'    : 160,
            },
            {
                'node_id' : 92,
                'time'    : 135,
            },
        ],
        'name_translit' : 'Sviblovo',
        'name_original' : 'Свиблово',
    },
    {
        'id'     : 92,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 91,
                'time'    : 135,
            },
            {
                'node_id' : 93,
                'time'    : 210,
            },
        ],
        'name_translit' : 'Botanichesky Sad',
        'name_original' : 'Ботанический сад',
    },
    {
        'id'     : 93,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 92,
                'time'    : 200,
            },
            {
                'node_id' : 94,
                'time'    : 130,
            },
        ],
        'name_translit' : 'VDNHa',
        'name_original' : 'ВДНХ',
    },
    {
        'id'     : 94,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 93,
                'time'    : 135,
            },
            {
                'node_id' : 95,
                'time'    : 140,
            },
        ],
        'name_translit' : 'Alekseevskaya',
        'name_original' : 'Алексеевская',
    },
    {
        'id'     : 95,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 94,
                'time'    : 140,
            },
            {
                'node_id' : 96,
                'time'    : 130,
            },
        ],
        'name_translit' : 'Rizhskaya',
        'name_original' : 'Рижская',
    },
    {
        'id'     : 96,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 95,
                'time'    : 130,
            },
            {
                'node_id' : 97,
                'time'    : 115,
            },
            {
                'node_id' : 80,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Prospekt Mira',
        'name_original' : 'Проспект Мира',
    },
    {
        'id'     : 97,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 96,
                'time'    : 110,
            },
            {
                'node_id' : 98,
                'time'    : 105,
            },
        ],
        'name_translit' : 'Suharevskaya',
        'name_original' : 'Сухаревская',
    },
    {
        'id'     : 98,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 97,
                'time'    : 100,
            },
            {
                'node_id' : 99,
                'time'    : 125,
            },
            {
                'node_id' : 8,
                'time'    : 180,
            },
            {
                'node_id' : 178,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Turgenyevskaya',
        'name_original' : 'Тургеневская',
    },
    {
        'id'     : 99,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 98,
                'time'    : 120,
            },
            {
                'node_id' : 100,
                'time'    : 170,
            },
            {
                'node_id' : 125,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Kitay-Gorod',
        'name_original' : 'Китай-город',
    },
    {
        'id'     : 100,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 99,
                'time'    : 165,
            },
            {
                'node_id' : 101,
                'time'    : 155,
            },
            {
                'node_id' : 142,
                'time'    : 120,
            },
            {
                'node_id' : 31,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Tretyakovskaya',
        'name_original' : 'Третьяковская',
    },
    {
        'id'     : 101,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 100,
                'time'    : 150,
            },
            {
                'node_id' : 102,
                'time'    : 125,
            },
            {
                'node_id' : 86,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Oktyabrskaya',
        'name_original' : 'Октябрьская',
    },
    {
        'id'     : 102,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 101,
                'time'    : 125,
            },
            {
                'node_id' : 103,
                'time'    : 175,
            },
        ],
        'name_translit' : 'Shabolovskaya',
        'name_original' : 'Шаболовская',
    },
    {
        'id'     : 103,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 102,
                'time'    : 175,
            },
            {
                'node_id' : 104,
                'time'    : 185,
            },
        ],
        'name_translit' : 'Leninsky Prospekt',
        'name_original' : 'Ленинский проспект',
    },
    {
        'id'     : 104,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 103,
                'time'    : 195,
            },
            {
                'node_id' : 105,
                'time'    : 125,
            },
        ],
        'name_translit' : 'Akademicheskaya',
        'name_original' : 'Академическая',
    },
    {
        'id'     : 105,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 104,
                'time'    : 130,
            },
            {
                'node_id' : 106,
                'time'    : 100,
            },
        ],
        'name_translit' : 'Profsoyuznaya',
        'name_original' : 'Профсоюзная',
    },
    {
        'id'     : 106,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 105,
                'time'    : 110,
            },
            {
                'node_id' : 107,
                'time'    : 140,
            },
        ],
        'name_translit' : 'Novye Cheremushki',
        'name_original' : 'Новые Черёмушки',
    },
    {
        'id'     : 107,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 106,
                'time'    : 145,
            },
            {
                'node_id' : 108,
                'time'    : 170,
            },
        ],
        'name_translit' : 'Kaluzhskaya',
        'name_original' : 'Калужская',
    },
    {
        'id'     : 108,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 107,
                'time'    : 175,
            },
            {
                'node_id' : 109,
                'time'    : 125,
            },
        ],
        'name_translit' : 'Belyaevo',
        'name_original' : 'Беляево',
    },
    {
        'id'     : 109,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 108,
                'time'    : 115,
            },
            {
                'node_id' : 110,
                'time'    : 155,
            },
        ],
        'name_translit' : 'Konkovo',
        'name_original' : 'Коньково',
    },
    {
        'id'     : 110,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 109,
                'time'    : 155,
            },
            {
                'node_id' : 111,
                'time'    : 170,
            },
        ],
        'name_translit' : 'Tyoply Stan',
        'name_original' : 'Тёплый стан',
    },
    {
        'id'     : 111,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 110,
                'time'    : 180,
            },
            {
                'node_id' : 112,
                'time'    : 150,
            },
        ],
        'name_translit' : 'Yasenevo',
        'name_original' : 'Ясенево',
    },
    {
        'id'     : 112,
        'lineId' : '6',
        'links'  : [
            {
                'node_id' : 111,
                'time'    : 150,
            },
            {
                'node_id' : 168,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Novoyasenevskaya',
        'name_original' : 'Новоясеневская',
    },
    {
        'id'     : 113,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 114,
                'time'    : 115,
            },
        ],
        'name_translit' : 'Planernaya',
        'name_original' : 'Планерная',
    },
    {
        'id'     : 114,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 113,
                'time'    : 130,
            },
            {
                'node_id' : 115,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Skhodnenskaya',
        'name_original' : 'Сходненская',
    },
    {
        'id'     : 115,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 114,
                'time'    : 210,
            },
            {
                'node_id' : 116,
                'time'    : 145,
            },
        ],
        'name_translit' : 'Tushinskaya',
        'name_original' : 'Тушинская',
    },
    {
        'id'     : 116,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 115,
                'time'    : 145,
            },
            {
                'node_id' : 117,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Spartak',
        'name_original' : 'Спартак',
    },
    {
        'id'     : 117,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 116,
                'time'    : 205,
            },
            {
                'node_id' : 118,
                'time'    : 190,
            },
        ],
        'name_translit' : 'Schukinskaya',
        'name_original' : 'Щукинская',
    },
    {
        'id'     : 118,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 117,
                'time'    : 200,
            },
            {
                'node_id' : 119,
                'time'    : 215,
            },
        ],
        'name_translit' : 'Oktyabrskoe Pole',
        'name_original' : 'Октябрьское поле',
    },
    {
        'id'     : 119,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 118,
                'time'    : 210,
            },
            {
                'node_id' : 120,
                'time'    : 155,
            },
        ],
        'name_translit' : 'Polezhaevskaya',
        'name_original' : 'Полежаевская',
    },
    {
        'id'     : 120,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 119,
                'time'    : 155,
            },
            {
                'node_id' : 121,
                'time'    : 140,
            },
        ],
        'name_translit' : 'Begovaya',
        'name_original' : 'Беговая',
    },
    {
        'id'     : 121,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 120,
                'time'    : 135,
            },
            {
                'node_id' : 122,
                'time'    : 145,
            },
        ],
        'name_translit' : 'Ulitsa 1905 goda',
        'name_original' : 'Улица 1905 года',
    },
    {
        'id'     : 122,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 121,
                'time'    : 130,
            },
            {
                'node_id' : 123,
                'time'    : 165,
            },
            {
                'node_id' : 77,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Barrikandaya',
        'name_original' : 'Баррикадная',
    },
    {
        'id'     : 123,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 122,
                'time'    : 165,
            },
            {
                'node_id' : 124,
                'time'    : 135,
            },
            {
                'node_id' : 29,
                'time'    : 180,
            },
            {
                'node_id' : 153,
                'time'    : 240,
            },
        ],
        'name_translit' : 'Pushkinskaya',
        'name_original' : 'Пушкинская',
    },
    {
        'id'     : 124,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 123,
                'time'    : 115,
            },
            {
                'node_id' : 125,
                'time'    : 95,
            },
            {
                'node_id' : 9,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Kuznetsky Most',
        'name_original' : 'Кузнецкий мост',
    },
    {
        'id'     : 125,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 124,
                'time'    : 105,
            },
            {
                'node_id' : 126,
                'time'    : 170,
            },
            {
                'node_id' : 99,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Kitay-Gorod',
        'name_original' : 'Китай-город',
    },
    {
        'id'     : 126,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 125,
                'time'    : 175,
            },
            {
                'node_id' : 127,
                'time'    : 150,
            },
            {
                'node_id' : 83,
                'time'    : 180,
            },
            {
                'node_id' : 141,
                'time'    : 240,
            },
        ],
        'name_translit' : 'Taganskaya',
        'name_original' : 'Таганская',
    },
    {
        'id'     : 127,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 126,
                'time'    : 135,
            },
            {
                'node_id' : 128,
                'time'    : 150,
            },
            {
                'node_id' : 181,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Proletarskaya',
        'name_original' : 'Пролетарская',
    },
    {
        'id'     : 128,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 127,
                'time'    : 145,
            },
            {
                'node_id' : 129,
                'time'    : 250,
            },
        ],
        'name_translit' : 'Volgogradsky Prospekt',
        'name_original' : 'Волгоградский проспект',
    },
    {
        'id'     : 129,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 128,
                'time'    : 245,
            },
            {
                'node_id' : 130,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Tekstilschiki',
        'name_original' : 'Текстильщики',
    },
    {
        'id'     : 130,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 129,
                'time'    : 180,
            },
            {
                'node_id' : 131,
                'time'    : 200,
            },
        ],
        'name_translit' : 'Kuzminki',
        'name_original' : 'Кузьминки',
    },
    {
        'id'     : 131,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 130,
                'time'    : 200,
            },
            {
                'node_id' : 132,
                'time'    : 175,
            },
        ],
        'name_translit' : 'Ryazansky Prospekt',
        'name_original' : 'Рязанский проспект',
    },
    {
        'id'     : 132,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 131,
                'time'    : 175,
            },
            {
                'node_id' : 133,
                'time'    : 265,
            },
        ],
        'name_translit' : 'Vyhino',
        'name_original' : 'Выхино',
    },
    {
        'id'     : 133,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 132,
                'time'    : 265,
            },
            {
                'node_id' : 134,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Lermontovsky Prospekt',
        'name_original' : 'Лермонтовский проспект',
    },
    {
        'id'     : 134,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 133,
                'time'    : 205,
            },
            {
                'node_id' : 197,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Zhulebino',
        'name_original' : 'Жулебино',
    },
    {
        'id'     : 135,
        'lineId' : '8',
        'links'  : [
            {
                'node_id' : 136,
                'time'    : 265,
            },
        ],
        'name_translit' : 'Novokosino',
        'name_original' : 'Новокосино',
    },
    {
        'id'     : 136,
        'lineId' : '8',
        'links'  : [
            {
                'node_id' : 135,
                'time'    : 265,
            },
            {
                'node_id' : 137,
                'time'    : 160,
            },
        ],
        'name_translit' : 'Novogireevo',
        'name_original' : 'Новогиреево',
    },
    {
        'id'     : 137,
        'lineId' : '8',
        'links'  : [
            {
                'node_id' : 136,
                'time'    : 160,
            },
            {
                'node_id' : 138,
                'time'    : 225,
            },
        ],
        'name_translit' : 'Perovo',
        'name_original' : 'Перово',
    },
    {
        'id'     : 138,
        'lineId' : '8',
        'links'  : [
            {
                'node_id' : 137,
                'time'    : 230,
            },
            {
                'node_id' : 139,
                'time'    : 160,
            },
        ],
        'name_translit' : 'Shosse Entuziastov',
        'name_original' : 'Шоссе Энтузиастов',
    },
    {
        'id'     : 139,
        'lineId' : '8',
        'links'  : [
            {
                'node_id' : 138,
                'time'    : 160,
            },
            {
                'node_id' : 140,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Aviamotornaya',
        'name_original' : 'Авиамоторная',
    },
    {
        'id'     : 140,
        'lineId' : '8',
        'links'  : [
            {
                'node_id' : 139,
                'time'    : 180,
            },
            {
                'node_id' : 141,
                'time'    : 170,
            },
            {
                'node_id' : 180,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Ploschad Ilyicha',
        'name_original' : 'Площадь Ильича',
    },
    {
        'id'     : 141,
        'lineId' : '8',
        'links'  : [
            {
                'node_id' : 140,
                'time'    : 165,
            },
            {
                'node_id' : 142,
                'time'    : 150,
            },
            {
                'node_id' : 83,
                'time'    : 180,
            },
            {
                'node_id' : 126,
                'time'    : 240,
            },
        ],
        'name_translit' : 'Marksistskaya',
        'name_original' : 'Марксистская',
    },
    {
        'id'     : 142,
        'lineId' : '8',
        'links'  : [
            {
                'node_id' : 141,
                'time'    : 150,
            },
            {
                'node_id' : 100,
                'time'    : 120,
            },
            {
                'node_id' : 31,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Tretyakovskaya',
        'name_original' : 'Третьяковская',
    },
    {
        'id'     : 143,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 144,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Altufyevo',
        'name_original' : 'Алтуфьево',
    },
    {
        'id'     : 144,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 143,
                'time'    : 180,
            },
            {
                'node_id' : 145,
                'time'    : 195,
            },
        ],
        'name_translit' : 'Bibirevo',
        'name_original' : 'Бибирево',
    },
    {
        'id'     : 145,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 144,
                'time'    : 195,
            },
            {
                'node_id' : 146,
                'time'    : 175,
            },
        ],
        'name_translit' : 'Otradnoe',
        'name_original' : 'Отрадное',
    },
    {
        'id'     : 146,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 145,
                'time'    : 175,
            },
            {
                'node_id' : 147,
                'time'    : 150,
            },
        ],
        'name_translit' : 'Vladykino',
        'name_original' : 'Владыкино',
    },
    {
        'id'     : 147,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 146,
                'time'    : 150,
            },
            {
                'node_id' : 148,
                'time'    : 190,
            },
        ],
        'name_translit' : 'Petrovsko-Razumovskaya',
        'name_original' : 'Петровско-Разумовская',
    },
    {
        'id'     : 148,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 147,
                'time'    : 190,
            },
            {
                'node_id' : 149,
                'time'    : 105,
            },
        ],
        'name_translit' : 'Timiryazevskaya',
        'name_original' : 'Тимирязевская',
    },
    {
        'id'     : 149,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 148,
                'time'    : 105,
            },
            {
                'node_id' : 150,
                'time'    : 130,
            },
        ],
        'name_translit' : 'Dmitrovskaya',
        'name_original' : 'Дмитровская',
    },
    {
        'id'    : 150,
        'links' : [
            {
                'node_id' : 149,
                'time'    : 130,
            },
            {
                'node_id' : 151,
                'time'    : 155,
            },
        ],
        'name_translit' : 'Savyolovskaya',
        'name_original' : 'Савёловская',
        'lineId'        : '9',
    },
    {
        'id'     : 151,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 150,
                'time'    : 155,
            },
            {
                'node_id' : 152,
                'time'    : 155,
            },
            {
                'node_id' : 79,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Mendeleevskaya',
        'name_original' : 'Менделеевская',
    },
    {
        'id'     : 152,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 151,
                'time'    : 155,
            },
            {
                'node_id' : 153,
                'time'    : 110,
            },
            {
                'node_id' : 177,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Tvetnoy bulvar',
        'name_original' : 'Цветной бульвар',
    },
    {
        'id'     : 153,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 152,
                'time'    : 110,
            },
            {
                'node_id' : 154,
                'time'    : 145,
            },
            {
                'node_id' : 29,
                'time'    : 240,
            },
            {
                'node_id' : 123,
                'time'    : 240,
            },
        ],
        'name_translit' : 'Chekhovskaya',
        'name_original' : 'Чеховская',
    },
    {
        'id'     : 154,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 153,
                'time'    : 145,
            },
            {
                'node_id' : 155,
                'time'    : 135,
            },
            {
                'node_id' : 11,
                'time'    : 360,
            },
            {
                'node_id' : 51,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Borovitskaya',
        'name_original' : 'Боровицкая',
    },
    {
        'id'     : 155,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 154,
                'time'    : 135,
            },
            {
                'node_id' : 156,
                'time'    : 120,
            },
            {
                'node_id' : 85,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Polyanka',
        'name_original' : 'Полянка',
    },
    {
        'id'     : 156,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 155,
                'time'    : 120,
            },
            {
                'node_id' : 157,
                'time'    : 170,
            },
        ],
        'name_translit' : 'Serpuhovskaya',
        'name_original' : 'Серпуховская',
    },
    {
        'id'     : 157,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 156,
                'time'    : 170,
            },
            {
                'node_id' : 158,
                'time'    : 230,
            },
        ],
        'name_translit' : 'Tulskaya',
        'name_original' : 'Тульская',
    },
    {
        'id'     : 158,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 157,
                'time'    : 230,
            },
            {
                'node_id' : 159,
                'time'    : 125,
            },
        ],
        'name_translit' : 'Nagatinskaya',
        'name_original' : 'Нагатинская',
    },
    {
        'id'     : 159,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 158,
                'time'    : 125,
            },
            {
                'node_id' : 160,
                'time'    : 110,
            },
        ],
        'name_translit' : 'Nagornaya',
        'name_original' : 'Нагорная',
    },
    {
        'id'     : 160,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 159,
                'time'    : 110,
            },
            {
                'node_id' : 161,
                'time'    : 115,
            },
        ],
        'name_translit' : 'Nahimovsky Prospekt',
        'name_original' : 'Нахимовский проспект',
    },
    {
        'id'     : 161,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 160,
                'time'    : 115,
            },
            {
                'node_id' : 162,
                'time'    : 130,
            },
            {
                'node_id' : 194,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Sevastopolskaya',
        'name_original' : 'Севастопольская',
    },
    {
        'id'     : 162,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 161,
                'time'    : 130,
            },
            {
                'node_id' : 163,
                'time'    : 160,
            },
        ],
        'name_translit' : 'Chertanoskaya',
        'name_original' : 'Чертановская',
    },
    {
        'id'     : 163,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 162,
                'time'    : 160,
            },
            {
                'node_id' : 164,
                'time'    : 115,
            },
        ],
        'name_translit' : 'Yuzhnaya',
        'name_original' : 'Южная',
    },
    {
        'id'     : 164,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 163,
                'time'    : 115,
            },
            {
                'node_id' : 165,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Prazhskaya',
        'name_original' : 'Пражская',
    },
    {
        'id'     : 165,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 164,
                'time'    : 205,
            },
            {
                'node_id' : 166,
                'time'    : 145,
            },
        ],
        'name_translit' : 'Ulitsa Akademika Yangelya',
        'name_original' : 'Улица Академика Янгеля',
    },
    {
        'id'     : 166,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 165,
                'time'    : 145,
            },
            {
                'node_id' : 167,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Annino',
        'name_original' : 'Аннино',
    },
    {
        'id'     : 167,
        'lineId' : '9',
        'links'  : [
            {
                'node_id' : 166,
                'time'    : 205,
            },
            {
                'node_id' : 170,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Bulvar Dmitriya Donskogo',
        'name_original' : 'Бульвар Дмитрия Донского',
    },
    {
        'id'     : 168,
        'lineId' : '12',
        'links'  : [
            {
                'node_id' : 169,
                'time'    : 205,
            },
            {
                'node_id' : 112,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Bitsevsky Park',
        'name_original' : 'Битцевский парк',
    },
    {
        'id'     : 169,
        'lineId' : '12',
        'links'  : [
            {
                'node_id' : 168,
                'time'    : 205,
            },
            {
                'node_id' : 170,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Lesoparkovaya',
        'name_original' : 'Лесопарковая',
    },
    {
        'id'     : 170,
        'lineId' : '12',
        'links'  : [
            {
                'node_id' : 169,
                'time'    : 205,
            },
            {
                'node_id' : 171,
                'time'    : 325,
            },
            {
                'node_id' : 167,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Ulitsa Starokachslovskaya',
        'name_original' : 'Улица Старокачаловская',
    },
    {
        'id'     : 171,
        'lineId' : '12',
        'links'  : [
            {
                'node_id' : 170,
                'time'    : 325,
            },
            {
                'node_id' : 172,
                'time'    : 145,
            },
        ],
        'name_translit' : 'Ulitsa Skobelevskaya',
        'name_original' : 'Улица Скобелевская',
    },
    {
        'id'     : 172,
        'lineId' : '12',
        'links'  : [
            {
                'node_id' : 171,
                'time'    : 145,
            },
            {
                'node_id' : 173,
                'time'    : 145,
            },
        ],
        'name_translit' : 'Bulvar Admirala Ushakova',
        'name_original' : 'Бульвар адмирала Ушакова',
    },
    {
        'id'     : 173,
        'lineId' : '12',
        'links'  : [
            {
                'node_id' : 172,
                'time'    : 145,
            },
            {
                'node_id' : 174,
                'time'    : 145,
            },
        ],
        'name_translit' : 'Ulitsa Gorchakova',
        'name_original' : 'Улица Горчакова',
    },
    {
        'id'     : 174,
        'lineId' : '12',
        'links'  : [
            {
                'node_id' : 173,
                'time'    : 145,
            },
        ],
        'name_translit' : 'Buninskaya Alleya',
        'name_original' : 'Бунинская аллея',
    },
    {
        'id'     : 175,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 176,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Mariina Roscha',
        'name_original' : 'Марьина роща',
    },
    {
        'id'     : 176,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 175,
                'time'    : 205,
            },
            {
                'node_id' : 177,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Dostoyevskaya',
        'name_original' : 'Достоевская',
    },
    {
        'id'     : 177,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 176,
                'time'    : 205,
            },
            {
                'node_id' : 178,
                'time'    : 205,
            },
            {
                'node_id' : 152,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Trubnaya',
        'name_original' : 'Трубная',
    },
    {
        'id'     : 178,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 177,
                'time'    : 205,
            },
            {
                'node_id' : 179,
                'time'    : 205,
            },
            {
                'node_id' : 8,
                'time'    : 180,
            },
            {
                'node_id' : 98,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Sretensky bulvar',
        'name_original' : 'Сретенский бульвар',
    },
    {
        'id'     : 179,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 178,
                'time'    : 205,
            },
            {
                'node_id' : 180,
                'time'    : 205,
            },
            {
                'node_id' : 49,
                'time'    : 180,
            },
            {
                'node_id' : 82,
                'time'    : 360,
            },
        ],
        'name_translit' : 'Chkalovskaya',
        'name_original' : 'Чкаловская',
    },
    {
        'id'     : 180,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 179,
                'time'    : 205,
            },
            {
                'node_id' : 181,
                'time'    : 205,
            },
            {
                'node_id' : 140,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Rimskaya',
        'name_original' : 'Римская',
    },
    {
        'id'     : 181,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 180,
                'time'    : 205,
            },
            {
                'node_id' : 182,
                'time'    : 205,
            },
            {
                'node_id' : 127,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Krestyanskaya Zastava',
        'name_original' : 'Крестьянская застава',
    },
    {
        'id'     : 182,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 181,
                'time'    : 205,
            },
            {
                'node_id' : 183,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Dubrovka',
        'name_original' : 'Дубровка',
    },
    {
        'id'     : 183,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 182,
                'time'    : 205,
            },
            {
                'node_id' : 184,
                'time'    : 265,
            },
        ],
        'name_translit' : 'Kozhuhovskaya',
        'name_original' : 'Кожуховская',
    },
    {
        'id'     : 184,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 183,
                'time'    : 265,
            },
            {
                'node_id' : 185,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Pechatniki',
        'name_original' : 'Печатники',
    },
    {
        'id'     : 185,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 184,
                'time'    : 205,
            },
            {
                'node_id' : 186,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Volzhskaya',
        'name_original' : 'Волжская',
    },
    {
        'id'     : 186,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 185,
                'time'    : 205,
            },
            {
                'node_id' : 187,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Lyublino',
        'name_original' : 'Люблино',
    },
    {
        'id'     : 187,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 186,
                'time'    : 205,
            },
            {
                'node_id' : 188,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Bratislavskaya',
        'name_original' : 'Братиславская',
    },
    {
        'id'     : 188,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 187,
                'time'    : 205,
            },
            {
                'node_id' : 189,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Marino',
        'name_original' : 'Марьино',
    },
    {
        'id'     : 189,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 188,
                'time'    : 205,
            },
            {
                'node_id' : 190,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Borisovo',
        'name_original' : 'Борисово',
    },
    {
        'id'     : 190,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 189,
                'time'    : 205,
            },
            {
                'node_id' : 191,
                'time'    : 145,
            },
        ],
        'name_translit' : 'Shipilovskaya',
        'name_original' : 'Шипиловская',
    },
    {
        'id'     : 191,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 190,
                'time'    : 145,
            },
            {
                'node_id' : 40,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Zyablikovo',
        'name_original' : 'Зябликово',
    },
    {
        'id'     : 192,
        'lineId' : '11',
        'links'  : [
            {
                'node_id' : 193,
                'time'    : 185,
            },
            {
                'node_id' : 35,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Kashirskaya',
        'name_original' : 'Каширская',
    },
    {
        'id'     : 193,
        'lineId' : '11',
        'links'  : [
            {
                'node_id' : 192,
                'time'    : 185,
            },
            {
                'node_id' : 194,
                'time'    : 135,
            },
        ],
        'name_translit' : 'Varshavskaya',
        'name_original' : 'Варшавская',
    },
    {
        'id'     : 194,
        'lineId' : '11',
        'links'  : [
            {
                'node_id' : 193,
                'time'    : 135,
            },
            {
                'node_id' : 161,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Kahovskaya',
        'name_original' : 'Каховская',
    },
    {
        'id'     : 195,
        'lineId' : '4',
        'links'  : [
            {
                'node_id' : 68,
                'time'    : 180,
            },
            {
                'node_id' : 232,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Delovoy Center',
        'name_original' : 'Деловой центр',
    },
    {
        'id'     : 196,
        'lineId' : '8a',
        'links'  : [
            {
                'node_id' : 54,
                'time'    : 120,
            },
            {
                'node_id' : 217,
                'time'    : 300,
            },
            {
                'node_id' : 218,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Park Pobedy',
        'name_original' : 'Парк Победы',
    },
    {
        'id'     : 197,
        'lineId' : '7',
        'links'  : [
            {
                'node_id' : 134,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Kotelniki',
        'name_original' : 'Котельники',
    },
    {
        'id'     : 205,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 175,
                'time'    : 180,
            },
            {
                'node_id' : 206,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Butyrskaya',
        'name_original' : 'Бутырская',
    },
    {
        'id'     : 206,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 205,
                'time'    : 180,
            },
            {
                'node_id' : 207,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Fonvizinskaya',
        'name_original' : 'Фонвизинская',
    },
    {
        'id'     : 207,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 206,
                'time'    : 180,
            },
            {
                'node_id' : 208,
                'time'    : 120,
            },
            {
                'node_id' : 147,
                'time'    : 60,
            },
        ],
        'name_translit' : 'Petrovsko-Razumovskaya',
        'name_original' : 'Петровско-Разумовская',
    },
    {
        'id'     : 208,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 207,
                'time'    : 120,
            },
            {
                'node_id' : 209,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Okruzhnaya',
        'name_original' : 'Окружная',
    },
    {
        'id'     : 209,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 208,
                'time'    : 120,
            },
            {
                'node_id' : 210,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Verkhnie Likhobory',
        'name_original' : 'Верхние Лихоборы',
    },
    {
        'id'     : 210,
        'lineId' : '10',
        'links'  : [
            {
                'node_id' : 209,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Seligerskaya',
        'name_original' : 'Селигерская',
    },
    {
        'id'     : 211,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 212,
                'time'    : 120,
            },
            {
                'node_id' : 21,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Belomorskaya',
        'name_original' : 'Беломорская',
    },
    {
        'id'     : 212,
        'lineId' : '2',
        'links'  : [
            {
                'node_id' : 211,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Khovrino',
        'name_original' : 'Ховрино',
    },
    {
        'id'    : 213,
        'links' : [
            {
                'node_id' : 228,
                'time'    : 60,
            },
            {
                'node_id' : 150,
                'time'    : 180,
            },
            {
                'node_id' : 214,
                'time'    : 240,
            },
        ],
        'name_translit' : 'Savyolovskaya',
        'name_original' : 'Савёловская',
        'lineId'        : '8a',
    },
    {
        'id'    : 214,
        'links' : [
            {
                'node_id' : 229,
                'time'    : 60,
            },
            {
                'node_id' : 26,
                'time'    : 360,
            },
            {
                'node_id' : 213,
                'time'    : 240,
            },
            {
                'node_id' : 215,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Petrovskiy Park',
        'name_original' : 'Петровский парк',
        'lineId'        : '8a',
    },
    {
        'id'    : 215,
        'links' : [
            {
                'node_id' : 230,
                'time'    : 60,
            },
            {
                'node_id' : 214,
                'time'    : 120,
            },
            {
                'node_id' : 216,
                'time'    : 120,
            },
        ],
        'name_translit' : 'CSKA',
        'name_original' : 'ЦСКА',
        'lineId'        : '8a',
    },
    {
        'id'    : 216,
        'links' : [
            {
                'node_id' : 231,
                'time'    : 60,
            },
            {
                'node_id' : 215,
                'time'    : 120,
            },
            {
                'node_id' : 217,
                'time'    : 300,
            },
            {
                'node_id' : 119,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Khoroshyovskaya',
        'name_original' : 'Хорошёвская',
        'lineId'        : '8a',
    },
    {
        'id'    : 217,
        'links' : [
            {
                'node_id' : 232,
                'time'    : 60,
            },
            {
                'node_id' : 216,
                'time'    : 300,
            },
            {
                'node_id' : 218,
                'time'    : 300,
            },
        ],
        'name_translit' : 'Shelepikha',
        'name_original' : 'Шелепиха',
        'lineId'        : '8a',
    },
    {
        'id'    : 218,
        'links' : [
            {
                'node_id' : 196,
                'time'    : 180,
            },
            {
                'node_id' : 219,
                'time'    : 240,
            },
        ],
        'name_translit' : 'Minskaya',
        'name_original' : 'Минская',
        'lineId'        : '8a',
    },
    {
        'id'    : 219,
        'links' : [
            {
                'node_id' : 220,
                'time'    : 120,
            },
            {
                'node_id' : 218,
                'time'    : 240,
            },
        ],
        'name_translit' : 'Lomonosovskiy prospekt',
        'name_original' : 'Лермонтовский проспект',
        'lineId'        : '8a',
    },
    {
        'id'    : 220,
        'links' : [
            {
                'node_id' : 221,
                'time'    : 180,
            },
            {
                'node_id' : 219,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Ramenki',
        'name_original' : 'Раменки',
        'lineId'        : '8a',
    },
    {
        'id'    : 221,
        'links' : [
            {
                'node_id' : 222,
                'time'    : 240,
            },
            {
                'node_id' : 220,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Michurinskiy prospekt',
        'name_original' : 'Мичуринский проспект',
        'lineId'        : '8a',
    },
    {
        'id'    : 222,
        'links' : [
            {
                'node_id' : 221,
                'time'    : 240,
            },
            {
                'node_id' : 223,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Ozernaya',
        'name_original' : 'Озерная',
        'lineId'        : '8a',
    },
    {
        'id'    : 223,
        'links' : [
            {
                'node_id' : 222,
                'time'    : 180,
            },
            {
                'node_id' : 224,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Govorovo',
        'name_original' : 'Говорово',
        'lineId'        : '8a',
    },
    {
        'id'    : 224,
        'links' : [
            {
                'node_id' : 223,
                'time'    : 180,
            },
            {
                'node_id' : 225,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Solntsevo',
        'name_original' : 'Солнцево',
        'lineId'        : '8a',
    },
    {
        'id'    : 225,
        'links' : [
            {
                'node_id' : 224,
                'time'    : 180,
            },
            {
                'node_id' : 226,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Borovskoye shosse',
        'name_original' : 'Боровское шоссе',
        'lineId'        : '8a',
    },
    {
        'id'    : 226,
        'links' : [
            {
                'node_id' : 225,
                'time'    : 120,
            },
            {
                'node_id' : 227,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Novoperedelkino',
        'name_original' : 'Новопеределкино',
        'lineId'        : '8a',
    },
    {
        'id'    : 227,
        'links' : [
            {
                'node_id' : 226,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Rasskazovka',
        'name_original' : 'Рассказовка',
        'lineId'        : '8a',
    },
    {
        'id'    : 228,
        'links' : [
            {
                'node_id' : 229,
                'time'    : 240,
            },
            {
                'node_id' : 150,
                'time'    : 180,
            },
            {
                'node_id' : 213,
                'time'    : 60,
            },
        ],
        'name_translit' : 'Savyolovskaya',
        'name_original' : 'Савёловская',
        'lineId'        : '11',
    },
    {
        'id'    : 229,
        'links' : [
            {
                'node_id' : 214,
                'time'    : 60,
            },
            {
                'node_id' : 26,
                'time'    : 360,
            },
            {
                'node_id' : 228,
                'time'    : 240,
            },
            {
                'node_id' : 230,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Petrovskiy Park',
        'name_original' : 'Петровский парк',
        'lineId'        : '11',
    },
    {
        'id'    : 230,
        'links' : [
            {
                'node_id' : 215,
                'time'    : 60,
            },
            {
                'node_id' : 229,
                'time'    : 120,
            },
            {
                'node_id' : 231,
                'time'    : 120,
            },
        ],
        'name_translit' : 'CSKA',
        'name_original' : 'ЦСКА',
        'lineId'        : '11',
    },
    {
        'id'    : 231,
        'links' : [
            {
                'node_id' : 216,
                'time'    : 60,
            },
            {
                'node_id' : 230,
                'time'    : 120,
            },
            {
                'node_id' : 232,
                'time'    : 300,
            },
            {
                'node_id' : 119,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Khoroshyovskaya',
        'name_original' : 'Хорошёвская',
        'lineId'        : '11',
    },
    {
        'id'    : 232,
        'links' : [
            {
                'node_id' : 217,
                'time'    : 60,
            },
            {
                'node_id' : 231,
                'time'    : 300,
            },
            {
                'node_id' : 195,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Shelepikha',
        'name_original' : 'Шелепиха',
        'lineId'        : '11',
    },
];
