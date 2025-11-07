# 🔌 دليل ربط Supabase بالتطبيق

دليل شامل لربط تطبيق Flutter مع قاعدة بيانات Supabase.

---

## 📋 المتطلبات

- ✅ حساب Supabase (مجاني)
- ✅ مشروع Supabase جاهز
- ✅ Flutter SDK مثبت

---

## 🚀 الخطوة 1: إعداد Supabase

### 1. إنشاء مشروع Supabase

```bash
# اذهب إلى
https://supabase.com

# أنشئ حساب جديد
# أنشئ مشروع جديد (Project)
# اختر اسم ومنطقة قريبة منك
```

### 2. الحصول على API Keys

```
1. اذهب إلى Settings → API
2. انسخ:
   - Project URL (https://xxx.supabase.co)
   - anon/public key
```

---

## 🗄️ الخطوة 2: إنشاء الجداول

### جدول التواصل (contacts)

```sql
-- في SQL Editor في Supabase
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- إضافة RLS (Row Level Security)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- السماح بالإدراج من الجميع (للتواصل العام)
CREATE POLICY "Enable insert for all users"
ON contacts FOR INSERT
TO public
WITH CHECK (true);

-- السماح بالقراءة للمصادقين فقط (للـ Admin)
CREATE POLICY "Enable read for authenticated users only"
ON contacts FOR SELECT
TO authenticated
USING (true);
```

### جدول التحليلات (page_visits)

```sql
-- جدول تتبع الزيارات
CREATE TABLE page_visits (
  id BIGSERIAL PRIMARY KEY,
  page_name TEXT NOT NULL,
  visited_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE page_visits ENABLE ROW LEVEL SECURITY;

-- السماح بالإدراج من الجميع
CREATE POLICY "Enable insert for all users"
ON page_visits FOR INSERT
TO public
WITH CHECK (true);

-- السماح بالقراءة للجميع (إحصائيات عامة)
CREATE POLICY "Enable read for all users"
ON page_visits FOR SELECT
TO public
USING (true);
```

---

## ⚙️ الخطوة 3: إعداد التطبيق

### 1. نسخ ملف البيئة

```bash
cd flutter_app
cp .env.example .env
```

### 2. تعديل ملف `.env`

```env
# .env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. تحديث `app_config.dart`

في حال عدم استخدام `.env`، عدل مباشرة في الملف:

```dart
// lib/config/app_config.dart
class AppConfig {
  static const String supabaseUrl = 'https://your-project.supabase.co';
  static const String supabaseAnonKey = 'your-anon-key';
  // ...
}
```

---

## 🧪 الخطوة 4: الاختبار

### 1. اختبار الاتصال

```dart
import 'package:viscend_studio/services/supabase_service.dart';

final service = SupabaseService();
final isConnected = await service.testConnection();

print('Connected: $isConnected');
```

### 2. اختبار إرسال رسالة

```dart
import 'package:viscend_studio/models/contact_model.dart';
import 'package:viscend_studio/services/supabase_service.dart';

final contact = ContactModel(
  name: 'Test User',
  email: 'test@example.com',
  message: 'Test message',
);

final service = SupabaseService();
final result = await service.sendContactMessage(contact);

print('Success: ${result['success']}');
print('Message: ${result['message']}');
```

---

## 📊 الخطوة 5: التحقق من البيانات

### في Supabase Dashboard:

```
1. اذهب إلى Table Editor
2. اختر جدول contacts
3. يجب أن تشاهد البيانات المُرسلة
```

---

## 🔐 الأمان

### Row Level Security (RLS)

تأكد من تفعيل RLS لحماية البيانات:

```sql
-- التحقق من تفعيل RLS
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public';

-- يجب أن يكون rowsecurity = true
```

### API Keys

⚠️ **مهم جداً:**
- ✅ لا تشارك الـ `service_role` key أبداً
- ✅ استخدم `anon` key فقط في التطبيق
- ✅ لا ترفع ملف `.env` على Git

---

## 📱 استخدام في التطبيق

### إرسال رسالة تواصل

```dart
// في contact_screen.dart
final contact = ContactModel(
  name: _nameController.text,
  email: _emailController.text,
  phone: _phoneController.text,
  message: _messageController.text,
);

final result = await SupabaseService().sendContactMessage(contact);

if (result['success']) {
  // نجح الإرسال
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(content: Text('تم إرسال رسالتك بنجاح')),
  );
}
```

### تسجيل زيارة صفحة

```dart
// في أي screen
@override
void initState() {
  super.initState();
  SupabaseService().trackPageVisit('home');
}
```

---

## 🐛 حل المشاكل

### مشكلة 1: "Failed to fetch"

**السبب:** مشكلة في الاتصال

**الحل:**
```dart
// تحقق من الـ URL والـ Key
print(AppConfig.supabaseUrl);
print(AppConfig.supabaseAnonKey);

// تأكد من صحتهما
```

### مشكلة 2: "RLS policy violation"

**السبب:** RLS يمنع العملية

**الحل:**
```sql
-- تحقق من الـ Policies
SELECT * FROM pg_policies WHERE tablename = 'contacts';

-- أضف Policy جديد إذا لزم الأمر
```

### مشكلة 3: "CORS error"

**السبب:** إعدادات CORS في Supabase

**الحل:**
```
1. اذهب إلى Settings → API
2. تحت "API Settings"
3. تأكد من إضافة domain التطبيق في Allowed Origins
```

---

## 📈 الميزات المتقدمة

### 1. Realtime Subscriptions

```dart
// الاستماع للتغييرات في الوقت الفعلي
import 'package:supabase_flutter/supabase_flutter.dart';

final subscription = Supabase.instance.client
  .from('contacts')
  .on(SupabaseEventTypes.insert, (payload) {
    print('رسالة جديدة: ${payload.newRecord}');
  })
  .subscribe();
```

### 2. Storage (لحفظ الملفات)

```dart
// رفع صورة
final file = File('path/to/image.jpg');
await Supabase.instance.client.storage
  .from('images')
  .upload('public/avatar.jpg', file);
```

### 3. Authentication

```dart
// تسجيل دخول
await Supabase.instance.client.auth.signInWithPassword(
  email: 'user@example.com',
  password: 'password',
);
```

---

## 📚 موارد إضافية

- 📖 [Supabase Docs](https://supabase.com/docs)
- 🎥 [Flutter + Supabase Tutorial](https://www.youtube.com/results?search_query=flutter+supabase)
- 💬 [Supabase Discord](https://discord.supabase.com)

---

## ✅ قائمة التحقق

- [ ] إنشاء مشروع Supabase
- [ ] الحصول على API Keys
- [ ] إنشاء جدول `contacts`
- [ ] إنشاء جدول `page_visits`
- [ ] تفعيل RLS
- [ ] إضافة Policies
- [ ] نسخ `.env.example` إلى `.env`
- [ ] إضافة Supabase URL & Key
- [ ] اختبار الاتصال
- [ ] اختبار إرسال رسالة
- [ ] التحقق من البيانات في Dashboard

---

## 🎉 تمت!

الآن تطبيقك متصل بـ Supabase بالكامل!

- ✅ إرسال رسائل التواصل
- ✅ تتبع الزيارات
- ✅ قاعدة بيانات آمنة
- ✅ جاهز للإنتاج

**للدعم:**
- 📧 info@viscendstudio.com
- 💬 +966 50 123 4567
