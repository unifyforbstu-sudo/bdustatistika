/* =========================================================
   BDU Qəbul Statistikası - script.js
   ---------------------------------------------------------
   Qeyd: saytda heç bir emoji istifadə olunmur. Bütün vizual
   işarələr index.html içindəki SVG sprite-dan gəlir:
   <svg class="ico"><use href="#i-xxx" /></svg>
   ========================================================= */

'use strict';

/* =========================================================
   DATA - FAKÜLTƏLƏR
   ========================================================= */
const FACULTIES = [
  /* 1 */
  {
    id: 'ism',
    name: 'İnformasiya və Sənəd Menecmenti Fakültəsi',
    short: 'İSM Fakültəsi',
    logo: 'images/logo-ism.png',
    about: 'İnformasiya və Sənəd Menecmenti fakültəsi kitabxanaçılıq, arxiv işi, muzeyşünaslıq və informasiya menecmenti sahəsində mütəxəssislər hazırlayır.',
    specialties: [
      { id: 'kitabxana', name: 'Kitabxanaçılıq və informasiya fəaliyyəti', code: '6002010', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: 424, paid: 337.7 },
      { id: 'kitabxana-en', name: 'Kitabxanaçılıq və informasiya fəaliyyəti', code: '6002010', group: 3, subgroup: 'dt', lang: 'en', type: 'eyani', free: 423.7, paid: 200 },
      { id: 'muzey', name: 'Muzey arxiv işi və abidələrin qorunması', code: '6003012', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: 414.8, paid: 396.8 },
    ]
  },

  /* 2 */
  {
    id: 'cografiya',
    name: 'Coğrafiya Fakültəsi',
    short: 'Coğrafiya Fakültəsi',
    logo: 'images/logo-cografiya.png',
    about: 'Coğrafiya fakültəsi coğrafiya, hidrometeorologiya, geomatika və geodeziya mühəndisliyi, turizm işinin təşkili və coğrafiya müəllimliyi üzrə mütəxəssislər hazırlayır.',
    specialties: [
      { id: 'coq', name: 'Coğrafiya', code: '6005003', group: 2, subgroup: null, lang: 'az', type: 'eyani', free: 237.8, paid: 237.8 },
      { id: 'coq-muel', name: 'Coğrafiya müəllimliyi', code: '6001003', group: 2, subgroup: null, lang: 'az', type: 'eyani', free: 334.8, paid: 334.8 },
      { id: 'geomat', name: 'Geomatika və geodeziya mühəndisliyi', code: '6006011', group: 1, subgroup: 'rk', lang: 'az', type: 'eyani', free: 209.9, paid: 200 },
      { id: 'hidromet', name: 'Hidrometeorologiya', code: '6005007', group: 2, subgroup: null, lang: 'az', type: 'eyani', free: 274.8, paid: 274.8 },
      { id: 'turizm', name: 'Turizm işinin təşkili', code: '6008008', group: 2, subgroup: null, lang: 'az', type: 'eyani', free: 315.3, paid: 315.3 },
      { id: 'turizm-en', name: 'Turizm işinin təşkili', code: '6008008', group: 2, subgroup: null, lang: 'en', type: 'eyani', free: 296.5, paid: 150 },
      { id: 'turizm-qaz', name: 'Turizm işinin təşkili (Qazax filialı)', code: '6008008', group: 2, subgroup: null, lang: 'az', type: 'eyani', free: null, paid: 150, isQazax: true },
    ]
  },

  /* 3 */
  {
    id: 'geo',
    name: 'Geologiya Fakültəsi',
    short: 'Geologiya Fakültəsi',
    logo: 'images/logo-geologiya.png',
    about: 'Geologiya fakültəsi geologiya, geologiya və geofizika mühəndisliyi, mədən və meliorasiya mühəndisliyi sahələrində mütəxəssislər hazırlayır.',
    specialties: [
      { id: 'geo-spec', name: 'Geologiya', code: '6005006', group: 1, subgroup: 'rk', lang: 'az', type: 'eyani', free: 234.1, paid: 234.1 },
      { id: 'geo-geo-muh', name: 'Geologiya və geofizika mühəndisliyi', code: '6006010', group: 1, subgroup: 'rk', lang: 'az', type: 'eyani', free: 208.2, paid: 208.2 },
      { id: 'med-muh', name: 'Mədən mühəndisliyi', code: '6006033', group: 1, subgroup: 'rk', lang: 'az', type: 'eyani', free: 207.5, paid: 200 },
      { id: 'mel-muh', name: 'Meliorasiya mühəndisliyi', code: '6006030', group: 1, subgroup: 'rk', lang: 'az', type: 'eyani', free: 240.7, paid: 198.9 },
    ]
  },

  /* 4 */
  {
    id: 'sep',
    name: 'Sosial Elmlər və Psixologiya Fakültəsi',
    short: 'SEP Fakültəsi',
    logo: 'images/logo-sep.png',
    about: 'Sosial Elmlər və Psixologiya fakültəsi psixologiya, sosiologiya, sosial iş, fəlsəfə və pedaqoji sahələr üzrə mütəxəssislər hazırlayır.',
    specialties: [
      { id: 'psix', name: 'Psixologiya', code: '6002013', group: 4, subgroup: null, lang: 'az', type: 'eyani', free: 492.5, paid: 489 },
      { id: 'psix-q', name: 'Psixologiya', code: '6002013', group: 4, subgroup: null, lang: 'az', type: 'qiyabi', free: null, paid: 200 },
      { id: 'psix-en', name: 'Psixologiya', code: '6002013', group: 4, subgroup: null, lang: 'en', type: 'eyani', free: 581.7, paid: 581.7 },
      { id: 'sosio', name: 'Sosiologiya', code: '6002015', group: 2, subgroup: null, lang: 'az', type: 'eyani', free: 317.1, paid: 317.1 },
      { id: 'sosio-en', name: 'Sosiologiya', code: '6002015', group: 2, subgroup: null, lang: 'en', type: 'eyani', free: 326.9, paid: 326.9 },
      { id: 'sosial-is', name: 'Sosial iş', code: '6008006', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: 501.3, paid: 501.3 },
      { id: 'sosial-is-en', name: 'Sosial iş', code: '6008006', group: 3, subgroup: 'dt', lang: 'en', type: 'eyani', free: 529.6, paid: 529.6 },
      { id: 'sosial-is-qaz', name: 'Sosial iş (Qazax filialı)', code: '6008006', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: null, paid: 319, isQazax: true },
      { id: 'felsefe', name: 'Fəlsəfə', code: '6002005', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: 436.5, paid: 380.7 },
      { id: 'tsh', name: 'Təhsildə sosial-psixoloji xidmət', code: '6001021', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: 480.9, paid: 480.9 },
      { id: 'xususi-ped', name: 'Xüsusi pedaqogika', code: '6001008', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: 459.8, paid: 459.8 },
    ]
  },

  /* 5 */
  {
    id: 'mr',
    name: 'Mexanika-Riyaziyyat Fakültəsi',
    short: 'MR Fakültəsi',
    logo: 'images/logo-mexanika-riyaziyyat.png',
    about: 'Mexanika-Riyaziyyat fakültəsi riyaziyyat, mexanika və riyaziyyat müəllimliyi üzrə mütəxəssislər hazırlayır.',
    specialties: [
      { id: 'riy', name: 'Riyaziyyat', code: '6005011', group: 1, subgroup: 'rk', lang: 'az', type: 'eyani', free: 362.5, paid: 362.5 },
      { id: 'riy-en', name: 'Riyaziyyat', code: '6005011', group: 1, subgroup: 'rk', lang: 'en', type: 'eyani', free: 467.4, paid: 467.4 },
      { id: 'riy-muel', name: 'Riyaziyyat müəllimliyi', code: '6001015', group: 1, subgroup: 'rk', lang: 'az', type: 'eyani', free: 486.8, paid: 486.8 },
      { id: 'riy-muel-en', name: 'Riyaziyyat müəllimliyi', code: '6001015', group: 1, subgroup: 'rk', lang: 'en', type: 'eyani', free: 577, paid: 577 },
      { id: 'riy-muel-qaz', name: 'Riyaziyyat müəllimliyi (Qazax filialı)', code: '6001015', group: 1, subgroup: 'rk', lang: 'az', type: 'eyani', free: 417.5, paid: 219.7, isQazax: true },
      { id: 'mex', name: 'Mexanika', code: '6005010', group: 1, subgroup: 'rk', lang: 'az', type: 'eyani', free: 239.2, paid: 239.2 },
    ]
  },

  /* 6 */
  {
    id: 'serk',
    name: 'Şərqşünaslıq Fakültəsi',
    short: 'Şərqşünaslıq',
    logo: 'images/logo-serqsunasliq.png',
    about: 'Şərqşünaslıq fakültəsi Şərq dilləri, regionşünaslıq, filologiya və tərcümə sahələri üzrə mütəxəssislər hazırlayır.',
    specialties: [
      { id: 'fil-arab', name: 'Filologiya (ərəb dili və ədəbiyyatı)', code: '6002006', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: null, paid: 348.5 },
      { id: 'fil-fars', name: 'Filologiya (fars dili və ədəbiyyatı)', code: '6002006', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: null, paid: 323 },
      { id: 'fil-turk', name: 'Filologiya (türk dili və ədəbiyyatı)', code: '6002006', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: null, paid: 340.2 },
      { id: 'fil-cin', name: 'Filologiya (çin dili və ədəbiyyatı)', code: '6002006', group: 3, subgroup: 'dt', lang: 'en', type: 'eyani', free: 506.3, paid: 429.1 },
      { id: 'reg-cin', name: 'Regionşünaslıq (Çin üzrə)', code: '6002014', group: 3, subgroup: 'tc', lang: 'az', type: 'eyani', free: 440.2, paid: 383.6 },
      { id: 'reg-cin-en', name: 'Regionşünaslıq (Çin üzrə)', code: '6002014', group: 3, subgroup: 'tc', lang: 'en', type: 'eyani', free: 441.3, paid: 441.3 },
      { id: 'reg-arab', name: 'Regionşünaslıq (ərəb ölkələri üzrə)', code: '6002014', group: 3, subgroup: 'tc', lang: 'az', type: 'eyani', free: null, paid: 305.7 },
      { id: 'reg-arab-en', name: 'Regionşünaslıq (ərəb ölkələri üzrə)', code: '6002014', group: 3, subgroup: 'tc', lang: 'en', type: 'eyani', free: null, paid: 297.1 },
      { id: 'reg-iran', name: 'Regionşünaslıq (İran üzrə)', code: '6002014', group: 3, subgroup: 'tc', lang: 'az', type: 'eyani', free: null, paid: 283.3 },
      { id: 'reg-israil', name: 'Regionşünaslıq (İsrail üzrə)', code: '6002014', group: 3, subgroup: 'tc', lang: 'az', type: 'eyani', free: null, paid: 306.2 },
      { id: 'reg-koreya', name: 'Regionşünaslıq (Koreya üzrə)', code: '6002014', group: 3, subgroup: 'tc', lang: 'az', type: 'eyani', free: 488.3, paid: 371.3 },
      { id: 'reg-pak', name: 'Regionşünaslıq (Pakistan üzrə)', code: '6002014', group: 3, subgroup: 'tc', lang: 'az', type: 'eyani', free: null, paid: 285.3 },
      { id: 'reg-turk', name: 'Regionşünaslıq (Türkiyə üzrə)', code: '6002014', group: 3, subgroup: 'tc', lang: 'az', type: 'eyani', free: null, paid: 345.5 },
      { id: 'reg-yapon', name: 'Regionşünaslıq (Yaponiya üzrə)', code: '6002014', group: 3, subgroup: 'tc', lang: 'az', type: 'eyani', free: 484.8, paid: 350 },
      { id: 'terc-arab', name: 'Tərcümə (ərəb dili üzrə)', code: '6002017', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: null, paid: 343.6 },
      { id: 'terc-fars', name: 'Tərcümə (fars dili üzrə)', code: '6002017', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: null, paid: 308.8 },
    ]
  },

  /* 7 - dəyişməz saxlanılır */
  {
    id: 'trk',
    name: 'Tətbiqi Riyaziyyat və Kibernetika Fakültəsi',
    short: 'TRK Fakültəsi',
    logo: 'images/logo-trk.png',
    about: 'Tətbiqi Riyaziyyat və Kibernetika fakültəsi proqramlaşdırma, alqoritmlər, süni intellekt, kibertəhlükəsizlik və idarəetmə sistemləri üzrə kadrlar hazırlayır.',
    specialties: [
      { id: 'komp-elm', name: 'Kompüter elmləri', code: '6005009', group: 1, subgroup: 'ri', lang: 'az', type: 'eyani', free: 406.3, paid: 406.3 },
      { id: 'komp-elm-en', name: 'Kompüter elmləri', code: '6005009', group: 1, subgroup: 'ri', lang: 'en', type: 'eyani', free: 502, paid: 502 },
      { id: 'inf-muel', name: 'İnformatika (rəqəmsal bacarıqlar) müəllimliyi', code: '6001010', group: 1, subgroup: 'ri', lang: 'az', type: 'eyani', free: 335, paid: 335 },
      { id: 'inf-teh', name: 'İnformasiya təhlükəsizliyi', code: '6006017', group: 1, subgroup: 'ri', lang: 'az', type: 'eyani', free: 458.2, paid: 458.2 },
    ]
  },

  /* 8 */
  {
    id: 'jour',
    name: 'Jurnalistika Fakültəsi',
    short: 'Jurnalistika',
    logo: 'images/logo-jurnalistika.png',
    about: 'Jurnalistika fakültəsi media, televiziya, radio jurnalistikası, reklam və ictimai əlaqələr üzrə kadrlar hazırlayır.',
    specialties: [
      { id: 'jur', name: 'Jurnalistika (Qabiliyyət imtahanı)', code: '6002009', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: 431.1, paid: 431.1 },
      { id: 'jur-en', name: 'Jurnalistika (Qabiliyyət imtahanı)', code: '6002009', group: 3, subgroup: 'dt', lang: 'en', type: 'eyani', free: 465.5, paid: 465.5 },
    ]
  },

  /* 9 */
  {
    id: 'eko',
    name: 'Ekologiya və Torpaqşünaslıq Fakültəsi',
    short: 'Ekologiya Fakültəsi',
    logo: 'images/logo-ekologiya.png',
    about: 'Ekologiya və Torpaqşünaslıq fakültəsi ekologiya, torpaqşünaslıq, aqrokimya, kadastr və ekologiya mühəndisliyi sahələrini əhatə edir.',
    specialties: [
      { id: 'ekologiya', name: 'Ekologiya', code: '6005004', group: 4, subgroup: null, lang: 'az', type: 'eyani', free: 315.4, paid: 296 },
      { id: 'ekologiya-en', name: 'Ekologiya', code: '6005004', group: 4, subgroup: null, lang: 'en', type: 'eyani', free: 391.7, paid: 368.6 },
      { id: 'torpaq', name: 'Torpaqşünaslıq və aqrokimya', code: '6007008', group: 1, subgroup: 'rk', lang: 'az', type: 'eyani', free: 235.2, paid: 235.2 },
      { id: 'yerq-az', name: 'Yerquruluşu və daşınmaz əmlakın kadastrı', code: '6007009', group: 1, subgroup: 'rk', lang: 'az', type: 'eyani', free: 269.5, paid: 269.5 },
      { id: 'eko-muh', name: 'Ekologiya mühəndisliyi', code: '6006007', group: 1, subgroup: 'rk', lang: 'az', type: 'eyani', free: 243.4, paid: 231.7 },
    ]
  },

  /* 10 */
  {
    id: 'tarix',
    name: 'Tarix Fakültəsi',
    short: 'Tarix Fakültəsi',
    logo: 'images/logo-tarix.png',
    about: 'Tarix fakültəsi Azərbaycan tarixi, ümumi tarix, regionşünaslıq və tarix müəllimliyi üzrə mütəxəssislər hazırlayır.',
    specialties: [
      { id: 'tar', name: 'Tarix', code: '6002016', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: 519.3, paid: 519.3 },
      { id: 'tar-q', name: 'Tarix', code: '6002016', group: 3, subgroup: 'dt', lang: 'az', type: 'qiyabi', free: 516.1, paid: 374.4 },
      { id: 'tar-en', name: 'Tarix', code: '6002016', group: 3, subgroup: 'dt', lang: 'en', type: 'eyani', free: 559.9, paid: 559.9 },
      { id: 'tar-qaz', name: 'Tarix (Qazax filialı)', code: '6002016', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: 520.1, paid: 343.3, isQazax: true },
      { id: 'tar-muel', name: 'Tarix müəllimliyi', code: '6001018', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: 516.2, paid: 516.2 },
      { id: 'tar-muel-en', name: 'Tarix müəllimliyi', code: '6001018', group: 3, subgroup: 'dt', lang: 'en', type: 'eyani', free: 538.1, paid: 538.1 },
      { id: 'reg-qafqaz', name: 'Regionşünaslıq (Qafqaz ölkələri üzrə)', code: '6002014', group: 3, subgroup: 'tc', lang: 'az', type: 'eyani', free: 445, paid: 340.1 },
      { id: 'reg-qafqaz-en', name: 'Regionşünaslıq (Qafqaz ölkələri üzrə)', code: '6002014', group: 3, subgroup: 'tc', lang: 'en', type: 'eyani', free: null, paid: 328.4 },
      { id: 'reg-amerika', name: 'Regionşünaslıq (Amerika üzrə)', code: '6002014', group: 3, subgroup: 'tc', lang: 'az', type: 'eyani', free: 439.8, paid: 386 },
      { id: 'reg-amerika-en', name: 'Regionşünaslıq (Amerika üzrə)', code: '6002014', group: 3, subgroup: 'tc', lang: 'en', type: 'eyani', free: 434.3, paid: 386.9 },
      { id: 'reg-afrika', name: 'Regionşünaslıq (Afrika üzrə)', code: '6002014', group: 3, subgroup: 'tc', lang: 'az', type: 'eyani', free: null, paid: 275.4 },
    ]
  },

  /* 11 */
  {
    id: 'fil',
    name: 'Filologiya Fakültəsi',
    short: 'Filologiya',
    logo: 'images/logo-filologiya.png',
    about: 'Filologiya fakültəsi Azərbaycan dili və ədəbiyyatı, xarici dillər, dilçilik və dil müəllimliyi üzrə mütəxəssislər hazırlayır.',
    specialties: [
      { id: 'az-dil-muel', name: 'Azərbaycan dili və ədəbiyyatı müəllimliyi', code: '6001001', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: 582, paid: 582 },
      { id: 'dil-muel-rus', name: 'Dil və ədəbiyyat müəllimliyi (rus dili və ədəbiyyatı üzrə)', code: '6001001', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: null, paid: 331.3 },
      { id: 'fil-alman', name: 'Filologiya (alman dili və ədəbiyyatı)', code: '6002006', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: 508.2, paid: 417.4 },
      { id: 'fil-az', name: 'Filologiya (Azərbaycan dili və ədəbiyyatı)', code: '6002006', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: 503.2, paid: 413.1 },
      { id: 'fil-az-qaz', name: 'Filologiya (Azərbaycan dili və ədəbiyyatı, Qazax filialı)', code: '6002006', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: null, paid: 329.8, isQazax: true },
      { id: 'fil-fransiz', name: 'Filologiya (fransız dili və ədəbiyyatı)', code: '6002006', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: null, paid: 396.3 },
      { id: 'fil-ingilis', name: 'Filologiya (ingilis dili və ədəbiyyatı)', code: '6002006', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: 510, paid: 482.1 },
      { id: 'fil-rus', name: 'Filologiya (rus dili və ədəbiyyatı)', code: '6002006', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: null, paid: 307.1 },
    ]
  },

  /* 12 */
  {
    id: 'fizika',
    name: 'Fizika Fakültəsi',
    short: 'Fizika Fakültəsi',
    logo: 'images/logo-fizika.png',
    about: 'Fizika fakültəsi fundamental və tətbiqi fizika, mühəndislik fizikası və fizika müəllimliyi üzrə mütəxəssislər hazırlayır.',
    specialties: [
      { id: 'fiz', name: 'Fizika', code: '6005005', group: 1, subgroup: 'rk', lang: 'az', type: 'eyani', free: 274.9, paid: 274.9 },
      { id: 'fiz-en', name: 'Fizika', code: '6005005', group: 1, subgroup: 'rk', lang: 'en', type: 'eyani', free: 284.9, paid: 250 },
      { id: 'fiz-muel', name: 'Fizika müəllimliyi', code: '6001005', group: 1, subgroup: 'rk', lang: 'az', type: 'eyani', free: 315.4, paid: 315.4 },
      { id: 'fiz-muel-en', name: 'Fizika müəllimliyi', code: '6001005', group: 1, subgroup: 'rk', lang: 'en', type: 'eyani', free: 366.4, paid: 366.4 },
      { id: 'muh-fiz', name: 'Mühəndislik fizikası', code: '6006034', group: 1, subgroup: 'rk', lang: 'az', type: 'eyani', free: 264.4, paid: 264.4 },
    ]
  },

  /* 13 */
  {
    id: 'kimya',
    name: 'Kimya Fakültəsi',
    short: 'Kimya Fakültəsi',
    logo: 'images/logo-kimya.png',
    about: 'Kimya fakültəsi kimya, kimya mühəndisliyi və kimya müəllimliyi sahələrini əhatə edir.',
    specialties: [
      { id: 'kimya', name: 'Kimya', code: '6005008', group: 4, subgroup: null, lang: 'az', type: 'eyani', free: 466.6, paid: 200 },
      { id: 'kim-muh', name: 'Kimya mühəndisliyi', code: '6006020', group: 1, subgroup: 'rk', lang: 'az', type: 'eyani', free: 437.1, paid: 353 },
      { id: 'kim-muh-en', name: 'Kimya mühəndisliyi', code: '6006020', group: 1, subgroup: 'rk', lang: 'en', type: 'eyani', free: 439.9, paid: 407.8 },
      { id: 'kim-muel', name: 'Kimya müəllimliyi', code: '6001011', group: 4, subgroup: null, lang: 'az', type: 'eyani', free: 397.3, paid: 397.3 },
    ]
  },

  /* 14 */
  {
    id: 'bmi',
    name: 'Beynəlxalq Münasibətlər və İqtisadiyyat Fakültəsi',
    short: 'BMİ Fakültəsi',
    logo: 'images/logo-bmi.png',
    about: 'BMİ fakültəsi beynəlxalq münasibətlər, politologiya, iqtisadiyyat, maliyyə, biznes və menecment sahəsində kadrlar hazırlayır.',
    specialties: [
      { id: 'beyn-int', name: 'Beynəlxalq münasibətlər', code: '6002001', group: 3, subgroup: 'tc', lang: 'az', type: 'eyani', free: 494.3, paid: 434.7 },
      { id: 'beyn-int-en', name: 'Beynəlxalq münasibətlər', code: '6002001', group: 3, subgroup: 'tc', lang: 'en', type: 'eyani', free: 510.1, paid: 510.1 },
      { id: 'dov-ict', name: 'Dövlət və ictimai münasibətlər', code: '6002004', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: 596.9, paid: 536.8 },
      { id: 'dov-ict-en', name: 'Dövlət və ictimai münasibətlər', code: '6002004', group: 3, subgroup: 'dt', lang: 'en', type: 'eyani', free: 597.2, paid: 574.3 },
      { id: 'pol', name: 'Politologiya', code: '6002012', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: 539, paid: 482.9 },
      { id: 'iqt', name: 'İqtisadiyyat', code: '6004004', group: 2, subgroup: null, lang: 'az', type: 'eyani', free: 416.3, paid: 289.9 },
      { id: 'iqt-en', name: 'İqtisadiyyat', code: '6004004', group: 2, subgroup: null, lang: 'en', type: 'eyani', free: 420.8, paid: 285.4 },
      { id: 'beyn-tic', name: 'Beynəlxalq ticarət və logistika', code: '6004001', group: 2, subgroup: null, lang: 'az', type: 'eyani', free: 406.2, paid: 284.9 },
      { id: 'maliyye', name: 'Maliyyə', code: '6004005', group: 2, subgroup: null, lang: 'az', type: 'eyani', free: 470.7, paid: 290 },
      { id: 'biznes', name: 'Biznesin idarə edilməsi', code: '6004002', group: 2, subgroup: null, lang: 'az', type: 'eyani', free: null, paid: 272.3 },
      { id: 'menec', name: 'Menecment', code: '6004007', group: 2, subgroup: null, lang: 'az', type: 'eyani', free: 378.2, paid: 272.7 },
      { id: 'statistika', name: 'Statistika', code: '6005012', group: 2, subgroup: null, lang: 'az', type: 'eyani', free: 339.1, paid: 339.1 },
    ]
  },

  /* 15 */
  {
    id: 'bio',
    name: 'Biologiya Fakültəsi',
    short: 'Biologiya Fakültəsi',
    logo: 'images/logo-biologiya.png',
    about: 'Biologiya fakültəsi biologiya, biotexnologiya, bitki mühafizəsi, qida mühəndisliyi və su bioehtiyatları sahələrini əhatə edir.',
    specialties: [
      { id: 'bio', name: 'Biologiya', code: '6005001', group: 4, subgroup: null, lang: 'az', type: 'eyani', free: 466.9, paid: 466.9 },
      { id: 'bio-en', name: 'Biologiya', code: '6005001', group: 4, subgroup: null, lang: 'en', type: 'eyani', free: 552.3, paid: 552.3 },
      { id: 'biol-muel', name: 'Biologiya müəllimliyi', code: '6001002', group: 4, subgroup: null, lang: 'az', type: 'eyani', free: 397.7, paid: 397.7 },
      { id: 'su-bio', name: 'Su bioehtiyatları və akvakultura', code: '6005013', group: 4, subgroup: null, lang: 'az', type: 'eyani', free: 260.6, paid: 258.8 },
      { id: 'biotex', name: 'Biotexnologiya', code: '6005002', group: 4, subgroup: null, lang: 'az', type: 'eyani', free: 562.4, paid: 562.4 },
      { id: 'biotex-en', name: 'Biotexnologiya', code: '6005002', group: 4, subgroup: null, lang: 'en', type: 'eyani', free: 605.9, paid: 605.9 },
      { id: 'bitki-muh', name: 'Bitki mühafizəsi', code: '6007005', group: 4, subgroup: null, lang: 'az', type: 'eyani', free: 258.9, paid: 258.9 },
      { id: 'qida', name: 'Qida mühəndisliyi', code: '6006023', group: 1, subgroup: 'rk', lang: 'az', type: 'eyani', free: 351.4, paid: 351.4 },
    ]
  },

  /* 16 */
  {
    id: 'huquq',
    name: 'Hüquq Fakültəsi',
    short: 'Hüquq Fakültəsi',
    logo: 'images/logo-huquq.png',
    about: 'Hüquq fakültəsi mülki hüquq, cinayət hüququ və beynəlxalq hüquq sahələrini əhatə edir.',
    specialties: [
      { id: 'huq-az', name: 'Hüquqşünaslıq', code: '6002007', group: 3, subgroup: 'dt', lang: 'az', type: 'eyani', free: 608.9, paid: 608.9 },
      { id: 'huq-q', name: 'Hüquqşünaslıq', code: '6002007', group: 3, subgroup: 'dt', lang: 'az', type: 'qiyabi', free: 606.8, paid: 571.5 },
      { id: 'huq-en', name: 'Hüquqşünaslıq', code: '6002007', group: 3, subgroup: 'dt', lang: 'en', type: 'eyani', free: 657.4, paid: 657.4 },
    ]
  },
];

/* =========================================================
   DATA - KORPUSLAR
   Hər korpusun ikonu orada tədris olunan sahəni göstərir.
   ========================================================= */
const KORPUSLAR = [
  {
    id: 'esas',
    name: 'Əsas Korpus',
    icon: 'i-building',
    location: 'Elmlər metrosu çıxışı',
    color: '#0b1b3a',
    faculties: ['Kimya Fakültəsi', 'Fizika Fakültəsi', 'Biologiya Fakültəsi', 'Geologiya Fakültəsi'],
    facultyIds: ['kimya', 'fizika', 'bio', 'geo'],
    desc: 'Universitetin əsas inzibati binası. Rektorat, dekanatlıqlar və əsas tədris otaqları buradadır.',
    image: ''
  },
  {
    id: 'birinci',
    name: '1 saylı Korpus',
    icon: 'i-scale',
    location: 'Elmlər metrosu çıxışı',
    color: '#16305c',
    faculties: ['Hüquq Fakültəsi', 'Filologiya Fakültəsi', 'Beynəlxalq Münasibətlər və İqtisadiyyat Fakültəsi'],
    facultyIds: ['huquq', 'fil', 'bmi'],
    desc: '1 saylı korpus humanitar elmlər sahəsindəki fakültələrə ev sahibliyi edir.',
    image: ''
  },
  {
    id: 'ikinci',
    name: '2 saylı Korpus',
    icon: 'i-people',
    location: 'Elmlər metrosu çıxışı',
    color: '#22426f',
    faculties: ['İnformasiya və Sənəd Menecmenti Fakültəsi', 'Sosial Elmlər və Psixologiya Fakültəsi', 'Şərqşünaslıq Fakültəsi', 'Jurnalistika Fakültəsi'],
    facultyIds: ['ism', 'sep', 'serk', 'jour'],
    desc: '2 saylı korpus BDU-nun ən böyük binalarından biridir. Çoxsaylı fakültə və ixtisas buradadır.',
    image: ''
  },
  {
    id: 'ucuncu',
    name: '3 saylı Korpus',
    icon: 'i-calculator',
    location: 'Elmlər metrosu çıxışı',
    color: '#0d3060',
    faculties: ['Mexanika-Riyaziyyat Fakültəsi', 'Tətbiqi Riyaziyyat və Kibernetika Fakültəsi', 'Tarix Fakültəsi'],
    facultyIds: ['mr', 'trk', 'tarix'],
    desc: '3 saylı korpus riyaziyyat, kompüter elmləri və tarix fakültələrinin tədris mərkəzidir.',
    image: ''
  },
  {
    id: 'c',
    name: 'C Korpusu',
    icon: 'i-leaf',
    location: '28 Noyabr metrosu çıxışı',
    color: '#7a2418',
    faculties: ['Coğrafiya Fakültəsi', 'Ekologiya və Torpaqşünaslıq Fakültəsi'],
    facultyIds: ['cografiya', 'eko'],
    desc: 'C korpusu 28 Noyabr metro stansiyasının yaxınlığında yerləşir. Coğrafiya və Ekologiya fakültələri buradadır.',
    image: ''
  },
];

/* =========================================================
   DATA - UĞURLU MƏZUNLAR
   Dövlət Proqramının qalibi kimi magistratura pilləsində
   xarici universitetlərdə təhsilini davam etdirən BDU məzunları.
   ========================================================= */
const GRADUATES = [
  {
    id: 'jale-elizade',
    name: 'Jalə Əlizadə',
    country: 'Böyük Britaniya və Şimali İrlandiya Birləşmiş Krallığı',
    university: 'Edinburq Universiteti',
    specialty: 'Tibbi və bioloji kimya',
    image: 'images/mezunlar/mezun-jale-elizade.jpg'
  },
  {
    id: 'nazim-hesenov',
    name: 'Nazim Həsənov',
    country: 'Avstraliya İttifaqı',
    university: 'Sidney Universiteti',
    specialty: 'İctimai siyasət',
    image: 'images/mezunlar/mezun-nazim-hesenov.jpg'
  },
  {
    id: 'meleyke-heybetova',
    name: 'Məleykə Heybətova',
    country: 'Böyük Britaniya və Şimali İrlandiya Birləşmiş Krallığı',
    university: 'Birminqem Universiteti',
    specialty: 'Kibertəhlükəsizlik',
    image: 'images/mezunlar/mezun-meleyke-heybetova.jpg'
  },
  {
    id: 'ilkin-bayramov',
    name: 'İlkin Bayramov',
    country: 'Sinqapur Respublikası',
    university: 'Sinqapur Milli Universiteti',
    specialty: 'Beynəlxalq arbitraj və mübahisələrin həlli',
    image: 'images/mezunlar/mezun-ilkin-bayramov.jpg'
  },
  {
    id: 'gunay-mahmudova',
    name: 'Günay Mahmudova',
    country: 'ABŞ',
    university: 'Berkli Kaliforniya Universiteti',
    specialty: 'Hüquq',
    image: 'images/mezunlar/mezun-gunay-mahmudova.jpg'
  },
  {
    id: 'ramil-nebiyev',
    name: 'Ramil Nəbiyev',
    country: 'ABŞ',
    university: 'Berkli Kaliforniya Universiteti',
    specialty: 'Hüquq',
    image: 'images/mezunlar/mezun-ramil-nebiyev.jpg'
  },
];

/* =========================================================
   İKON KÖMƏKÇİSİ
   Sprite işarəsi qurur. Adı tanınmasa boş sətir qaytarır ki,
   sınıq <use> elementi render olunmasın.
   ========================================================= */
const ICON_IDS = new Set([
  'i-arrow-left', 'i-arrow-right', 'i-award', 'i-building', 'i-calculator',
  'i-chart', 'i-check', 'i-chevron-right', 'i-clock', 'i-close', 'i-home',
  'i-leaf', 'i-map-pin', 'i-mortarboard', 'i-people', 'i-scale', 'i-send',
  'i-target', 'i-train',
]);

function icon(id, size) {
  if (!ICON_IDS.has(id)) return '';
  const cls = size === 'lg' ? 'ico ico-lg' : size === 'sm' ? 'ico ico-sm' : 'ico';
  return `<svg class="${cls}" aria-hidden="true"><use href="#${id}" /></svg>`;
}

/* =========================================================
   FAKÜLTƏ QRUPLARI
   Hər fakültənin ixtisasları bir və ya bir neçə qrupa aid ola
   bilər. Kart/meta mətnləri üçün oxunaqlı etiket qurulur.
   ========================================================= */
const GROUP_ORDINAL = { 1: '1-ci', 2: '2-ci', 3: '3-cü', 4: '4-cü' };
const SUBGROUP_LABEL = { ri: 'RI', rk: 'RK', dt: 'DT', tc: 'TC' };

function facultyGroups(f) {
  const seen = new Set();
  f.specialties.forEach(s => { if (s.group) seen.add(s.group); });
  return Array.from(seen).sort((a, b) => a - b);
}

function facultyGroupLabel(f) {
  const groups = facultyGroups(f);
  if (groups.length === 0) return '';
  return groups.map(g => `${GROUP_ORDINAL[g]} qrup`).join(' / ');
}

function facultySubgroupLabel(f) {
  const seen = new Set();
  f.specialties.forEach(s => { if (s.subgroup) seen.add(s.subgroup); });
  return Array.from(seen).map(sg => SUBGROUP_LABEL[sg] || sg.toUpperCase()).join(' / ');
}

/* Balı sətir kimi təsvir edir; ödənişsiz yer yoxdursa "—" göstərilir */
function scoreText(value) {
  if (value === null || value === undefined || value === '') return '—';
  const num = Number(value);
  if (isNaN(num)) return '—';
  return Number.isInteger(num) ? String(num) : num.toFixed(1);
}

/* =========================================================
   MODAL OVERLAY
   ========================================================= */
function handleModalOverlayClick(e) {
  if (e.target === document.getElementById('korpusModal')) closeKorpusModal();
}

/* =========================================================
   SƏHİFƏ NAVİQASİYASI
   ---------------------------------------------------------
   Hər səhifənin son scroll mövqeyi pageScroll-da saxlanılır.
   - İrəli naviqasiyada səhifə yuxarıdan açılır.
   - "Geri" düyməsi basıldıqda istifadəçi tərk etdiyi səhifəyə
     elə həmin scroll mövqeyində qaytarılır.
   ========================================================= */
let currentPage = 'page-home';
const pageHistory = [];

/* pageId -> son scroll (px) */
const pageScroll = Object.create(null);

/* Cari şaquli scroll mövqeyi */
function currentScrollY() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

/* Səhifəni animasiyasız yuxarıdan göstər */
function scrollTopInstant() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

/* Saxlanılmış mövqeyi bərpa et (layout hazır olduqdan sonra) */
function restoreScrollFor(pageId) {
  const y = pageScroll[pageId] || 0;
  if (!y) { scrollTopInstant(); return; }
  requestAnimationFrame(() => {
    window.scrollTo({ top: y, left: 0, behavior: 'instant' });
    requestAnimationFrame(() => {
      window.scrollTo({ top: y, left: 0, behavior: 'instant' });
    });
  });
}

/* Aktiv səhifəni dəyişdir */
function activatePage(pageId) {
  const pages = document.querySelectorAll('.page');
  for (let i = 0; i < pages.length; i++) pages[i].classList.remove('active');
  const pg = document.getElementById(pageId);
  if (pg) pg.classList.add('active');
  currentPage = pageId;

  const backBtn = document.getElementById('backBtn');
  if (backBtn) backBtn.classList.toggle('visible', pageId !== 'page-home');
}

function showPage(pageId) {
  /* Tərk etdiyimiz səhifənin scroll mövqeyini yadda saxla */
  if (currentPage && currentPage !== pageId) {
    pageScroll[currentPage] = currentScrollY();
  }

  if (currentPage !== pageId) pageHistory.push(currentPage);
  activatePage(pageId);

  /* Lazım olduqda qur */
  if (pageId === 'page-faculties') buildFacultyGrid();
  if (pageId === 'page-korpuslar') buildKorpusGrid();
  if (pageId === 'page-graduates') buildGraduatesGrid();

  /* İrəli keçiddə səhifə yuxarıdan başlayır */
  scrollTopInstant();
}

function goBack() {
  const prev = pageHistory.pop();
  if (!prev) { goHome(); return; }

  /* Hazırkı səhifənin mövqeyini yadda saxla */
  pageScroll[currentPage] = currentScrollY();

  activatePage(prev);

  if (prev === 'page-graduates') buildGraduatesGrid();

  /* Əvvəlki səhifəni həmin scroll mövqeyində bərpa et */
  restoreScrollFor(prev);
}

function goHome() {
  pageHistory.length = 0;
  activatePage('page-home');
  scrollTopInstant();
}

/* =========================================================
   MƏZUNLAR SƏHİFƏSİ
   Hər məzun üçün şəkil (poster) kartı. Şəkillər 4:5 nisbətindədir,
   ona görə kart da həmin nisbətdə qurulur ki, heç bir cihazda
   ekrandan kənara çıxmasın və ya uzanmasın.
   ========================================================= */
let graduatesBuilt = false;

function buildGraduatesGrid() {
  const grid = document.getElementById('graduatesGrid');
  if (!grid) return;
  if (graduatesBuilt && grid.childElementCount > 0) return;

  grid.innerHTML = '';

  if (!GRADUATES.length) {
    grid.innerHTML = `
      <div class="graduates-empty-page">
        ${icon('i-award', 'lg').replace('class="ico ico-lg"', 'class="ico graduates-empty-icon"')}
        <div class="graduates-empty-text">Məlumatlar hazırlanır</div>
      </div>`;
    graduatesBuilt = true;
    return;
  }

  const frag = document.createDocumentFragment();

  GRADUATES.forEach(g => {
    const card = document.createElement('article');
    card.className = 'graduate-card';
    card.setAttribute('aria-label', `${g.name} — ${g.university}`);

    card.innerHTML = `
      <div class="graduate-photo-wrap">
        <img src="${g.image}" alt="${g.name} — ${g.university}, ${g.specialty}"
             class="graduate-photo" loading="lazy" decoding="async"
             onerror="this.closest('.graduate-photo-wrap').classList.add('graduate-photo-failed');" />
      </div>
      <div class="graduate-info">
        <h3 class="graduate-name">${g.name}</h3>
        <p class="graduate-country">${g.country}</p>
        <p class="graduate-university">${g.university}</p>
        <p class="graduate-specialty"><span class="graduate-specialty-label">İxtisas</span> ${g.specialty}</p>
      </div>`;

    frag.appendChild(card);
  });

  grid.appendChild(frag);
  graduatesBuilt = true;
}

/* =========================================================
   FAKÜLTƏ ŞƏBƏKƏSİ
   ========================================================= */
function buildFacultyGrid() {
  const grid = document.getElementById('facultyGrid');
  if (!grid || grid.childElementCount > 0) return;

  const frag = document.createDocumentFragment();

  FACULTIES.forEach(f => {
    const card = document.createElement('article');
    card.className = 'faculty-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', f.name);
    card.addEventListener('click', () => openFaculty(f.id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openFaculty(f.id); }
    });

    const logoHtml = f.logo
      ? `<img src="${f.logo}" alt="${f.name} loqosu" class="faculty-card-logo" loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
         <div class="faculty-card-logo-placeholder" style="display:none;">${icon('i-mortarboard')}</div>`
      : `<div class="faculty-card-logo-placeholder">${icon('i-mortarboard')}</div>`;

    /* Fakültə adının yanında qrup yazılmır (tələb olunan dəyişiklik) */
    const meta = f.specialties.length > 0
      ? `${f.specialties.length} ixtisas`
      : 'Məlumat hazırlanır';

    card.innerHTML = `
      <div class="faculty-card-logo-wrap">${logoHtml}</div>
      <div class="faculty-card-body">
        <div class="faculty-card-title">
          <span>${f.name}</span>
          <span class="faculty-card-arrow">${icon('i-chevron-right')}</span>
        </div>
        <div class="faculty-card-meta">${meta}</div>
      </div>`;

    frag.appendChild(card);
  });

  grid.appendChild(frag);
}

/* =========================================================
   KORPUS ŞƏBƏKƏSİ
   ========================================================= */
function buildKorpusGrid() {
  const grid = document.getElementById('korpusGrid');
  if (!grid || grid.childElementCount > 0) return;

  const frag = document.createDocumentFragment();

  KORPUSLAR.forEach(k => {
    const card = document.createElement('article');
    card.className = 'korpus-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', k.name);
    card.addEventListener('click', () => openKorpusModal(k.id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openKorpusModal(k.id); }
    });

    card.innerHTML = `
      <div class="korpus-card-top" style="background:${k.color};">
        ${k.image ? `<div class="korpus-card-bg" style="background-image:url('${k.image}');"></div>` : ''}
        <div class="korpus-card-overlay"></div>
        <div class="korpus-card-top-content">
          <div class="korpus-card-icon">${icon(k.icon)}</div>
          <div class="korpus-card-name">${k.name}</div>
        </div>
      </div>
      <div class="korpus-card-body">
        <div class="korpus-card-location">${icon('i-train', 'sm')}<span>${k.location}</span></div>
        <div class="korpus-card-fac-count">${k.faculties.length} fakültə</div>
        <div class="korpus-card-fac-list">
          ${k.faculties.slice(0, 2).map(f => `<span class="korpus-fac-tag">${f}</span>`).join('')}
          ${k.faculties.length > 2 ? `<span class="korpus-fac-tag korpus-fac-more">+${k.faculties.length - 2}</span>` : ''}
        </div>
        <div class="korpus-card-arrow">Ətraflı bax${icon('i-arrow-right')}</div>
      </div>`;

    frag.appendChild(card);
  });

  grid.appendChild(frag);
}

/* =========================================================
   KORPUS MODAL
   ========================================================= */
function openKorpusModal(id) {
  const k = KORPUSLAR.find(x => x.id === id);
  if (!k) return;

  const facHtml = k.facultyIds.map(fid => {
    const fac = FACULTIES.find(f => f.id === fid);
    if (!fac) return '';
    /* Fakültənin yanında qrup göstərilmir (tələb olunan dəyişiklik) */
    const meta = fac.specialties.length > 0
      ? `${fac.specialties.length} ixtisas`
      : 'Məlumat hazırlanır';

    return `
      <div class="km-fac-card" onclick="openFacultyFromKorpus('${fac.id}')">
        ${fac.logo
          ? `<img src="${fac.logo}" alt="${fac.name} loqosu" class="km-fac-logo" loading="lazy"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
             <div class="km-fac-placeholder" style="display:none;">${icon('i-mortarboard')}</div>`
          : `<div class="km-fac-placeholder">${icon('i-mortarboard')}</div>`}
        <div class="km-fac-info">
          <div class="km-fac-name">${fac.name}</div>
          <div class="km-fac-meta">${meta}</div>
        </div>
        <span class="km-fac-arrow">${icon('i-chevron-right')}</span>
      </div>`;
  }).join('');

  const modal = document.getElementById('korpusModal');
  const modalInner = document.getElementById('korpusModalInner');
  if (!modal || !modalInner) return;

  modalInner.innerHTML = `
    <div class="km-header" style="background:${k.color};">
      ${k.image ? `<div class="km-header-bg" style="background-image:url('${k.image}');"></div>` : ''}
      <div class="km-header-overlay"></div>
      <div class="km-header-content">
        <div class="km-icon">${icon(k.icon)}</div>
        <div class="km-title-wrap">
          <h2 class="km-title">${k.name}</h2>
          <p class="km-loc">${icon('i-train', 'sm')}<span>${k.location}</span></p>
        </div>
        <button class="km-close" onclick="closeKorpusModal()" aria-label="Bağla" type="button">${icon('i-close', 'sm')}</button>
      </div>
    </div>
    <div class="km-body">
      <p class="km-desc">${k.desc}</p>
      <h3 class="km-fac-title">Bu korpusdakı fakültələr</h3>
      <div class="km-fac-list">${facHtml}</div>
    </div>`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeKorpusModal() {
  const modal = document.getElementById('korpusModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* =========================================================
   FAKÜLTƏ DETALI
   ========================================================= */
function openFaculty(id) {
  const f = FACULTIES.find(x => x.id === id);
  if (!f) return;

  const headerEl = document.getElementById('facultyDetailHeader');
  headerEl.innerHTML = `
    <div class="faculty-detail-header-inner">
      ${f.logo
        ? `<img src="${f.logo}" alt="${f.name} loqosu" class="faculty-detail-logo" loading="lazy"
             onerror="this.style.display='none';" />`
        : ''}
      <div class="faculty-detail-text">
        <h2>${f.name}</h2>
        <p>${f.about || 'Bu fakültə haqqında ətraflı məlumat hazırlanır.'}</p>
      </div>
    </div>`;

  /* RI diaqramları fakültə səhifəsində göstərilmir */
  const riSection = document.getElementById('ri-charts-section');
  if (riSection) {
    riSection.style.display = 'none';
    const riWrapper = document.getElementById('riChartsWrapper');
    if (riWrapper) riWrapper.innerHTML = '';
  }

  const specList = document.getElementById('facultySpecList');
  specList.innerHTML = '';

  if (f.specialties.length === 0) {
    specList.innerHTML = '<div class="no-results">Bu fakültə üzrə ixtisas məlumatı hələ əlavə edilməyib.</div>';
  } else {
    const sfrag = document.createDocumentFragment();

    f.specialties.forEach(s => {
      const item = document.createElement('div');
      item.className = 'spec-item';

      const tags = [];
      if (s.lang === 'en')         tags.push('<span class="tag tag-en">İngiliscə</span>');
      if (s.isQazax)               tags.push('<span class="tag tag-qazax">Qazax filialı</span>');
      if (s.type === 'qiyabi')     tags.push('<span class="tag tag-qiyabi">Qiyabi</span>');

      const grpLabel = GROUP_ORDINAL[s.group] ? `${GROUP_ORDINAL[s.group]} qrup` : '';
      const sgLabel  = s.subgroup ? (SUBGROUP_LABEL[s.subgroup] || s.subgroup.toUpperCase()) : '';

      item.innerHTML = `
        <div class="spec-item-left">
          <div class="spec-item-name">${s.name}</div>
          ${tags.length ? `<div class="spec-item-tags">${tags.join('')}</div>` : ''}
          ${grpLabel ? `<div class="spec-item-group">${grpLabel}${sgLabel ? ' · ' + sgLabel + ' alt qrupu' : ''}</div>` : ''}
        </div>
        <div class="spec-scores">
          <div class="spec-score-cell">
            <div class="spec-score-free">${scoreText(s.free)}</div>
            <div class="spec-score-label">Ödənişsiz</div>
          </div>
          <div class="spec-score-cell">
            <div class="spec-score-paid">${scoreText(s.paid)}</div>
            <div class="spec-score-label">Ödənişli</div>
          </div>
        </div>`;

      sfrag.appendChild(item);
    });

    specList.appendChild(sfrag);
  }

  showPage('page-faculty');
}

/* =========================================================
   KORPUSDAN FAKÜLTƏYƏ KEÇİD
   ========================================================= */
function openFacultyFromKorpus(id) {
  closeKorpusModal();
  setTimeout(() => openFaculty(id), 50);
}

/* ===LOGIC_PART_2=== */

/* =========================================================
   BAL HESABLAMA - RI DİAQRAMLARI
   ========================================================= */
function buildRiChartsForCalc(riSpecs, userBal, container) {
  container.innerHTML = '';
  if (!riSpecs || riSpecs.length === 0) return;

  /* Yalnız ödənişsiz keçid balı olan ixtisaslar diaqramda göstərilir */
  const specs = riSpecs.filter(s => s.free !== null && s.free !== undefined);
  if (specs.length === 0) return;

  const barColors = ['#0b1b3a', '#22426f', '#b8974a', '#3d6a9e', '#7a2418', '#1f7a4d'];
  const maxFree = Math.max(...specs.map(s => s.free));
  const minFree = Math.min(...specs.map(s => s.free));
  const avgFree = specs.reduce((a, s) => a + s.free, 0) / specs.length;
  const barMax  = Math.max(maxFree, userBal) * 1.08;

  const barsHtml = specs.map((s, i) => {
    const pctSpec = Math.round((s.free / barMax) * 100);
    const pctUser = Math.round((userBal / barMax) * 100);
    const color   = barColors[i % barColors.length];
    const isAbove = userBal >= s.free;
    const diff    = Math.abs(userBal - s.free).toFixed(1);
    const diffLabel = isAbove
      ? `<span class="ri-diff-up">${diff} bal üstündür</span>`
      : `<span class="ri-diff-down">${diff} bal çatışmır</span>`;

    return `
      <div class="ri-bar-row">
        <div class="ri-bar-label">${s.name}</div>
        <div class="ri-bar-tracks">
          <div class="ri-bar-track">
            <div class="ri-bar-fill" style="width:${pctSpec}%;background:${color};">
              <span class="ri-bar-val">${s.free}</span>
            </div>
            <small class="ri-bar-desc">Ödənişsiz qəbul həddi</small>
          </div>
          <div class="ri-bar-track">
            <div class="ri-bar-fill" style="width:${pctUser}%;background:${isAbove ? '#1f7a4d' : '#b3261e'};">
              <span class="ri-bar-val">${userBal.toFixed(1)}</span>
            </div>
            <small class="ri-bar-desc">Sizin balınız: ${diffLabel}</small>
          </div>
        </div>
      </div>`;
  }).join('');

  const donutsHtml = specs.map((s, i) => {
    const color   = barColors[i % barColors.length];
    const pct     = Math.round(Math.min((userBal / s.free) * 100, 150));
    const displayPct = Math.min(pct, 100);
    const dashVal = Math.round(displayPct * 2.83);
    const isAbove = userBal >= s.free;
    const fillColor = isAbove ? '#1f7a4d' : color;

    return `
      <div class="ri-donut-item">
        <svg class="ri-donut-svg" viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#eaecf1" stroke-width="10"/>
          <circle cx="50" cy="50" r="45" fill="none" stroke="${fillColor}" stroke-width="10"
            stroke-dasharray="${dashVal} ${283 - dashVal}"
            stroke-dashoffset="70.75" stroke-linecap="round"/>
          <text x="50" y="46" text-anchor="middle" font-size="15" font-weight="700"
                fill="${isAbove ? '#1f7a4d' : '#b3261e'}">${pct}%</text>
          <text x="50" y="62" text-anchor="middle" font-size="9" fill="#78839b">nisbət</text>
        </svg>
        <div class="ri-donut-label">${s.name.length > 28 ? s.name.substring(0, 25) + '...' : s.name}</div>
        <div class="ri-donut-score" style="color:${fillColor};">${s.free} bal hədd</div>
      </div>`;
  }).join('');

  container.innerHTML = `
    <div class="ri-charts-inner">
      <div class="ri-stats-row">
        <div class="ri-stat-card"><div class="ri-stat-value">${userBal.toFixed(1)}</div><div class="ri-stat-label">Sizin balınız</div></div>
        <div class="ri-stat-card ri-stat-green"><div class="ri-stat-value">${maxFree}</div><div class="ri-stat-label">Ən yüksək hədd</div></div>
        <div class="ri-stat-card ri-stat-orange"><div class="ri-stat-value">${avgFree.toFixed(1)}</div><div class="ri-stat-label">Orta hədd</div></div>
        <div class="ri-stat-card ri-stat-purple"><div class="ri-stat-value">${minFree}</div><div class="ri-stat-label">Ən aşağı hədd</div></div>
      </div>
      <div class="ri-chart-card">
        <h4 class="ri-chart-title">${icon('i-chart')}<span>Sizin balınız və ixtisas qəbul həddi</span></h4>
        <div class="ri-bars">${barsHtml}</div>
      </div>
      <div class="ri-chart-card">
        <h4 class="ri-chart-title">${icon('i-target')}<span>Qəbul həddini keçmə faizi</span></h4>
        <div class="ri-donuts-row">${donutsHtml}</div>
      </div>
    </div>`;
}

/* =========================================================
   FİLTR SİSTEMİ
   ========================================================= */
const filterGroups = {
  payment: { filters: ['free', 'paid'],    active: new Set(['free', 'paid']) },
  lang:    { filters: ['az', 'en'],        active: new Set(['az', 'en']) },
  form:    { filters: ['eyani', 'qiyabi'], active: new Set(['eyani', 'qiyabi']) },
};
const standaloneFilters = new Set(['qazax']);

function getGroupForFilter(filterKey) {
  for (const [gName, g] of Object.entries(filterGroups)) {
    if (g.filters.includes(filterKey)) return gName;
  }
  return null;
}

function toggleFilter(el) {
  const f     = el.dataset.filter;
  const gName = getGroupForFilter(f);

  if (gName) {
    const group = filterGroups[gName];
    if (group.active.has(f)) {
      if (group.active.size > 1) {
        group.active.delete(f);
        el.classList.remove('active');
        el.setAttribute('aria-checked', 'false');
      } else {
        el.style.animation = 'none';
        void el.offsetHeight;
        el.style.animation = 'shake .3s';
        showFilterWarning(gName);
        return;
      }
    } else {
      group.active.add(f);
      el.classList.add('active');
      el.setAttribute('aria-checked', 'true');
    }
    updateGroupIndicator(gName);
  } else if (standaloneFilters.has(f)) {
    standaloneFilters.delete(f);
    el.classList.remove('active');
    el.setAttribute('aria-checked', 'false');
  } else {
    standaloneFilters.add(f);
    el.classList.add('active');
    el.setAttribute('aria-checked', 'true');
  }

  hideAllWarnings();
}

function showFilterWarning(gName) {
  hideAllWarnings();
  const warn = document.getElementById('warn-' + gName);
  if (warn) {
    warn.classList.add('visible');
    setTimeout(() => warn.classList.remove('visible'), 2500);
  }
}

function hideAllWarnings() {
  document.querySelectorAll('.filter-warning').forEach(w => w.classList.remove('visible'));
}

function updateGroupIndicator(gName) {
  const reqEl = document.getElementById('req-' + gName);
  if (!reqEl) return;
  const ok = filterGroups[gName].active.size > 0;
  reqEl.classList.toggle('ok', ok);
  reqEl.innerHTML = ok ? icon('i-check', 'sm') : 'min 1';
}

/* =========================================================
   KALKULYATOR
   ========================================================= */
const SUBGROUPS = {
  '1': [
    { value: 'ri', label: 'RI, Riyaziyyat-İnformatika' },
    { value: 'rk', label: 'RK, Riyaziyyat-Kimya' },
  ],
  '2': [],
  '3': [
    { value: 'dt', label: 'DT, Dil-Tarix' },
    { value: 'tc', label: 'TC, Tarix-Coğrafiya' },
  ],
  '4': [],
};

function onGroupChange() {
  const g       = document.getElementById('groupSelect').value;
  const wrapper = document.getElementById('subgroupWrapper');
  const sel     = document.getElementById('subgroupSelect');

  sel.innerHTML = '<option value="">Alt qrup seçin</option>';
  const subs = SUBGROUPS[g] || [];

  if (subs.length > 0) {
    subs.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.value;
      opt.textContent = s.label;
      sel.appendChild(opt);
    });
    wrapper.style.display = 'block';
  } else {
    wrapper.style.display = 'none';
  }

  updateTotal();
}

function updateTotal() {
  const exit  = parseFloat(document.getElementById('exitScore').value) || 0;
  const block = parseFloat(document.getElementById('blockScore').value) || 0;
  const total = exit + block;
  const box   = document.getElementById('totalScoreBox');

  if (exit > 0 || block > 0) {
    box.style.display = 'block';
    box.innerHTML = `Ümumi bal: <strong>${total.toFixed(1)}</strong> (buraxılış ${exit} + blok ${block})`;
  } else {
    box.style.display = 'none';
  }
}

function calcPercent(userBal, thresholdBal) {
  const diff = userBal - thresholdBal;
  if (diff >= 150) return 100;
  if (diff >= 100) return 95;
  if (diff <= -150) return 1;
  if (diff <= -100) return 5;
  return Math.max(1, Math.min(100, Math.round(50 + diff)));
}

/* =========================================================
   NƏTİCƏ SƏHİFƏLƏMƏSİ (PAGINATION)
   ---------------------------------------------------------
   İlkin olaraq 15 ixtisas göstərilir və bu seçim balanslıdır:
   5 ən yüksək, 5 orta, 5 ən aşağı uyğunluq. "Daha çox göstər"
   düyməsi hər basışda qalanlardan 6 ixtisas əlavə edir.
   ========================================================= */
const RESULTS_INITIAL = 15;
const RESULTS_STEP    = 6;

let calcResults   = [];   /* tam sıralanmış siyahı */
let calcVisible   = [];   /* göstərilən ixtisaslar */
let calcRemaining = [];   /* hələ göstərilməyənlər */

/* Balanslı ilkin seçim: 5 yüksək + 5 orta + 5 aşağı */
function pickInitialResults(ordered) {
  if (ordered.length <= RESULTS_INITIAL) return ordered.slice();

  const n = ordered.length;
  const headCount = 5;
  const tailCount = 5;
  const midCount  = RESULTS_INITIAL - headCount - tailCount; /* 5 */

  const headIdx = [];
  for (let i = 0; i < headCount; i++) headIdx.push(i);

  const tailStart = n - tailCount;
  const tailIdx = [];
  for (let i = tailStart; i < n; i++) tailIdx.push(i);

  const midCandidates = [];
  for (let i = headCount; i < tailStart; i++) midCandidates.push(i);

  const midIdx = [];
  if (midCandidates.length <= midCount) {
    for (const i of midCandidates) midIdx.push(i);
  } else {
    for (let k = 0; k < midCount; k++) {
      const pos = Math.round(k * (midCandidates.length - 1) / (midCount - 1));
      midIdx.push(midCandidates[pos]);
    }
  }

  const idxSet = new Set([...headIdx, ...midIdx, ...tailIdx]);
  const picked = Array.from(idxSet).sort((a, b) => a - b).map(i => ordered[i]);
  return picked;
}

/* Bir nəticə kartının HTML-i */
function resultItemHtml(s, displayIndex) {
  const i = displayIndex;
  const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
  const tags = [];
  if (s.lang === 'en')     tags.push('<span class="tag tag-en">İngiliscə</span>');
  if (s.isQazax)           tags.push('<span class="tag tag-qazax">Qazax filialı</span>');
  if (s.type === 'qiyabi') tags.push('<span class="tag tag-qiyabi">Qiyabi</span>');

  const pctColor = s.maxPercent >= 70 ? 'high' : s.maxPercent >= 40 ? 'medium' : 'low';
  const barClass = s.maxPercent >= 70 ? ''     : s.maxPercent >= 40 ? 'medium' : 'low';

  let scoreDetails = '';
  if (s.freePercent !== null) scoreDetails += `Ödənişsiz ${scoreText(s.free)}: <strong>${s.freePercent}%</strong><br>`;
  if (s.paidPercent !== null) scoreDetails += `Ödənişli ${scoreText(s.paid)}: <strong>${s.paidPercent}%</strong>`;
  if (!scoreDetails) scoreDetails = 'Uyğun keçid balı yoxdur';

  return `
    <div class="result-rank ${rankClass}">${i + 1}</div>
    <div class="result-info">
      <div class="result-name">${s.name}</div>
      <div class="result-faculty">${s.facultyName}</div>
      ${tags.length ? `<div class="result-tags">${tags.join('')}</div>` : ''}
      <div class="percent-bar"><div class="percent-bar-fill ${barClass}" style="width:${s.maxPercent}%"></div></div>
    </div>
    <div class="result-right">
      <div class="result-percent ${pctColor}">${s.maxPercent}%</div>
      <div class="result-score">${scoreDetails}</div>
    </div>`;
}

/* Göstərilən nəticələri və "daha çox" düyməsini çəkir */
function renderCalcResults() {
  const list    = document.getElementById('resultsList');
  const moreBox = document.getElementById('resultsMore');
  if (!list) return;

  const rfrag = document.createDocumentFragment();
  calcVisible.forEach((s, i) => {
    const item = document.createElement('div');
    item.className = 'result-item';
    item.innerHTML = resultItemHtml(s, i);
    rfrag.appendChild(item);
  });

  list.innerHTML = '';
  list.appendChild(rfrag);

  if (moreBox) {
    const left = calcRemaining.length;
    if (left > 0) {
      const step = Math.min(RESULTS_STEP, left);
      moreBox.innerHTML =
        `<button class="btn btn-more" type="button" onclick="showMoreResults()">
           <span>Daha çox göstər (+${step})</span>
           ${icon('i-chevron-right')}
         </button>
         <div class="results-more-note">${left} ixtisas daha var</div>`;
    } else {
      moreBox.innerHTML = '';
    }
  }
}

/* Növbəti 6 ixtisası əlavə et */
function showMoreResults() {
  if (!calcRemaining.length) return;
  const next = calcRemaining.splice(0, RESULTS_STEP);
  calcVisible = calcVisible.concat(next);
  renderCalcResults();
}

function calculate() {
  const group      = document.getElementById('groupSelect').value;
  const subgroup   = document.getElementById('subgroupSelect').value;
  const exitScore  = parseFloat(document.getElementById('exitScore').value);
  const blockScore = parseFloat(document.getElementById('blockScore').value);

  if (!group) { alert('Zəhmət olmasa qrup seçin.'); return; }

  const subs = SUBGROUPS[group] || [];
  if (subs.length > 0 && !subgroup) { alert('Zəhmət olmasa alt qrup seçin.'); return; }
  if (isNaN(exitScore)  || exitScore  < 0 || exitScore  > 300) { alert('Buraxılış balı 0-300 arasında olmalıdır.'); return; }
  if (isNaN(blockScore) || blockScore < 0 || blockScore > 400) { alert('Blok balı 0-400 arasında olmalıdır.'); return; }

  let blockOk = true, blockMsg = '';
  if (subgroup === 'ri' && blockScore < 100) {
    blockOk  = false;
    blockMsg = 'RI alt qrupu üçün blok balı 100-dən az olduğundan bütün ixtisaslarda qəbul faizi 0% göstərilir.';
  } else if (subgroup === 'rk' && blockScore < 50) {
    blockOk  = false;
    blockMsg = 'RK alt qrupu üçün blok balı 50-dən az olduğundan bütün ixtisaslarda qəbul faizi 0% göstərilir.';
  }

  const userBal    = exitScore + blockScore;
  const showFree   = filterGroups.payment.active.has('free');
  const showPaid   = filterGroups.payment.active.has('paid');
  const showAz     = filterGroups.lang.active.has('az');
  const showEn     = filterGroups.lang.active.has('en');
  const showEyani  = filterGroups.form.active.has('eyani');
  const showQiyabi = filterGroups.form.active.has('qiyabi');
  const showQazax  = standaloneFilters.has('qazax');

  /* Seçilmiş qrupa aid olan bütün ixtisaslar toplanır.
     Hər ixtisas öz group/subgroup sahəsini daşıyır. */
  const groupNum = parseInt(group, 10);
  const allSpecs = [];
  FACULTIES.forEach(f => {
    f.specialties.forEach(s => {
      if (s.group !== groupNum) return;
      /* Alt qrup: yalnız həmin alt qrupa aid ixtisaslar (alt qrupsuz
         ixtisaslar qrup daxilində həmişə görünür) */
      if (subgroup && s.subgroup && s.subgroup !== subgroup) return;
      if (!showEn && s.lang === 'en') return;
      if (!showAz && s.lang === 'az') return;
      if (!showQiyabi && s.type === 'qiyabi') return;
      if (!showEyani && s.type === 'eyani') return;
      if (s.isQazax && !showQazax) return;
      allSpecs.push({ ...s, facultyName: f.short, facultyId: f.id });
    });
  });

  const results = allSpecs.map(s => {
    const hasFree  = s.free !== null && s.free !== undefined;
    const hasPaid  = s.paid !== null && s.paid !== undefined;
    const fp = (blockOk && hasFree) ? calcPercent(userBal, s.free) : null;
    const pp = (blockOk && hasPaid) ? calcPercent(userBal, s.paid) : null;
    const shownFree = showFree ? fp : null;
    const shownPaid = showPaid ? pp : null;
    return {
      ...s,
      freePercent: shownFree,
      paidPercent: shownPaid,
      maxPercent: Math.max(shownFree === null ? 0 : shownFree, shownPaid === null ? 0 : shownPaid),
    };
  }).sort((a, b) => b.maxPercent - a.maxPercent);

  const container = document.getElementById('resultsContainer');
  const list      = document.getElementById('resultsList');
  const header    = document.getElementById('resultsHeader');
  const moreBox   = document.getElementById('resultsMore');
  container.style.display = 'block';

  const subLabel = subgroup ? `, alt qrup ${subgroup.toUpperCase()}` : '';
  const shownCount = Math.min(RESULTS_INITIAL, results.length);
  header.textContent = `${GROUP_ORDINAL[groupNum] || group} qrup${subLabel} · ümumi bal ${userBal.toFixed(1)}. ${results.length} ixtisas uyğun gəlir (ilk ${shownCount} göstərilir).`;

  if (blockMsg) {
    if (moreBox) moreBox.innerHTML = '';
    list.innerHTML = `<div class="no-results no-results-blocked">${blockMsg}</div>`;
  } else if (results.length === 0) {
    if (moreBox) moreBox.innerHTML = '';
    list.innerHTML = '<div class="no-results">Seçdiyiniz filtrlərə uyğun ixtisas tapılmadı. Filtrləri genişləndirməyi yoxlayın.</div>';
  } else {
    /* İlkin olaraq balanslı 15 ixtisas göstərilir (5 yüksək + 5 orta + 5 aşağı),
       qalanları "Daha çox göstər" düyməsi ilə 6-6 əlavə olunur. */
    const ordered = results;                 /* artıq maxPercent üzrə azalan sıralanıb */
    const initial = pickInitialResults(ordered);
    const initialSet = new Set(initial);
    calcResults   = ordered.slice();
    calcVisible   = initial.slice();
    calcRemaining = ordered.filter(s => !initialSet.has(s));
    renderCalcResults();
  }

  /* RI diaqramları yalnız RI alt qrupu seçildikdə */
  const calcRiSection = document.getElementById('calc-ri-charts-section');
  const calcRiWrapper = document.getElementById('calcRiChartsWrapper');

  if (calcRiSection && calcRiWrapper) {
    const riSpecs = allSpecs.filter(s => s.subgroup === 'ri');
    if (subgroup === 'ri' && riSpecs.length > 0) {
      calcRiSection.style.display = 'block';
      buildRiChartsForCalc(riSpecs, userBal, calcRiWrapper);
    } else {
      calcRiSection.style.display = 'none';
      calcRiWrapper.innerHTML = '';
    }
  }

  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();

  setTimeout(() => {
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

/* ===LOGIC_PART_3=== */

/* =========================================================
   BDULU KÖMƏKÇİ - MƏLUMAT BAZASI
   Cavablarda emoji yoxdur; cizgilərlə siyahı və şərti işarələr
   mətn kimi verilir, vizual işarələr isə interfeys ikonlarıdır.
   ========================================================= */
const FAQ_DATA = [
  /* Salamlaşma */
  {
    keywords: ['salam', 'salamlar', 'merhaba', 'hi', 'hey', 'günün xeyir', 'sabahın xeyir', 'axşamın xeyir', 'günə xeyir', 'sabah xeyir', 'axşam xeyir'],
    answer: 'Salam! Mən BDULU, Bakı Dövlət Universitetinin köməkçi assistantı. Universitetin quruluşu, qəbul şərtləri və tələbə həyatı ilə bağlı suallarınıza cavab verə bilərəm.'
  },
  {
    keywords: ['sən kimsən', 'adın nədir', 'bdulu nədir', 'nə edə bilirsən', 'kimsən', 'nəsən', 'bdulu kimdir', 'sen kimsen', 'assistant', 'virtual'],
    answer: 'Mən BDULU, Bakı Dövlət Universiteti haqqında sualları cavablandıran köməkçiyəm. Korpuslar, fakültələr, qəbul, yataqxana, kitabxana, reytinqlər və tələbə xidmətləri barədə məlumat verə bilərəm.'
  },
  {
    keywords: ['necəsən', 'necə gedirsən', 'nə var nə yox', 'yaxşısan', 'necə gedir'],
    answer: 'Yaxşıyam, sağ olun. Buyurun, sualınızı verin.'
  },
  {
    keywords: ['təşəkkür', 'sağ ol', 'minnətdar', 'çox sağ ol', 'tesekkur', 'teşekkür', 'çox sağol', 'minnətdaram', 'əla', 'super', 'çox yaxşı'],
    answer: 'Siz sağ olun. Başqa sualınız varsa, buyurun.'
  },
  {
    keywords: ['hələlik', 'görüşərik', 'bye', 'gedirəm', 'xudahafiz', 'sağolun'],
    answer: 'Hələlik, görüşənədək.'
  },
  {
    keywords: ['maraqlı fakt', 'fakt de', 'darıxıram', 'bir fakt de'],
    answer: 'Maraqlı fakt: BDU-da ilk dərs günü 15 noyabr 1919-cu il elan edilib. Universitet 2026-cı ildə 107-ci ildönümünü qeyd edir. Ulu öndər Heydər Əliyev də BDU-nun məzunudur.'
  },
  {
    keywords: ['başa düşmədim', 'izah et', 'bir daha', 'anlamadım'],
    answer: 'Problem deyil. Hansı mövzunu daha ətraflı izah edim? Korpuslar, fakültələr, qəbul, yataqxana və ya dərs saatları barədə yaza bilərsiniz.'
  },

  /* Ümumi məlumat */
  {
    keywords: ['nə vaxt yaradılıb', 'tarix', 'neçənci ildə', 'yaranıb', 'təsis', '1919', 'qurulub', 'açılıb'],
    answer: 'Bakı Dövlət Universiteti 1 sentyabr 1919-cu ildə Azərbaycan Xalq Cümhuriyyəti Parlamentinin qanunu ilə təsis edilib. İlk dərs günü 15 noyabr 1919-cu il elan olunub. BDU Azərbaycanın ilk ali təhsil müəssisəsidir.'
  },
  {
    keywords: ['neçə illik', 'ildönümü', '107', 'yaşı neçədir'],
    answer: '2026-cı ildə BDU 107-ci ildönümünü qeyd edir. Universitet 1919-cu ildə Azərbaycanın ilk ali məktəbi kimi yaradılıb.'
  },
  {
    keywords: ['ilk rektor', 'razumovski', 'birinci rektor'],
    answer: 'BDU-nun ilk rektoru professor V.İ. Razumovski olub. O, universitetin qurulduğu ilk illərdə rəhbərlik edib.'
  },
  {
    keywords: ['rektor', 'rəhbər', 'babayev', 'hazırki rektor', 'kimdir rektor'],
    answer: 'BDU-nun hazırkı rektoru Elçin Babayevdir. O, 2019-cu ilin mart ayında rektor vəzifəsinə təyin edilib.'
  },
  {
    keywords: ['tələbə sayı', 'neçə tələbə', 'nə qədər tələbə'],
    answer: '2026-cı ilin məlumatına görə BDU-da 25 mindən çox tələbə təhsil alır.'
  },
  {
    keywords: ['kafedra', 'neçə kafedra'],
    answer: '2026-cı ilin məlumatına görə BDU-da 114 kafedra fəaliyyət göstərir.'
  },
  {
    keywords: ['əməkdaş', 'müəllim sayı', 'akademik heyət', 'professor'],
    answer: '2026-cı ilin məlumatına görə BDU-da 3 mindən çox akademik heyət üzvü və əməkdaş çalışır.'
  },
  {
    keywords: ['ünvan', 'adres', 'harada yerləşir bdu', 'bdu harada', 'bdu ünvanı'],
    answer: 'BDU-nun əsas ünvanı: Akademik Zahid Xəlilov küçəsi 33, AZ1148, Bakı.'
  },
  {
    keywords: ['azərbaycanın ilk', 'ilk ali məktəb', 'ilk universitet'],
    answer: 'Bəli. BDU 1919-cu ildə Azərbaycanın ilk ali təhsil müəssisəsi kimi yaradılıb. Bu, ölkənin ali təhsil tarixinin başlanğıcı hesab olunur.'
  },

  /* Korpuslar */
  {
    keywords: ['korpus', 'bina', 'neçə korpus', 'neçə bina', 'korpuslar harada', 'elmlər', '28 noyabr', 'hansı korpus', 'korpuslar'],
    answer: 'BDU-da 5 korpus var:\n• Əsas Korpus, Elmlər metrosu\n• 1 saylı Korpus, Elmlər metrosu\n• 2 saylı Korpus, Elmlər metrosu\n• 3 saylı Korpus, Elmlər metrosu\n• C Korpusu, 28 Noyabr metrosu\n\nC korpusu istisna olmaqla digər korpuslar Elmlər metrosu ərazisindədir.'
  },
  {
    keywords: ['c korpus', 'c korpusu', '28 noyabr korpus'],
    answer: 'C Korpusu 28 Noyabr metro stansiyasının yaxınlığında yerləşir. Coğrafiya Fakültəsi və Ekologiya və Torpaqşünaslıq Fakültəsi bu korpusdadır.'
  },
  {
    keywords: ['əsas korpus', 'baş bina'],
    answer: 'Əsas Korpus Elmlər metrosunun yanında yerləşir. Rektorat, dekanatlıqlar, Kimya, Fizika, Biologiya və Geologiya fakültələri bu korpusdadır.'
  },

  /* Dərs saatları */
  {
    keywords: ['dərs saatı', 'dərs neçədə', 'dərslər neçədə', 'dərs vaxtı', 'başlayır', 'növbə', 'dərs saatları'],
    answer: 'BDU-da bakalavr tələbələri üçün dərs vaxtları:\n• 1-ci və 3-cü kurslar saat 08:30-da başlayır\n• 2-ci və 4-cü kurslar saat 13:50-də başlayır\n\nBir dərs adətən 90 dəqiqə davam edir.'
  },
  {
    keywords: ['həftədə neçə', 'həftəlik dərs', 'neçə gün dərs', 'həftədə neçə dəfə'],
    answer: 'BDU-da həftədə 4 gün dərs keçirilir.'
  },
  {
    keywords: ['imtahan', 'sınaq', 'sessiya', 'yekun imtahan'],
    answer: 'BDU-da iki sessiya var: qış sessiyası (yanvar) və yay sessiyası (iyun). Hər fənn üzrə imtahan verilir.'
  },

  /* Fakültələr */
  {
    keywords: ['fakültə', 'neçə fakültə', 'fakültələr', 'fakültə sayı', 'hansı fakültələr var'],
    answer: 'BDU-da 16 fakültə fəaliyyət göstərir:\n• Tətbiqi Riyaziyyat və Kibernetika\n• Mexanika-Riyaziyyat\n• Fizika\n• Kimya\n• Biologiya\n• Geologiya\n• Coğrafiya\n• Ekologiya və Torpaqşünaslıq\n• Tarix\n• Hüquq\n• Filologiya\n• Jurnalistika\n• Beynəlxalq Münasibətlər və İqtisadiyyat\n• İnformasiya və Sənəd Menecmenti\n• Sosial Elmlər və Psixologiya\n• Şərqşünaslıq'
  },
  {
    keywords: ['tətbiqi riyaziyyat', 'trk', 'kibernetika', 'kompüter elmləri'],
    answer: 'Tətbiqi Riyaziyyat və Kibernetika Fakültəsi (TRK) 3 saylı Korpusda yerləşir. İxtisaslar: Kompüter elmləri, Kompüter elmləri (ingilis dilində), İnformatika müəllimliyi, İnformasiya təhlükəsizliyi. RI alt qrupu ilə qəbul aparılır.'
  },
  {
    keywords: ['hüquq fakültəsi', 'hüquqçu'],
    answer: 'Hüquq Fakültəsi 1 saylı Korpusda yerləşir. Mülki hüquq, cinayət hüququ və beynəlxalq hüquq sahəsində mütəxəssislər hazırlanır. QS Subject 2026-da Law üzrə 301-350 aralığındadır.'
  },

  /* Yataqxana */
  {
    keywords: ['yataqxana', 'şəhid', 'tək valideyn', 'yaşamaq', 'yataqxana var'],
    answer: 'Yataqxana əsasən şəhid ailələrindən olan və tək valideynli tələbələr üçün nəzərdə tutulub.\n\nYataqxanada:\n• 220 tələbə üçün yer\n• 104 mebelli yataq otağı\n• Oxu zalı və kitabxana\n• Görüş otağı\n• Yeməkxana\n• Mərtəbələrdə mətbəxlər\n• Camaşırxana və ütüləmə sahəsi\n• Tibbi yardım otağı'
  },
  {
    keywords: ['yataqxana neçə yer', 'yataqxana yerləri', '220'],
    answer: 'BDU yataqxanasında 220 tələbə üçün yer, 104 mebelli yataq otağı mövcuddur.'
  },
  {
    keywords: ['yataqxana kitabxana', 'oxu zalı'],
    answer: 'Bəli, BDU yataqxanasında oxu zalı və kitabxana fəaliyyət göstərir.'
  },
  {
    keywords: ['yataqxana yeməkxana', 'yataqxana mətbəx'],
    answer: 'BDU yataqxanasında həm yeməkxana, həm də mərtəbələrdə mətbəxlər var.'
  },
  {
    keywords: ['yataqxana camaşırxana', 'yataqxana tibbi'],
    answer: 'BDU yataqxanasında camaşırxana, ütüləmə sahəsi və tibbi yardım otağı mövcuddur.'
  },

  /* Kitabxana */
  {
    keywords: ['kitabxana', 'elektron kitabxana', 'elektron resurs', 'kitab', 'dərslik', 'elmi kitabxana'],
    answer: 'BDU-da Elmi Kitabxana fəaliyyət göstərir. Kitabxananın tarixi universitetin yaranmasından başlayır, 1974-cü ildə Elmi Kitabxana statusu verilib. Elektron informasiya resurslarından istifadə imkanı da var.\n\nSayt: elibrary.bsu.edu.az'
  },

  /* Xidmətlər */
  {
    keywords: ['psixoloji', 'psixoloq', 'psixoloji dəstək', 'psixoloji yardım'],
    answer: 'BDU-da tələbə və əməkdaşlar üçün Psixoloji Yardım Xidməti fəaliyyət göstərir.'
  },
  {
    keywords: ['əlillik', 'xüsusi ehtiyac', 'əlçatanlıq', 'pandus', 'lift', 'brayl'],
    answer: 'BDU-da əlçatanlıq üçün:\n• Girişlərdə panduslar\n• Brayl düymələri olan liftlər\n• Uyğunlaşdırılmış sanitar qovşaqları mövcuddur.'
  },
  {
    keywords: ['tələbə təşkilatı', 'klub', 'yeni club', 'könüllü', 'həmkarlar', 'tələbə qurumu'],
    answer: 'BDU-da fəaliyyət göstərən tələbə təşkilatları:\n• BDU Könüllüləri\n• Tələbə Həmkarlar İttifaqı Komitəsi\n• Tələbə Gənclər Təşkilatı\n• YENİ Club\n• OIC Model Club'
  },
  {
    keywords: ['inkişaf mərkəzi', 'tələbə inkişaf', 'student space', 'eco space', 'eco energy'],
    answer: 'BDU-da tələbə məkanları:\n• Tələbə İnkişaf Mərkəzi (2025-ci ildə açılıb)\n• Student Space\n• Eco-Space\n• Eco-Energy Station'
  },
  {
    keywords: ['tələbəyəm', 'tələbəsən', 'tələbə'],
    answer: 'Xoş gəlmisiniz. Dərs saatları, yataqxana, kitabxana və tələbə təşkilatları barədə sual verə bilərsiniz.'
  },
  {
    keywords: ['abituriyent', 'qəbul olacam', 'daxil olmaq'],
    answer: 'Xoş gəlmisiniz. BDU-da 2026-2027 tədris ili üçün 76 bakalavr proqramına qəbul aparılır. "Bal hesabla" bölməsindən qəbul ehtimalınızı hesablaya bilərsiniz.'
  },

  /* Beynəlxalq */
  {
    keywords: ['erasmus', 'mübadilə', 'mövlana', 'xarici proqram', 'beynəlxalq', 'xarici universitet'],
    answer: 'BDU-da beynəlxalq imkanlar:\n• Erasmus+ proqramı\n• Mövlana mübadilə proqramı\n• Müxtəlif universitetlərlə tələbə mübadiləsi\n• İkili diplom proqramları'
  },
  {
    keywords: ['ikili diplom', 'double degree', 'xarici diplom'],
    answer: 'BDU-da xarici universitetlərlə ikili diplom proqramları mövcuddur. Ətraflı məlumat üçün bsu.edu.az saytına baxa bilərsiniz.'
  },

  /* Reytinqlər */
  {
    keywords: ['reytinq', 'qs', 'sıralama', 'neçənci', 'dünya reytinqi', 'world ranking'],
    answer: 'BDU-nun reytinq göstəriciləri:\n• QS World 2027: 565-ci yer\n• QS Europe 2026: 278-ci yer\n• QS Western Asia 2026: 13-cü yer\n\nQS Subject 2026:\n• Neft mühəndisliyi: 51-100\n• Riyaziyyat: 251-300\n• Hüquq: 301-350\n• Kompüter elmləri: 601-650'
  },
  {
    keywords: ['qs world', 'qs 2027', '565'],
    answer: 'QS World University Rankings 2027-də BDU 565-ci yerdədir.'
  },
  {
    keywords: ['qs europe', 'avropa reytinq', '278'],
    answer: 'QS Europe 2026 reytinqində BDU 278-ci yerdədir.'
  },
  {
    keywords: ['western asia', 'qərbi asiya'],
    answer: 'QS Western Asia 2026 reytinqində BDU 13-cü yerdədir.'
  },
  {
    keywords: ['neft mühəndisliyi reytinq', 'petroleum'],
    answer: 'BDU QS Subject 2026-da Neft Mühəndisliyi üzrə 51-100 aralığında qərarlaşıb.'
  },
  {
    keywords: ['süni intellekt', 'magistr', 'yeni ixtisas', 'artificial intelligence'],
    answer: '2026-cı ildə BDU-da süni intellekt üzrə magistr ixtisaslaşması açılıb. Həmçinin 2 BDU layihəsi QS Reimagine Education Awards 2026-nın qısa siyahısına düşüb.'
  },

  /* Qəbul */
  {
    keywords: ['bakalavr proqramı', 'neçə proqram', 'qəbul proqramı', '76', 'neçə ixtisas var'],
    answer: 'BDU 2026-2027-ci tədris ili üçün 76 bakalavr proqramına qəbul elan edib.'
  },
  {
    keywords: ['qəbul', 'necə qəbul', 'ixtisas', 'bal', 'hesabla'],
    answer: '"Bal hesabla" bölməsindən istifadə edə bilərsiniz. Qrup, alt qrup, buraxılış və blok balınızı daxil edin, ixtisaslar üzrə nəticəni görün.\n\nBDU 2026-2027 tədris ili üçün 76 bakalavr proqramına qəbul aparır.'
  },
  {
    keywords: ['ödənişsiz', 'pulsuz', 'büdcə', 'xəzinə'],
    answer: 'BDU-da həm ödənişsiz (büdcə), həm də ödənişli yerlər mövcuddur. "Bal hesabla" bölməsindən hər iki seçim üzrə nəticəni görə bilərsiniz.'
  },
  {
    keywords: ['qiyabi', 'qiyabi təhsil'],
    answer: 'BDU-da bəzi ixtisaslarda qiyabi təhsil imkanı var. "Bal hesabla" bölməsində qiyabi filtrini seçərək həmin ixtisasları görə bilərsiniz.'
  },

  /* Məzunlar */
  {
    keywords: ['məşhur məzun', 'heydər əliyev', 'tanınmış məzun', 'məzun kimdir'],
    answer: 'BDU-nun dünyaşöhrətli məzunlarından biri ulu öndər Heydər Əliyevdir.'
  },

  /* Ümumi imkanlar */
  {
    keywords: ['imkanlar', 'xidmətlər', 'kafeteriya', 'yeməkxana', 'coworking', 'kompüter otağı', 'laboratoriya'],
    answer: 'BDU-da mövcud imkanlar:\n• Elmi Kitabxana\n• Laboratoriyalar\n• Kompüter otaqları\n• Yeməkxana və kafeteriya\n• Tələbə İnkişaf Mərkəzi\n• Əlçatanlıq infrastrukturu\n• Yataqxana\n• Psixoloji Yardım Xidməti'
  },
  {
    keywords: ['sayt', 'vebsayt', 'bsu.edu.az', 'rəsmi sayt'],
    answer: 'BDU-nun rəsmi saytı: bsu.edu.az\nElmi Kitabxana: elibrary.bsu.edu.az\nDayanıqlı İnkişaf: sdg.bsu.edu.az'
  },
  {
    keywords: ['ilk dərs', '15 noyabr'],
    answer: 'BDU-nun ilk dərs günü 15 noyabr 1919-cu il elan edilib. Universitet 1 sentyabr 1919-cu ildə Azərbaycan Xalq Cümhuriyyəti Parlamentinin qanunu ilə təsis edilib.'
  },
  {
    keywords: ['ilk fakültə', '4 fakültə'],
    answer: 'BDU 1919-cu ildə 4 fakültə ilə fəaliyyətə başlayıb: Tarix-filologiya, Fizika-riyaziyyat, Hüquq və Tibb fakültələri. Hazırda 16 fakültə var.'
  },
];

/* ---------------------------------------------------------
   DİNAMİK FAQ - fakültələr, korpuslar və ixtisaslar
   ---------------------------------------------------------
   Bu girişlər FACULTIES / KORPUSLAR məlumatından avtomatik
   qurulur. Beləliklə BDULU həmişə saytdaki cari məlumatla
   uyğun cavab verir: hansı fakültə hansı korpusda, hansı
   ixtisaslar var, keçid balları, tədris dili və forması.
   --------------------------------------------------------- */

/* Fakültənin yerləşdiyi korpusun adını qaytarır */
function korpusOfFaculty(facId) {
  const k = KORPUSLAR.find(x => x.facultyIds.indexOf(facId) !== -1);
  return k ? k.name : null;
}

/* İxtisasın qrup/dil/form məlumatını oxunaqlı sətrə çevirir */
function specMetaLine(s) {
  const bits = [];
  if (GROUP_ORDINAL[s.group]) {
    const sg = s.subgroup ? ` (${SUBGROUP_LABEL[s.subgroup] || s.subgroup.toUpperCase()})` : '';
    bits.push(`${GROUP_ORDINAL[s.group]} qrup${sg}`);
  }
  bits.push(s.lang === 'en' ? 'İngilis dilində' : 'Azərbaycan dilində');
  bits.push(s.type === 'qiyabi' ? 'qiyabi' : 'əyani');
  if (s.isQazax) bits.push('Qazax filialı');
  return bits.join(', ');
}

/* İxtisasın keçid ballarını oxunaqlı sətrə çevirir */
function specScoreLine(s) {
  return `ödənişsiz ${scoreText(s.free)}, ödənişli ${scoreText(s.paid)}`;
}

function buildDynamicFaqEntries() {
  const entries = [];

  /* --- Korpuslar --- */
  KORPUSLAR.forEach(k => {
    const facs = k.facultyIds
      .map(fid => { const f = FACULTIES.find(x => x.id === fid); return f ? f.name : null; })
      .filter(Boolean);
    entries.push({
      keywords: [
        k.name.toLowerCase(),
        `${k.name.toLowerCase()} harada`,
        `${k.name.toLowerCase()} hansı fakültələr`,
        `${k.name.toLowerCase()} fakültələr`,
      ],
      answer: `${k.name} — ${k.location}.\n\n${k.desc}\n\nBu korpusdakı fakültələr (${facs.length}):\n• ${facs.join('\n• ')}`
    });
  });

  /* --- Fakültələr (ixtisas siyahısı ilə) --- */
  FACULTIES.forEach(f => {
    const kor = korpusOfFaculty(f.id);
    const lines = f.specialties.map(s => `• ${s.name} — ${specMetaLine(s)}; ${specScoreLine(s)}`);
    entries.push({
      keywords: [
        f.name.toLowerCase(),
        f.short.toLowerCase(),
        `${f.name.toLowerCase()} ixtisaslar`,
        `${f.name.toLowerCase()} ixtisasları`,
        `${f.name.toLowerCase()} harada`,
        `${f.name.toLowerCase()} neçə ixtisas`,
      ],
      answer: `${f.name}\n\n${f.about || ''}\n\n${kor ? 'Yerləşmə: ' + kor + '.' : ''}\nİxtisaslar (${f.specialties.length}):\n${lines.join('\n')}`
    });
  });

  /* --- Hər ixtisas (ayrıca) --- */
  FACULTIES.forEach(f => {
    f.specialties.forEach(s => {
      entries.push({
        keywords: [s.name.toLowerCase()],
        answer: `${s.name}\n\nFakültə: ${f.name}\n${specMetaLine(s)}\nİxtisas kodu: ${s.code}\nÖdənişsiz keçid balı: ${scoreText(s.free)}\nÖdənişli keçid balı: ${scoreText(s.paid)}`
      });
    });
  });

  return entries;
}

/* Axtarış indeksi */
let _faqIndex = null;
function getFaqIndex() {
  if (_faqIndex) return _faqIndex;
  /* Statik girişlər + fakültə/korpus/ixtisas üzrə dinamik girişlər */
  const all = FAQ_DATA.concat(buildDynamicFaqEntries());
  _faqIndex = all.map(entry => ({
    entry,
    kwLower: entry.keywords.map(k => String(k).toLowerCase())
  }));
  return _faqIndex;
}

/* Açar sözün balı: nə qədər uzun və konkretdirsə, bir o qədər yüksək.
   Çox qısa (<=3 hərf) sözlər yalnız tam söz kimi uyğun gəlir ki,
   təsadüfi alt-sətir uyğunluğu yanlış cavab verməsin. */
function faqKeywordScore(kw, lower, tokens) {
  if (!kw) return 0;
  if (kw.length <= 3) {
    return tokens.has(kw) ? kw.length : 0;
  }
  if (lower.indexOf(kw) === -1) return 0;
  /* Çoxsözlü açar sözlər daha konkretdir */
  return kw.length + (kw.indexOf(' ') !== -1 ? 10 : 0);
}

function getBduluAnswer(text) {
  const lower = text.toLowerCase().trim().replace(/\s+/g, ' ');
  const index = getFaqIndex();

  /* Normalizə edilmiş söz dəsti (qısa açar sözlər üçün) */
  const tokens = new Set(lower.split(/[^0-9a-zəğıöşüç]+/i).filter(Boolean));

  /* Ən yüksək ballı girişi seç (bərabərlikdə əvvəlki giriş üstünlük alır) */
  let best = null;
  let bestScore = 0;
  for (const { entry, kwLower } of index) {
    let score = 0;
    for (const kw of kwLower) {
      const sc = faqKeywordScore(kw, lower, tokens);
      if (sc > score) score = sc;
    }
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  if (best) return best.answer;

  /* Ehtiyat: söz-səviyyəli qismən uyğunluq */
  const words = lower.split(/[^0-9a-zəğıöşüç]+/i).filter(w => w.length >= 4);
  if (words.length > 0) {
    for (const { entry, kwLower } of index) {
      for (const kw of kwLower) {
        for (const word of words) {
          if (kw.includes(word) || word.includes(kw)) return entry.answer;
        }
      }
    }
  }

  return 'Bu barədə məlumatım yoxdur.\n\nAşağıdakı mövzularda kömək edə bilərəm:\n• Fakültələr və ixtisaslar\n• Korpusların yeri\n• Dərs saatları\n• Yataqxana\n• BDU reytinqi\n• Qəbul məlumatları\n\nNümunə: "Kimya fakültəsi", "Tətbiqi Riyaziyyat və Kibernetika", "C korpusu".';
}

/* =========================================================
   BDULU VİDGET
   ========================================================= */
let bduluOpen = false;

function openBdulu() {
  if (bduluOpen) return;
  bduluOpen = true;
  const panel = document.getElementById('bduluPanel');
  const badge = document.getElementById('bduluBadge');
  if (panel) panel.classList.add('open');
  if (badge) badge.style.display = 'none';
  requestAnimationFrame(() => {
    const messages = document.getElementById('bduluMessages');
    if (messages) scrollBduluToBottom(messages);
  });
}

function closeBdulu() {
  if (!bduluOpen) return;
  bduluOpen = false;
  const panel = document.getElementById('bduluPanel');
  if (panel) panel.classList.remove('open');
}

function toggleBdulu() {
  if (bduluOpen) closeBdulu();
  else openBdulu();
}

/* =========================================================
   QUICK REPLIES
   ---------------------------------------------------------
   • Hər mesajdan sonra yenidən görünür (sabitdir, gizlədilmir)
   • İstifadəçinin seçdiyi sual təkrar göstərilmir
   • Bütün suallar istifadə olunubsa, panel gizlədilir
   ========================================================= */
let bduluQuickBtns  = [];    // [{ btn, qNorm, hidden }] - bir dəfə keşlənir
let bduluQuickBox   = null;  // #bduluSuggestions
let bduluQuickShown = true;  // panelin cari görünmə vəziyyəti (artıq yazmanı önləyir)

/* Sual mətnini müqayisə üçün normallaşdırır */
function bduluNormQ(str) {
  return String(str || '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[?!.,;:]+$/g, '')
    .trim();
}

/* Quick Replies elementlərini bir dəfə keşlə */
function cacheBduluQuickReplies() {
  bduluQuickBox = document.getElementById('bduluSuggestions');
  if (!bduluQuickBox) return;
  bduluQuickBtns = Array.prototype.map.call(
    bduluQuickBox.querySelectorAll('.bdulu-suggestion-btn'),
    btn => ({ btn, qNorm: bduluNormQ(btn.dataset.q || btn.textContent), hidden: false })
  );
  bduluQuickShown = true;
}

/* Görünən sual qalıbsa paneli göstər, heç biri qalmayıbsa gizlət.
   Dəyişiklik olmadıqda DOM-a heç bir yazma edilmir. */
function refreshBduluQuickReplies() {
  if (!bduluQuickBox) return;
  const anyVisible = bduluQuickBtns.some(it => !it.hidden);
  if (anyVisible === bduluQuickShown) return;
  bduluQuickShown = anyVisible;
  bduluQuickBox.style.display = anyVisible ? '' : 'none';
}

/* İstifadə olunan sualı gizlət (yalnız dəyişiklik olanda DOM-a toxunur) */
function markBduluQuickReplyUsed(text) {
  if (!bduluQuickBtns.length) return;
  const norm = bduluNormQ(text);
  if (!norm) return;

  let changed = false;
  for (const item of bduluQuickBtns) {
    if (!item.hidden && item.qNorm === norm) {
      item.hidden = true;
      item.btn.hidden = true;
      changed = true;
    }
  }
  if (changed) refreshBduluQuickReplies();
}

function sendSuggestion(text) {
  const input = document.getElementById('bduluInput');
  if (input) { input.value = text; sendBdulu(); }
}

function sendBdulu() {
  const input = document.getElementById('bduluInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  appendBduluMsg(text, 'user');

  /* Seçilmiş sual Quick Replies-dən çıxarılır, qalanlar görünür qalır */
  markBduluQuickReplyUsed(text);

  const typingId = showBduluTyping();
  setTimeout(() => {
    removeBduluTyping(typingId);
    appendBduluMsg(getBduluAnswer(text), 'bot');
    /* Hər mesajdan sonra Quick Replies yenidən görünür */
    refreshBduluQuickReplies();
  }, 400 + Math.random() * 300);
}

function scrollBduluToBottom(container) {
  requestAnimationFrame(() => {
    container.scrollTop = container.scrollHeight;
    requestAnimationFrame(() => { container.scrollTop = container.scrollHeight; });
  });
}

function appendBduluMsg(text, role) {
  const container = document.getElementById('bduluMessages');
  if (!container) return;

  const div = document.createElement('div');
  div.className = `bdulu-msg bdulu-msg-${role}`;

  if (role === 'bot') {
    div.innerHTML = `
      <img src="images/bdulu-logo.png" alt="" class="bdulu-msg-avatar" loading="lazy" />
      <div class="bdulu-msg-bubble">${text.replace(/\n/g, '<br>')}</div>`;
  } else {
    div.innerHTML = `<div class="bdulu-msg-bubble bdulu-msg-bubble-user">${escHtml(text)}</div>`;
  }

  container.appendChild(div);
  scrollBduluToBottom(container);
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

let typingCounter = 0;
function showBduluTyping() {
  const container = document.getElementById('bduluMessages');
  if (!container) return null;

  const id  = 'typing-' + (++typingCounter);
  const div = document.createElement('div');
  div.className = 'bdulu-msg bdulu-msg-bot';
  div.id = id;
  div.innerHTML = `
    <img src="images/bdulu-logo.png" alt="" class="bdulu-msg-avatar" loading="lazy" />
    <div class="bdulu-msg-bubble bdulu-typing">
      <span></span><span></span><span></span>
    </div>`;

  container.appendChild(div);
  scrollBduluToBottom(container);
  return id;
}

function removeBduluTyping(id) {
  if (!id) return;
  const el = document.getElementById(id);
  if (el) el.remove();
}

function initBduluWidget() {
  const widget        = document.getElementById('bduluWidget');
  const toggle        = document.getElementById('bduluToggle');
  const panel         = document.getElementById('bduluPanel');
  const closeBtn      = document.getElementById('bduluClose');
  const sendBtn       = document.getElementById('bduluSendBtn');
  const input         = document.getElementById('bduluInput');

  if (!widget || !toggle || !panel) return;

  /* Təklif düymələri (Quick Replies) */
  cacheBduluQuickReplies();
  if (bduluQuickBtns.length) {
    /* İdarəetmə birbaşa #bduluSuggestions üzərində, hər düyməyə ayrı listener lazım deyil */
    bduluQuickBox.addEventListener('click', (e) => {
      const btn = e.target.closest('.bdulu-suggestion-btn');
      if (!btn || btn.hidden) return;
      e.stopPropagation();
      sendSuggestion(btn.dataset.q || btn.textContent.trim());
    });
    bduluQuickBox.addEventListener('touchend', (e) => {
      const btn = e.target.closest('.bdulu-suggestion-btn');
      if (!btn || btn.hidden) return;
      e.preventDefault(); e.stopPropagation();
      sendSuggestion(btn.dataset.q || btn.textContent.trim());
    }, { passive: false });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => { e.stopPropagation(); closeBdulu(); });
    closeBtn.addEventListener('touchend', (e) => {
      e.preventDefault(); e.stopPropagation(); closeBdulu();
    }, { passive: false });
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', (e) => { e.stopPropagation(); sendBdulu(); });
    sendBtn.addEventListener('touchend', (e) => {
      e.preventDefault(); e.stopPropagation(); sendBdulu();
    }, { passive: false });
  }

  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendBdulu(); }
    });
    input.addEventListener('click', (e) => e.stopPropagation());
    input.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: true });
  }

  panel.addEventListener('click', (e) => e.stopPropagation());
  panel.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: true });

  /* =======================================================
     DRAG - yalnız toggle düyməsi sürüklənir,
     panel həmişə sağ alt küncdə sabit qalır.
     ======================================================= */
  let isDragging   = false;
  let dragMoved    = false;
  let startClientX = 0;
  let startClientY = 0;
  let startRight   = 0;
  let startBottom  = 0;
  let rafId        = null;
  let pendingX     = 0;
  let pendingY     = 0;
  let lastTouchEnd = 0;
  const DRAG_THRESHOLD = 6;

  function getEventPos(e) {
    if (e.touches && e.touches.length > 0) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    if (e.changedTouches && e.changedTouches.length > 0) {
      return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  }

  function addDragListeners() {
    document.addEventListener('mousemove', onDragMove, { passive: false });
    document.addEventListener('mouseup', onDragEnd);
    document.addEventListener('touchmove', onDragMove, { passive: false });
    document.addEventListener('touchend', onDragEnd, { passive: true });
    document.addEventListener('touchcancel', onDragEnd, { passive: true });
  }
  function removeDragListeners() {
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup', onDragEnd);
    document.removeEventListener('touchmove', onDragMove);
    document.removeEventListener('touchend', onDragEnd);
    document.removeEventListener('touchcancel', onDragEnd);
  }

  function onDragStart(e) {
    if (e.target.closest('#bduluPanel')) return;
    if (e.type === 'mousedown' && e.button !== 0) return;

    isDragging = true;
    dragMoved  = false;
    pendingX   = 0;
    pendingY   = 0;

    const pos    = getEventPos(e);
    startClientX = pos.x;
    startClientY = pos.y;

    const rect   = widget.getBoundingClientRect();
    startRight   = window.innerWidth  - rect.right;
    startBottom  = window.innerHeight - rect.bottom;

    widget.style.transition = 'none';
    toggle.classList.add('dragging');

    addDragListeners();
    if (e.cancelable) e.preventDefault();
  }

  function applyDragPosition() {
    rafId = null;
    const W  = window.innerWidth;
    const H  = window.innerHeight;
    const wW = widget.offsetWidth;
    const wH = widget.offsetHeight;

    let newRight  = startRight  - pendingX;
    let newBottom = startBottom - pendingY;

    newRight  = Math.max(6, Math.min(W - wW - 6, newRight));
    newBottom = Math.max(6, Math.min(H - wH - 6, newBottom));

    widget.style.right  = newRight  + 'px';
    widget.style.bottom = newBottom + 'px';
    widget.style.left   = 'auto';
    widget.style.top    = 'auto';
  }

  function onDragMove(e) {
    if (!isDragging) return;

    const pos = getEventPos(e);
    pendingX  = pos.x - startClientX;
    pendingY  = pos.y - startClientY;

    if (!dragMoved && (Math.abs(pendingX) > DRAG_THRESHOLD || Math.abs(pendingY) > DRAG_THRESHOLD)) {
      dragMoved = true;
    }
    if (!dragMoved) return;

    if (rafId === null) rafId = requestAnimationFrame(applyDragPosition);
    if (e.cancelable) e.preventDefault();
  }

  function onDragEnd(e) {
    if (!isDragging) return;
    isDragging = false;

    if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
    widget.style.transition = '';
    toggle.classList.remove('dragging');
    removeDragListeners();

    const isTouch = e && (e.type === 'touchend' || e.type === 'touchcancel');
    if (isTouch) {
      lastTouchEnd = Date.now();
      if (!dragMoved) setTimeout(toggleBdulu, 10);
      dragMoved = false;
    }
  }

  toggle.addEventListener('mousedown', onDragStart, { passive: false });
  toggle.addEventListener('touchstart', onDragStart, { passive: false });

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (Date.now() - lastTouchEnd < 600) return;
    if (dragMoved) { dragMoved = false; return; }
    toggleBdulu();
  });
}

/* =========================================================
   GLOBAL EXPORT - defer skriptdə onclick işləsin
   ========================================================= */
window.showPage               = showPage;
window.goBack                 = goBack;
window.goHome                 = goHome;
window.openFaculty            = openFaculty;
window.openFacultyFromKorpus  = openFacultyFromKorpus;
window.openKorpusModal        = openKorpusModal;
window.closeKorpusModal       = closeKorpusModal;
window.toggleFilter           = toggleFilter;
window.onGroupChange          = onGroupChange;
window.updateTotal            = updateTotal;
window.calculate              = calculate;
window.showMoreResults        = showMoreResults;
window.handleModalOverlayClick = handleModalOverlayClick;
window.toggleBdulu            = toggleBdulu;
window.openBdulu              = openBdulu;
window.closeBdulu             = closeBdulu;
window.sendBdulu              = sendBdulu;
window.sendSuggestion         = sendSuggestion;

/* =========================================================
   BAŞLATMA
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {

  /* Filtr çipləri */
  document.querySelectorAll('.filter-chip[data-group]').forEach(el => {
    const gName = el.dataset.group;
    const f     = el.dataset.filter;
    const group = filterGroups[gName];
    const on    = !!(group && group.active.has(f));
    el.classList.toggle('active', on);
    el.setAttribute('aria-checked', on ? 'true' : 'false');
    updateGroupIndicator(gName);
  });
  document.querySelectorAll('.filter-chip[data-standalone]').forEach(el => {
    const on = standaloneFilters.has(el.dataset.filter);
    el.classList.toggle('active', on);
    el.setAttribute('aria-checked', on ? 'true' : 'false');
  });

  /* ESC - modal və söhbəti bağla */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeKorpusModal();
      if (bduluOpen) closeBdulu();
    }
  }, { passive: true });

  /* Mobil brauzer ünvan paneli üçün viewport hündürlüyü */
  function setVh() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  }
  setVh();
  window.addEventListener('resize', setVh, { passive: true });

  getFaqIndex();
  initBduluWidget();
});
