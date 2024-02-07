export const appConst = {
  homepage: '/fasty-task-preact/'
};

export function homepage (rest) {
  // Avoid string with double slash or without one
  if (/\/$/g.test(appConst.homepage) && /^\//g.test(rest)) return `${appConst.homepage}${rest.slice(1)}`;
  if (/[^/]$/g.test(appConst.homepage) && /^[^/]/g.test(rest)) return `${appConst.homepage}/${rest}`;
  return `${appConst.homepage}${rest}`;
}

export function getPage () {
  if (/\/$/g.test(appConst.homepage)) {
    return window.location.pathname.replace(appConst.homepage.slice(0, -1), '');
  }

  return window.location.pathname.replace(appConst.homepage, '');
}
