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
```

## Hazır olan imkanlar

| Bölmə | Təsvir |
|---|---|
| **Bal hesabla** | Qrup, alt qrup, buraxılış və blok balına görə ixtisaslar üzrə qəbul faizini hesablayır |
| **Filtr sistemi** | Ödəniş növü, tədris dili, tədris forması və Qazax filialı üzrə süzgəc |
| **Fakültələr** | 16 fakültə, hər biri üçün ixtisas siyahısı və qəbul balları |
| **Korpuslar** | 5 korpus, yerləşmə məlumatı və korpusdakı fakültələr (modal pəncərə) |
| **RI statistikası** | RI alt qrupu üçün bal müqayisəsi diaqramları |
| **BDULU köməkçi** | Sürüklənə bilən chat vidjeti; BDU haqqında ~50 mövzuda cavab verir |
| **Quick Replies** | Hər mesajdan sonra yenidən görünən sürətli sual düymələri; seçilmiş sual təkrar göstərilmir |
| **Uğurlu məzunlar** | Bölmə hazırdır, məlumat gözlənilir |

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
2. Qrup seçin (2026/2027 üçün statistikalar yalnız 1-ci qrup üzrə açıqlanıb).
3. 1-ci qrup üçün alt qrupu seçin: RI və ya RK.
4. Buraxılış balını (0–300) və blok balını (0–400) daxil edin.
5. Lazım gələrsə filtr çiplərindən istifadə edin.
6. **Hesabla** düyməsini basın. Nəticələr bal uyğunluğuna görə sıralanır.

RI alt qrupu seçildikdə əlavə olaraq bal statistikası diaqramları göstərilir.

> RI alt qrupu üçün blok balı 100-dən, RK alt qrupu üçün isə 50-dən az olarsa
> bütün ixtisaslarda qəbul faizi 0% qəbul edilir.

## Məlumat strukturu

Sayt heç bir verilənlər bazası və ya server istifadə etmir. Bütün məlumat
`script.js` faylındakı JavaScript obyektlərində saxlanılır:

- **`FACULTIES`** – fakültə adı, loqo, qrup nömrəsi, təsviri və ixtisas siyahısı.
  Hər ixtisasın kodu, alt qrupu, tədris dili, tədris forması, ödənişsiz və
  ödənişli qəbul balları var.
- **`KORPUSLAR`** – korpus adı, ikonu, yerləşməsi, rəngi və aid fakültələr.
- **`FAQ_DATA`** – BDULU köməkçisinin açar sözləri və cavabları.

## Sonrakı addımlar

- Uğurlu məzunlar bölməsi üçün real məlumatların əlavə edilməsi.
- 2, 3 və 4-cü qruplar üzrə ixtisas və bal statistikasının əlavə edilməsi.
- 2-ci qrupdan sonrakı fakültələr üçün ixtisas məlumatlarının tamamlanması.
- Qəbul faizi hesablamasının rəsmi keçid balı məlumatları ilə dəqiqləşdirilməsi.

## Yerləşdirmə

- **Növ**: statik sayt (build tələb etmir).
- **Repozitoriya**: https://github.com/unifyforbstu-sudo/bdustatistika
- **Yerli baxış**: qovluqda sadə HTTP server işə salmaq kifayətdir:
  ```bash
  python3 -m http.server 8000
  ```
