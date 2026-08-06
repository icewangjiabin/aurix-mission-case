export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  res.setHeader('Cache-Control', 'no-store');
  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const { company, name, email, phone, projectType, quantity, equipment, environment, deadline, website } = body;
  if (website) return res.status(200).json({ ok: true });
  if (!company || !name || !email || !equipment) return res.status(400).json({ error: '請填寫公司、姓名、Email與設備內容。' });
  const normalize = (value = '', max = 200) => String(value).trim().slice(0, max);
  const fields = {
    company: normalize(company),
    name: normalize(name),
    email: normalize(email, 254),
    phone: normalize(phone),
    projectType: normalize(projectType),
    quantity: normalize(quantity),
    equipment: normalize(equipment, 5000),
    environment: normalize(environment, 3000),
    deadline: normalize(deadline)
  };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) return res.status(400).json({ error: '請填寫有效的 Email。' });
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL || 'aurix.cases@gmail.com';
  const from = process.env.INQUIRY_FROM_EMAIL;
  if (!apiKey || !from) return res.status(503).json({ error: 'Email service is not configured' });
  const escape = (value='') => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const html = `
    <h2>奧銳任務箱｜新專案詢問</h2>
    <p><strong>公司：</strong>${escape(fields.company)}</p>
    <p><strong>聯絡人：</strong>${escape(fields.name)}</p>
    <p><strong>Email：</strong>${escape(fields.email)}</p>
    <p><strong>電話：</strong>${escape(fields.phone)}</p>
    <p><strong>專案類型：</strong>${escape(fields.projectType)}</p>
    <p><strong>預估數量：</strong>${escape(fields.quantity)}</p>
    <p><strong>設備內容：</strong><br>${escape(fields.equipment).replace(/\n/g,'<br>')}</p>
    <p><strong>環境／運輸條件：</strong><br>${escape(fields.environment).replace(/\n/g,'<br>')}</p>
    <p><strong>需求時間：</strong>${escape(fields.deadline)}</p>`;
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [to], reply_to: fields.email, subject: `無人機任務箱詢問｜${fields.company}`, html })
  });
  const result = await response.json();
  if (!response.ok) return res.status(500).json({ error: result.message || 'Email send failed' });
  return res.status(200).json({ ok: true });
}
