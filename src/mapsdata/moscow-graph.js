/* eslint-disable no-magic-numbers */
export default [
    {
        'id'               : 1,
        'line'             : 1,
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
        'id'    : 2,
        'links' : [
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
    },
    {
        'id'    : 3,
        'links' : [
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
    },
    {
        'id'    : 4,
        'links' : [
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
    },
    {
        'id'    : 5,
        'links' : [
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
    },
    {
        'id'    : 6,
        'links' : [
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
    },
    {
        'id'    : 7,
        'links' : [
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
    },
    {
        'id'    : 8,
        'links' : [
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
    },
    {
        'id'    : 9,
        'links' : [
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
    },
    {
        'id'    : 10,
        'links' : [
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
    },
    {
        'id'    : 11,
        'links' : [
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
    },
    {
        'id'    : 12,
        'links' : [
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
    },
    {
        'id'    : 13,
        'links' : [
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
    },
    {
        'id'    : 14,
        'links' : [
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
    },
    {
        'id'    : 15,
        'links' : [
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
    },
    {
        'id'    : 16,
        'links' : [
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
    },
    {
        'id'    : 17,
        'links' : [
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
    },
    {
        'id'    : 18,
        'links' : [
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
    },
    {
        'id'    : 19,
        'links' : [
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
    },
    {
        'id'    : 20,
        'links' : [
            {
                'node_id' : 19,
                'time'    : 175,
            },
        ],
        'name_translit' : 'Troparyovo',
    },
    {
        'id'    : 21,
        'links' : [
            {
                'node_id' : 22,
                'time'    : 140,
            },
        ],
        'name_translit' : 'Rechnoy Vokzal',
    },
    {
        'id'    : 22,
        'links' : [
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
    },
    {
        'id'    : 23,
        'links' : [
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
    },
    {
        'id'    : 24,
        'links' : [
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
    },
    {
        'id'    : 25,
        'links' : [
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
    },
    {
        'id'    : 26,
        'links' : [
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
    },
    {
        'id'    : 27,
        'links' : [
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
    },
    {
        'id'    : 28,
        'links' : [
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
    },
    {
        'id'    : 29,
        'links' : [
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
    },
    {
        'id'    : 30,
        'links' : [
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
    },
    {
        'id'    : 31,
        'links' : [
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
    },
    {
        'id'    : 32,
        'links' : [
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
    },
    {
        'id'    : 33,
        'links' : [
            {
                'node_id' : 32,
                'time'    : 215,
            },
            {
                'node_id' : 34,
                'time'    : 270,
            },
        ],
        'name_translit' : 'Avtozavodskaya',
    },
    {
        'id'    : 34,
        'links' : [
            {
                'node_id' : 33,
                'time'    : 265,
            },
            {
                'node_id' : 35,
                'time'    : 235,
            },
        ],
        'name_translit' : 'Kolomenskaya',
    },
    {
        'id'    : 35,
        'links' : [
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
    },
    {
        'id'    : 36,
        'links' : [
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
    },
    {
        'id'    : 37,
        'links' : [
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
    },
    {
        'id'    : 38,
        'links' : [
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
    },
    {
        'id'    : 39,
        'links' : [
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
    },
    {
        'id'    : 40,
        'links' : [
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
    },
    {
        'id'    : 41,
        'links' : [
            {
                'node_id' : 40,
                'time'    : 265,
            },
        ],
        'name_translit' : 'Alma-Atinskaya',
    },
    {
        'id'    : 42,
        'links' : [
            {
                'node_id' : 43,
                'time'    : 155,
            },
        ],
        'name_translit' : 'Shyolkovskaya',
    },
    {
        'id'    : 43,
        'links' : [
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
    },
    {
        'id'    : 44,
        'links' : [
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
    },
    {
        'id'    : 45,
        'links' : [
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
    },
    {
        'id'    : 46,
        'links' : [
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
    },
    {
        'id'    : 47,
        'links' : [
            {
                'node_id' : 46,
                'time'    : 125,
            },
            {
                'node_id' : 49,
                'time'    : 355,
            },
        ],
        'name_translit' : 'Elektrozavodskaya',
    },
    {
        'id'    : 49,
        'links' : [
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
    },
    {
        'id'    : 50,
        'links' : [
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
                'node_id' : 195,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Park Pobedy',
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
    },
    {
        'id'    : 57,
        'links' : [
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
    },
    {
        'id'    : 58,
        'links' : [
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
    },
    {
        'id'    : 59,
        'links' : [
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
    },
    {
        'id'    : 60,
        'links' : [
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
    },
    {
        'id'    : 61,
        'links' : [
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
    },
    {
        'id'    : 62,
        'links' : [
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
    },
    {
        'id'    : 63,
        'links' : [
            {
                'node_id' : 62,
                'time'    : 145,
            },
        ],
        'name_translit' : 'Pyatnitskoye Shosse',
    },
    {
        'id'    : 64,
        'links' : [
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
        'name_translit' : 'Arbatskaya-2',
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
        'name_translit' : 'Smolenskaya-2',
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
    },
    {
        'id'    : 68,
        'links' : [
            {
                'node_id' : 67,
                'time'    : 445,
            },
            {
                'node_id' : 69,
                'time'    : 145,
            },
            {
                'node_id' : 196,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Vystavochnaya',
    },
    {
        'id'    : 69,
        'links' : [
            {
                'node_id' : 68,
                'time'    : 145,
            },
        ],
        'name_translit' : 'Mezhdunarodnaya',
    },
    {
        'id'    : 70,
        'links' : [
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
    },
    {
        'id'    : 71,
        'links' : [
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
    },
    {
        'id'    : 72,
        'links' : [
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
    },
    {
        'id'    : 73,
        'links' : [
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
    },
    {
        'id'    : 74,
        'links' : [
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
    },
    {
        'id'    : 75,
        'links' : [
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
    },
    {
        'id'    : 76,
        'links' : [
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
    },
    {
        'id'    : 77,
        'links' : [
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
    },
    {
        'id'    : 78,
        'links' : [
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
    },
    {
        'id'    : 79,
        'links' : [
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
    },
    {
        'id'    : 80,
        'links' : [
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
    },
    {
        'id'    : 82,
        'links' : [
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
    },
    {
        'id'    : 83,
        'links' : [
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
    },
    {
        'id'    : 84,
        'links' : [
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
    },
    {
        'id'    : 85,
        'links' : [
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
    },
    {
        'id'    : 86,
        'links' : [
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
    },
    {
        'id'    : 87,
        'links' : [
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
    },
    {
        'id'    : 88,
        'links' : [
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
    },
    {
        'id'    : 89,
        'links' : [
            {
                'node_id' : 90,
                'time'    : 170,
            },
        ],
        'name_translit' : 'Medvedkovo',
    },
    {
        'id'    : 90,
        'links' : [
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
    },
    {
        'id'    : 91,
        'links' : [
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
    },
    {
        'id'    : 92,
        'links' : [
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
    },
    {
        'id'    : 93,
        'links' : [
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
    },
    {
        'id'    : 94,
        'links' : [
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
    },
    {
        'id'    : 95,
        'links' : [
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
    },
    {
        'id'    : 96,
        'links' : [
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
    },
    {
        'id'    : 97,
        'links' : [
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
    },
    {
        'id'    : 98,
        'links' : [
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
    },
    {
        'id'    : 99,
        'links' : [
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
    },
    {
        'id'    : 100,
        'links' : [
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
    },
    {
        'id'    : 101,
        'links' : [
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
    },
    {
        'id'    : 102,
        'links' : [
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
    },
    {
        'id'    : 103,
        'links' : [
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
    },
    {
        'id'    : 104,
        'links' : [
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
    },
    {
        'id'    : 105,
        'links' : [
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
    },
    {
        'id'    : 106,
        'links' : [
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
    },
    {
        'id'    : 107,
        'links' : [
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
    },
    {
        'id'    : 108,
        'links' : [
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
    },
    {
        'id'    : 109,
        'links' : [
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
    },
    {
        'id'    : 110,
        'links' : [
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
    },
    {
        'id'    : 111,
        'links' : [
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
    },
    {
        'id'    : 112,
        'links' : [
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
    },
    {
        'id'    : 113,
        'links' : [
            {
                'node_id' : 114,
                'time'    : 115,
            },
        ],
        'name_translit' : 'Planernaya',
    },
    {
        'id'    : 114,
        'links' : [
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
    },
    {
        'id'    : 115,
        'links' : [
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
    },
    {
        'id'    : 116,
        'links' : [
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
    },
    {
        'id'    : 117,
        'links' : [
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
    },
    {
        'id'    : 118,
        'links' : [
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
    },
    {
        'id'    : 119,
        'links' : [
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
    },
    {
        'id'    : 120,
        'links' : [
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
    },
    {
        'id'    : 121,
        'links' : [
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
    },
    {
        'id'    : 122,
        'links' : [
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
    },
    {
        'id'    : 123,
        'links' : [
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
    },
    {
        'id'    : 124,
        'links' : [
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
    },
    {
        'id'    : 125,
        'links' : [
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
    },
    {
        'id'    : 126,
        'links' : [
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
    },
    {
        'id'    : 127,
        'links' : [
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
    },
    {
        'id'    : 128,
        'links' : [
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
    },
    {
        'id'    : 129,
        'links' : [
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
    },
    {
        'id'    : 130,
        'links' : [
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
    },
    {
        'id'    : 131,
        'links' : [
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
    },
    {
        'id'    : 132,
        'links' : [
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
    },
    {
        'id'    : 133,
        'links' : [
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
    },
    {
        'id'    : 134,
        'links' : [
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
    },
    {
        'id'    : 135,
        'links' : [
            {
                'node_id' : 136,
                'time'    : 265,
            },
        ],
        'name_translit' : 'Novokosino',
    },
    {
        'id'    : 136,
        'links' : [
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
    },
    {
        'id'    : 137,
        'links' : [
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
    },
    {
        'id'    : 138,
        'links' : [
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
    },
    {
        'id'    : 139,
        'links' : [
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
    },
    {
        'id'    : 140,
        'links' : [
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
    },
    {
        'id'    : 141,
        'links' : [
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
    },
    {
        'id'    : 142,
        'links' : [
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
    },
    {
        'id'    : 143,
        'links' : [
            {
                'node_id' : 144,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Altufyevo',
    },
    {
        'id'    : 144,
        'links' : [
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
    },
    {
        'id'    : 145,
        'links' : [
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
    },
    {
        'id'    : 146,
        'links' : [
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
    },
    {
        'id'    : 147,
        'links' : [
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
    },
    {
        'id'    : 148,
        'links' : [
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
    },
    {
        'id'    : 149,
        'links' : [
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
    },
    {
        'id'    : 151,
        'links' : [
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
    },
    {
        'id'    : 152,
        'links' : [
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
    },
    {
        'id'    : 153,
        'links' : [
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
        'name_translit' : 'Chehovskaya',
    },
    {
        'id'    : 154,
        'links' : [
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
    },
    {
        'id'    : 155,
        'links' : [
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
    },
    {
        'id'    : 156,
        'links' : [
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
    },
    {
        'id'    : 157,
        'links' : [
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
    },
    {
        'id'    : 158,
        'links' : [
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
    },
    {
        'id'    : 159,
        'links' : [
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
    },
    {
        'id'    : 160,
        'links' : [
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
    },
    {
        'id'    : 161,
        'links' : [
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
    },
    {
        'id'    : 162,
        'links' : [
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
    },
    {
        'id'    : 163,
        'links' : [
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
    },
    {
        'id'    : 164,
        'links' : [
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
    },
    {
        'id'    : 165,
        'links' : [
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
    },
    {
        'id'    : 166,
        'links' : [
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
    },
    {
        'id'    : 167,
        'links' : [
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
    },
    {
        'id'    : 168,
        'links' : [
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
    },
    {
        'id'    : 169,
        'links' : [
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
    },
    {
        'id'    : 170,
        'links' : [
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
    },
    {
        'id'    : 171,
        'links' : [
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
    },
    {
        'id'    : 172,
        'links' : [
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
    },
    {
        'id'    : 173,
        'links' : [
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
    },
    {
        'id'    : 174,
        'links' : [
            {
                'node_id' : 173,
                'time'    : 145,
            },
        ],
        'name_translit' : 'Buninskaya Alleya',
    },
    {
        'id'    : 175,
        'links' : [
            {
                'node_id' : 176,
                'time'    : 205,
            },
        ],
        'name_translit' : 'Mariina Roscha',
    },
    {
        'id'    : 176,
        'links' : [
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
    },
    {
        'id'    : 177,
        'links' : [
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
    },
    {
        'id'    : 178,
        'links' : [
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
    },
    {
        'id'    : 179,
        'links' : [
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
    },
    {
        'id'    : 180,
        'links' : [
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
    },
    {
        'id'    : 181,
        'links' : [
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
    },
    {
        'id'    : 182,
        'links' : [
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
    },
    {
        'id'    : 183,
        'links' : [
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
    },
    {
        'id'    : 184,
        'links' : [
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
    },
    {
        'id'    : 185,
        'links' : [
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
    },
    {
        'id'    : 186,
        'links' : [
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
    },
    {
        'id'    : 187,
        'links' : [
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
    },
    {
        'id'    : 188,
        'links' : [
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
    },
    {
        'id'    : 189,
        'links' : [
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
    },
    {
        'id'    : 190,
        'links' : [
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
    },
    {
        'id'    : 191,
        'links' : [
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
    },
    {
        'id'    : 192,
        'links' : [
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
    },
    {
        'id'    : 193,
        'links' : [
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
    },
    {
        'id'    : 194,
        'links' : [
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
    },
    {
        'id'    : 195,
        'links' : [
            {
                'node_id' : 196,
                'time'    : 505,
            },
            {
                'node_id' : 54,
                'time'    : 120,
            },
        ],
        'name_translit' : 'Delovoy Center',
    },
    {
        'id'    : 196,
        'links' : [
            {
                'node_id' : 195,
                'time'    : 505,
            },
            {
                'node_id' : 68,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Park Pobedy',
    },
    {
        'id'    : 197,
        'links' : [
            {
                'node_id' : 134,
                'time'    : 180,
            },
        ],
        'name_translit' : 'Kotelniki',
    },
];
