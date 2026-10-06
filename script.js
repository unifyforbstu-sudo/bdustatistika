/* =========================================================
   BDU STATİSTİKA – script.js  (Optimallaşdırılmış v2)
   ========================================================= */

'use strict';

/* =========================================================
   DATA
   ========================================================= */
const FACULTIES = [
  /* ── 1. Tətbiqi Riyaziyyat və Kibernetika ── */
  {
    id: 'trk',
    name: 'Tətbiqi Riyaziyyat və Kibernetika Fakültəsi',
    short: 'TRK Fakültəsi',
    logo: 'images/logo-trk.png',
    group: 1,
    about: 'Tətbiqi Riyaziyyat və Kibernetika fakültəsi proqramlaşdırma, alqoritmlər, süni intellekt, kibertəhlükəsizlik və idarəetmə sistemləri üzrə kadrlar hazırlayır.',
    specialties: [
      { id: 'komp-elm',    name: 'Kompüter elmləri',                               code: '6005009', subgroup: 'ri', lang: 'az', type: 'eyani', free: 414.8, paid: 354.8 },
      { id: 'komp-elm-en', name: 'Kompüter elmləri (tədris ingilis dilində)',       code: '6005009', subgroup: 'ri', lang: 'en', type: 'eyani', free: 525.1, paid: 465.1 },
      { id: 'inf-muel',    name: 'İnformatika müəllimliyi',                        code: '6001010', subgroup: 'ri', lang: 'az', type: 'eyani', free: 307.3, paid: 247.3 },
      { id: 'inf-teh',     name: 'İnformasiya təhlükəsizliyi',                     code: '6006017', subgroup: 'ri', lang: 'az', type: 'eyani', free: 552.5, paid: 492.5 },
    ],
    topStudents: [
      { name: 'Aytən Həsənova',  score: 552.5, specialty: 'İnformasiya təhlükəsizliyi' },
      { name: 'Rauf Məmmədov',   score: 525.1, specialty: 'Kompüter elmləri (ing.)' },
      { name: 'Lalə Quliyeva',   score: 414.8, specialty: 'Kompüter elmləri' },
    ]
  },

  /* ── 2. Mexanika-Riyaziyyat ── */
  {
    id: 'mr',
    name: 'Mexanika-Riyaziyyat Fakültəsi',
    short: 'MR Fakültəsi',
    logo: 'images/logo-mexanika-riyaziyyat.png',
    group: 1,
    about: 'Mexanika-Riyaziyyat fakültəsi riyaziyyat, mexanika və riyaziyyat müəllimliyi üzrə mütəxəssislər hazırlayır.',
    specialties: [
      { id: 'riy',           name: 'Riyaziyyat',                                          code: '6005011', subgroup: 'rk', lang: 'az', type: 'eyani', free: 422.8, paid: 362.8 },
      { id: 'riy-en',        name: 'Riyaziyyat (tədris ingilis dilində)',                  code: '6005011', subgroup: 'rk', lang: 'en', type: 'eyani', free: 513.9, paid: 453.9 },
      { id: 'riy-muel',      name: 'Riyaziyyat müəllimliyi',                              code: '6001015', subgroup: 'rk', lang: 'az', type: 'eyani', free: 544.7, paid: 484.7 },
      { id: 'riy-muel-en',   name: 'Riyaziyyat müəllimliyi (tədris ingilis dilində)',     code: '6001015', subgroup: 'rk', lang: 'en', type: 'eyani', free: 629.7, paid: 569.7 },
      { id: 'mex',           name: 'Mexanika',                                            code: '6005010', subgroup: 'rk', lang: 'az', type: 'eyani', free: 285.4, paid: 140.0 },
      { id: 'fiz-muel-qaz',  name: 'Fizika müəllimliyi (Qazax filialı)',                  code: '6001005', subgroup: 'rk', lang: 'az', type: 'eyani', free: 417.8, paid: 140.0, isQazax: true },
      { id: 'riy-muel-qaz',  name: 'Riyaziyyat müəllimliyi (Qazax filialı)',              code: '6001015', subgroup: 'rk', lang: 'az', type: 'eyani', free: 535.5, paid: 140.0, isQazax: true },
      { id: 'riy-inf-qaz',   name: 'Riyaziyyat və informatika müəllimliyi (Qazax filialı)', code: '6001015', subgroup: 'rk', lang: 'az', type: 'eyani', free: 308.4, paid: 140.0, isQazax: true },
    ],
    topStudents: [
      { name: 'Nigar Əliyeva',     score: 629.7, specialty: 'Riyaziyyat müəllimliyi (ing.)' },
      { name: 'Fuad İsmayılov',    score: 544.7, specialty: 'Riyaziyyat müəllimliyi' },
      { name: 'Sevinc Hüseynova',  score: 513.9, specialty: 'Riyaziyyat (ing.)' },
    ]
  },

  /* ── 3. Fizika ── */
  {
    id: 'fizika',
    name: 'Fizika Fakültəsi',
    short: 'Fizika Fakültəsi',
    logo: 'images/logo-fizika.png',
    group: 1,
    about: 'Fizika fakültəsi fundamental və tətbiqi fizika, nano texnologiyalar, kvant texnologiyaları, optika və enerji sahələrini əhatə edir.',
    specialties: [
      { id: 'fiz',         name: 'Fizika',                                          code: '6005005', subgroup: 'rk', lang: 'az', type: 'eyani', free: 312.3, paid: 252.3 },
      { id: 'fiz-en',      name: 'Fizika (tədris ingilis dilində)',                  code: '6005005', subgroup: 'rk', lang: 'en', type: 'eyani', free: 333.7, paid: 273.7 },
      { id: 'fiz-muel',    name: 'Fizika müəllimliyi',                              code: '6001005', subgroup: 'rk', lang: 'az', type: 'eyani', free: 387.2, paid: 327.2 },
      { id: 'fiz-muel-en', name: 'Fizika müəllimliyi (tədris ingilis dilində)',     code: '6001005', subgroup: 'rk', lang: 'en', type: 'eyani', free: 427.4, paid: 367.4 },
      { id: 'muh-fiz',     name: 'Mühəndis fizikası',                               code: '6006034', subgroup: 'rk', lang: 'az', type: 'eyani', free: 268.3, paid: 208.3 },
    ],
    topStudents: [
      { name: 'Kamran Nəsirov',  score: 427.4, specialty: 'Fizika müəllimliyi (ing.)' },
      { name: 'Gülnar Babayeva', score: 387.2, specialty: 'Fizika müəllimliyi' },
      { name: 'Tural Qədirov',   score: 333.7, specialty: 'Fizika (ing.)' },
    ]
  },

  /* ── 4. Geologiya ── */
  {
    id: 'geo',
    name: 'Geologiya Fakültəsi',
    short: 'Geologiya Fakültəsi',
    logo: 'images/logo-geologiya.png',
    group: 1,
    about: 'Geologiya fakültəsi geoloji prosesləri, neft-qaz geologiyası, seysmologiya, mineralogiya və geoekologiya üzrə mütəxəssislər hazırlayır.',
    specialties: [
      { id: 'geo-spec',       name: 'Geologiya',                                              code: '6005006', subgroup: 'rk', lang: 'az', type: 'eyani', free: 223.3, paid: 140.0 },
      { id: 'geo-geo-muh',    name: 'Geologiya və geofizika mühəndisliyi',                    code: '6006010', subgroup: 'rk', lang: 'az', type: 'eyani', free: 230.0, paid: 140.0 },
      { id: 'geo-geo-muh-en', name: 'Geologiya və geofizika mühəndisliyi (tədris ingilis dilində)', code: '6006010', subgroup: 'rk', lang: 'en', type: 'eyani', free: 248.0, paid: 140.0 },
      { id: 'med-muh',        name: 'Mədən mühəndisliyi',                                    code: '6006033', subgroup: 'rk', lang: 'az', type: 'eyani', free: 208.9, paid: 140.0 },
      { id: 'mel-muh',        name: 'Meliorasiya mühəndisliyi',                               code: '6006030', subgroup: 'rk', lang: 'az', type: 'eyani', free: 265.8, paid: 196.5 },
    ],
    topStudents: [
      { name: 'Rəşad Mustafayev', score: 265.8, specialty: 'Meliorasiya mühəndisliyi' },
      { name: 'Xədicə Orucova',   score: 248.0, specialty: 'Geologiya və geofizika mühəndisliyi (ing.)' },
      { name: 'Elnur Şıxlinski',  score: 230.0, specialty: 'Geologiya və geofizika mühəndisliyi' },
    ]
  },

  /* ── 5. Coğrafiya ── */
  {
    id: 'cografiya',
    name: 'Coğrafiya Fakültəsi',
    short: 'Coğrafiya Fakültəsi',
    logo: 'images/logo-cografiya.png',
    group: 1,
    about: 'Coğrafiya fakültəsi GIS texnologiyaları, regional planlaşdırma, iqlim dəyişiklikləri, turizm, landşaftşünaslıq və kadastr üzrə mütəxəssislər hazırlayır.',
    specialties: [
      { id: 'coq',       name: 'Coğrafiya',                                      code: '6005003', subgroup: 'rk', lang: 'az', type: 'eyani', free: 223.3, paid: 140.0 },
      { id: 'coq-muel',  name: 'Coğrafiya müəllimliyi',                          code: '6001003', subgroup: 'rk', lang: 'az', type: 'eyani', free: 223.3, paid: 140.0 },
      { id: 'geomat',    name: 'Geomatika və geodeziya mühəndisliyi',             code: '6006011', subgroup: 'rk', lang: 'az', type: 'eyani', free: 216.5, paid: 140.0 },
      { id: 'hidromet',  name: 'Hidrometeorologiya',                             code: '6005007', subgroup: 'rk', lang: 'az', type: 'eyani', free: 223.3, paid: 140.0 },
      { id: 'turizm',    name: 'Turizm işinin təşkili',                          code: '6008008', subgroup: 'rk', lang: 'az', type: 'eyani', free: 223.3, paid: 140.0 },
      { id: 'yerq-az',   name: 'Yerquruluşu və daşınmaz əmlakın kadastrı',       code: '6006049', subgroup: 'rk', lang: 'az', type: 'eyani', free: 290.6, paid: 230.6 },
      { id: 'yerq-q',    name: 'Yerquruluşu və daşınmaz əmlakın kadastrı (qiyabi)', code: '6006049', subgroup: 'rk', lang: 'az', type: 'qiyabi', free: 255.4, paid: 195.0 },
    ],
    topStudents: [
      { name: 'Arzu Kərimova',    score: 290.6, specialty: 'Yerquruluşu kadastrı' },
      { name: 'Vüsal Abdullayev', score: 255.4, specialty: 'Yerquruluşu kadastrı (qiyabi)' },
      { name: 'Günel Ramazanova', score: 223.3, specialty: 'Coğrafiya' },
    ]
  },

  /* ── 6. Ekologiya və Torpaqşünaslıq ── */
  {
    id: 'eko',
    name: 'Ekologiya və Torpaqşünaslıq Fakültəsi',
    short: 'Ekologiya Fakültəsi',
    logo: 'images/logo-ekologiya.png',
    group: 1,
    about: 'Ekologiya və Torpaqşünaslıq fakültəsi ekoloji mühəndislik, torpaqşünaslıq, aqrokimya, qida mühəndisliyi sahələrini əhatə edir.',
    specialties: [
      { id: 'eko-muh', name: 'Ekologiya mühəndisliyi',     code: '6006007', subgroup: 'rk', lang: 'az', type: 'eyani', free: 272.2, paid: 209.4 },
      { id: 'qida',    name: 'Qida mühəndisliyi',           code: '6006036', subgroup: 'rk', lang: 'az', type: 'eyani', free: 366.9, paid: 306.9 },
      { id: 'torpaq',  name: 'Torpaqşünaslıq və aqrokimya', code: '6004008', subgroup: 'rk', lang: 'az', type: 'eyani', free: 267.2, paid: 207.2 },
    ],
    topStudents: [
      { name: 'Leyla Hüseynova', score: 366.9, specialty: 'Qida mühəndisliyi' },
      { name: 'Cavid Rzayev',    score: 272.2, specialty: 'Ekologiya mühəndisliyi' },
      { name: 'Şəbnəm Əliyeva',  score: 267.2, specialty: 'Torpaqşünaslıq' },
    ]
  },

  /* ── 7. Kimya ── */
  {
    id: 'kimya',
    name: 'Kimya Fakültəsi',
    short: 'Kimya Fakültəsi',
    logo: 'images/logo-kimya.png',
    group: 1,
    about: 'Kimya fakültəsi kimya mühəndisliyi, analitik kimya, üzvi kimya sahəsindəki tədqiqatları əhatə edir.',
    specialties: [
      { id: 'kim-muh',    name: 'Kimya mühəndisliyi',                            code: '6006020', subgroup: 'rk', lang: 'az', type: 'eyani', free: 437.1, paid: 357.7 },
      { id: 'kim-muh-en', name: 'Kimya mühəndisliyi (tədris ingilis dilində)',    code: '6006020', subgroup: 'rk', lang: 'en', type: 'eyani', free: 513.6, paid: 453.6 },
    ],
    topStudents: [
      { name: 'Nərmin Süleymanova', score: 513.6, specialty: 'Kimya mühəndisliyi (ing.)' },
      { name: 'Əli Hüseynov',       score: 437.1, specialty: 'Kimya mühəndisliyi' },
      { name: 'Zəhra Qasımova',     score: 357.7, specialty: 'Kimya mühəndisliyi' },
    ]
  },

  /* ── 8. Tarix ── */
  {
    id: 'tarix',
    name: 'Tarix Fakültəsi',
    short: 'Tarix Fakültəsi',
    logo: 'images/logo-tarix.png',
    group: 2,
    about: 'Tarix fakültəsi Azərbaycan tarixi, ümumi tarix, arxeologiya, etnoqrafiya və muzeyşünaslıq üzrə mütəxəssislər hazırlayır.',
    specialties: [],
    topStudents: []
  },

  /* ── 9. Biologiya ── */
  {
    id: 'bio',
    name: 'Biologiya Fakültəsi',
    short: 'Biologiya Fakültəsi',
    logo: 'images/logo-biologiya.png',
    group: 2,
    about: 'Biologiya fakültəsi molekulyar biologiya, genetika, mikrobiologiya, botanika, zoologiya sahələrini əhatə edir.',
    specialties: [],
    topStudents: []
  },

  /* ── 10. Hüquq ── */
  {
    id: 'huquq',
    name: 'Hüquq Fakültəsi',
    short: 'Hüquq Fakültəsi',
    logo: 'images/logo-huquq.png',
    group: 2,
    about: 'Hüquq fakültəsi mülki hüquq, cinayət hüququ, beynəlxalq hüquq sahələrini əhatə edir.',
    specialties: [],
    topStudents: []
  },

  /* ── 11. Beynəlxalq Münasibətlər ── */
  {
    id: 'bmi',
    name: 'Beynəlxalq Münasibətlər və İqtisadiyyat Fakültəsi',
    short: 'BMİ Fakültəsi',
    logo: 'images/logo-bmi.png',
    group: 2,
    about: 'BMİ fakültəsi beynəlxalq münasibətlər, iqtisadiyyat, beynəlxalq ticarət sahəsindəki kadrlar hazırlayır.',
    specialties: [],
    topStudents: []
  },

  /* ── 12. İnformasiya və Sənəd Menecmenti ── */
  {
    id: 'ism',
    name: 'İnformasiya və Sənəd Menecmenti Fakültəsi',
    short: 'İSM Fakültəsi',
    logo: 'images/logo-ism.png',
    group: 2,
    about: 'İSM fakültəsi sənəd dövriyyəsi, arxiv işi, informasiya menecmenti sahəsindəki mütəxəssislər hazırlayır.',
    specialties: [],
    topStudents: []
  },

  /* ── 13. Sosial Elmlər və Psixologiya ── */
  {
    id: 'sep',
    name: 'Sosial Elmlər və Psixologiya Fakültəsi',
    short: 'SEP Fakültəsi',
    logo: 'images/logo-sep.png',
    group: 2,
    about: 'SEP fakültəsi psixologiya, sosiologiya, sosial iş sahəsindəki mütəxəssislər hazırlayır.',
    specialties: [],
    topStudents: []
  },

  /* ── 14. Şərqşünaslıq ── */
  {
    id: 'serk',
    name: 'Şərqşünaslıq Fakültəsi',
    short: 'Şərqşünaslıq',
    logo: 'images/logo-serqsunasliq.png',
    group: 2,
    about: 'Şərqşünaslıq fakültəsi Şərq dilləri, tarix, mədəniyyəti üzrə mütəxəssislər hazırlayır.',
    specialties: [],
    topStudents: []
  },

  /* ── 15. Jurnalistika ── */
  {
    id: 'jour',
    name: 'Jurnalistika Fakültəsi',
    short: 'Jurnalistika',
    logo: 'images/logo-jurnalistika.png',
    group: 2,
    about: 'Jurnalistika fakültəsi media, televiziya, radio jurnalistikası, reklam, ictimai əlaqələr üzrə kadrlar hazırlayır.',
    specialties: [],
    topStudents: []
  },

  /* ── 16. Filologiya ── */
  {
    id: 'fil',
    name: 'Filologiya Fakültəsi',
    short: 'Filologiya',
    logo: 'images/logo-filologiya.png',
    group: 2,
    about: 'Filologiya fakültəsi Azərbaycan dili və ədəbiyyatı, xarici dillər, dilçilik üzrə mütəxəssislər hazırlayır.',
    specialties: [],
    topStudents: []
  },
];

/* =========================================================
   KORPUS DATA
   ========================================================= */
const KORPUSLAR = [
  {
    id: 'esas',
    name: 'Əsas Korpus',
    emoji: '🏛️',
    location: 'Elmlər metrosu çıxışı',
    locationIcon: '🚇',
    color: '#0a1433',
    faculties: ['Kimya Fakültəsi','Fizika Fakültəsi','Biologiya Fakültəsi','Geologiya Fakültəsi'],
    facultyIds: ['kimya', 'fizika', 'bio', 'geo'],
    desc: 'Universitetin əsas inzibati binası. Rektorat, dekanatlıqlar və əsas tədris otaqları buradadır.',
    image: 'images/bdu-esas.jpg'
  },
  {
    id: 'birinci',
    name: '1 saylı Korpus',
    emoji: '1️⃣',
    location: 'Elmlər metrosu çıxışı',
    locationIcon: '🚇',
    color: '#1a3a6e',
    faculties: ['Hüquq Fakültəsi','Filologiya Fakültəsi','Beynəlxalq Münasibətlər və İqtisadiyyat Fakültəsi'],
    facultyIds: ['huquq', 'fil', 'bmi'],
    desc: '1 saylı korpus humanitar elmlər sahəsindəki fakültələrə ev sahibliyi edir.',
    image: 'images/bdu-1.jpg'
  },
  {
    id: 'ikinci',
    name: '2 saylı Korpus',
    emoji: '2️⃣',
    location: 'Elmlər metrosu çıxışı',
    locationIcon: '🚇',
    color: '#2a4a7e',
    faculties: ['İnformasiya və Sənəd Menecmenti Fakültəsi','Sosial Elmlər və Psixologiya Fakültəsi','Şərqşünaslıq Fakültəsi','Jurnalistika Fakültəsi'],
    facultyIds: ['ism', 'sep', 'serk', 'jour'],
    desc: '2 saylı korpus BDU-nun ən böyük binalarından biridir. Çoxsaylı fakültə və ixtisaslar buradadır.',
    image: 'images/bdu-2.jpg'
  },
  {
    id: 'ucuncu',
    name: '3 saylı Korpus',
    emoji: '3️⃣',
    location: 'Elmlər metrosu çıxışı',
    locationIcon: '🚇',
    color: '#0d3060',
    faculties: ['Mexanika-Riyaziyyat Fakültəsi','Tətbiqi Riyaziyyat və Kibernetika Fakültəsi','Tarix Fakültəsi'],
    facultyIds: ['mr', 'trk', 'tarix'],
    desc: '3 saylı korpus riyaziyyat, kompüter elmləri və tarix fakültələrinin tədris mərkəzidir.',
    image: 'images/bdu-3.jpg'
  },
  {
    id: 'c',
    name: 'C Korpusu',
    emoji: '🅲',
    location: '28 Noyabr metrosu çıxışı',
    locationIcon: '🚇',
    color: '#8b1a1a',
    faculties: ['Coğrafiya Fakültəsi','Ekologiya və Torpaqşünaslıq Fakültəsi'],
    facultyIds: ['cografiya', 'eko'],
    desc: 'C korpusu 28 Noyabr metro stansiyasının yaxınlığında yerləşir. Coğrafiya və Ekologiya fakültələri buradadır.',
    image: 'images/bdu-c.jpg'
  },
];

/* =========================================================
   PAGE NAVIGATION
   ========================================================= */
let currentPage = 'page-home';

function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  for (let i = 0; i < pages.length; i++) pages[i].classList.remove('active');
  const pg = document.getElementById(pageId);
  if (pg) pg.classList.add('active');
  currentPage = pageId;
  document.getElementById('backBtn').classList.toggle('visible', pageId !== 'page-home');
  window.scrollTo(0, 0);
}

function goHome() { showPage('page-home'); }

/* =========================================================
   BUILD HOME FACULTY CARDS
   ========================================================= */
function buildFacultyGrid() {
  const grid = document.getElementById('facultyGrid');
  if (!grid) return;
  const frag = document.createDocumentFragment();
  FACULTIES.forEach(f => {
    const card = document.createElement('article');
    card.className = 'faculty-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', f.name);
    card.onclick = () => openFaculty(f.id);
    card.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') openFaculty(f.id); };

    const logoHtml = f.logo
      ? `<img src="${f.logo}" alt="${f.name}" class="faculty-card-logo" loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
         <div class="faculty-card-logo-placeholder" style="display:none;">🏛️</div>`
      : `<div class="faculty-card-logo-placeholder">🏛️</div>`;

    card.innerHTML = `
      <div class="faculty-card-logo-wrap">${logoHtml}</div>
      <div class="faculty-card-body">
        <div class="faculty-card-title">${f.name} <span class="faculty-card-arrow">›</span></div>
        <div class="faculty-card-meta">${f.specialties.length > 0 ? f.specialties.length + ' ixtisas' : 'Məlumat hazırlanır'} · ${f.group}-ci qrup</div>
      </div>`;
    frag.appendChild(card);
  });
  grid.appendChild(frag);
}

/* =========================================================
   BUILD KORPUS GRID  — Kart kimi (modal açır)
   ========================================================= */
function buildKorpusGrid() {
  const grid = document.getElementById('korpusGrid');
  if (!grid) return;
  const frag = document.createDocumentFragment();
  KORPUSLAR.forEach(k => {
    const card = document.createElement('article');
    card.className = 'korpus-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', k.name);
    card.onclick = () => openKorpusModal(k.id);
    card.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') openKorpusModal(k.id); };

    card.innerHTML = `
      <div class="korpus-card-top" style="background:${k.color};">
        <div class="korpus-card-emoji">${k.emoji}</div>
        <div class="korpus-card-name">${k.name}</div>
      </div>
      <div class="korpus-card-body">
        <div class="korpus-card-location">${k.locationIcon} <span>${k.location}</span></div>
        <div class="korpus-card-fac-count">${k.faculties.length} fakültə</div>
        <div class="korpus-card-fac-list">
          ${k.faculties.slice(0, 2).map(f => `<span class="korpus-fac-tag">${f}</span>`).join('')}
          ${k.faculties.length > 2 ? `<span class="korpus-fac-tag korpus-fac-more">+${k.faculties.length - 2}</span>` : ''}
        </div>
        <div class="korpus-card-arrow">Ətraflı bax →</div>
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
    return `
      <div class="km-fac-card" onclick="closeKorpusModal();openFaculty('${fac.id}')">
        ${fac.logo
          ? `<img src="${fac.logo}" alt="${fac.name}" class="km-fac-logo" loading="lazy"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
             <div class="km-fac-placeholder" style="display:none;">🏛️</div>`
          : `<div class="km-fac-placeholder">🏛️</div>`}
        <div class="km-fac-info">
          <div class="km-fac-name">${fac.name}</div>
          <div class="km-fac-meta">${fac.specialties.length > 0 ? fac.specialties.length + ' ixtisas' : 'Məlumat hazırlanır'} · ${fac.group}-ci qrup</div>
        </div>
        <span class="km-fac-arrow">›</span>
      </div>`;
  }).join('');

  const modal = document.getElementById('korpusModal');
  const modalInner = document.getElementById('korpusModalInner');

  modalInner.innerHTML = `
    <div class="km-header" style="background:${k.color};">
      <div class="km-header-bg" style="background-image:url('${k.image}');"></div>
      <div class="km-header-overlay"></div>
      <div class="km-header-content">
        <div class="km-emoji">${k.emoji}</div>
        <div class="km-title-wrap">
          <h2 class="km-title">${k.name}</h2>
          <p class="km-loc">${k.locationIcon} ${k.location}</p>
        </div>
        <button class="km-close" onclick="closeKorpusModal()" aria-label="Bağla">✕</button>
      </div>
    </div>
    <div class="km-body">
      <p class="km-desc">${k.desc}</p>
      <h3 class="km-fac-title">Bu Korpusdakı Fakültələr</h3>
      <div class="km-fac-list">${facHtml}</div>
    </div>`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeKorpusModal() {
  const modal = document.getElementById('korpusModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* =========================================================
   OPEN FACULTY DETAIL
   ========================================================= */
function openFaculty(id) {
  const f = FACULTIES.find(x => x.id === id);
  if (!f) return;

  const headerEl = document.getElementById('facultyDetailHeader');
  headerEl.innerHTML = `
    <div class="faculty-detail-header-inner">
      ${f.logo ? `<img src="${f.logo}" alt="${f.name}" class="faculty-detail-logo" loading="lazy"
        onerror="this.style.display='none';" />` : ''}
      <div class="faculty-detail-text">
        <h2>${f.name}</h2>
        <p>${f.about || 'Bu fakültə haqqında ətraflı məlumat hazırlanır.'}</p>
      </div>
    </div>`;

  // Gallery
  const gallery = document.getElementById('facultyGallery');
  gallery.innerHTML = '';
  const students = (f.topStudents && f.topStudents.length > 0) ? f.topStudents : [{}, {}, {}];
  const gFrag = document.createDocumentFragment();
  for (let i = 0; i < 3; i++) {
    const s = students[i] || {};
    const item = document.createElement('div');
    item.className = 'gallery-item';
    if (s.name) {
      item.innerHTML = `
        <div class="gallery-placeholder"><span>👤</span></div>
        <div class="gallery-student-info">
          <div class="sname">${s.name}</div>
          <div class="sscore">Bal: ${s.score}</div>
          <div>${s.specialty || ''}</div>
        </div>`;
    } else {
      item.innerHTML = `<div class="gallery-placeholder"><span>📸</span><small>Şəkil yoxdur</small></div>`;
    }
    gFrag.appendChild(item);
  }
  gallery.appendChild(gFrag);

  // RI Charts section — SADƏCƏ BAL HESABLAMA SƏHİFƏSİNDƏ LAZIMDIR
  // Fakültə səhifəsindən diaqramları gizlə
  const riSection = document.getElementById('ri-charts-section');
  if (riSection) {
    riSection.style.display = 'none';
    document.getElementById('riChartsWrapper').innerHTML = '';
  }

  // Specialties list
  const specList = document.getElementById('facultySpecList');
  specList.innerHTML = '';
  if (f.specialties.length === 0) {
    specList.innerHTML = '<div class="no-results">Bu fakültə üçün ixtisas məlumatı mövcud deyil.</div>';
  } else {
    const sfrag = document.createDocumentFragment();
    f.specialties.forEach(s => {
      const item = document.createElement('div');
      item.className = 'spec-item';
      const tags = [
        `<span class="tag tag-free">Ödənişsiz: ${s.free}</span>`,
        `<span class="tag tag-paid">Ödənişli: ${s.paid.toFixed(1)}</span>`,
      ];
      if (s.lang === 'en') tags.push(`<span class="tag tag-en">İngiliscə</span>`);
      if (s.isQazax) tags.push(`<span class="tag tag-qazax">Qazax filialı</span>`);
      if (s.type === 'qiyabi') tags.push(`<span class="tag tag-qiyabi">Qiyabi</span>`);

      item.innerHTML = `
        <div class="spec-item-left">
          <div class="spec-item-name">${s.name}</div>
          <div class="spec-item-tags">${tags.join('')}</div>
        </div>
        <div class="spec-scores">
          <div class="spec-score-free">${s.free}</div>
          <div class="spec-score-label">Ödənişsiz bal</div>
          <div class="spec-score-paid">${s.paid.toFixed(1)}</div>
          <div class="spec-score-label">Ödənişli bal</div>
        </div>`;
      sfrag.appendChild(item);
    });
    specList.appendChild(sfrag);
  }

  showPage('page-faculty');
}

/* =========================================================
   BAL HESABLAMA — RI CHARTS (yalnız calculator nəticəsindən sonra)
   ========================================================= */
function buildRiChartsForCalc(riSpecs, container) {
  container.innerHTML = '';
  if (!riSpecs || riSpecs.length === 0) return;

  const chartColors = ['#0a1433','#1a3a6e','#c8a84b','#2a6496','#e74c3c','#27ae60'];
  const maxFree = Math.max(...riSpecs.map(s => s.free));
  const minFree = Math.min(...riSpecs.map(s => s.free));
  const avgFree = riSpecs.reduce((a, s) => a + s.free, 0) / riSpecs.length;
  const barMax  = maxFree * 1.05;

  const barsHtml = riSpecs.map((s, i) => {
    const pct     = Math.round((s.free / barMax) * 100);
    const pctPaid = Math.round((s.paid / barMax) * 100);
    const color   = chartColors[i % chartColors.length];
    return `
      <div class="ri-bar-row">
        <div class="ri-bar-label">${s.name}</div>
        <div class="ri-bar-tracks">
          <div class="ri-bar-track">
            <div class="ri-bar-fill" style="width:${pct}%;background:${color};">
              <span class="ri-bar-val">${s.free}</span>
            </div>
            <small class="ri-bar-desc">Ödənişsiz</small>
          </div>
          <div class="ri-bar-track">
            <div class="ri-bar-fill ri-bar-fill-paid" style="width:${pctPaid}%;background:${color}88;">
              <span class="ri-bar-val">${s.paid.toFixed(1)}</span>
            </div>
            <small class="ri-bar-desc">Ödənişli</small>
          </div>
        </div>
      </div>`;
  }).join('');

  const donutsHtml = riSpecs.map((s, i) => {
    const color   = chartColors[i % chartColors.length];
    const pct     = Math.round((s.free / maxFree) * 100);
    const dashVal = Math.round(pct * 2.83);
    return `
      <div class="ri-donut-item">
        <svg class="ri-donut-svg" viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#e8ecf4" stroke-width="10"/>
          <circle cx="50" cy="50" r="45" fill="none" stroke="${color}" stroke-width="10"
            stroke-dasharray="${dashVal} ${283 - dashVal}"
            stroke-dashoffset="70.75" stroke-linecap="round"/>
          <text x="50" y="46" text-anchor="middle" font-size="14" font-weight="700" fill="#0a1433">${pct}%</text>
          <text x="50" y="62" text-anchor="middle" font-size="9" fill="#666">nisbət</text>
        </svg>
        <div class="ri-donut-label">${s.name.length > 28 ? s.name.substring(0, 25) + '…' : s.name}</div>
        <div class="ri-donut-score" style="color:${color};">${s.free} bal</div>
      </div>`;
  }).join('');

  container.innerHTML = `
    <div class="ri-charts-inner">
      <div class="ri-stats-row">
        <div class="ri-stat-card ri-stat-blue"><div class="ri-stat-value">${maxFree}</div><div class="ri-stat-label">Ən yüksək ödənişsiz bal</div></div>
        <div class="ri-stat-card ri-stat-green"><div class="ri-stat-value">${avgFree.toFixed(1)}</div><div class="ri-stat-label">Orta ödənişsiz bal</div></div>
        <div class="ri-stat-card ri-stat-orange"><div class="ri-stat-value">${minFree}</div><div class="ri-stat-label">Ən aşağı ödənişsiz bal</div></div>
        <div class="ri-stat-card ri-stat-purple"><div class="ri-stat-value">${riSpecs.length}</div><div class="ri-stat-label">İxtisas sayı</div></div>
      </div>
      <div class="ri-chart-card">
        <h4 class="ri-chart-title">📊 Qəbul Balları Müqayisəsi</h4>
        <div class="ri-bars">${barsHtml}</div>
      </div>
      <div class="ri-chart-card">
        <h4 class="ri-chart-title">🔵 Bal Nisbəti (maksimuma görə faiz)</h4>
        <div class="ri-donuts-row">${donutsHtml}</div>
      </div>
    </div>`;
}

/* =========================================================
   FILTER SYSTEM
   ========================================================= */
const filterGroups = {
  payment: { filters: ['free', 'paid'],         active: new Set(['free', 'paid']) },
  lang:    { filters: ['az', 'en'],             active: new Set(['az', 'en']) },
  form:    { filters: ['eyani', 'qiyabi'],      active: new Set(['eyani', 'qiyabi']) },
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
      } else {
        el.style.animation = 'none';
        el.offsetHeight; // reflow
        el.style.animation = 'shake 0.3s';
        showFilterWarning(gName);
        return;
      }
    } else {
      group.active.add(f);
      el.classList.add('active');
    }
    updateGroupIndicator(gName);
  } else if (standaloneFilters.has(f)) {
    standaloneFilters.delete(f);
    el.classList.remove('active');
  } else {
    standaloneFilters.add(f);
    el.classList.add('active');
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
  reqEl.textContent = ok ? '✓' : 'min 1';
}

/* =========================================================
   CALCULATOR LOGIC
   ========================================================= */
const SUBGROUPS = {
  '1': [
    { value: 'ri', label: 'RI – Riyaziyyat-İnformatika' },
    { value: 'rk', label: 'RK – Riyaziyyat-Kimya' },
  ],
  '2': [],
  '3': [
    { value: 'dt', label: 'DT – Dil-Tarix' },
    { value: 'tc', label: 'TC – Tarix-Coğrafiya' },
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
    box.innerHTML = `Ümumi bal: <strong>${total.toFixed(1)}</strong> (Buraxılış: ${exit} + Blok: ${block})`;
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
    blockMsg = 'RI alt qrupu üçün blok balı 100-dən az olduğundan bütün ixtisaslarda qəbul faizi 0%-dir.';
  } else if (subgroup === 'rk' && blockScore < 50) {
    blockOk  = false;
    blockMsg = 'RK alt qrupu üçün blok balı 50-dən az olduğundan bütün ixtisaslarda qəbul faizi 0%-dir.';
  }

  const userBal    = exitScore + blockScore;
  const showFree   = filterGroups.payment.active.has('free');
  const showPaid   = filterGroups.payment.active.has('paid');
  const showAz     = filterGroups.lang.active.has('az');
  const showEn     = filterGroups.lang.active.has('en');
  const showEyani  = filterGroups.form.active.has('eyani');
  const showQiyabi = filterGroups.form.active.has('qiyabi');
  const showQazax  = standaloneFilters.has('qazax');

  const allSpecs = [];
  FACULTIES.forEach(f => {
    f.specialties.forEach(s => {
      if (group === '1') {
        if (subgroup && s.subgroup !== subgroup) return;
      } else { return; }
      if (s.lang === 'en' && !showEn) return;
      if (s.lang === 'az' && !showAz) return;
      if (s.type === 'qiyabi' && !showQiyabi) return;
      if (s.type === 'eyani'  && !showEyani)  return;
      if (s.isQazax && !showQazax) return;
      allSpecs.push({ ...s, facultyName: f.short, facultyId: f.id });
    });
  });

  const results = allSpecs.map(s => {
    const fp = blockOk ? calcPercent(userBal, s.free) : 0;
    const pp = blockOk ? calcPercent(userBal, s.paid) : 0;
    return {
      ...s,
      freePercent: showFree ? fp : null,
      paidPercent: showPaid ? pp : null,
      maxPercent: Math.max(showFree ? fp : 0, showPaid ? pp : 0),
    };
  }).sort((a, b) => b.maxPercent - a.maxPercent);

  const container = document.getElementById('resultsContainer');
  const list      = document.getElementById('resultsList');
  const header    = document.getElementById('resultsHeader');
  container.style.display = 'block';

  const subLabel = subgroup ? ` | Alt qrup: ${subgroup.toUpperCase()}` : '';
  header.textContent = `Ümumi bal: ${userBal.toFixed(1)}${subLabel} — ${results.length} ixtisas tapıldı`;

  if (blockMsg) {
    list.innerHTML = `<div class="no-results" style="color:#dc3545;background:#fff5f5;border-radius:8px;padding:20px;">${blockMsg}</div>`;
  } else if (results.length === 0) {
    list.innerHTML = '<div class="no-results">Seçilmiş filterlərə uyğun ixtisas tapılmadı.</div>';
  } else {
    const rfrag = document.createDocumentFragment();
    results.forEach((s, i) => {
      const item = document.createElement('div');
      item.className = 'result-item';

      const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
      const tags = [];
      if (s.lang === 'en') tags.push(`<span class="tag tag-en">İngiliscə</span>`);
      if (s.isQazax)       tags.push(`<span class="tag tag-qazax">Qazax filialı</span>`);
      if (s.type === 'qiyabi') tags.push(`<span class="tag tag-qiyabi">Qiyabi</span>`);

      const pctColor = s.maxPercent >= 70 ? 'high' : s.maxPercent >= 40 ? 'medium' : 'low';
      const barClass = s.maxPercent >= 70 ? ''     : s.maxPercent >= 40 ? 'medium' : 'low';

      let scoreDetails = '';
      if (s.freePercent !== null) scoreDetails += `Ödənişsiz: ${s.free} → <strong>${s.freePercent}%</strong><br>`;
      if (s.paidPercent !== null) scoreDetails += `Ödənişli: ${s.paid.toFixed(1)} → <strong>${s.paidPercent}%</strong>`;

      item.innerHTML = `
        <div class="result-rank ${rankClass}">${i + 1}</div>
        <div class="result-info">
          <div class="result-name">${s.name}</div>
          <div class="result-faculty">${s.facultyName}</div>
          <div class="result-tags">${tags.join('')}</div>
          <div class="percent-bar"><div class="percent-bar-fill ${barClass}" style="width:${s.maxPercent}%"></div></div>
        </div>
        <div class="result-right">
          <div class="result-percent ${pctColor}">${s.maxPercent}%</div>
          <div class="result-score">${scoreDetails}</div>
        </div>`;
      rfrag.appendChild(item);
    });
    list.innerHTML = '';
    list.appendChild(rfrag);
  }

  // RI diaqramları — YALNIZ BAL HESABLAMA NƏTİCƏSİNDƏN SONRA
  const calcRiSection  = document.getElementById('calc-ri-charts-section');
  const calcRiWrapper  = document.getElementById('calcRiChartsWrapper');
  if (calcRiSection && calcRiWrapper) {
    if (subgroup === 'ri') {
      const riSpecs = allSpecs.filter(s => s.subgroup === 'ri');
      if (riSpecs.length > 0) {
        calcRiSection.style.display = 'block';
        buildRiChartsForCalc(riSpecs, calcRiWrapper);
      } else {
        calcRiSection.style.display = 'none';
      }
    } else {
      calcRiSection.style.display = 'none';
      calcRiWrapper.innerHTML = '';
    }
  }

  container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* =========================================================
   BDULU CHAT BOT – Genişləndirilmiş məlumat bazası
   ========================================================= */
const FAQ_DATA = [
  {
    keywords: ['salam', 'salamlar', 'merhaba', 'hi', 'hey', 'günün xeyir', 'sabahın xeyir', 'axşamın xeyir', 'günə xeyir'],
    answer: 'Salam! 👋 Mən BDUlu-yam — Bakı Dövlət Universitetinin köməkçi assistantı. BDU haqqında hər cür sualınıza cavab verməyə hazıram! 🎓'
  },
  {
    keywords: ['sən kimsən', 'adın nədir', 'bdulu nədir', 'nə edə bilirsən', 'kimsən', 'nəsən'],
    answer: 'Mən BDUlu-yam — Bakı Dövlət Universiteti haqqında sualları cavablandıran virtual köməkçiyəm. 😊 Korpuslar, dərs saatları, fakültələr, yataqxana, kitabxana, rektor, tələbə sayı kimi mövzularda məlumat verə bilərəm.'
  },
  {
    keywords: ['necəsən', 'necə gedirsən', 'nə var nə yox', 'yaxşısan'],
    answer: 'Yaxşıyam, sağ olun! 😊 Sualınızı verə bilərsiniz.'
  },
  {
    keywords: ['təşəkkür', 'sağ ol', 'minnətdar', 'çox sağ ol'],
    answer: 'Siz sağ olun! 😊 Başqa sualınız varsa, buyurun.'
  },
  {
    keywords: ['hələlik', 'görüşərik', 'bye', 'gedirəm'],
    answer: 'Hələlik! Uğurlar! 🎓👋'
  },
  {
    keywords: ['maraqlı fakt', 'fakt de', 'darıxıram'],
    answer: 'Maraqlı fakt: BDU-da ilk dərs günü 15 noyabr 1919-cu il elan edilib. 🎓 Heydər Əliyev də BDU-nun məzunudur!'
  },
  {
    keywords: ['nə vaxt yaradılıb', 'tarix', 'neçənci ildə', 'yaranıb', 'təsis', '1919'],
    answer: 'Bakı Dövlət Universiteti 1 sentyabr 1919-cu ildə Azərbaycan Xalq Cümhuriyyəti Parlamentinin qanunu ilə təsis edilib. İlk dərs günü isə 15 noyabr 1919-cu il elan edilib. BDU Azərbaycanın ilk ali təhsil müəssisəsidir. 🏛️'
  },
  {
    keywords: ['neçə illik', 'ildönümü', '107', 'yaşı neçədir'],
    answer: '2026-cı ildə BDU 107-ci ildönümünü qeyd edir. 🎂'
  },
  {
    keywords: ['ilk rektor', 'razumovski'],
    answer: 'BDU-nun ilk rektoru professor V.İ. Razumovski olub. 📚'
  },
  {
    keywords: ['rektor', 'rəhbər', 'babayev'],
    answer: 'BDU-nun hazırkı rektoru Elçin Babayevdir. O, 2019-cu ilin mart ayında rektor vəzifəsinə təyin edilib. 👨‍💼'
  },
  {
    keywords: ['tələbə sayı', 'neçə tələbə', 'nə qədər tələbə'],
    answer: '2026-cı ilin məlumatına görə BDU-da 25 mindən çox tələbə təhsil alır. 🎓'
  },
  {
    keywords: ['kafedra', 'neçə kafedra'],
    answer: '2026-cı ilin məlumatına görə BDU-da 114 kafedra fəaliyyət göstərir. 📋'
  },
  {
    keywords: ['əməkdaş', 'müəllim sayı', 'akademik heyət'],
    answer: '2026-cı ilin məlumatına görə BDU-da 3 mindən çox akademik heyət üzvü və əməkdaş çalışır. 👩‍🏫'
  },
  {
    keywords: ['ünvan', 'adres', 'harada yerləşir bdu', 'bdu harada'],
    answer: 'BDU-nun əsas ünvanı: Akademik Zahid Xəlilov küçəsi 33, AZ1148, Bakı. 📍'
  },
  {
    keywords: ['korpus', 'bina', 'neçə korpus', 'neçə bina', 'korpuslar harada', 'elmlər', '28 noyabr'],
    answer: 'BDU-da 5 korpus var:\n🏛️ Əsas Korpus — Elmlər metrosu\n1️⃣ 1 saylı Korpus — Elmlər metrosu\n2️⃣ 2 saylı Korpus — Elmlər metrosu\n3️⃣ 3 saylı Korpus — Elmlər metrosu\n🅲 C Korpusu — 28 Noyabr metrosu\n\nC korpusu istisna olmaqla digər korpuslar Elmlər metrosu ərazisindədir. 🚇'
  },
  {
    keywords: ['dərs saatı', 'dərs neçədə', 'dərslər neçədə', 'dərs vaxtı', 'başlayır', 'növbə'],
    answer: 'Bakalavr tələbələri üçün dərs vaxtları:\n• 1-ci və 3-cü kurslar: Səhər — 08:30-da\n• 2-ci və 4-cü kurslar: Günorta — 13:50-də başlayır. 🕐'
  },
  {
    keywords: ['həftədə neçə', 'həftəlik dərs', 'neçə gün dərs', 'neçə dəfə dərs'],
    answer: 'Həftədə 4 dəfə dərs olur. 📅'
  },
  {
    keywords: ['fakültə', 'neçə fakültə', 'fakültələr', 'fakültə sayı'],
    answer: 'BDU-da 16 fakültə fəaliyyət göstərir:\nTətbiqi Riyaziyyat, Mexanika-Riyaziyyat, Fizika, Kimya, Biologiya, Geologiya, Coğrafiya, Ekologiya, Tarix, Hüquq, Filologiya, Jurnalistika, BMİ, İSM, SEP, Şərqşünaslıq fakültələri. 🎓'
  },
  {
    keywords: ['yataqxana', 'kim yataqxana ala bilər', 'şəhid', 'tək valideyn', 'yaşamaq'],
    answer: 'Yataqxana əsasən şəhid ailələrindən olan və tək valideynli tələbələr üçün nəzərdə tutulub. 🏠\n\nYataqxanada:\n• 220 tələbə üçün yer\n• 104 mebelli yataq otağı\n• Oxu zalı və kitabxana\n• Görüş otağı\n• Yeməkxana\n• Mətbəxlər\n• Camaşırxana\n• Tibbi yardım otağı'
  },
  {
    keywords: ['kitabxana', 'elektron kitabxana', 'elektron resurs', 'kitab', 'dərslik'],
    answer: 'BDU-da Elmi Kitabxana fəaliyyət göstərir. Kitabxananın tarixi universitetin yaranmasından başlayır, 1974-cü ildə Elmi Kitabxana statusu verilib. Elektron resurslar və dərsliklər mövcuddur. 📚'
  },
  {
    keywords: ['psixoloji', 'psixoloq', 'psixoloji dəstək', 'psixoloji yardım'],
    answer: 'BDU-da tələbə və əməkdaşlar üçün Psixoloji Yardım Xidməti fəaliyyət göstərir. 🧠'
  },
  {
    keywords: ['əlillik', 'xüsusi ehtiyac', 'əlçatanlıq', 'pandus', 'lift', 'brayl'],
    answer: 'BDU əlçatanlıq üçün:\n• Girişlərdə panduslar\n• Brayl düymələri olan liftlər\n• Uyğunlaşdırılmış sanitar qovşaqları mövcuddur. ♿'
  },
  {
    keywords: ['tələbə təşkilatı', 'klub', 'yeni club', 'könüllü', 'həmkarlar'],
    answer: 'BDU-da tələbə təşkilatları:\n• BDU Könüllüləri\n• Tələbə Həmkarlar İttifaqı Komitəsi\n• Tələbə Gənclər Təşkilatı\n• YENİ Club\n• OIC Model Club\n• və digər qurumlar fəaliyyət göstərir. 🌟'
  },
  {
    keywords: ['inkişaf mərkəzi', 'tələbə inkişaf', 'student space', 'eco space'],
    answer: 'BDU-da tələbə məkanları:\n• Tələbə İnkişaf Mərkəzi (2025-ci ildə açılıb)\n• Student Space\n• Eco-Space\n• Eco-Energy Station\n\nTələbə İnkişaf Mərkəzi şəbəkələşmə, şəxsi/peşəkar inkişaf üçün yaradılıb. 🚀'
  },
  {
    keywords: ['erasmus', 'mübadilə', 'mövlana', 'xarici proqram', 'beynəlxalq'],
    answer: 'BDU-da beynəlxalq mübadilə proqramları:\n• Erasmus+\n• Mövlana proqramı\n• Müxtəlif universitetlərlə mübadilə\n• İkili diplom proqramları mövcuddur. 🌍'
  },
  {
    keywords: ['reytinq', 'qs', 'sıralama', 'neçənci', 'dünya reytinqi'],
    answer: 'BDU-nun dünya reytinqləri:\n• QS World 2027: 565-ci yer 🌍\n• QS Europe 2026: 278-ci yer\n• QS Western Asia 2026: 13-cü yer\n• QS Subject 2026: 2 geniş, 8 dar kateqoriyada\n• Neft mühəndisliyi: 51-100 aralığı\n• Riyaziyyat: 251-300 aralığı\n• Hüquq: 301-350 aralığı\n• Kompüter elmləri: 601-650 aralığı 📊'
  },
  {
    keywords: ['süni intellekt', 'ai', 'magistr', 'yeni ixtisas'],
    answer: '2026-cı ildə BDU-da süni intellekt üzrə magistr ixtisaslaşması açılıb! 🤖 Həmçinin 2 BDU layihəsi QS Reimagine Education Awards 2026-nın qısa siyahısına düşüb.'
  },
  {
    keywords: ['bakalavr proqramı', 'neçə proqram', 'qəbul proqramı', '76'],
    answer: 'BDU 2026-2027-ci tədris ili üçün 76 bakalavr proqramına qəbul aparacağını elan edib. 📝'
  },
  {
    keywords: ['məşhur məzun', 'heydər əliyev', 'tanınmış məzun'],
    answer: 'BDU-nun dünyaşöhrətli məzunlarından biri ulu öndər Heydər Əliyevdir. 🎓'
  },
  {
    keywords: ['imkanlar', 'xidmətlər', 'kafeteriya', 'yeməkxana', 'coworking', 'kompüter otağı'],
    answer: 'BDU-da mövcud imkanlar:\n📚 Elmi Kitabxana\n🔬 Laboratoriyalar\n💻 Kompüter otaqları\n🍽️ Yeməkxana/kafeteriya\n🤝 Coworking məkanlar\n🏋️ İdman imkanları\n🏠 Yataqxana'
  },
  {
    keywords: ['qəbul', 'necə qəbul', 'ixtisas', 'bal', 'abituriyent'],
    answer: 'BDU-ya qəbul üçün "Bal Hesabla" bölməsindən istifadə edə bilərsiniz! Qrup, alt qrup və balınızı daxil edin — ixtisaslara qəbul ehtimalını görün. 📊\n\nBDU 2026-2027 üçün 76 bakalavr proqramına qəbul aparır.'
  },
];

let bduluOpen = false;

function toggleBdulu() {
  bduluOpen = !bduluOpen;
  const panel = document.getElementById('bduluPanel');
  const badge = document.getElementById('bduluBadge');
  panel.classList.toggle('open', bduluOpen);
  if (bduluOpen) {
    badge.style.display = 'none';
    // Keyboard focus after animation — use passive timeout
    setTimeout(() => {
      const input = document.getElementById('bduluInput');
      if (input) input.focus();
    }, 300);
  }
}

function sendSuggestion(text) {
  const input = document.getElementById('bduluInput');
  input.value = text;
  sendBdulu();
}

function sendBdulu() {
  const input = document.getElementById('bduluInput');
  const text  = input.value.trim();
  if (!text) return;
  input.value = '';

  appendBduluMsg(text, 'user');

  const suggestions = document.getElementById('bduluSuggestions');
  if (suggestions) suggestions.style.display = 'none';

  const typingId = showBduluTyping();

  // Use passive timer — not blocking main thread
  setTimeout(() => {
    removeBduluTyping(typingId);
    const answer = getBduluAnswer(text);
    appendBduluMsg(answer, 'bot');
  }, 500 + Math.random() * 400);
}

function appendBduluMsg(text, role) {
  const container = document.getElementById('bduluMessages');
  const div = document.createElement('div');
  div.className = `bdulu-msg bdulu-msg-${role}`;
  if (role === 'bot') {
    div.innerHTML = `
      <img src="images/bdulu-logo.png" alt="BDULU" class="bdulu-msg-avatar" loading="lazy"/>
      <div class="bdulu-msg-bubble">${text.replace(/\n/g, '<br>')}</div>`;
  } else {
    div.innerHTML = `<div class="bdulu-msg-bubble bdulu-msg-bubble-user">${escHtml(text)}</div>`;
  }
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

let typingCounter = 0;
function showBduluTyping() {
  const container = document.getElementById('bduluMessages');
  const id  = 'typing-' + (++typingCounter);
  const div = document.createElement('div');
  div.className = 'bdulu-msg bdulu-msg-bot';
  div.id = id;
  div.innerHTML = `
    <img src="images/bdulu-logo.png" alt="" class="bdulu-msg-avatar" loading="lazy"/>
    <div class="bdulu-msg-bubble bdulu-typing">
      <span></span><span></span><span></span>
    </div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  return id;
}

function removeBduluTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function getBduluAnswer(text) {
  const lower = text.toLowerCase().trim();

  for (const entry of FAQ_DATA) {
    for (const kw of entry.keywords) {
      if (lower.includes(kw.toLowerCase())) return entry.answer;
    }
  }

  // Söz əsasında geniş axtarış
  const words = lower.split(/\s+/).filter(w => w.length > 2);
  for (const entry of FAQ_DATA) {
    for (const kw of entry.keywords) {
      const kwl = kw.toLowerCase();
      for (const word of words) {
        if (kwl.includes(word) || word.includes(kwl)) return entry.answer;
      }
    }
  }

  return 'Üzr istəyirəm, bu mövzu haqqında məlumatım yoxdur. 🙏\n\nMəsələn bu sualları verə bilərsiniz:\n• "Korpuslar harada yerləşir?"\n• "Dərs saatları nə vaxtdır?"\n• "Yataqxana haqqında məlumat ver"\n• "BDU reytinqi necədir?"\n• "Fakültə sayı neçədir?"';
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  buildFacultyGrid();
  buildKorpusGrid();

  document.querySelectorAll('.filter-chip[data-group]').forEach(el => {
    const gName = el.dataset.group;
    const f     = el.dataset.filter;
    const group = filterGroups[gName];
    if (group && group.active.has(f)) el.classList.add('active');
    updateGroupIndicator(gName);
  });

  document.querySelectorAll('.filter-chip[data-standalone]').forEach(el => {
    if (standaloneFilters.has(el.dataset.filter)) el.classList.add('active');
  });

  // Korpus modal — ESC ilə bağla
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeKorpusModal();
      if (bduluOpen) toggleBdulu();
    }
  });

  // Viewport height fix — mobile browsers (address bar)
  function setVh() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  }
  setVh();
  window.addEventListener('resize', setVh, { passive: true });
});
