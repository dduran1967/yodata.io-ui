// @flow
function debrac(url: string): string {
  (url: string)
  if (url[0] === '<') {
    return url.slice(1, -1)
  }
  return url;
}

export default debrac
