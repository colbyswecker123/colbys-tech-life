export async function onRequestPost({ request, env }) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let data = {};
    if (contentType.includes('application/json')) {
      data = await request.json();
    } else {
      const formData = await request.formData();
      data = Object.fromEntries(formData.entries());
    }
    if (data.companyWebsite) {
      return json({ status: 'sent' }, 200);
    }
    const name = clean(data.name);
    const email = clean(data.email);
    const phone = clean(data.phone);
    const category = clean(data.category);
    const contactMethod = clean(data.contactMethod);
    const timeline = clean(data.timeline);
    const message = clean(data.message);
    if (!name || !email || !message) {
      return json({ status: 'error', message: 'Name, email, and message are required.' }, 400);
    }
    if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
      return json({ status: 'not_configured', message: 'Email delivery is not configured yet.' }, 200);
    }
    const subject = `New request from ${name} - Colby's Tech Life`;
    const text = [
      'New website request from Colby\'s Tech Life',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Category: ${category || 'Not selected'}`,
      `Preferred contact: ${contactMethod || 'Not selected'}`,
      `Timeline: ${timeline || 'Not selected'}`,
      '',
      'Message:',
      message
    ].join('\n');
    const html = `
      <h2>New request from Colby's Tech Life</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
      <p><strong>Category:</strong> ${escapeHtml(category || 'Not selected')}</p>
      <p><strong>Preferred contact:</strong> ${escapeHtml(contactMethod || 'Not selected')}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(timeline || 'Not selected')}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `;
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM,
        to: [env.CONTACT_TO],
        reply_to: email,
        subject,
        text,
        html
      })
    });
    if (!response.ok) {
      const err = await response.text();
      return json({ status: 'error', message: 'Email service rejected the request.', detail: err }, 502);
    }
    return json({ status: 'sent' }, 200);
  } catch (error) {
    return json({ status: 'error', message: 'Unable to process request.' }, 500);
  }
}
function clean(value) {
  return String(value || '').trim().slice(0, 5000);
}
function escapeHtml(value) {
  return String(value || '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}
