# BDU Qəbul Statistikası

Bakı Dövlət Universitetinə qəbul ehtimalını hesablamaq üçün statik veb sayt.
Sayt fakültələr, ixtisaslar, qəbul balları və korpuslar haqqında məlumat verir;
tələbə təşkilatları, klublar və mərkəzlər barədə məlumat isə **BDULU**
köməkçisinə bilik kimi öyrədilib.

## Layihə haqqında

- **Məqsəd**: abituriyentin balına uyğun ixtisasları göstərmək, BDU-nun
  fakültə/korpus quruluşunu təqdim etmək və tələbə həyatı ilə bağlı bütün
  məlumatı BDULU köməkçisi vasitəsilə cavablandırmaq.
- **Texnologiya**: təmiz HTML + CSS + JavaScript. Build addımı, framework və
  xarici CDN asılılığı yoxdur.
- **Dillər**: interfeys Azərbaycan dilindədir.

## Fayl strukturu

```
webapp/
├── index.html    # bütün səhifələr + SVG ikon sprite (inline)
├── style.css     # dizayn sistemi və bütün üslublar
├── script.js     # data, hesablayıcı, naviqasiya, BDULU köməkçisi
├── fonts/        # öz serverimizdən verilən woff2 şrift faylları (alt-küme edilmiş)
└── images/       # BDU gerbi, fakültə loqoları, BDULU avatarı (WebP)
    └── mezunlar/ # uğurlu məzunların poster şəkilləri (WebP)
```

## Hazır olan imkanlar

| Bölmə | Təsvir |
|---|---|
| **Bal hesabla** | Qrup, alt qrup, buraxılış və blok balına görə ixtisaslar üzrə qəbul faizini hesablayır |
| **Bal statistikası diaqramları** | **Bütün qruplar və alt qruplar** üzrə eyni qaydada qrafiklər: çubuq diaqramı (ödənişsiz + ödənişli hədd ayrıca, istifadəçi balı ilə müqayisə), donut diaqramları, 4 statistik göstərici və rəng izahı |
| **Nəticə səhifələmə** | İlk 15 ixtisas balanslı göstərilir (5 yüksək + 5 orta + 5 aşağı); "Daha çox göstər" hər basışda **2 yüksək + 2 orta + 2 aşağı** əlavə edir |
| **Filtr sistemi** | Ödəniş növü, tədris dili, tədris forması və Qazax filialı üzrə süzgəc |
| **Bütün qruplar** | 1, 2, 3 və 4-cü qruplar üzrə ixtisas və bal statistikası (cəmi 109 ixtisas) |
| **Alt qruplar** | 1-ci qrup üçün RI / RK, 3-cü qrup üçün DT / TC alt qrupları |
| **Fakültələr** | 16 fakültə, hər biri üçün ixtisas siyahısı və qəbul balları |
| **Korpuslar** | 5 korpus, yerləşmə məlumatı və korpusdakı fakültələr (modal pəncərə) |
| **Uğurlu məzunlar** | Dövlət Proqramının qalibi 6 məzunun poster şəkilləri (responsive şəbəkə) |
| **Scroll bərpası** | "Geri" düyməsi istifadəçini tərk etdiyi səhifəyə elə həmin scroll mövqeyində qaytarır |
| **BDULU köməkçi** | Sürüklənə bilən chat vidjeti; fakültələr, ixtisaslar, korpuslar, qəbul və tələbə xidmətləri barədə dinamik cavab verir. **32 qeydlik tələbə həyatı məlumatı** (6 təşkilat, 17 klub, 9 mərkəz) BDULU-ya bilik kimi öyrədilib — hər qeyd üçün ad, təsvir, yerləşmə və fəaliyyət istiqamətləri ayrıca cavab kimi verilir |
| **Quick Replies** | Hər mesajdan sonra yenidən görünən sürətli sual düymələri; seçilmiş sual təkrar göstərilmir |

## Tələbə həyatı məlumatı (BDULU biliyi)

Tələbə həyatı artıq saytda ayrıca bölmə deyil. Bütün məlumat **BDULU**
köməkçisinə bilik kimi öyrədilib: istifadəçi klub, təşkilat və ya mərkəzin
adını yazdıqda həmin qeydin təsviri, yerləşməsi və fəaliyyət istiqamətləri
cavab kimi göstərilir. Ümumi suallar ("klublar hansılardır?", "hansı
mərkəzlər var?") isə kateqoriya üzrə tam siyahı qaytarır.

Məlumat BDU-nun rəsmi mənbələrinə (`bsu.edu.az`, `tetym.bsu.edu.az`,
`sdg.bsu.edu.az`, TGT/TEC/TETYM açıqlamaları) əsaslanır və üç kateqoriyaya
bölünür:

| Kateqoriya | Sayı | Nümunələr |
|---|---|---|
| **Təşkilatlar** | 6 | Tələbə Gənclər Təşkilatı (TGT), Tələbə Həmkarlar İttifaqı Komitəsi (THİK), Tələbə Elmi Cəmiyyəti (TEC), "BDU könüllüləri", Gənc Alimlər Şurası, SABAH qrupları |
| **Mərkəzlər** | 9 | Tələbə İnkişaf Mərkəzi, TETYM, Mədəniyyət-yaradıcılıq Mərkəzi, Karyera və məzunlarla iş Mərkəzi, İdman-sağlamlıq Mərkəzi, Psixoloji Yardım Sektoru, Elmi Kitabxana, İT Mərkəzi, "Eko Məkan" |
| **Klublar** | 17 | **"C Club"**, **"Zadə Club"**, "YENİ Klub", "İƏT Modeli" (MOIC), Debat Klubu, "İstiqlal klubu", "CreArt", TED Club, "Price", "Lingua", "Art Club", "Kitab qurdu", İdeya və Kitab klubları, "IN Club", SDG klubu, Xəzər İntellektual Gənclər Klubu, "İntellekt Dünyası" |

### Proqramlaşdırma klubları

**"C Club"** və **"Zadə Club"** proqramlaşdırma klubları kimi qeyd olunub və
BDULU cavablarında **həmişə birinci** göstərilir:

- **"C Club"** — proqramlaşdırma və rəqəmsal texnologiyalar klubu: kodlaşdırma,
  proqramlaşdırma dilləri, texnoloji layihələr.
- **"Zadə Club"** — proqramlaşdırma, qeyri-səlis məntiq və süni intellekt klubu:
  Lütfi Zadənin elmi irsi, riyaziyyat və məntiq.

"proqramlaşdırma klubları hansılardır?" sualına BDULU bu iki klubu başda
göstərməklə cavab verir.

### Axtarışın dəqiqliyi

İstifadəçi adları düz yazır ("C Club"), saytda isə bəzi adlar dırnaq
işarələri ilə saxlanılır ("“C Club”"). Ona görə həm açar sözlər, həm də sorğu
mətni normallaşdırılır (dırnaq işarələri silinir, boşluqlar sadələşdirilir,
kiçik hərfə çevrilir) — beləliklə "C Club", "C klub" və "“C Club”" eyni
nəticəni verir. Hər klub üçün `aliases` sahəsi ilə alternativ adlar da
öyrədilir.

## Dizayn qərarları

Sayt şablon görünüşündən uzaqlaşdırılmaq üçün aşağıdakı prinsiplərlə qurulub:

- **Rənglər** universitetin gerbindən götürülüb (tünd göy `#0b1b3a` + qızılı
  `#b8974a`). Şablonlarda tez-tez rast gəlinən bənövşəyi-mavi qradientlərdən
  qəsdən istifadə olunmur.
- **Tipoqrafiya** iki şriftdən ibarətdir: başlıqlar üçün Source Serif 4,
  mətn üçün Public Sans. Şriftlər öz serverimizdən verilir və Azərbaycan
  əlifbasının bütün hərflərini (ə, ğ, ş, ı, ö, ü) dəstəkləyir.
- **Boşluqlar** vahid 4px şkalasına bağlanıb (4, 8, 12, 16, 24, 32, 48, 64).
- **İkonlar** əl ilə çəkilmiş 31 ikondan ibarət SVG sprite-dır. Saytda heç bir
  emoji istifadə olunmur.
- **Səhifələmə** həm ilkin, həm də hər əlavə addımda balanslıdır: yüksək,
  orta və aşağı uyğunluqlu ixtisaslar bərabər payla göstərilir.

## Performans optimizasiyası

| Tədbir | Nəticə |
|---|---|
| **Şəkillər WebP-ə çevrildi** | 1556 KB → 337 KB (**79% azalma**); loqolar 220px → 184px, məzun şəkilləri 819×1024 → 496×620 |
| **Şriftlər alt-küme edildi** (yalnız saytda istifadə olunan 128 simvol) | 350 KB → 154 KB (**56% azalma**) |
| **Səhifə gecikmiş qurulması** | Fakültə, korpus və məzun kartları yalnız səhifə açıldıqda qurulur; bir dəfə qurulandan sonra yenidən yaradılmır |
| **Tələbə həyatı səhifəsi silindi** | Ayrıca bölmə, onun DOM-u, CSS-i və 32 kartı tam çıxarıldı; məlumat yalnız BDULU cavablarında string kimi saxlanılır — daha az DOM, daha az yaddaş |
| **Artıq ikonlar təmizləndi** | Yalnız istifadə olunan SVG ikonları sprite-da saxlanılır |
| **Donut diaqram limiti** | Çox ixtisaslı qruplarda yalnız ən yüksək həddi olan 12 ixtisas donut-da göstərilir (çubuq diaqramında hamısı qalır) |
| **Şəkil yükləmə** | `loading="lazy"`, `decoding="async"`, loqolarda `width`/`height` (CLS-in qarşısını alır) |
| **Şrift ön yükləmə** | Yalnız kritik 3 şrift `preload` edilir |
| **Drag optimizasiyası** | BDULU vidjeti sürüklənərkən `requestAnimationFrame` ilə təzələnir; listener-lər yalnız sürükləmə zamanı qoşulur |

## İstifadə qaydası

1. Saytı açın və **Bal hesabla** düyməsini basın.
2. Qrup seçin: 1, 2, 3 və ya 4-cü qrup.
3. Alt qrup tələb olunarsa seçin:
   - **1-ci qrup** → RI (Riyaziyyat-İnformatika) və ya RK (Riyaziyyat-Kimya);
   - **3-cü qrup** → DT (Dil-Tarix) və ya TC (Tarix-Coğrafya).
   - 2-ci və 4-cü qruplarda alt qrup yoxdur.
4. Buraxılış balını (0–300) və blok balını (0–400) daxil edin.
5. Lazım gələrsə filtr çiplərindən istifadə edin.
6. **Hesabla** düyməsini basın. Nəticələr bal uyğunluğuna görə sıralanır.

Hesablamadan sonra **istənilən qrup və alt qrup üçün** bal statistikası
diaqramları avtomatik göstərilir (çubuq + donut + statistik kartlar).

## Məlumat strukturu

Sayt heç bir verilənlər bazası və ya server istifadə etmir. Bütün məlumat
`script.js` faylındakı JavaScript obyektlərində saxlanılır:

- **`FACULTIES`** – fakültə adı, loqo, təsviri və ixtisas siyahısı. Hər ixtisasın
  kodu, **qrupu (1–4)**, **alt qrupu** (RI / RK / DT / TC), tədris dili, tədris
  forması, ödənişsiz və ödənişli qəbul balları var. Ödənişsiz yer olmadıqda
  `free: null` yazılır və interfeysdə `—` kimi göstərilir.
- **`KORPUSLAR`** – korpus adı, ikonu, yerləşməsi, rəngi və aid fakültələr.
- **`STUDENT_LIFE`** – tələbə təşkilatları, klublar və mərkəzlər. Hər qeyd üçün
  `cat` (org / club / center), ikon, meta məlumat, teqlər, yerləşmə, təsvir və
  `facts` (fəaliyyət istiqamətləri) var.
- **`SL_CATEGORIES`** – tələbə həyatı kateqoriyalarının adları və ikonları.
- **`GRADUATES`** – uğurlu məzunlar: ad, ölkə, universitet, ixtisas və poster şəkli.
- **`FAQ_DATA`** – BDULU köməkçisinin 54 statik açar sözü və cavabı.
- **Dinamik FAQ** – BDULU cavabları `FACULTIES`, `KORPUSLAR` və `STUDENT_LIFE`
  məlumatından avtomatik qurulur; **hər fakültə, korpus, ixtisas, təşkilat, klub
  və mərkəz üçün ayrıca cavab** verilir, həmçinin kateqoriya üzrə toplu siyahılar.

### İxtisas sayı (qruplar üzrə)

| Qrup | Alt qrup | İxtisas sayı |
|---|---|---|
| 1-ci qrup | RI | 4 |
| 1-ci qrup | RK | 22 |
| 2-ci qrup | — | 15 |
| 3-cü qrup | DT | 37 |
| 3-cü qrup | TC | 17 |
| 4-cü qrup | — | 14 |
| **Cəmi** | | **109** |

> 3-cü qrup üçün beynəlxalq münasibətlər və regionşünaslıq ixtisasları yalnız
> **TC** alt qrupuna, qalan ixtisaslar isə **DT** alt qrupuna aiddir.
> 4-cü qrupda alt qrup yoxdur.

> RI alt qrupu üçün blok balı 100-dən, RK alt qrupu üçün isə 50-dən az olarsa
> bütün ixtisaslarda qəbul faizi 0% qəbul edilir.

## Sonrakı addımlar

- Subbakalavrlar üzrə müsabiqə sətirlərinin əlavə edilməsi.
- Qəbul faizi hesablamasının rəsmi keçid balı məlumatları ilə dəqiqləşdirilməsi.
- Tələbə həyatı bölməsinə klubların sosial şəbəkə keçidlərinin əlavə edilməsi.

## Yerləşdirmə

- **Növ**: statik sayt (build tələb etmir).
- **Repozitoriya**: https://github.com/unifyforbstu-sudo/bdustatistika
- **Yerli baxış**: qovluqda sadə HTTP server işə salmaq kifayətdir:
  ```bash
  python3 -m http.server 8000
  ```
