const API = {
  get: (path) => {
    return fetch(path, { credentials: "include", method: "GET" });
  },
  getWithBody: (path, body) => {
    return fetch(path, {
      credentials: "include",
      method: "GET",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(body),
    });
  },
  post: (path) => {
    return fetch(path, { credentials: "include", method: "POST" });
  },
  postWithBody: (path, body) => {
    return fetch(path, {
      credentials: "include",
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(body),
    });
  },
  putWithBody: (path, body) => {
    return fetch(path, {
      credentials: "include",
      method: "PUT",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(body),
    });
  },
  deleteWithBody: (path, body) => {
    return fetch(path, {
      credentials: "include",
      method: "DELETE",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(body),
    });
  },
};

export default API;
