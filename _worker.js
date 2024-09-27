export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      url.hostname = '48d2e41b-0e44-4d0f-9f53-ef38dd408cd0-00-15308xpsfs1nc.kirk.replit.dev'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
