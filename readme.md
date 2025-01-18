# Blog App API

Blog App API, Express.js ve MongoDB kullanarak oluşturulmuş bir blog yönetim API'sidir. Bu API, blog ekleme, güncelleme, silme ve listeleme gibi temel işlemleri gerçekleştirebilmenizi sağlar. Ayrıca, kullanıcıların IP adreslerini takip etmek için bir özellik de içerir.

## Özellikler

- **Tüm blogları listele**: API, tüm blogları almak için kullanılabilir.
- **Yeni blog ekle**: API üzerinden yeni blog ekleyebilirsiniz.
- **Blog güncelleme**: Var olan bir blogu güncelleyebilirsiniz.
- **Blog silme**: Blogları silebilirsiniz.
- **Tüm blogları silme**: Tüm blogları silme imkanı sunar.
- **IP adresi takibi**: Eklenen her blog ile birlikte kullanıcının IP adresi kaydedilir.

## Teknolojiler

- **Express.js**: Web framework olarak kullanılmıştır.
- **MongoDB ve Mongoose**: Veritabanı olarak MongoDB kullanılır ve Mongoose ile modelleme yapılır.
- **dotenv**: Çevresel değişkenler için kullanılır.

## Başlangıç

### Gereksinimler

- Node.js
- MongoDB

### Kurulum

1. Depoyu klonlayın:

   ```bash
   git clone https://github.com/MehmetYilmazY/blog-api.git
   ```

2. Bağımlılıkları yükleyin:

   ```bash
   cd blog-api
   npm install
   ```

3. `.env` dosyasını oluşturun ve MongoDB bağlantı URL'sini girin:

   ```env
   MONGODB_URI=mongodb://localhost:27017/blogs
   ```

4. Uygulamayı başlatın:

   ```bash
   npm start
   ```

   Sunucu, `http://localhost:3000` adresinde çalışmaya başlayacaktır.

## API Endpoint'leri

### 1. Hoşgeldiniz Mesajı

**GET** `/`  
API'ye hoşgeldiniz mesajı döner.

**Örnek Yanıt**:
```json
{
  "message": "#Blog Uygulaması API'sine hoşgeldiniz#",
  "additionalMessage": "Bu API ile blog ekleyebilir, güncelleyebilir ve silebilirsiniz. İlgili sayfalara sorgu atarak devam edin..."
}
```

### 2. Tüm Blogları Listele

**GET** `/blogs`  
Tüm blogları getirir.

**Örnek Yanıt**:
```json
[
  {
    "title": "Blog Başlığı",
    "content": "Blog içeriği...",
    "writer": "Yazar Adı",
    "ipAddress": "192.168.1.1"
  }
]
```

### 3. Yeni Blog Ekle

**POST** `/blogs`  
Yeni bir blog ekler. Gönderilen verilerde başlık, içerik ve yazar bilgileri bulunmalıdır.

**Örnek İstek**:
```json
{
  "title": "Yeni Blog Başlığı",
  "content": "Yeni blog içeriği",
  "writer": "Yazar Adı"
}
```

**Örnek Yanıt**:
```json
{
  "title": "Yeni Blog Başlığı",
  "content": "Yeni blog içeriği",
  "writer": "Yazar Adı",
  "ipAddress": "192.168.1.1"
}
```

### 4. Belirli Bir Blogu Getir

**GET** `/blogs/:id`  
Belirli bir blogu id'ye göre getirir.

**Örnek Yanıt**:
```json
{
  "title": "Blog Başlığı",
  "content": "Blog içeriği...",
  "writer": "Yazar Adı",
  "ipAddress": "192.168.1.1"
}
```

### 5. Blogu Güncelle

**PUT** `/blogs/:id`  
Belirli bir blogu id'ye göre günceller.

**Örnek İstek**:
```json
{
  "title": "Güncellenmiş Blog Başlığı",
  "content": "Güncellenmiş blog içeriği",
  "writer": "Yeni Yazar"
}
```

**Örnek Yanıt**:
```json
{
  "title": "Güncellenmiş Blog Başlığı",
  "content": "Güncellenmiş blog içeriği",
  "writer": "Yeni Yazar"
}
```

### 6. Blogu Sil

**DELETE** `/blogs/:id`  
Belirli bir blogu id'ye göre siler.

**Örnek Yanıt**:
```json
{
  "message": "Blog silindi"
}
```

### 7. Tüm Blogları Sil

**DELETE** `/blogs`  
Tüm blogları siler.

**Örnek Yanıt**:
```json
{
  "message": "Tüm bloglar silindi"
}
```

## Gelecek Özellikler

- **Rol tabanlı kimlik doğrulama**: Kullanıcılar için rol tabanlı kimlik doğrulama eklemeyi planlıyorum.
- **Frontend entegrasyonu**: API'yi bir frontend uygulaması ile entegre edeceğim.

## Katkıda Bulunma

Bu proje açık kaynaklıdır ve katkıda bulunmak isteyen herkesin katkıları kabul edilir. Eğer bir hata bulursanız veya bir özellik eklemek isterseniz, bir pull request açabilirsiniz.

## Lisans

MIT Lisansı altında lisanslanmıştır.

---

Bu API, yazılım geliştirme ve blog yönetim sistemleri hakkında bilgi edinmek isteyenler için basit ama etkili bir örnek teşkil etmektedir.
