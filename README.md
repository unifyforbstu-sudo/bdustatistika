# BDU Qəbul Statistikası

Bakı Dövlət Universitetinə qəbul ehtimalını hesablamaq üçün statik veb sayt.
Sayt fakültələr, ixtisaslar, qəbul balları və korpuslar haqqında məlumat verir.

## Layihə haqqında

- **Məqsəd**: abituriyentin balına uyğun ixtisasları göstərmək və BDU-nun
  fakültə/korpus quruluşunu bir yerdə təqdim etmək.
- **Texnologiya**: təmiz HTML + CSS + JavaScript. Build addımı, framework və
  xarici CDN asılılığı yoxdur.
- **Dillər**: interfeys Azərbaycan dilindədir.

## Fayl strukturu

```
webapp/
├── index.html    # bütün səhifələr + SVG ikon sprite (inline)
├── style.css     # dizayn sistemi və bütün üslublar
├── script.js     # data, hesablayıcı, naviqasiya, BDULU köməkçisi
├── fonts/        # öz serverimizdən verilən woff2 şrift faylları
└── images/       # BDU gerbi, fakültə loqoları, BDULU avatarı
    └── mezunlar/ # uğurlu məzunların poster şəkilləri
```

## Hazır olan imkanlar

| Bölmə | Təsvir |
|---|---|
| **Bal hesabla** | Qrup, alt qrup, buraxılış və blok balına görə ixtisaslar üzrə qəbul faizini hesablayır |
| **Nəticə səhifələmə** | İlk 15 ixtisas balanslı göstərilir (5 yüksək + 5 orta + 5 aşağı); "Daha çox göstər" hər basışda 6 ixtisas əlavə edir |
| **Filtr sistemi** | Ödəniş növü, tədris dili, tədris forması və Qazax filialı üzrə süzgəc |
| **Bütün qruplar** | 1, 2, 3 və 4-cü qruplar üzrə ixtisas və bal statistikası (cəmi 109 ixtisas) |
| **Alt qruplar** | 1-ci qrup üçün RI / RK, 3-cü qrup üçün DT / TC alt qrupları |
| **Fakültələr** | 16 fakültə, hər biri üçün ixtisas siyahısı və qəbul balları |
| **Korpuslar** | 5 korpus, yerləşmə məlumatı və korpusdakı fakültələr (modal pəncərə) |
| **RI statistikası** | RI alt qrupu üçün bal müqayisəsi diaqramları |
| **Scroll bərpası** | "Geri" düyməsi istifadəçini tərk etdiyi səhifəyə elə həmin scroll mövqeyində qaytarır |
| **BDULU köməkçi** | Sürüklənə bilən chat vidjeti; fakültələr, ixtisaslar, korpuslar və qəbul barədə dinamik cavab verir |
| **Quick Replies** | Hər mesajdan sonra yenidən görünən sürətli sual düymələri; seçilmiş sual təkrar göstərilmir |
| **Uğurlu məzunlar** | Dövlət Proqramının qalibi 6 məzunun poster şəkilləri (responsive şəbəkə) |

## Dizayn qərarları

Sayt şablon görünüşündən uzaqlaşdırılmaq üçün aşağıdakı prinsiplərlə qurulub:

- **Rənglər** universitetin gerbindən götürülüb (tünd göy `#0b1b3a` + qızılı
  `#b8974a`). Şablonlarda tez-tez rast gəlinən bənövşəyi-mavi qradientlərdən
  qəsdən istifadə olunmur.
- **Tipoqrafiya** iki şriftdən ibarətdir: başlıqlar üçün Source Serif 4,
  mətn üçün Public Sans. Şriftlər öz serverimizdən verilir və Azərbaycan
  əlifbasının bütün hərflərini (ə, ğ, ş, ı, ö, ü) dəstəkləyir.
- **Boşluqlar** vahid 4px şkalasına bağlanıb (4, 8, 12, 16, 24, 32, 48, 64).
  Bütün ölçülər yalnız bu dəyərlərdən seçilir.
- **İkonlar** əl ilə çəkilmiş 19 ikondan ibarət SVG sprite-dır. Saytda heç bir
  emoji istifadə olunmur.
- **Ana səhifə naviqasiyası** üç eyni çərçivəli kart əvəzinə kataloq siyahısı
  kimi verilib.

## İstifadə qaydası

1. Saytı açın və **Bal hesabla** düyməsini basın.
2. Qrup seçin: 1, 2, 3 və ya 4-cü qrup.
3. Alt qrup tələb olunarsa seçin:
   - **1-ci qrup** → RI (Riyaziyyat-İnformatika) və ya RK (Riyaziyyat-Kimya);
   - **3-cü qrup** → DT (Dil-Tarix) və ya TC (Tarix-Coğrafiya).
   - 2-ci və 4-cü qruplarda alt qrup yoxdur.
4. Buraxılış balını (0–300) və blok balını (0–400) daxil edin.
5. Lazım gələrsə filtr çiplərindən istifadə edin.
6. **Hesabla** düyməsini basın. Nəticələr bal uyğunluğuna görə sıralanır.

RI alt qrupu seçildikdə əlavə olaraq bal statistikası diaqramları göstərilir.

> RI alt qrupu üçün blok balı 100-dən, RK alt qrupu üçün isə 50-dən az olarsa
> bütün ixtisaslarda qəbul faizi 0% qəbul edilir.

> **Qeyd:** yalnız ödənişsiz (dövlət sifarişi) yeri olmayan ixtisaslarda
> ödənişsiz sütununda `—` işarəsi göstərilir.

## Məlumat strukturu

Sayt heç bir verilənlər bazası və ya server istifadə etmir. Bütün məlumat
`script.js` faylındakı JavaScript obyektlərində saxlanılır:

- **`FACULTIES`** – fakültə adı, loqo, təsviri və ixtisas siyahısı. Hər ixtisasın
  kodu, **qrupu (1–4)**, **alt qrupu** (RI / RK / DT / TC), tədris dili, tədris
  forması, ödənişsiz və ödənişli qəbul balları var. Ödənişsiz yer olmadıqda
  `free: null` yazılır və interfeysdə `—` kimi göstərilir.
- **`KORPUSLAR`** – korpus adı, ikonu, yerləşməsi, rəngi və aid fakültələr.
- **`GRADUATES`** – uğurlu məzunlar: ad, ölkə, universitet, ixtisas və poster şəkli.
- **`FAQ_DATA`** – BDULU köməkçisinin statik açar sözləri və cavabları.
- **Dinamik FAQ** – BDULU cavabları `FACULTIES` və `KORPUSLAR` məlumatından
  avtomatik qurulur; hər fakültə, korpus və ixtisas üzrə ayrıca cavab verilir.

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

## Sonrakı addımlar

- Subbakalavrlar üzrə müsabiqə sətirlərinin əlavə edilməsi.
- Qəbul faizi hesablamasının rəsmi keçid balı məlumatları ilə dəqiqləşdirilməsi.

## Yerləşdirmə

- **Növ**: statik sayt (build tələb etmir).
- **Repozitoriya**: https://github.com/unifyforbstu-sudo/bdustatistika
- **Yerli baxış**: qovluqda sadə HTTP server işə salmaq kifayətdir:
  ```bash
  python3 -m http.server 8000
  ```
