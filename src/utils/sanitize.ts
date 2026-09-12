/**
 * Sanitizes HTML to prevent XSS while allowing safe inline formatting tags
 * commonly used in exam questions (e.g. <u> for pronunciation underlines, <b> for bold words).
 */
export function sanitizeHtml(dirty: string): string {
  if (!dirty || typeof dirty !== 'string') return '';

  // If there are no HTML tags, return as-is
  if (!dirty.includes('<') || !dirty.includes('>')) {
    return dirty;
  }

  // Permitted tags for quiz content
  const ALLOWED_TAGS = new Set(['b', 'strong', 'i', 'em', 'u', 'mark', 'br', 'span', 'code']);

  // Remove dangerous tags and their content entirely
  let clean = dirty.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  clean = clean.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  clean = clean.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');

  // Strip event handlers (onload, onerror, onclick, etc.) and javascript: protocols
  clean = clean.replace(/\son\w+\s*=\s*(['"]).*?\1/gi, '');
  clean = clean.replace(/\son\w+\s*=\s*[^>\s]+/gi, '');
  clean = clean.replace(/javascript:/gi, '');

  // Replace disallowed tags with escaped text
  clean = clean.replace(/<\/?([a-z0-9]+)(?:\s+[^>]*)?>/gi, (match, tagName) => {
    const lower = tagName.toLowerCase();
    if (ALLOWED_TAGS.has(lower)) {
      // For permitted tags, return clean tag without dangerous attributes
      if (match.startsWith('</')) {
        return `</${lower}>`;
      }
      if (lower === 'br') {
        return '<br />';
      }
      return `<${lower}>`;
    }
    // Disallowed tag: return empty string
    return '';
  });

  return clean;
}
