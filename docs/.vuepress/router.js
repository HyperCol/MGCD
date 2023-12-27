module.exports = {
  extendRoutes(routes, resolve) {
    routes.forEach((route) => {
      route.path = route.path.replace(/\/$/, '') + '.html';
    });
  },
};
