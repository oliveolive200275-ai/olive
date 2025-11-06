
// Mock AI diagnosis workflow (client-side demo). Replace with real API later.
const form = document.getElementById('diag-form');
const previewImg = document.getElementById('preview');
const processedImg = document.getElementById('processed');
const resultBox = document.getElementById('result');
const recsBox = document.getElementById('recs');

const mockDiseases = [
  {name:'تبقع عين الطاووس (Olive Peacock Spot)', severity:'متوسط', product:'مانكوزيب 80% أو نحاسي', timing:'بعد المطر وأثناء الرطوبة العالية', how:'رش على الوجهين + تكرار بعد 10–14 يوم', conf:92},
  {name:'العث الكيسي (Aculus olearius)', severity:'منخفض', product:'أكاريسيد موصى به', timing:'بداية الربيع والخريف', how:'تغطية جيدة للأوراق المصابة', conf:88},
  {name:'عدوى فطرية سطحية', severity:'متوسط', product:'مبيد فطري واسع الطيف', timing:'مساءً لتجنب الحرارة', how:'التزام بالجرعات والتعليمات', conf:84},
  {name:'سليمة (Healthy)', severity:'منخفض', product:'—', timing:'—', how:'لا حاجة لعلاج', conf:97}
];

form?.addEventListener('change', (e)=>{
  const file = e.target.files?.[0];
  if(file){
    const url = URL.createObjectURL(file);
    previewImg.src = url;
    processedImg.src = url; // demo: show same image as "processed"
  }
});

form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(!previewImg.src){ alert('الرجاء اختيار صورة'); return; }
  const d = mockDiseases[Math.floor(Math.random()*mockDiseases.length)];
  resultBox.innerHTML = `
    <div class="card">
      <div class="form-row">
        <div><strong>اسم المرض:</strong> ${d.name}</div>
        <div><strong>نسبة الدقة:</strong> ${d.conf}%</div>
      </div>
      <div class="form-row">
        <div><strong>درجة الخطورة:</strong> <span class="tag">${d.severity}</span></div>
        <div><strong>ملاحظة:</strong> هذا عرض تجريبي، اربط بنموذج الذكاء لاحقًا.</div>
      </div>
    </div>`;
  recsBox.innerHTML = `
    <div class="card">
      <h3>التوصيات</h3>
      <ul class="clean">
        <li><strong>العلاج:</strong> ${d.product}</li>
        <li><strong>إرشادات الاستخدام:</strong> ${d.how}</li>
        <li><strong>أفضل توقيت للرش:</strong> ${d.timing}</li>
      </ul>
      <a class="btn btn-primary" href="products.html#related">عرض منتجات مناسبة للمرض</a>
    </div>`;
});
