# 🚀 دليل النشر والإطلاق - Deployment Guide
## تطبيق VisCend Studio

دليل شامل لنشر التطبيق على متاجر التطبيقات

---

## 📋 قائمة التحقق قبل النشر

### ✅ الأساسيات
- [ ] جميع الميزات تعمل بشكل صحيح
- [ ] لا توجد أخطاء في Console
- [ ] تم اختبار جميع الصفحات
- [ ] تم اختبار نماذج التواصل
- [ ] جميع الروابط تعمل
- [ ] الصور والموارد محملة

### ✅ الأداء
- [ ] سرعة التحميل مقبولة
- [ ] استهلاك الذاكرة مقبول
- [ ] لا توجد تسريبات للذاكرة
- [ ] Lazy loading يعمل
- [ ] Caching يعمل

### ✅ التصميم
- [ ] التطبيق responsive على جميع الأحجام
- [ ] الخطوط تظهر بشكل صحيح
- [ ] الألوان متناسقة
- [ ] الرسوم المتحركة سلسة
- [ ] RTL يعمل للعربية

### ✅ الأمان
- [ ] لا توجد مفاتيح API في الكود
- [ ] استخدام .env للبيانات الحساسة
- [ ] Validation شامل للنماذج
- [ ] معالجة الأخطاء صحيحة
- [ ] HTTPS للروابط

### ✅ المحتوى
- [ ] جميع النصوص مترجمة
- [ ] لا توجد أخطاء إملائية
- [ ] الروابط الاجتماعية صحيحة
- [ ] معلومات الاتصال محدثة
- [ ] البورتفوليو محدث

---

## 🔧 الإعدادات النهائية

### 1. تحديث pubspec.yaml

```yaml
name: viscend_studio
description: تطبيق VisCend Studio - استوديو التميز البصري
version: 1.0.0+1

environment:
  sdk: '>=3.0.0 <4.0.0'
```

**تحديث رقم الإصدار:**
- `1.0.0` - رقم الإصدار (version name)
- `+1` - رقم البناء (build number)

---

### 2. إعداد الأيقونات

#### استخدام flutter_launcher_icons

```yaml
dev_dependencies:
  flutter_launcher_icons: ^0.13.1

flutter_launcher_icons:
  android: true
  ios: true
  image_path: "assets/icons/app_icon.png"
  adaptive_icon_background: "#9333EA"
  adaptive_icon_foreground: "assets/icons/app_icon_fg.png"
  remove_alpha_ios: true
```

```bash
flutter pub get
flutter pub run flutter_launcher_icons
```

---

### 3. إعداد اسم التطبيق

#### Android
**الملف:** `android/app/src/main/AndroidManifest.xml`
```xml
<application
    android:label="VisCend Studio"
    android:icon="@mipmap/ic_launcher">
```

#### iOS
**الملف:** `ios/Runner/Info.plist`
```xml
<key>CFBundleName</key>
<string>VisCend Studio</string>
<key>CFBundleDisplayName</key>
<string>VisCend</string>
```

---

## 📱 النشر على Google Play Store

### المتطلبات
- حساب Google Play Developer ($25 رسم مرة واحدة)
- Keystore للتوقيع
- لقطات شاشة
- وصف التطبيق
- سياسة الخصوصية

---

### الخطوة 1: إنشاء Keystore

```bash
keytool -genkey -v -keystore ~/viscend-key.jks \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias viscend
```

احفظ المعلومات بأمان:
- Keystore password
- Key password
- Alias name

---

### الخطوة 2: إعداد التوقيع

**الملف:** `android/key.properties`
```properties
storePassword=<password>
keyPassword=<password>
keyAlias=viscend
storeFile=<path-to-keystore>
```

**الملف:** `android/app/build.gradle`
```gradle
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {
    ...
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile file(keystoreProperties['storeFile'])
            storePassword keystoreProperties['storePassword']
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            shrinkResources true
        }
    }
}
```

---

### الخطوة 3: بناء APK/Bundle

#### App Bundle (مفضل)
```bash
flutter build appbundle --release
```
**المخرج:** `build/app/outputs/bundle/release/app-release.aab`

#### APK
```bash
flutter build apk --release
```
**المخرج:** `build/app/outputs/apk/release/app-release.apk`

---

### الخطوة 4: رفع على Google Play Console

1. **إنشاء التطبيق**
   - اذهب إلى [Google Play Console](https://play.google.com/console)
   - إنشاء تطبيق جديد
   - اختر الاسم واللغة

2. **ملء المعلومات**
   - الوصف الكامل (4000 حرف)
   - الوصف المختصر (80 حرف)
   - العنوان (30 حرف)

3. **لقطات الشاشة**
   ```
   Phone:      1080 x 2340
   7-inch:     1536 x 2048
   10-inch:    2048 x 2732
   ```
   - الحد الأدنى: 2 لقطة
   - الحد الأقصى: 8 لقطات

4. **رفع AAB**
   - اذهب إلى Production
   - Create new release
   - رفع app-release.aab

5. **التصنيف**
   - اختر الفئة: Business
   - التصنيف العمري
   - سياسة المحتوى

6. **سياسة الخصوصية**
   - رابط سياسة الخصوصية مطلوب
   - `https://viscend.com/privacy-policy`

7. **النشر**
   - مراجعة جميع المعلومات
   - إرسال للمراجعة
   - الانتظار 1-3 أيام

---

## 🍎 النشر على Apple App Store

### المتطلبات
- حساب Apple Developer ($99 سنوياً)
- Mac مع Xcode
- Certificate & Provisioning Profile
- لقطات شاشة
- App Store Connect

---

### الخطوة 1: إعداد Xcode

```bash
cd ios
pod install
open Runner.xcworkspace
```

في Xcode:
1. اختر Team
2. حدث Bundle Identifier: `com.viscend.studio`
3. اختر Version & Build Number

---

### الخطوة 2: إعداد التوقيع

1. **Certificate**
   - اذهب إلى Apple Developer
   - Certificates, IDs & Profiles
   - إنشاء iOS Distribution Certificate

2. **App ID**
   - إنشاء App ID جديد
   - Bundle ID: `com.viscend.studio`

3. **Provisioning Profile**
   - إنشاء App Store Profile
   - ربطه بـ App ID و Certificate

---

### الخطوة 3: بناء Archive

```bash
flutter build ios --release
```

في Xcode:
1. Product > Archive
2. انتظر اكتمال البناء
3. Window > Organizer
4. اختر Archive
5. Distribute App
6. App Store Connect
7. Upload

---

### الخطوة 4: رفع على App Store Connect

1. **إنشاء التطبيق**
   - [App Store Connect](https://appstoreconnect.apple.com)
   - My Apps > + New App
   - ملء المعلومات

2. **لقطات الشاشة**
   ```
   iPhone 6.7":  1290 x 2796
   iPhone 6.5":  1284 x 2778
   iPhone 5.5":  1242 x 2208
   iPad 12.9":   2048 x 2732
   ```

3. **معلومات التطبيق**
   - Name: VisCend Studio
   - Subtitle: استوديو التميز البصري
   - Description: وصف كامل
   - Keywords: كلمات مفتاحية (100 حرف)
   - Support URL: https://viscend.com/support
   - Privacy URL: https://viscend.com/privacy

4. **إضافة Build**
   - اختر Build المرفوع
   - ملء Export Compliance

5. **التصنيف**
   - Category: Business
   - Rating

6. **التسعير**
   - Free (مجاني)
   - أو حدد السعر

7. **الإرسال للمراجعة**
   - Submit for Review
   - الانتظار 1-3 أيام

---

## 🌐 إعداد Backend (Supabase)

### 1. إنشاء مشروع Supabase

1. اذهب إلى [Supabase](https://supabase.com)
2. إنشاء مشروع جديد
3. احفظ Project URL و Anon Key

---

### 2. إعداد الجداول

#### جدول Contacts
```sql
CREATE TABLE contacts (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- إنشاء Index
CREATE INDEX contacts_email_idx ON contacts(email);
CREATE INDEX contacts_created_at_idx ON contacts(created_at DESC);

-- Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Policy للإدراج (الجميع يمكنه الإرسال)
CREATE POLICY "Enable insert for all users" ON contacts
  FOR INSERT WITH CHECK (true);

-- Policy للقراءة (المصادقة فقط)
CREATE POLICY "Enable read for authenticated users only" ON contacts
  FOR SELECT USING (auth.role() = 'authenticated');
```

---

#### جدول Portfolio (اختياري)
```sql
CREATE TABLE portfolio (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  title_ar text NOT NULL,
  title_en text NOT NULL,
  description_ar text,
  description_en text,
  category text NOT NULL,
  image_url text,
  demo_url text,
  github_url text,
  technologies text[],
  is_featured boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);
```

---

### 3. تحديث .env

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

---

## 📊 إعداد Analytics

### Google Analytics (اختياري)

```yaml
dependencies:
  firebase_core: ^2.24.2
  firebase_analytics: ^10.7.4
```

```dart
// في main.dart
await Firebase.initializeApp();
FirebaseAnalytics analytics = FirebaseAnalytics.instance;
```

---

## 🔔 إعداد Notifications (اختياري)

### Firebase Cloud Messaging

```yaml
dependencies:
  firebase_messaging: ^14.7.9
```

```dart
FirebaseMessaging messaging = FirebaseMessaging.instance;
await messaging.requestPermission();
```

---

## 🌍 إعداد Localization

### تحديث الترجمات

**الملف:** `lib/providers/language_provider.dart`

تأكد من جميع النصوص مترجمة:
```dart
static Map<String, String> get _arabic => {
  'appName': 'VisCend Studio',
  'home': 'الرئيسية',
  'about': 'من نحن',
  // ... المزيد
};

static Map<String, String> get _english => {
  'appName': 'VisCend Studio',
  'home': 'Home',
  'about': 'About',
  // ... المزيد
};
```

---

## 📝 المستندات المطلوبة

### 1. سياسة الخصوصية
**الرابط:** `https://viscend.com/privacy-policy`

يجب أن تتضمن:
- البيانات المجمعة
- كيفية الاستخدام
- الحماية والأمان
- حقوق المستخدم
- معلومات الاتصال

---

### 2. شروط الاستخدام
**الرابط:** `https://viscend.com/terms`

يجب أن تتضمن:
- قواعد الاستخدام
- حقوق والتزامات
- المسؤوليات
- التعديلات

---

### 3. صفحة الدعم
**الرابط:** `https://viscend.com/support`

يجب أن تتضمن:
- الأسئلة الشائعة
- معلومات الاتصال
- نموذج الدعم

---

## 🎬 لقطات الشاشة

### التحضير

1. **استخدم أجهزة حقيقية أو محاكيات**
2. **ضع بيانات جذابة**
3. **اختر تصميم متناسق**

### الأحجام المطلوبة

#### Android
```
Phone:          1080 x 2340
7-inch Tablet:  1536 x 2048
10-inch Tablet: 2048 x 2732
```

#### iOS
```
iPhone 6.7":    1290 x 2796
iPhone 6.5":    1284 x 2778
iPad 12.9":     2048 x 2732
```

### الصفحات المقترحة
1. Splash Screen
2. Home Screen
3. Services Screen
4. Portfolio Screen
5. Contact Screen

---

## ✅ الاختبار النهائي

### قبل النشر

```bash
# بناء Release
flutter build apk --release
flutter build ios --release

# اختبار على أجهزة حقيقية
flutter install

# فحص الأداء
flutter run --profile
```

### قائمة الاختبار

- [ ] جميع الصفحات تعمل
- [ ] الروابط تفتح خارجياً
- [ ] النماذج ترسل للـ Backend
- [ ] الصور تحمل بشكل صحيح
- [ ] الرسوم المتحركة سلسة
- [ ] تغيير اللغة يعمل
- [ ] RTL يعمل للعربية
- [ ] لا توجد أخطاء في Console
- [ ] الأداء مقبول
- [ ] حجم التطبيق معقول

---

## 📈 ما بعد النشر

### 1. المراقبة
- تتبع التحميلات
- قراءة التقييمات
- مراجعة التعليقات
- تحليل الأخطاء

### 2. التحديثات
- إصلاح الأخطاء
- إضافة ميزات جديدة
- تحسين الأداء
- تحديث المحتوى

### 3. التسويق
- وسائل التواصل
- الإعلانات
- المحتوى التسويقي
- العلاقات العامة

---

## 🆘 حل المشاكل الشائعة

### مشكلة: Build Failed

**الحل:**
```bash
flutter clean
flutter pub get
flutter build apk --release
```

---

### مشكلة: رفض من المتجر

**الأسباب الشائعة:**
- انتهاك سياسة المحتوى
- معلومات ناقصة
- أخطاء في التطبيق
- مشاكل في سياسة الخصوصية

**الحل:**
- اقرأ سبب الرفض
- أصلح المشكلة
- أعد الإرسال

---

## 📞 الدعم

إذا واجهت مشاكل:
- راجع [Flutter Docs](https://flutter.dev/docs)
- اسأل في [Stack Overflow](https://stackoverflow.com/questions/tagged/flutter)
- راجع [Play Console Help](https://support.google.com/googleplay/android-developer)
- راجع [App Store Connect Help](https://developer.apple.com/support/app-store-connect/)

---

## 🎯 نموذج الوصف للمتاجر

### العنوان (30 حرف)
```
VisCend - استوديو التميز
```

### الوصف المختصر (80 حرف)
```
تصميم وتطوير مواقع وتطبيقات احترافية مع هوية بصرية مميزة
```

### الوصف الكامل (4000 حرف)
```
🎨 VisCend Studio - استوديو التميز البصري

نقدم خدمات تصميم وتطوير احترافية تساعدك على تحقيق رؤيتك الرقمية.

✨ خدماتنا:

🌐 تصميم المواقع
• مواقع متجاوبة مع جميع الأجهزة
• تصميم عصري وجذاب
• أداء عالي وسرعة تحميل

📱 تطوير التطبيقات
• تطبيقات iOS و Android
• تطوير بتقنية Flutter
• تجربة مستخدم استثنائية

🎨 الهوية البصرية
• تصميم شعارات احترافية
• دليل هوية بصرية كامل
• تصميم مطبوعات

📊 التسويق الرقمي
• إدارة وسائل التواصل
• حملات إعلانية مستهدفة
• تحسين محركات البحث

💼 معرض الأعمال
استعرض مشاريعنا السابقة وتعرف على جودة عملنا

📞 تواصل معنا
سهولة التواصل عبر البريد، الهاتف، أو واتساب

🌍 نتحدث العربية والإنجليزية

---

ابدأ رحلتك الرقمية معنا اليوم!
```

### الكلمات المفتاحية (100 حرف)
```
تصميم,مواقع,تطبيقات,شعار,هوية,برمجة,flutter,ui,ux,تسويق
```

---

**Made with ❤️ by VisCend Studio**

**Good Luck with the Launch! 🚀**
