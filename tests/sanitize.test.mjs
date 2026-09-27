import test from 'node:test';
import assert from 'node:assert/strict';

// Test sanitization logic mirroring src/utils/sanitize.ts
function sanitizeHtml(dirty) {
  if (!dirty || typeof dirty !== 'string') return '';
  if (!dirty.includes('<') || !dirty.includes('>')) {
    return dirty;
  }
  const ALLOWED_TAGS = new Set(['b', 'strong', 'i', 'em', 'u', 'mark', 'br', 'span', 'code']);
  let clean = dirty.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  clean = clean.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  clean = clean.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
  clean = clean.replace(/\son\w+\s*=\s*(['"]).*?\1/gi, '');
  clean = clean.replace(/\son\w+\s*=\s*[^>\s]+/gi, '');
  clean = clean.replace(/javascript:/gi, '');
  clean = clean.replace(/<\/?([a-z0-9]+)(?:\s+[^>]*)?>/gi, (match, tagName) => {
    const lower = tagName.toLowerCase();
    if (ALLOWED_TAGS.has(lower)) {
      if (match.startsWith('</')) {
        return `</${lower}>`;
      }
      if (lower === 'br') {
        return '<br />';
      }
      return `<${lower}>`;
    }
    return '';
  });
  return clean;
}

test('sanitizeHtml: strips dangerous script tags and event handlers', () => {
  const dirty = '<p>Hello <script>alert("xss")</script><img src="x" onerror="alert(1)"><u>word</u></p>';
  const clean = sanitizeHtml(dirty);
  assert.equal(clean.includes('<script>'), false);
  assert.equal(clean.includes('alert'), false);
  assert.equal(clean.includes('onerror'), false);
  assert.equal(clean.includes('<u>word</u>'), true);
});

test('sanitizeHtml: allows educational formatting tags', () => {
  const input = 'Choose the word with different stress: <b>conduct</b>, <i>produce</i>, <mark>present</mark>';
  const clean = sanitizeHtml(input);
  assert.equal(clean, 'Choose the word with different stress: <b>conduct</b>, <i>produce</i>, <mark>present</mark>');
});

test('sanitizeHtml: handles plain text and empty values safely', () => {
  assert.equal(sanitizeHtml(''), '');
  assert.equal(sanitizeHtml(null), '');
  assert.equal(sanitizeHtml(undefined), '');
  assert.equal(sanitizeHtml('No tags here'), 'No tags here');
});
