# 📱 دليل التثبيت الكامل - VisCend Studio Flutter App

هذا دليل شامل لتثبيت وتشغيل تطبيق VisCend Studio على جهازك.

---

## 🎯 الخطوة 1: تثبيت Flutter SDK

### لنظام Windows:

1. **تحميل Flutter SDK**
   - اذهب إلى: https://flutter.dev/docs/get-started/install/windows
   - حمّل ملف ZIP
   - استخرج الملف في مكان مثل: `C:\src\flutter`

2. **إضافة Flutter إلى PATH**
   ```
   - ابحث عن "Environment Variables" في Windows
   - أضف المسار: C:\src\flutter\bin
   ```

3. **التحقق من التثبيت**
   ```bash
   flutter doctor
   ```

### لنظام macOS:

```bash
# تثبيت عبر Homebrew
brew install flutter

# أو تحميل يدوي من الموقع الرسمي
https://flutter.dev/docs/get-started/install/macos
```

### لنظام Linux:

```bash
# تحميل Flutter
cd ~/development
wget https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.x.x-stable.tar.xz

# استخراج
tar xf flutter_linux_3.x.x-stable.tar.xz

# إضافة إلى PATH
export PATH="$PATH:`pwd`/flutter/bin"
```

---

## 🔧 الخطوة 2: تثبيت المتطلبات

### Android Studio (للتطوير على Android):

1. حمّل Android Studio من: https://developer.android.com/studio
2. افتح Android Studio
3. اذهب إلى `Tools > SDK Manager`
4. ثبّت:
   - Android SDK Platform-Tools
   - Android SDK Build-Tools
   - Android Emulator

5. قم بتثبيت Flutter و Dart plugins:
   ```
   File > Settings > Plugins
   ابحث عن "Flutter" و "Dart"
   ```

### Xcode (للتطوير على iOS - macOS فقط):

```bash
# تثبيت Xcode من App Store
# ثم تشغيل:
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -runFirstLaunch
```

---

## 📦 الخطوة 3: تثبيت التطبيق

### 1. الانتقال إلى المجلد

```bash
cd flutter_app
```

### 2. تثبيت Dependencies

```bash
flutter pub get
```

### 3. التحقق من عدم وجود مشاكل

```bash
flutter doctor -v
```

---

## 🚀 الخطوة 4: تشغيل التطبيق

### على Android:

#### أ. باستخدام جهاز حقيقي:
```bash
# 1. فعّل "Developer Mode" على هاتفك Android
# 2. فعّل "USB Debugging"
# 3. وصّل الهاتف بالكمبيوتر

# 4. تأكد من اكتشاف الجهاز
flutter devices

# 5. شغّل التطبيق
flutter run
```

#### ب. باستخدام Emulator:
```bash
# 1. افتح Android Studio
# 2. اذهب إلى: Tools > AVD Manager
# 3. أنشئ جهاز افتراضي جديد
# 4. شغّل الـ Emulator

# 5. في Terminal:
flutter run
```

### على iOS (macOS فقط):

```bash
# 1. افتح iOS Simulator
open -a Simulator

# 2. شغّل التطبيق
flutter run
```

---

## 🏗️ البناء للإنتاج

### Android APK:

```bash
# بناء APK
flutter build apk --release

# الملف سيكون في:
# build/app/outputs/flutter-apk/app-release.apk
```

### Android App Bundle (للنشر على Google Play):

```bash
flutter build appbundle --release

# الملف سيكون في:
# build/app/outputs/bundle/release/app-release.aab
```

### iOS (macOS فقط):

```bash
flutter build ios --release
```

---

## ⚙️ إعدادات إضافية

### تغيير اسم التطبيق:

**Android:**
```xml
<!-- android/app/src/main/AndroidManifest.xml -->
<application
    android:label="VisCend Studio"
    ...>
```

**iOS:**
```
ios/Runner/Info.plist
<key>CFBundleName</key>
<string>VisCend Studio</string>
```

### تغيير أيقونة التطبيق:

1. ضع صورة الأيقونة في: `assets/images/app_icon.png`
2. استخدم package: `flutter_launcher_icons`

```yaml
# في pubspec.yaml
dev_dependencies:
  flutter_launcher_icons: ^0.13.1

flutter_launcher_icons:
  android: true
  ios: true
  image_path: "assets/images/app_icon.png"
```

```bash
flutter pub get
flutter pub run flutter_launcher_icons
```

---

## 🎨 إضافة الخطوط العربية

### 1. تحميل الخطوط:

- Cairo: https://fonts.google.com/specimen/Cairo
- Tajawal: https://fonts.google.com/specimen/Tajawal

### 2. وضعها في:

```
assets/fonts/
├── Cairo-Regular.ttf
├── Cairo-Bold.ttf
├── Tajawal-Regular.ttf
└── Tajawal-Bold.ttf
```

### 3. التفعيل في pubspec.yaml:

```yaml
flutter:
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

---

## 🐛 حل المشاكل الشائعة

### مشكلة 1: "flutter: command not found"

**الحل:**
```bash
# تأكد من إضافة Flutter إلى PATH
export PATH="$PATH:/path/to/flutter/bin"

# أو بشكل دائم في .bashrc أو .zshrc
echo 'export PATH="$PATH:/path/to/flutter/bin"' >> ~/.bashrc
```

### مشكلة 2: "Unable to locate Android SDK"

**الحل:**
```bash
# حدد مسار Android SDK
flutter config --android-sdk /path/to/android/sdk
```

### مشكلة 3: "Gradle build failed"

**الحل:**
```bash
# نظف المشروع
cd android
./gradlew clean

# ارجع للمجلد الرئيسي
cd ..
flutter clean
flutter pub get
```

### مشكلة 4: "No connected devices"

**الحل:**
```bash
# تحقق من الأجهزة المتصلة
flutter devices

# إذا لم يظهر شيء:
# - تأكد من تفعيل USB Debugging
# - جرّب كابل USB آخر
# - أعد تشغيل adb
adb kill-server
adb start-server
```

### مشكلة 5: "Waiting for another flutter command to release the startup lock"

**الحل:**
```bash
# احذف ملف القفل
rm -rf /path/to/flutter/bin/cache/lockfile
```

---

## 📊 اختبار الأداء

```bash
# تشغيل في Profile Mode
flutter run --profile

# تحليل الأداء
flutter run --profile --trace-startup
```

---

## 🔍 نصائح مهمة

1. **استخدم Hot Reload:**
   - أثناء التطوير، اضغط `r` في Terminal لـ Hot Reload
   - اضغط `R` لـ Hot Restart

2. **تصحيح الأخطاء:**
   ```bash
   # عرض السجلات
   flutter logs
   ```

3. **تحسين الأداء:**
   ```bash
   # بناء نسخة محسّنة
   flutter build apk --release --split-per-abi
   ```

4. **تحديث Flutter:**
   ```bash
   flutter upgrade
   ```

---

## 📱 اختبار على أجهزة حقيقية

### Android:

1. فعّل "Developer Options" على هاتفك
2. فعّل "USB Debugging"
3. وصّل الهاتف
4. امنح الأذونات
5. `flutter run`

### iOS:

1. افتح Xcode
2. سجّل الدخول بحساب Apple Developer
3. اختر هاتفك
4. `flutter run`

---

## 🎓 موارد إضافية

- [Flutter Documentation](https://flutter.dev/docs)
- [Dart Documentation](https://dart.dev/guides)
- [Flutter Cookbook](https://flutter.dev/docs/cookbook)
- [Pub.dev Packages](https://pub.dev/)

---

## 🆘 الدعم

إذا واجهت أي مشكلة:

📧 **البريد:** support@viscendstudio.com  
💬 **الدعم:** +966 50 123 4567  
🌐 **الموقع:** www.viscendstudio.com

---

## ✅ قائمة التحقق النهائية

- [ ] تثبيت Flutter SDK
- [ ] تثبيت Android Studio / Xcode
- [ ] تشغيل `flutter doctor` بنجاح
- [ ] تشغيل `flutter pub get`
- [ ] اتصال جهاز أو emulator
- [ ] تشغيل `flutter run` بنجاح
- [ ] اختبار جميع الصفحات
- [ ] اختبار تبديل اللغة

---

**🎉 مبروك! التطبيق جاهز للعمل!**
