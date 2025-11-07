# 🔗 دليل الروابط الشامل - VisCend Studio App

هذا الدليل يحتوي على جميع الروابط والمنصات المتكاملة في التطبيق.

---

## 📱 روابط التواصل الاجتماعي

### 1. Facebook - فيسبوك
**الرابط:** `https://facebook.com/viscendstudio`  
**الاستخدام في التطبيق:**
- Footer Widget
- Social Links Widget
- Contact Screen
- About Screen

**كود الوصول:**
```dart
import '../config/app_constants.dart';
import '../utils/url_helper.dart';

// فتح صفحة الفيسبوك
UrlHelper.launchFacebook();

// أو مباشرة
UrlHelper.launchURL(AppConstants.facebookUrl);
```

---

### 2. Twitter - تويتر
**الرابط:** `https://twitter.com/viscendstudio`  
**الاستخدام:**
- التواصل السريع
- مشاركة الأخبار
- خدمة العملاء

**كود الوصول:**
```dart
UrlHelper.launchTwitter();
```

---

### 3. Instagram - انستقرام
**الرابط:** `https://instagram.com/viscendstudio`  
**الاستخدام:**
- معرض الأعمال البصري
- القصص اليومية
- Reels للمشاريع

**كود الوصول:**
```dart
UrlHelper.launchInstagram();
```

---

### 4. LinkedIn - لينكد إن
**الرابط:** `https://linkedin.com/company/viscendstudio`  
**الاستخدام:**
- الشبكة المهنية
- نشر الوظائف
- المقالات التقنية

**كود الوصول:**
```dart
UrlHelper.launchLinkedIn();
```

---

### 5. GitHub - جيت هب
**الرابط:** `https://github.com/viscendstudio`  
**الاستخدام:**
- مستودعات الأكواد المفتوحة
- المشاريع المفتوحة المصدر
- المساهمات التقنية

**كود الوصول:**
```dart
UrlHelper.launchGitHub();
```

**روابط المشاريع على GitHub:**
```
- https://github.com/viscendstudio/ecommerce-app
- https://github.com/viscendstudio/project-manager
- https://github.com/viscendstudio/analytics-dashboard
```

---

### 6. Behance - بيهانس
**الرابط:** `https://behance.net/viscendstudio`  
**الاستخدام:**
- عرض المشاريع التصميمية
- الهويات البصرية
- معرض الأعمال الإبداعية

**كود الوصول:**
```dart
UrlHelper.launchBehance();
```

---

### 7. Dribbble - دريبل
**الرابط:** `https://dribbble.com/viscendstudio`  
**الاستخدام:**
- تصاميم UI/UX
- المفاهيم الإبداعية
- اللقطات التصميمية

**كود الوصول:**
```dart
UrlHelper.launchDribbble();
```

---

## 🌐 المواقع والمنصات

### الموقع الرسمي
**الرابط:** `https://viscend.com`  
**الصفحات:**
- الصفحة الرئيسية
- من نحن
- الخدمات
- الأعمال
- المدونة
- التواصل

**كود الوصول:**
```dart
UrlHelper.launchWebsite();
```

---

### المدونة
**الرابط:** `https://blog.viscend.com`  
**المحتوى:**
- مقالات تقنية
- دروس تعليمية
- نصائح التصميم
- أخبار الشركة

**كود الوصول:**
```dart
UrlHelper.launchBlog();
```

---

## 📧 طرق التواصل

### البريد الإلكتروني
**Email:** `info@viscend.com`

**أمثلة الاستخدام:**
```dart
// بريد بسيط
UrlHelper.launchEmail();

// بريد مع موضوع
UrlHelper.launchEmail(
  subject: 'استفسار عن الخدمات',
);

// بريد كامل
UrlHelper.launchEmail(
  email: 'info@viscend.com',
  subject: 'طلب عرض سعر',
  body: 'مرحباً، أود الحصول على عرض سعر لـ...',
);
```

---

### الهاتف
**Phone:** `+966 50 123 4567`

**الاستخدام:**
```dart
// اتصال مباشر
UrlHelper.launchPhone();

// رقم مخصص
UrlHelper.launchPhone('+966501234567');
```

---

### واتساب
**WhatsApp:** `+966501234567`

**الاستخدام:**
```dart
// فتح واتساب مباشرة
UrlHelper.launchWhatsApp();

// مع رسالة مسبقة
UrlHelper.launchWhatsApp(
  message: 'مرحباً، أود الاستفسار عن خدماتكم',
);

// رقم ورسالة مخصصة
UrlHelper.launchWhatsApp(
  phoneNumber: '+966501234567',
  message: 'طلب خاص',
);
```

---

### العنوان
**Address:** `الرياض، المملكة العربية السعودية`

**الاستخدام:**
```dart
// فتح في خرائط جوجل
UrlHelper.launchMaps('الرياض، المملكة العربية السعودية');
```

---

## 💼 روابط البورتفوليو

### المشاريع المنشورة

#### 1. تطبيق متجر إلكتروني
- **Demo:** `https://demo.viscend.com/ecommerce`
- **GitHub:** `https://github.com/viscendstudio/ecommerce-app`

#### 2. موقع شركة تقنية
- **Demo:** `https://demo.viscend.com/techco`

#### 3. هوية بصرية لمطعم
- **Behance:** `https://behance.net/gallery/restaurant-brand`

#### 4. تطبيق إدارة المشاريع
- **Demo:** `https://demo.viscend.com/projectapp`
- **GitHub:** `https://github.com/viscendstudio/project-manager`

#### 5. تطبيق توصيل طعام
- **Demo:** `https://demo.viscend.com/foodapp`

#### 6. موقع تعليمي تفاعلي
- **Demo:** `https://demo.viscend.com/eduplatform`

#### 7. هوية بصرية لشركة ناشئة
- **Behance:** `https://behance.net/gallery/startup-brand`

#### 8. تطبيق حجز المواعيد
- **Demo:** `https://demo.viscend.com/bookingapp`

#### 9. لوحة تحكم تحليلات
- **Demo:** `https://demo.viscend.com/analytics`
- **GitHub:** `https://github.com/viscendstudio/analytics-dashboard`

---

## 🛠️ استخدام الروابط في التطبيق

### في الويدجات

#### 1. Social Links Widget
```dart
import '../widgets/social_links_widget.dart';

SocialLinksWidget(
  iconSize: 24.0,
  iconColor: Colors.white,
  showLabels: false,
  direction: Axis.horizontal,
)
```

#### 2. Footer Widget
```dart
import '../widgets/footer_widget.dart';

FooterWidget()
```

#### 3. Portfolio Card
```dart
import '../widgets/portfolio_card.dart';

PortfolioCard(
  project: project,
  onTap: () {
    // تم التعامل تلقائياً مع الروابط
  },
)
```

---

### في الصفحات

#### Contact Screen
```dart
// جميع روابط التواصل متاحة
- البريد الإلكتروني
- الهاتف
- واتساب
- وسائل التواصل الاجتماعي
```

#### Portfolio Screen
```dart
// روابط المشاريع
- العرض التجريبي
- الكود المصدري
- معرض الأعمال
```

#### About Screen
```dart
// روابط تعريفية
- الموقع الرسمي
- المدونة
- وسائل التواصل
```

---

## 📊 تتبع الروابط (Analytics)

جميع النقرات على الروابط يتم تتبعها:

```dart
context.read<AnalyticsProvider>().trackEvent(
  'link_clicked',
  properties: {
    'link_type': 'social',
    'platform': 'facebook',
    'page': 'contact',
  },
);
```

---

## 🔐 أمان الروابط

### التحقق من صحة الروابط

```dart
// التحقق من URL
if (UrlHelper.isValidUrl(url)) {
  UrlHelper.launchURL(url);
}

// التحقق من البريد
if (UrlHelper.isValidEmail(email)) {
  UrlHelper.launchEmail(email: email);
}

// التحقق من الهاتف
if (UrlHelper.isValidPhone(phone)) {
  UrlHelper.launchPhone(phone);
}
```

---

## 📱 Deep Links (اختياري)

### روابط عميقة للتطبيق
```
viscend://home
viscend://about
viscend://services
viscend://portfolio
viscend://portfolio/1
viscend://contact
```

### استخدام Deep Links
```dart
// في main.dart
MaterialApp(
  onGenerateRoute: AppRouter.generateRoute,
  initialRoute: '/splash',
)
```

---

## 🌍 روابط مترجمة

جميع الروابط تدعم اللغتين:

```dart
final isArabic = Provider.of<LanguageProvider>(context).isArabic;

final websiteUrl = isArabic 
    ? 'https://viscend.com/ar' 
    : 'https://viscend.com/en';
```

---

## 📝 إضافة روابط جديدة

### 1. إضافة في AppConstants
```dart
// في lib/config/app_constants.dart
static const String newPlatformUrl = 'https://newplatform.com/viscendstudio';
```

### 2. إضافة في UrlHelper
```dart
// في lib/utils/url_helper.dart
static Future<bool> launchNewPlatform() => 
    launchURL(AppConstants.newPlatformUrl);
```

### 3. إضافة في SocialLinksWidget
```dart
// في lib/widgets/social_links_widget.dart
_SocialLinkData(
  name: 'NewPlatform',
  icon: FontAwesomeIcons.newIcon,
  url: AppConstants.newPlatformUrl,
  color: const Color(0xFF000000),
),
```

---

## 🎯 نصائح مهمة

1. **استخدم UrlHelper دائماً** - لا تستخدم url_launcher مباشرة
2. **تحقق من الروابط** - استخدم دوال التحقق قبل الفتح
3. **تتبع الأحداث** - سجل كل نقرة على رابط
4. **معالجة الأخطاء** - تعامل مع فشل فتح الرابط
5. **اختبر على الأجهزة الحقيقية** - بعض الروابط لا تعمل على المحاكي

---

## 🔄 تحديث الروابط

عند تغيير أي رابط:

1. حدث `app_constants.dart`
2. حدث `.env` إذا لزم الأمر
3. اختبر جميع الصفحات التي تستخدم الرابط
4. حدث الوثائق

---

## 📞 الدعم

إذا واجهت مشكلة في الروابط:
- تحقق من اتصال الإنترنت
- تحقق من أن التطبيق المستهدف مثبت
- تحقق من صلاحيات التطبيق
- راجع السجلات في Debug Console

---

**Made with ❤️ by VisCend Studio**
