# 🎨 دليل الموارد والأصول - Assets Guide

دليل شامل لجميع الموارد المستخدمة في تطبيق VisCend Studio

---

## 📁 هيكل مجلد Assets

```
assets/
├── images/          # الصور والرسوميات
│   ├── logo.png
│   ├── logo_white.png
│   ├── splash_bg.png
│   ├── hero_bg.png
│   ├── about_hero.jpg
│   ├── services_hero.jpg
│   └── team/
│       ├── member1.jpg
│       ├── member2.jpg
│       └── member3.jpg
│
├── icons/           # الأيقونات المخصصة
│   ├── app_icon.png
│   ├── web_design.svg
│   ├── mobile_dev.svg
│   ├── branding.svg
│   └── ui_ux.svg
│
├── animations/      # رسوم متحركة Lottie
│   ├── loading.json
│   ├── success.json
│   ├── error.json
│   └── splash.json
│
└── fonts/          # الخطوط العربية
    ├── Cairo-Regular.ttf
    ├── Cairo-Bold.ttf
    ├── Tajawal-Regular.ttf
    └── Tajawal-Bold.ttf
```

---

## 🖼️ الصور المستخدمة

### 1. الشعار (Logo)
**المسار:** `assets/images/logo.png`  
**المواصفات:**
- الأبعاد: 512x512 px
- الشفافية: نعم (PNG)
- الاستخدام: شاشة البداية، AppBar، Footer

**كود الاستخدام:**
```dart
Image.asset(
  'assets/images/logo.png',
  width: 150,
  height: 150,
)
```

---

### 2. صور البورتفوليو
**المصدر:** Unsplash API  
**الجودة:** HD (1920x1080)

#### قائمة صور المشاريع:
```dart
// تطبيق متجر إلكتروني
'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800'

// موقع شركة تقنية
'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'

// هوية بصرية لمطعم
'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800'

// تطبيق إدارة المشاريع
'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'

// تطبيق توصيل طعام
'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800'

// موقع تعليمي
'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800'

// هوية شركة ناشئة
'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800'

// تطبيق حجز مواعيد
'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800'

// لوحة تحكم تحليلات
'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
```

**استخدام مع Caching:**
```dart
import 'package:cached_network_image/cached_network_image.dart';

CachedNetworkImage(
  imageUrl: project.imageUrl,
  placeholder: (context, url) => CircularProgressIndicator(),
  errorWidget: (context, url, error) => Icon(Icons.error),
  fit: BoxFit.cover,
)
```

---

### 3. صور الخدمات
**يتم توليدها من الأيقونات والتدرجات اللونية**

---

## 🎯 الأيقونات

### Font Awesome Icons
**الحزمة:** `font_awesome_flutter: ^10.6.0`

#### الأيقونات المستخدمة:

```dart
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

// وسائل التواصل
FontAwesomeIcons.facebook      // فيسبوك
FontAwesomeIcons.twitter       // تويتر
FontAwesomeIcons.instagram     // انستقرام
FontAwesomeIcons.linkedin      // لينكد إن
FontAwesomeIcons.github        // جيت هب
FontAwesomeIcons.behance       // بيهانس
FontAwesomeIcons.dribbble      // دريبل

// الخدمات
Icons.language                 // تصميم المواقع
Icons.phone_android            // تطوير التطبيقات
Icons.palette                  // الهوية البصرية
Icons.design_services          // UI/UX
Icons.trending_up              // التسويق الرقمي
Icons.lightbulb               // الاستشارات

// عامة
Icons.menu                     // القائمة
Icons.close                    // إغلاق
Icons.arrow_back              // رجوع
Icons.arrow_forward           // تقدم
Icons.search                  // بحث
Icons.email                   // بريد
Icons.phone                   // هاتف
Icons.location_on             // موقع
Icons.star                    // نجمة
Icons.check_circle            // صح
Icons.error                   // خطأ
```

---

## ✨ الرسوم المتحركة (Lottie)

### المصدر
[LottieFiles](https://lottiefiles.com/)

### الملفات المقترحة

#### 1. Loading Animation
**الملف:** `assets/animations/loading.json`  
**الاستخدام:** شاشات التحميل

```dart
import 'package:lottie/lottie.dart';

Lottie.asset(
  'assets/animations/loading.json',
  width: 200,
  height: 200,
)
```

#### 2. Success Animation
**الملف:** `assets/animations/success.json`  
**الاستخدام:** نجاح إرسال النموذج

```dart
Lottie.asset(
  'assets/animations/success.json',
  repeat: false,
  animate: true,
)
```

#### 3. Error Animation
**الملف:** `assets/animations/error.json`  
**الاستخدام:** رسائل الخطأ

#### 4. Splash Animation
**الملف:** `assets/animations/splash.json`  
**الاستخدام:** شاشة البداية

---

## 🔤 الخطوط

### الخطوط العربية المستخدمة

#### 1. Cairo Font
**الاستخدام:** الخط الأساسي للنصوص

**الملفات:**
- `Cairo-Regular.ttf` - عادي
- `Cairo-Bold.ttf` - عريض

**التحميل:**
[Google Fonts - Cairo](https://fonts.google.com/specimen/Cairo)

#### 2. Tajawal Font
**الاستخدام:** خط بديل للعناوين

**الملفات:**
- `Tajawal-Regular.ttf` - عادي
- `Tajawal-Bold.ttf` - عريض

**التحميل:**
[Google Fonts - Tajawal](https://fonts.google.com/specimen/Tajawal)

### إعداد الخطوط في pubspec.yaml

```yaml
fonts:
  - family: Cairo
    fonts:
      - asset: assets/fonts/Cairo-Regular.ttf
      - asset: assets/fonts/Cairo-Bold.ttf
        weight: 700
  - family: Tajawal
    fonts:
      - asset: assets/fonts/Tajawal-Regular.ttf
      - asset: assets/fonts/Tajawal-Bold.ttf
        weight: 700
```

### استخدام الخطوط

```dart
// في app_theme.dart
static const String fontFamily = 'Cairo';
static const String alternateFontFamily = 'Tajawal';

// أو باستخدام Google Fonts
import 'package:google_fonts/google_fonts.dart';

TextTheme(
  displayLarge: GoogleFonts.cairo(fontSize: 32, fontWeight: FontWeight.bold),
  bodyLarge: GoogleFonts.cairo(fontSize: 16),
)
```

---

## 🎨 الألوان والتدرجات

### الألوان الأساسية
```dart
static const Color primaryColor = Color(0xFF9333EA);
static const Color secondaryColor = Color(0xFF7C3AED);
static const Color accentColor = Color(0xFF3B82F6);
static const Color skyColor = Color(0xFF06B6D4);
```

### التدرجات اللونية
```dart
static const LinearGradient primaryGradient = LinearGradient(
  colors: [Color(0xFF9333EA), Color(0xFF7C3AED)],
  begin: Alignment.topLeft,
  end: Alignment.bottomRight,
);

static const LinearGradient accentGradient = LinearGradient(
  colors: [Color(0xFF3B82F6), Color(0xFF06B6D4)],
  begin: Alignment.topLeft,
  end: Alignment.bottomRight,
);
```

---

## 📱 أيقونة التطبيق (App Icon)

### المواصفات المطلوبة

#### Android
```
mipmap-mdpi/        48x48 px
mipmap-hdpi/        72x72 px
mipmap-xhdpi/       96x96 px
mipmap-xxhdpi/      144x144 px
mipmap-xxxhdpi/     192x192 px
```

#### iOS
```
AppIcon.appiconset/
  20x20    @1x, @2x, @3x
  29x29    @1x, @2x, @3x
  40x40    @1x, @2x, @3x
  60x60    @2x, @3x
  76x76    @1x, @2x
  83.5x83.5 @2x
  1024x1024 @1x (App Store)
```

### توليد الأيقونات تلقائياً

استخدم حزمة `flutter_launcher_icons`:

```yaml
# في pubspec.yaml
dev_dependencies:
  flutter_launcher_icons: ^0.13.1

flutter_launcher_icons:
  android: true
  ios: true
  image_path: "assets/icons/app_icon.png"
  adaptive_icon_background: "#9333EA"
  adaptive_icon_foreground: "assets/icons/app_icon_fg.png"
```

```bash
flutter pub run flutter_launcher_icons
```

---

## 🖼️ صور الـ Placeholders

### Shimmer Loading
**الحزمة:** `shimmer: ^3.0.0`

```dart
import 'package:shimmer/shimmer.dart';

Shimmer.fromColors(
  baseColor: Colors.grey[300]!,
  highlightColor: Colors.grey[100]!,
  child: Container(
    width: double.infinity,
    height: 200,
    color: Colors.white,
  ),
)
```

---

## 📊 رسوم بيانية (اختياري)

للإحصائيات والتحليلات:

```yaml
dependencies:
  fl_chart: ^0.65.0
```

---

## 🎥 فيديوهات (اختياري)

إذا أردت إضافة فيديوهات تعريفية:

```yaml
dependencies:
  video_player: ^2.8.1
  chewie: ^1.7.1
```

---

## 📥 تحميل الموارد

### 1. الصور من Unsplash
```bash
# استخدام wget أو curl
wget "https://images.unsplash.com/photo-id?w=800" -O image.jpg
```

### 2. الخطوط من Google Fonts
زيارة: https://fonts.google.com/
- اختر الخط
- Download family
- استخرج الملفات .ttf

### 3. الأيقونات من Figma
إذا كان لديك تصميم Figma:
- Export as SVG
- أو استخدم flutter_svg

### 4. رسوم Lottie
زيارة: https://lottiefiles.com/
- بحث عن الرسم المناسب
- Download JSON

---

## 🔄 تحديث الموارد

### عند إضافة موارد جديدة:

1. **أضف الملفات** في المجلد المناسب
2. **حدث pubspec.yaml**
```yaml
flutter:
  assets:
    - assets/images/
    - assets/icons/
    - assets/animations/
```
3. **نفذ الأمر**
```bash
flutter pub get
```
4. **أعد تشغيل التطبيق**
```bash
flutter run
```

---

## 🎯 نصائح الأداء

### 1. تحسين الصور
- استخدم صور WebP للأحجام الصغيرة
- اضغط الصور PNG/JPG
- استخدم SVG للأيقونات

### 2. Lazy Loading
```dart
CachedNetworkImage(
  imageUrl: url,
  fadeInDuration: Duration(milliseconds: 300),
  memCacheWidth: 800,
  maxWidthDiskCache: 800,
)
```

### 3. Asset Bundling
```dart
// استخدم const للموارد الثابتة
const AssetImage('assets/images/logo.png')
```

---

## 📦 أدوات مفيدة

### 1. تحسين الصور
- [TinyPNG](https://tinypng.com/) - ضغط PNG/JPG
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - تحسين SVG
- [Squoosh](https://squoosh.app/) - تحسين شامل

### 2. توليد الأيقونات
- [AppIcon.co](https://appicon.co/) - توليد أيقونات iOS/Android
- [MakeAppIcon](https://makeappicon.com/) - توليد شامل

### 3. مكتبات الموارد
- [Unsplash](https://unsplash.com/) - صور مجانية
- [Pexels](https://www.pexels.com/) - صور وفيديوهات
- [Flaticon](https://www.flaticon.com/) - أيقونات
- [LottieFiles](https://lottiefiles.com/) - رسوم متحركة

---

## ✅ قائمة التحقق

قبل النشر، تأكد من:

- [ ] جميع الصور محسّنة
- [ ] أيقونة التطبيق موجودة لجميع الأحجام
- [ ] الخطوط مرخصة ومحملة
- [ ] الرسوم المتحركة تعمل
- [ ] لا توجد موارد غير مستخدمة
- [ ] جميع الموارد في pubspec.yaml
- [ ] تم اختبار التطبيق على أجهزة مختلفة
- [ ] حجم التطبيق مقبول (< 50 MB)

---

## 📊 إحصائيات الموارد

### الحجم المتوقع
```
الصور:       ~2 MB
الخطوط:      ~500 KB
الأيقونات:   ~100 KB
الرسوم:      ~200 KB
المجموع:     ~3 MB
```

---

## 🐛 حل المشاكل

### مشكلة: الصورة لا تظهر
**الحل:**
```dart
// تحقق من المسار في pubspec.yaml
// تحقق من وجود الملف
// نفذ flutter pub get
// أعد تشغيل التطبيق
```

### مشكلة: الخط لا يعمل
**الحل:**
```dart
// تحقق من اسم الخط في pubspec.yaml
// تحقق من weight الخط
// أعد تشغيل التطبيق (Hot Restart)
```

### مشكلة: الأيقونة لا تظهر
**الحل:**
```dart
// تحقق من استيراد الحزمة
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
// استخدم FaIcon بدلاً من Icon
```

---

**Made with ❤️ by VisCend Studio**
