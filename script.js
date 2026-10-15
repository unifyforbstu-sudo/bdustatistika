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
  /* 1. Tətbiqi Riyaziyyat və Kibernetika */
  {
    id: 'trk',
    name: 'Tətbiqi Riyaziyyat və Kibernetika Fakültəsi',
    short: 'TRK Fakültəsi',
    logo: 'images/logo-trk.png',
    group: 1,
    about: 'Tətbiqi Riyaziyyat və Kibernetika fakültəsi proqramlaşdırma, alqoritmlər, süni intellekt, kibertəhlükəsizlik və idarəetmə sistemləri üzrə kadrlar hazırlayır.',
    specialties: [
      { id: 'komp-elm',    name: 'Kompüter elmləri',                             code: '6005009', subgroup: 'ri', lang: 'az', type: 'eyani', free: 414.8, paid: 354.8 },
      { id: 'komp-elm-en', name: 'Kompüter elmləri (tədris ingilis dilində)',     code: '6005009', subgroup: 'ri', lang: 'en', type: 'eyani', free: 525.1, paid: 465.1 },
      { id: 'inf-muel',    name: 'İnformatika müəllimliyi',                      code: '6001010', subgroup: 'ri', lang: 'az', type: 'eyani', free: 307.3, paid: 247.3 },
      { id: 'inf-teh',     name: 'İnformasiya təhlükəsizliyi',                   code: '6006017', subgroup: 'ri', lang: 'az', type: 'eyani', free: 552.5, paid: 492.5 },
    ]
  },

  /* 2. Mexanika-Riyaziyyat */
  {
    id: 'mr',
    name: 'Mexanika-Riyaziyyat Fakültəsi',
    short: 'MR Fakültəsi',
    logo: 'images/logo-mexanika-riyaziyyat.png',
    group: 1,
    about: 'Mexanika-Riyaziyyat fakültəsi riyaziyyat, mexanika və riyaziyyat müəllimliyi üzrə mütəxəssislər hazırlayır.',
    specialties: [
      { id: 'riy',          name: 'Riyaziyyat',                                            code: '6005011', subgroup: 'rk', lang: 'az', type: 'eyani', free: 422.8, paid: 362.8 },
      { id: 'riy-en',       name: 'Riyaziyyat (tədris ingilis dilində)',                    code: '6005011', subgroup: 'rk', lang: 'en', type: 'eyani', free: 513.9, paid: 453.9 },
      { id: 'riy-muel',     name: 'Riyaziyyat müəllimliyi',                                code: '6001015', subgroup: 'rk', lang: 'az', type: 'eyani', free: 544.7, paid: 484.7 },
      { id: 'riy-muel-en',  name: 'Riyaziyyat müəllimliyi (tədris ingilis dilində)',        code: '6001015', subgroup: 'rk', lang: 'en', type: 'eyani', free: 629.7, paid: 569.7 },
      { id: 'mex',          name: 'Mexanika',                                              code: '6005010', subgroup: 'rk', lang: 'az', type: 'eyani', free: 285.4, paid: 140.0 },
      { id: 'fiz-muel-qaz', name: 'Fizika müəllimliyi (Qazax filialı)',                     code: '6001005', subgroup: 'rk', lang: 'az', type: 'eyani', free: 417.8, paid: 140.0, isQazax: true },
      { id: 'riy-muel-qaz', name: 'Riyaziyyat müəllimliyi (Qazax filialı)',                 code: '6001015', subgroup: 'rk', lang: 'az', type: 'eyani', free: 535.5, paid: 140.0, isQazax: true },
      { id: 'riy-inf-qaz',  name: 'Riyaziyyat və informatika müəllimliyi (Qazax filialı)',   code: '6001015', subgroup: 'rk', lang: 'az', type: 'eyani', free: 308.4, paid: 140.0, isQazax: true },
    ]
  },

  /* 3. Fizika */
  {
    id: 'fizika',
    name: 'Fizika Fakültəsi',
    short: 'Fizika Fakültəsi',
    logo: 'images/logo-fizika.png',
    group: 1,
    about: 'Fizika fakültəsi fundamental və tətbiqi fizika, nano texnologiyalar, kvant texnologiyaları, optika və enerji sahələrini əhatə edir.',
    specialties: [
      { id: 'fiz',         name: 'Fizika',                                        code: '6005005', subgroup: 'rk', lang: 'az', type: 'eyani', free: 312.3, paid: 252.3 },
      { id: 'fiz-en',      name: 'Fizika (tədris ingilis dilində)',                code: '6005005', subgroup: 'rk', lang: 'en', type: 'eyani', free: 333.7, paid: 273.7 },
      { id: 'fiz-muel',    name: 'Fizika müəllimliyi',                            code: '6001005', subgroup: 'rk', lang: 'az', type: 'eyani', free: 387.2, paid: 327.2 },
      { id: 'fiz-muel-en', name: 'Fizika müəllimliyi (tədris ingilis dilində)',    code: '6001005', subgroup: 'rk', lang: 'en', type: 'eyani', free: 427.4, paid: 367.4 },
      { id: 'muh-fiz',     name: 'Mühəndis fizikası',                             code: '6006034', subgroup: 'rk', lang: 'az', type: 'eyani', free: 268.3, paid: 208.3 },
    ]
  },

  /* 4. Geologiya */
  {
    id: 'geo',
    name: 'Geologiya Fakültəsi',
    short: 'Geologiya Fakültəsi',
    logo: 'images/logo-geologiya.png',
    group: 1,
    about: 'Geologiya fakültəsi geoloji prosesləri, neft-qaz geologiyası, seysmologiya, mineralogiya və geoekologiya üzrə mütəxəssislər hazırlayır.',
    specialties: [
      { id: 'geo-spec',       name: 'Geologiya',                                                  code: '6005006', subgroup: 'rk', lang: 'az', type: 'eyani', free: 223.3, paid: 140.0 },
      { id: 'geo-geo-muh',    name: 'Geologiya və geofizika mühəndisliyi',                        code: '6006010', subgroup: 'rk', lang: 'az', type: 'eyani', free: 230.0, paid: 140.0 },
      { id: 'geo-geo-muh-en', name: 'Geologiya və geofizika mühəndisliyi (tədris ingilis dilində)', code: '6006010', subgroup: 'rk', lang: 'en', type: 'eyani', free: 248.0, paid: 140.0 },
      { id: 'med-muh',        name: 'Mədən mühəndisliyi',                                         code: '6006033', subgroup: 'rk', lang: 'az', type: 'eyani', free: 208.9, paid: 140.0 },
      { id: 'mel-muh',        name: 'Meliorasiya mühəndisliyi',                                   code: '6006030', subgroup: 'rk', lang: 'az', type: 'eyani', free: 265.8, paid: 196.5 },
    ]
  },

  /* 5. Coğrafiya */
  {
    id: 'cografiya',
    name: 'Coğrafiya Fakültəsi',
    short: 'Coğrafiya Fakültəsi',
    logo: 'images/logo-cografiya.png',
    group: 1,
    about: 'Coğrafiya fakültəsi GIS texnologiyaları, regional planlaşdırma, iqlim dəyişiklikləri, turizm, landşaftşünaslıq və kadastr üzrə mütəxəssislər hazırlayır.',
    specialties: [
      { id: 'coq',      name: 'Coğrafiya',                                        code: '6005003', subgroup: 'rk', lang: 'az', type: 'eyani',  free: 223.3, paid: 140.0 },
      { id: 'coq-muel', name: 'Coğrafiya müəllimliyi',                            code: '6001003', subgroup: 'rk', lang: 'az', type: 'eyani',  free: 223.3, paid: 140.0 },
      { id: 'geomat',   name: 'Geomatika və geodeziya mühəndisliyi',               code: '6006011', subgroup: 'rk', lang: 'az', type: 'eyani',  free: 216.5, paid: 140.0 },
      { id: 'hidromet', name: 'Hidrometeorologiya',                               code: '6005007', subgroup: 'rk', lang: 'az', type: 'eyani',  free: 223.3, paid: 140.0 },
      { id: 'turizm',   name: 'Turizm işinin təşkili',                            code: '6008008', subgroup: 'rk', lang: 'az', type: 'eyani',  free: 223.3, paid: 140.0 },
      { id: 'yerq-az',  name: 'Yerquruluşu və daşınmaz əmlakın kadastrı',          code: '6006049', subgroup: 'rk', lang: 'az', type: 'eyani',  free: 290.6, paid: 230.6 },
      { id: 'yerq-q',   name: 'Yerquruluşu və daşınmaz əmlakın kadastrı (qiyabi)', code: '6006049', subgroup: 'rk', lang: 'az', type: 'qiyabi', free: 255.4, paid: 195.0 },
    ]
  },

  /* 6. Ekologiya və Torpaqşünaslıq */
  {
    id: 'eko',
    name: 'Ekologiya və Torpaqşünaslıq Fakültəsi',
    short: 'Ekologiya Fakültəsi',
    logo: 'images/logo-ekologiya.png',
    group: 1,
    about: 'Ekologiya və Torpaqşünaslıq fakültəsi ekoloji mühəndislik, torpaqşünaslıq, aqrokimya və qida mühəndisliyi sahələrini əhatə edir.',
    specialties: [
      { id: 'eko-muh', name: 'Ekologiya mühəndisliyi',      code: '6006007', subgroup: 'rk', lang: 'az', type: 'eyani', free: 272.2, paid: 209.4 },
      { id: 'qida',    name: 'Qida mühəndisliyi',            code: '6006036', subgroup: 'rk', lang: 'az', type: 'eyani', free: 366.9, paid: 306.9 },
      { id: 'torpaq',  name: 'Torpaqşünaslıq və aqrokimya', code: '6004008', subgroup: 'rk', lang: 'az', type: 'eyani', free: 267.2, paid: 207.2 },
    ]
  },

  /* 7. Kimya */
  {
    id: 'kimya',
    name: 'Kimya Fakültəsi',
    short: 'Kimya Fakültəsi',
    logo: 'images/logo-kimya.png',
    group: 1,
    about: 'Kimya fakültəsi kimya mühəndisliyi, analitik kimya və üzvi kimya sahəsindəki tədqiqatları əhatə edir.',
    specialties: [
      { id: 'kim-muh',    name: 'Kimya mühəndisliyi',                          code: '6006020', subgroup: 'rk', lang: 'az', type: 'eyani', free: 437.1, paid: 357.7 },
      { id: 'kim-muh-en', name: 'Kimya mühəndisliyi (tədris ingilis dilində)',  code: '6006020', subgroup: 'rk', lang: 'en', type: 'eyani', free: 513.6, paid: 453.6 },
    ]
  },

  /* 8. Tarix */
  {
    id: 'tarix',
    name: 'Tarix Fakültəsi',
    short: 'Tarix Fakültəsi',
    logo: 'images/logo-tarix.png',
    group: 2,
    about: 'Tarix fakültəsi Azərbaycan tarixi, ümumi tarix, arxeologiya, etnoqrafiya və muzeyşünaslıq üzrə mütəxəssislər hazırlayır.',
    specialties: []
  },

  /* 9. Biologiya */
  {
    id: 'bio',
    name: 'Biologiya Fakültəsi',
    short: 'Biologiya Fakültəsi',
    logo: 'images/logo-biologiya.png',
    group: 2,
    about: 'Biologiya fakültəsi molekulyar biologiya, genetika, mikrobiologiya, botanika və zoologiya sahələrini əhatə edir.',
    specialties: []
  },

  /* 10. Hüquq */
  {
    id: 'huquq',
    name: 'Hüquq Fakültəsi',
    short: 'Hüquq Fakültəsi',
    logo: 'images/logo-huquq.png',
    group: 2,
    about: 'Hüquq fakültəsi mülki hüquq, cinayət hüququ və beynəlxalq hüquq sahələrini əhatə edir.',
    specialties: []
  },

  /* 11. Beynəlxalq Münasibətlər */
  {
    id: 'bmi',
    name: 'Beynəlxalq Münasibətlər və İqtisadiyyat Fakültəsi',
    short: 'BMİ Fakültəsi',
    logo: 'images/logo-bmi.png',
    group: 2,
    about: 'BMİ fakültəsi beynəlxalq münasibətlər, iqtisadiyyat və beynəlxalq ticarət sahəsində kadrlar hazırlayır.',
    specialties: []
  },

  /* 12. İnformasiya və Sənəd Menecmenti */
  {
    id: 'ism',
    name: 'İnformasiya və Sənəd Menecmenti Fakültəsi',
    short: 'İSM Fakültəsi',
    logo: 'images/logo-ism.png',
    group: 2,
    about: 'İSM fakültəsi sənəd dövriyyəsi, arxiv işi və informasiya menecmenti sahəsində mütəxəssislər hazırlayır.',
    specialties: []
  },

  /* 13. Sosial Elmlər və Psixologiya */
  {
    id: 'sep',
    name: 'Sosial Elmlər və Psixologiya Fakültəsi',
    short: 'SEP Fakültəsi',
    logo: 'images/logo-sep.png',
    group: 2,
    about: 'SEP fakültəsi psixologiya, sosiologiya və sosial iş sahəsində mütəxəssislər hazırlayır.',
    specialties: []
  },

  /* 14. Şərqşünaslıq */
  {
    id: 'serk',
    name: 'Şərqşünaslıq Fakültəsi',
    short: 'Şərqşünaslıq',
    logo: 'images/logo-serqsunasliq.png',
    group: 2,
    about: 'Şərqşünaslıq fakültəsi Şərq dilləri, tarixi və mədəniyyəti üzrə mütəxəssislər hazırlayır.',
    specialties: []
  },

  /* 15. Jurnalistika */
  {
    id: 'jour',
    name: 'Jurnalistika Fakültəsi',
    short: 'Jurnalistika',
    logo: 'images/logo-jurnalistika.png',
    group: 2,
    about: 'Jurnalistika fakültəsi media, televiziya, radio jurnalistikası, reklam və ictimai əlaqələr üzrə kadrlar hazırlayır.',
    specialties: []
  },

  /* 16. Filologiya */
  {
    id: 'fil',
    name: 'Filologiya Fakültəsi',
    short: 'Filologiya',
    logo: 'images/logo-filologiya.png',
    group: 2,
    about: 'Filologiya fakültəsi Azərbaycan dili və ədəbiyyatı, xarici dillər və dilçilik üzrə mütəxəssislər hazırlayır.',
    specialties: []
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
   MODAL OVERLAY
   ========================================================= */
function handleModalOverlayClick(e) {
  if (e.target === document.getElementById('korpusModal')) closeKorpusModal();
}

/* =========================================================
   SƏHİFƏ NAVİQASİYASI
   ========================================================= */
let currentPage = 'page-home';
const pageHistory = [];

function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  for (let i = 0; i < pages.length; i++) pages[i].classList.remove('active');
  const pg = document.getElementById(pageId);
  if (pg) pg.classList.add('active');

  if (currentPage !== pageId) pageHistory.push(currentPage);
  currentPage = pageId;

  const backBtn = document.getElementById('backBtn');
  if (backBtn) backBtn.classList.toggle('visible', pageId !== 'page-home');

  window.scrollTo({ top: 0, behavior: 'instant' });

  /* Lazım olduqda qur */
  if (pageId === 'page-faculties') buildFacultyGrid();
  if (pageId === 'page-korpuslar') buildKorpusGrid();
  if (pageId === 'page-graduates') buildGraduatesGrid();
}

function goBack() {
  const prev = pageHistory.pop();
  if (!prev) { goHome(); return; }

  const pages = document.querySelectorAll('.page');
  for (let i = 0; i < pages.length; i++) pages[i].classList.remove('active');
  const pg = document.getElementById(prev);
  if (pg) pg.classList.add('active');
  currentPage = prev;

  const backBtn = document.getElementById('backBtn');
  if (backBtn) backBtn.classList.toggle('visible', prev !== 'page-home');

  window.scrollTo({ top: 0, behavior: 'instant' });
  if (prev === 'page-graduates') buildGraduatesGrid();
}

function goHome() {
  pageHistory.length = 0;
  const pages = document.querySelectorAll('.page');
  for (let i = 0; i < pages.length; i++) pages[i].classList.remove('active');
  const pg = document.getElementById('page-home');
  if (pg) pg.classList.add('active');
  currentPage = 'page-home';

  const backBtn = document.getElementById('backBtn');
  if (backBtn) backBtn.classList.remove('visible');

  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* =========================================================
   MƏZUNLAR SƏHİFƏSİ
   ========================================================= */
function buildGraduatesGrid() {
  const grid = document.getElementById('graduatesGrid');
  if (!grid) return;
  if (grid.querySelector('.graduates-empty-page')) return;

  grid.innerHTML = `
    <div class="graduates-empty-page">
      ${icon('i-award', 'lg').replace('class="ico ico-lg"', 'class="ico graduates-empty-icon"')}
      <div class="graduates-empty-text">
        Məlumatlar hazırlanır<br />
        <span style="font-weight:400;color:#78839b;">Fəxri məzunların siyahısı tezliklə burada yerləşdiriləcək</span>
      </div>
    </div>`;
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

    const meta = f.specialties.length > 0
      ? `${f.specialties.length} ixtisas · ${f.group}-ci qrup`
      : `Məlumat hazırlanır · ${f.group}-ci qrup`;

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
    const meta = fac.specialties.length > 0
      ? `${fac.specialties.length} ixtisas · ${fac.group}-ci qrup`
      : `Məlumat hazırlanır · ${fac.group}-ci qrup`;

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

      item.innerHTML = `
        <div class="spec-item-left">
          <div class="spec-item-name">${s.name}</div>
          ${tags.length ? `<div class="spec-item-tags">${tags.join('')}</div>` : ''}
        </div>
        <div class="spec-scores">
          <div class="spec-score-cell">
            <div class="spec-score-free">${s.free}</div>
            <div class="spec-score-label">Ödənişsiz</div>
          </div>
          <div class="spec-score-cell">
            <div class="spec-score-paid">${s.paid.toFixed(1)}</div>
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

  const barColors = ['#0b1b3a', '#22426f', '#b8974a', '#3d6a9e', '#7a2418', '#1f7a4d'];
  const maxFree = Math.max(...riSpecs.map(s => s.free));
  const minFree = Math.min(...riSpecs.map(s => s.free));
  const avgFree = riSpecs.reduce((a, s) => a + s.free, 0) / riSpecs.length;
  const barMax  = Math.max(maxFree, userBal) * 1.08;

  const barsHtml = riSpecs.map((s, i) => {
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

  const donutsHtml = riSpecs.map((s, i) => {
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

  /* 2026/2027 üçün bakalavr qəbulu yalnız 1-ci qrup üzrə açıqlanıb */
  const allSpecs = [];
  if (group === '1') {
    FACULTIES.forEach(f => {
      f.specialties.forEach(s => {
        if (subgroup && s.subgroup !== subgroup) return;
        if (!showEn && s.lang === 'en') return;
        if (!showAz && s.lang === 'az') return;
        if (!showQiyabi && s.type === 'qiyabi') return;
        if (!showEyani && s.type === 'eyani') return;
        if (s.isQazax && !showQazax) return;
        allSpecs.push({ ...s, facultyName: f.short, facultyId: f.id });
      });
    });
  }

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

  const subLabel = subgroup ? `, alt qrup ${subgroup.toUpperCase()}` : '';
  header.textContent = `Ümumi bal ${userBal.toFixed(1)}${subLabel}. ${results.length} ixtisas uyğun gəlir.`;

  if (blockMsg) {
    list.innerHTML = `<div class="no-results no-results-blocked">${blockMsg}</div>`;
  } else if (group !== '1') {
    list.innerHTML = '<div class="no-results">2026/2027 qəbulu üçün bal statistikası hazırda yalnız 1-ci qrup üzrə açıqlanıb.</div>';
  } else if (results.length === 0) {
    list.innerHTML = '<div class="no-results">Seçdiyiniz filtrlərə uyğun ixtisas tapılmadı. Filtrləri genişləndirməyi yoxlayın.</div>';
  } else {
    const rfrag = document.createDocumentFragment();

    results.forEach((s, i) => {
      const item = document.createElement('div');
      item.className = 'result-item';

      const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
      const tags = [];
      if (s.lang === 'en')     tags.push('<span class="tag tag-en">İngiliscə</span>');
      if (s.isQazax)           tags.push('<span class="tag tag-qazax">Qazax filialı</span>');
      if (s.type === 'qiyabi') tags.push('<span class="tag tag-qiyabi">Qiyabi</span>');

      const pctColor = s.maxPercent >= 70 ? 'high' : s.maxPercent >= 40 ? 'medium' : 'low';
      const barClass = s.maxPercent >= 70 ? ''     : s.maxPercent >= 40 ? 'medium' : 'low';

      let scoreDetails = '';
      if (s.freePercent !== null) scoreDetails += `Ödənişsiz ${s.free}: <strong>${s.freePercent}%</strong><br>`;
      if (s.paidPercent !== null) scoreDetails += `Ödənişli ${s.paid.toFixed(1)}: <strong>${s.paidPercent}%</strong>`;

      item.innerHTML = `
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

      rfrag.appendChild(item);
    });

    list.innerHTML = '';
    list.appendChild(rfrag);
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

/* Axtarış indeksi */
let _faqIndex = null;
function getFaqIndex() {
  if (_faqIndex) return _faqIndex;
  _faqIndex = FAQ_DATA.map(entry => ({
    entry,
    kwLower: entry.keywords.map(k => k.toLowerCase())
  }));
  return _faqIndex;
}

function getBduluAnswer(text) {
  const lower = text.toLowerCase().trim();
  const index = getFaqIndex();

  for (const { entry, kwLower } of index) {
    for (const kw of kwLower) {
      if (lower.includes(kw)) return entry.answer;
    }
  }

  const words = lower.split(/\s+/).filter(w => w.length >= 3);
  if (words.length > 0) {
    for (const { entry, kwLower } of index) {
      for (const kw of kwLower) {
        for (const word of words) {
          if (kw.includes(word) || word.includes(kw)) return entry.answer;
        }
      }
    }
  }

  return 'Bu barədə məlumatım yoxdur.\n\nAşağıdakı mövzularda kömək edə bilərəm:\n• Korpusların yeri\n• Dərs saatları\n• Yataqxana\n• BDU reytinqi\n• Fakültələr\n• Qəbul məlumatları';
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

  const suggestions = document.getElementById('bduluSuggestions');
  if (suggestions) suggestions.style.display = 'none';

  const typingId = showBduluTyping();
  setTimeout(() => {
    removeBduluTyping(typingId);
    appendBduluMsg(getBduluAnswer(text), 'bot');
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
  const suggestionsEl = document.getElementById('bduluSuggestions');

  if (!widget || !toggle || !panel) return;

  /* Təklif düymələri */
  if (suggestionsEl) {
    const suggestionTexts = [
      'Korpuslar harada yerləşir?',
      'Dərs saatları nə vaxtdır?',
      'Yataqxana haqqında məlumat ver',
      'BDU reytinqi necədir?'
    ];
    suggestionsEl.querySelectorAll('.bdulu-suggestion-btn').forEach((btn, i) => {
      const txt = suggestionTexts[i] || btn.textContent.trim();
      btn.addEventListener('click', (e) => { e.stopPropagation(); sendSuggestion(txt); });
      btn.addEventListener('touchend', (e) => {
        e.preventDefault(); e.stopPropagation(); sendSuggestion(txt);
      }, { passive: false });
    });
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
