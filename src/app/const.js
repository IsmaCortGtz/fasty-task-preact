export const appConst = {
  homepage: '/fasty-task-preact/'
};

// Add homepage to the given url
export function homepage (url) {
  // Avoid string with double slash or without one
  if (/\/$/g.test(appConst.homepage) && /^\//g.test(url)) return `${appConst.homepage}${url.slice(1)}`;
  if (/[^/]$/g.test(appConst.homepage) && /^[^/]/g.test(url)) return `${appConst.homepage}/${url}`;
  return `${appConst.homepage}${url}`;
}

// Return current page without homepage
export function getPage () {
  return removeHomepage(window.location.pathname);
}

// Remove homepage from the given url
export function removeHomepage (url) {
  if (!url.includes(appConst.homepage)) return url;
  if (/\/$/g.test(appConst.homepage)) {
    return url.replace(appConst.homepage.slice(0, -1), '');
  }

  return url.replace(appConst.homepage, '');
}

// Check if the given url is the current page
export function isCurrent (url, current = undefined) {
  let isCurrent = false;
  const givenUrl = url[0] === '/' ? url.split('/').slice(1) : url.split('/');
  const currentUrl = (current || getPage()).split('/').slice(1);

  if (givenUrl.length !== currentUrl.length) return false;
  currentUrl.forEach((section, index) => {
    if (givenUrl[index].includes(':')) return;
    if (section !== givenUrl[index]) { isCurrent = false; return; }
    isCurrent = true;
  });

  return isCurrent;
}
