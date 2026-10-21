import { useState } from 'react';

function indiaDate() {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date()).map(part => [part.type, part.value]));
  return `${parts.year}-${parts.month}-${parts.day}`;
}
const times = Array.from({ length: 34 }, (_, index) => {
  const hour = 6 + Math.floor(index / 2);
  const minute = index % 2 ? '30' : '00';
  return { value: `${String(hour).padStart(2, '0')}:${minute}`, label: `${hour % 12 || 12}:${minute} ${hour < 12 ? 'AM' : 'PM'}` };
});

export function VisitPlanForm() {
  const [status, setStatus] = useState('');
  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = form.elements;
    fields.time.setCustomValidity('');
    const when = new Date(`${fields.date.value}T${fields.time.value}:00+05:30`);
    if (when.getTime() <= Date.now()) {
      fields.time.setCustomValidity('Choose a future visit time.');
      fields.time.reportValidity();
      return;
    }
    const name = fields.name.value.trim();
    if (!name) { fields.name.setCustomValidity('Enter your name.'); fields.name.reportValidity(); return; }
    const plan = { name, date: fields.date.value, time: fields.time.value, guests: Number(fields.guests.value) };
    let stored = true;
    try { localStorage.setItem('br-tapri-visit-plan', JSON.stringify(plan)); } catch { stored = false; }
    const formatted = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' }).format(when);
    setStatus(`Visit plan ${stored ? 'saved' : 'prepared'} for ${name}: ${plan.guests} ${plan.guests === 1 ? 'guest' : 'guests'}, ${formatted}. No table has been reserved. Call the café to confirm.`);
  }
  return <form id="visit-plan-form" onSubmit={submit} onChange={event => {
    event.currentTarget.elements.time.setCustomValidity('');
    event.currentTarget.elements.name.setCustomValidity('');
  }}>
    <div className="plan-fields">
      <label>YOUR NAME<input name="name" required maxLength={80} autoComplete="given-name" /></label>
      <label>DATE<input name="date" type="date" required min={indiaDate()} defaultValue={indiaDate()} /></label>
      <label>TIME<select name="time" required defaultValue="18:30">{times.map(time => <option value={time.value} key={time.value}>{time.label}</option>)}</select></label>
      <label>GUESTS<select name="guests" defaultValue="2">{[1, 2, 3, 4, 5, 6].map(count => <option value={count} key={count}>{count} {count === 1 ? 'guest' : 'guests'}</option>)}</select></label>
    </div>
    <button className="plan-submit" type="submit">Save visit plan</button>
    <p className="plan-result" role="status" aria-live="polite">{status}</p>
  </form>;
}

export function PassForm() {
  const [status, setStatus] = useState('');
  function submit(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value.trim().toLowerCase();
    let stored = true;
    try { localStorage.setItem('br-tapri-first-chai-pass', JSON.stringify({ email, savedAt: new Date().toISOString() })); } catch { stored = false; }
    setStatus(stored ? `Pass saved on this device for ${email}. Email delivery is not connected yet.` : `Pass prepared for ${email}. Browser storage and email delivery are unavailable.`);
  }
  return <form className="pass-form" onSubmit={submit}>
    <div className="pass-form-row"><input name="email" type="email" required autoComplete="email" placeholder="you@email.com" aria-label="Email for your first-chai pass" /><button type="submit">Get the pass</button></div>
    <p className="pass-note">Save a pass on this device. No email is sent.</p>
    <p className="pass-status" role="status" aria-live="polite">{status}</p>
  </form>;
}
