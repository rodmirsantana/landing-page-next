import DOMPurify from 'isomorphic-dompurify'

export const sanitizer = (possiblyDangeroushtml) => {
  return DOMPurify.sanitize(possiblyDangeroushtml)
}
