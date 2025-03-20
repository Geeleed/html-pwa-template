# PWA (progressive web application) template

1. หาไฟล์ icon ขนาดต่าง ๆ มาให้พร้อมแล้วเก็บไว์ที่โฟลเดอร์ icons หรือใช้ https://pwa-icon-generator.vercel.app

2. ไฟล์ favicon.ico ใช้ https://favicon.io/favicon-converter อันนี้มีหรือไม่มีก็ได้

3. แก้ไฟล์ manifest.json

```bash
{
  "name": ชื่อแอปของคุณ เช่น "My App",
  "short_name": ชื่อแบบสั้น เช่น "App",
  "start_url": ไฟล์เริ่มต้นแสดงหน้าแอป เช่น "index.html" ถ้าเป็น "/" จะเป็นการใช้ไฟล์ index.html,
  "display": "standalone" อันนี้ไม่ต้องแก้,
  "background_color": เลือกสีพื้นหลังตามชอบ เช่น "#ffffff" สีนี้จะเป็นพื้นหลังตอนกำลังโหลดแอป,
  "theme_color": เลือกสีธีมตามชอบ เช่น "#000000" สีนี้จะปรากฏบริเวณ title bar ของหน้าต่างแอป,
  "icons": [
    {
      "src": "icons/icon-48x48.png" ที่อยู่ของ icon ที่จะใช้ในแอป,
      "sizes": "48x48",
      "type": "image/png"
    },
  ]
}

```

3. พัฒนาโปรเจ็กตัวเองในไฟล์ index.html, script.js, style.js (อยู่ในโฟลเดอร์ src)

4. เพิ่มรายการที่อยู่ไฟล์อื่น ๆ ที่คุณสร้างใหม่ลงใน service-worker.js

```bash
const src = [
  "./src/script.js",
  "./src/style.css",
  ที่อยู่ไฟล็อื่น ๆ ของคุณที่เพิ่มมา
];

```

5. รัน server ถ้าใช้ python ก็มาที่โฟลเดอร์โปรเจ็กแล้วใช้คำสั่งตามนี้

```bash
python -m http.server 8080
```

6. เข้าเว็บได้ที่ http://localhost:8080 ถ้าเปิดในมือถือจะ install ยังไม่ได้ ต้อง deploy ก่อนจึงจะใช้ได้

ไฟล์ register.js