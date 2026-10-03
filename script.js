/* =========================================================
   DATA
   =========================================================
   Qeyd: Sənədən gələn qiymətlər:
     - free (ödənişsiz bal) = mötərizə içindəki rəqəm
     - paid (ödənişli bal) = outside - 60
   Bütün ixtisaslar 1-ci qrupa aiddir.
   RI alt qrupu: Kompüter elmləri, Kompüter elmləri (ing.), İnformasiya təhlükəsizliyi, İnformatika müəllimliyi
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
      { id: 'komp-elm',    name: 'Kompüter elmləri',                               code: '6005009', subgroup: 'ri', lang: 'az', type: 'eyani', free: 414.8, paid: 414.8 - 60 },
      { id: 'komp-elm-en', name: 'Kompüter elmləri (tədris ingilis dilində)',       code: '6005009', subgroup: 'ri', lang: 'en', type: 'eyani', free: 525.1, paid: 525.1 - 60 },
      { id: 'inf-muel',    name: 'İnformatika müəllimliyi',                        code: '6001010', subgroup: 'ri', lang: 'az', type: 'eyani', free: 307.3, paid: 307.3 - 60 },
      { id: 'inf-teh',     name: 'İnformasiya təhlükəsizliyi',                     code: '6006017', subgroup: 'ri', lang: 'az', type: 'eyani', free: 552.5, paid: 552.5 - 60 },
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
      { id: 'riy',           name: 'Riyaziyyat',                                          code: '6005011', subgroup: 'rk', lang: 'az', type: 'eyani', free: 422.8, paid: 422.8 - 60 },
      { id: 'riy-en',        name: 'Riyaziyyat (tədris ingilis dilində)',                  code: '6005011', subgroup: 'rk', lang: 'en', type: 'eyani', free: 513.9, paid: 513.9 - 60 },
      { id: 'riy-muel',      name: 'Riyaziyyat müəllimliyi',                              code: '6001015', subgroup: 'rk', lang: 'az', type: 'eyani', free: 544.7, paid: 544.7 - 60 },
      { id: 'riy-muel-en',   name: 'Riyaziyyat müəllimliyi (tədris ingilis dilində)',     code: '6001015', subgroup: 'rk', lang: 'en', type: 'eyani', free: 629.7, paid: 629.7 - 60 },
      { id: 'mex',           name: 'Mexanika',                                            code: '6005010', subgroup: 'rk', lang: 'az', type: 'eyani', free: 285.4, paid: 200.0 - 60 },
      { id: 'fiz-muel-qaz',  name: 'Fizika müəllimliyi (Qazax filialı)',                  code: '6001005', subgroup: 'rk', lang: 'az', type: 'eyani', free: 417.8, paid: 200.0 - 60, isQazax: true },
      { id: 'riy-muel-qaz',  name: 'Riyaziyyat müəllimliyi (Qazax filialı)',              code: '6001015', subgroup: 'rk', lang: 'az', type: 'eyani', free: 535.5, paid: 200.0 - 60, isQazax: true },
      { id: 'riy-inf-qaz',   name: 'Riyaziyyat və informatika müəllimliyi (Qazax filialı)', code: '6001015', subgroup: 'rk', lang: 'az', type: 'eyani', free: 308.4, paid: 200.0 - 60, isQazax: true },
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
      { id: 'fiz',         name: 'Fizika',                                          code: '6005005', subgroup: 'rk', lang: 'az', type: 'eyani', free: 312.3, paid: 312.3 - 60 },
      { id: 'fiz-en',      name: 'Fizika (tədris ingilis dilində)',                  code: '6005005', subgroup: 'rk', lang: 'en', type: 'eyani', free: 333.7, paid: 333.7 - 60 },
      { id: 'fiz-muel',    name: 'Fizika müəllimliyi',                              code: '6001005', subgroup: 'rk', lang: 'az', type: 'eyani', free: 387.2, paid: 387.2 - 60 },
      { id: 'fiz-muel-en', name: 'Fizika müəllimliyi (tədris ingilis dilində)',     code: '6001005', subgroup: 'rk', lang: 'en', type: 'eyani', free: 427.4, paid: 427.4 - 60 },
      { id: 'muh-fiz',     name: 'Mühəndis fizikası',                               code: '6006034', subgroup: 'rk', lang: 'az', type: 'eyani', free: 268.3, paid: 268.3 - 60 },
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
      { id: 'geo-spec',       name: 'Geologiya',                                              code: '6005006', subgroup: 'rk', lang: 'az', type: 'eyani', free: 223.3, paid: 200.0 - 60 },
      { id: 'geo-geo-muh',    name: 'Geologiya və geofizika mühəndisliyi',                    code: '6006010', subgroup: 'rk', lang: 'az', type: 'eyani', free: 230.0, paid: 200.0 - 60 },
      { id: 'geo-geo-muh-en', name: 'Geologiya və geofizika mühəndisliyi (tədris ingilis dilində)', code: '6006010', subgroup: 'rk', lang: 'en', type: 'eyani', free: 248.0, paid: 200.0 - 60 },
      { id: 'med-muh',        name: 'Mədən mühəndisliyi',                                    code: '6006033', subgroup: 'rk', lang: 'az', type: 'eyani', free: 208.9, paid: 200.0 - 60 },
      { id: 'mel-muh',        name: 'Meliorasiya mühəndisliyi',                               code: '6006030', subgroup: 'rk', lang: 'az', type: 'eyani', free: 265.8, paid: 256.5 - 60 },
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
      { id: 'coq',       name: 'Coğrafiya',                                      code: '6005003', subgroup: 'rk', lang: 'az', type: 'eyani', free: 223.3, paid: 200.0 - 60 },
      { id: 'coq-muel',  name: 'Coğrafiya müəllimliyi',                          code: '6001003', subgroup: 'rk', lang: 'az', type: 'eyani', free: 223.3, paid: 200.0 - 60 },
      { id: 'geomat',    name: 'Geomatika və geodeziya mühəndisliyi',             code: '6006011', subgroup: 'rk', lang: 'az', type: 'eyani', free: 216.5, paid: 200.0 - 60 },
      { id: 'hidromet',  name: 'Hidrometeorologiya',                             code: '6005007', subgroup: 'rk', lang: 'az', type: 'eyani', free: 223.3, paid: 200.0 - 60 },
      { id: 'turizm',    name: 'Turizm işinin təşkili',                          code: '6008008', subgroup: 'rk', lang: 'az', type: 'eyani', free: 223.3, paid: 200.0 - 60 },
      { id: 'yerq-az',   name: 'Yerquruluşu və daşınmaz əmlakın kadastrı',       code: '6006049', subgroup: 'rk', lang: 'az', type: 'eyani', free: 290.6, paid: 290.6 - 60 },
      { id: 'yerq-q',    name: 'Yerquruluşu və daşınmaz əmlakın kadastrı (qiyabi)', code: '6006049', subgroup: 'rk', lang: 'az', type: 'qiyabi', free: 255.4, paid: 255.0 - 60 },
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
      { id: 'eko-muh', name: 'Ekologiya mühəndisliyi',     code: '6006007', subgroup: 'rk', lang: 'az', type: 'eyani', free: 272.2, paid: 269.4 - 60 },
      { id: 'qida',    name: 'Qida mühəndisliyi',           code: '6006036', subgroup: 'rk', lang: 'az', type: 'eyani', free: 366.9, paid: 366.9 - 60 },
      { id: 'torpaq',  name: 'Torpaqşünaslıq və aqrokimya', code: '6004008', subgroup: 'rk', lang: 'az', type: 'eyani', free: 267.2, paid: 267.2 - 60 },
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
      { id: 'kim-muh',    name: 'Kimya mühəndisliyi',                            code: '6006020', subgroup: 'rk', lang: 'az', type: 'eyani', free: 437.1, paid: 417.7 - 60 },
      { id: 'kim-muh-en', name: 'Kimya mühəndisliyi (tədris ingilis dilində)',    code: '6006020', subgroup: 'rk', lang: 'en', type: 'eyani', free: 513.6, paid: 513.6 - 60 },
    ],
    topStudents: [
      { name: 'Nərmin Süleymanova', score: 513.6, specialty: 'Kimya mühəndisliyi (ing.)' },
      { name: 'Əli Hüseynov',       score: 437.1, specialty: 'Kimya mühəndisliyi' },
      { name: 'Zəhra Qasımova',     score: 417.7, specialty: 'Kimya mühəndisliyi' },
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
   PAGE NAVIGATION
   ========================================================= */
let currentPage = 'page-home';

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  currentPage = pageId;
  const backBtn = document.getElementById('backBtn');
  if (pageId === 'page-home') {
    backBtn.classList.remove('visible');
  } else {
    backBtn.classList.add('visible');
  }
  window.scrollTo(0, 0);
}

function goHome() {
  showPage('page-home');
}

/* =========================================================
   BUILD HOME FACULTY CARDS
   ========================================================= */
function buildFacultyGrid() {
  const grid = document.getElementById('facultyGrid');
  grid.innerHTML = '';
  FACULTIES.forEach(f => {
    const card = document.createElement('article');
    card.className = 'faculty-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', f.name);
    card.onclick = () => openFaculty(f.id);
    card.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') openFaculty(f.id); };

    const logoHtml = f.logo
      ? `<img src="${f.logo}" alt="${f.name} logosu" class="faculty-card-logo"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
         <div class="faculty-card-logo-placeholder" style="display:none;">${f.icon || '🏛️'}</div>`
      : `<div class="faculty-card-logo-placeholder">${f.icon || '🏛️'}</div>`;

    card.innerHTML = `
      <div class="faculty-card-logo-wrap">
        ${logoHtml}
      </div>
      <div class="faculty-card-body">
        <div class="faculty-card-title">${f.name} <span class="faculty-card-arrow">›</span></div>
        <div class="faculty-card-meta">${f.specialties.length > 0 ? f.specialties.length + ' ixtisas' : 'Məlumat hazırlanır'} • ${f.group}-ci qrup</div>
      </div>`;
    grid.appendChild(card);
  });
}

/* =========================================================
   OPEN FACULTY DETAIL
   ========================================================= */
function openFaculty(id) {
  const f = FACULTIES.find(x => x.id === id);
  if (!f) return;

  // Header
  const headerEl = document.getElementById('facultyDetailHeader');
  headerEl.innerHTML = `
    <div class="faculty-detail-header-inner">
      ${f.logo ? `<img src="${f.logo}" alt="${f.name} logosu" class="faculty-detail-logo"
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
    gallery.appendChild(item);
  }

  // Specialties
  const specList = document.getElementById('facultySpecList');
  specList.innerHTML = '';
  if (f.specialties.length === 0) {
    specList.innerHTML = '<div class="no-results">Bu fakültə üçün ixtisas məlumatı mövcud deyil.</div>';
  } else {
    f.specialties.forEach(s => {
      const item = document.createElement('div');
      item.className = 'spec-item';
      const tags = [];
      tags.push(`<span class="tag tag-free">Ödənişsiz: ${s.free}</span>`);
      tags.push(`<span class="tag tag-paid">Ödənişli: ${s.paid.toFixed(1)}</span>`);
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
      specList.appendChild(item);
    });
  }

  showPage('page-faculty');
}

/* =========================================================
   FILTER SYSTEM
   Min 1 active per group: ödəniş, dil, tədris forması
   ========================================================= */
const filterGroups = {
  payment: { filters: ['free', 'paid'], active: new Set(['free', 'paid']) },
  lang:    { filters: ['az', 'en'],     active: new Set(['az', 'en']) },
  form:    { filters: ['eyani', 'qiyabi'], active: new Set(['eyani', 'qiyabi']) },
};

// Additional standalone filter
const standaloneFilters = new Set(['qazax']);

function getGroupForFilter(filterKey) {
  for (const [gName, g] of Object.entries(filterGroups)) {
    if (g.filters.includes(filterKey)) return gName;
  }
  return null;
}

function toggleFilter(el) {
  const f = el.dataset.filter;
  const gName = getGroupForFilter(f);

  if (gName) {
    const group = filterGroups[gName];
    if (group.active.has(f)) {
      // Only deactivate if at least 1 will remain active
      if (group.active.size > 1) {
        group.active.delete(f);
        el.classList.remove('active');
      } else {
        // Shake effect to show it can't be deactivated
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
  } else {
    // Standalone (qazax)
    if (standaloneFilters.has(f)) {
      standaloneFilters.delete(f);
      el.classList.remove('active');
    } else {
      standaloneFilters.add(f);
      el.classList.add('active');
    }
  }
  hideAllWarnings();
}

function showFilterWarning(gName) {
  document.querySelectorAll('.filter-warning').forEach(w => w.classList.remove('visible'));
  const warn = document.getElementById('warn-' + gName);
  if (warn) warn.classList.add('visible');
  setTimeout(() => { if (warn) warn.classList.remove('visible'); }, 2500);
}

function hideAllWarnings() {
  document.querySelectorAll('.filter-warning').forEach(w => w.classList.remove('visible'));
}

function updateGroupIndicator(gName) {
  const reqEl = document.getElementById('req-' + gName);
  if (!reqEl) return;
  const group = filterGroups[gName];
  if (group.active.size > 0) {
    reqEl.classList.add('ok');
    reqEl.textContent = '✓';
  } else {
    reqEl.classList.remove('ok');
    reqEl.textContent = 'min 1';
  }
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
  const g = document.getElementById('groupSelect').value;
  const wrapper = document.getElementById('subgroupWrapper');
  const sel = document.getElementById('subgroupSelect');
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
  const exit = parseFloat(document.getElementById('exitScore').value) || 0;
  const block = parseFloat(document.getElementById('blockScore').value) || 0;
  const total = exit + block;
  const box = document.getElementById('totalScoreBox');
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
  const pct = 50 + diff;
  return Math.max(1, Math.min(100, Math.round(pct)));
}

function calculate() {
  const group    = document.getElementById('groupSelect').value;
  const subgroup = document.getElementById('subgroupSelect').value;
  const exitScore  = parseFloat(document.getElementById('exitScore').value);
  const blockScore = parseFloat(document.getElementById('blockScore').value);

  if (!group) { alert('Zəhmət olmasa qrup seçin.'); return; }
  const subs = SUBGROUPS[group] || [];
  if (subs.length > 0 && !subgroup) { alert('Zəhmət olmasa alt qrup seçin.'); return; }
  if (isNaN(exitScore) || exitScore < 0 || exitScore > 300) { alert('Buraxılış balı 0-300 arasında olmalıdır.'); return; }
  if (isNaN(blockScore) || blockScore < 0 || blockScore > 400) { alert('Blok balı 0-400 arasında olmalıdır.'); return; }

  // Minimum block score check
  let blockOk = true, blockMsg = '';
  if (subgroup === 'ri' && blockScore < 100) {
    blockOk = false;
    blockMsg = 'RI alt qrupu üçün blok balı 100-dən az olduğundan bütün ixtisaslarda qəbul faizi 0%-dir.';
  } else if (subgroup === 'rk' && blockScore < 50) {
    blockOk = false;
    blockMsg = 'RK alt qrupu üçün blok balı 50-dən az olduğundan bütün ixtisaslarda qəbul faizi 0%-dir.';
  }

  const userBal = exitScore + blockScore;

  // Active filter sets
  const showFree   = filterGroups.payment.active.has('free');
  const showPaid   = filterGroups.payment.active.has('paid');
  const showAz     = filterGroups.lang.active.has('az');
  const showEn     = filterGroups.lang.active.has('en');
  const showEyani  = filterGroups.form.active.has('eyani');
  const showQiyabi = filterGroups.form.active.has('qiyabi');
  const showQazax  = standaloneFilters.has('qazax');

  // Collect matching specialties
  let allSpecs = [];
  FACULTIES.forEach(f => {
    f.specialties.forEach(s => {
      // Filter by group/subgroup
      if (group === '1') {
        if (subgroup && s.subgroup !== subgroup) return;
      } else {
        // No data for groups 2,3,4 yet
        return;
      }

      // Language filter
      if (s.lang === 'en' && !showEn) return;
      if (s.lang === 'az' && !showAz) return;

      // Form filter
      if (s.type === 'qiyabi' && !showQiyabi) return;
      if (s.type === 'eyani' && !showEyani) return;

      // Qazax filter: if qazax is not active, hide qazax items
      if (s.isQazax && !showQazax) return;

      allSpecs.push({ ...s, facultyName: f.short, facultyId: f.id });
    });
  });

  // Calculate percentages
  const results = allSpecs.map(s => {
    let freePercent = blockOk ? calcPercent(userBal, s.free) : 0;
    let paidPercent = blockOk ? calcPercent(userBal, s.paid) : 0;

    return {
      ...s,
      freePercent: showFree ? freePercent : null,
      paidPercent: showPaid ? paidPercent : null,
      maxPercent: Math.max(showFree ? freePercent : 0, showPaid ? paidPercent : 0),
    };
  });

  // Sort by maxPercent desc
  results.sort((a, b) => b.maxPercent - a.maxPercent);

  // Render results
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
    list.innerHTML = '';
    results.forEach((s, i) => {
      const item = document.createElement('div');
      item.className = 'result-item';

      let rankClass = '';
      if (i === 0) rankClass = 'gold';
      else if (i === 1) rankClass = 'silver';
      else if (i === 2) rankClass = 'bronze';

      const tags = [];
      if (s.lang === 'en') tags.push(`<span class="tag tag-en">İngiliscə</span>`);
      if (s.isQazax) tags.push(`<span class="tag tag-qazax">Qazax filialı</span>`);
      if (s.type === 'qiyabi') tags.push(`<span class="tag tag-qiyabi">Qiyabi</span>`);

      const pctColor = s.maxPercent >= 70 ? 'high' : (s.maxPercent >= 40 ? 'medium' : 'low');
      const barClass = s.maxPercent >= 70 ? '' : (s.maxPercent >= 40 ? 'medium' : 'low');

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
      list.appendChild(item);
    });
  }

  container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  buildFacultyGrid();

  // Build filter chips state from JS filterGroups
  document.querySelectorAll('.filter-chip[data-group]').forEach(el => {
    const gName = el.dataset.group;
    const f = el.dataset.filter;
    const group = filterGroups[gName];
    if (group && group.active.has(f)) el.classList.add('active');
    updateGroupIndicator(gName);
  });

  document.querySelectorAll('.filter-chip[data-standalone]').forEach(el => {
    const f = el.dataset.filter;
    if (standaloneFilters.has(f)) el.classList.add('active');
  });
});
