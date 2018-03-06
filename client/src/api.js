class Api {
  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  _baseUrl: string;

  _getUserToken() {
    return localStorage.getItem("authToken");
  }

  _fetch(method, url, body) {
    // console.log("body:", body);
    const token = this._getUserToken();
    // console.log("token:", token);
    let headers;
    if (token) {
      headers = {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      };
    }
    if (method === "GET") {
      return fetch(`${this._baseUrl}/${url}`, {
        method,
        headers
      }).then(res => res.json());
    } else {
      return fetch(`${this._baseUrl}/${url}`, {
        method,
        body: JSON.stringify(body),
        headers
      }).then(res => res.json());
    }
  }

  _addList(title) {
    return this._fetch("POST", "lists/add/", { title });
  }

  _updateList(listID, title) {
    return this._fetch("PUT", `lists/${listID}/`, { title });
  }

  _getAllList() {
    return this._fetch("GET", `lists/`, null);
  }
  _getList() {
    return this._fetch("GET", `lists/me`, null);
  }

  _getSingleList(listID) {
    return this._fetch("GET", `lists/${listID}`, null);
  }

  _deleteList(listID) {
    return this._fetch("DELETE", `lists/${listID}`, null);
  }

  _addItem(listID, item) {
    let title = item.title;
    let note = item.note;
    return this._fetch("POST", `lists/${listID}/`, { title, note });
  }

  _deleteItem(listID, itemID) {
    return this._fetch("DELETE", `lists/${listID}/items/${itemID}`, null);
  }

  _updateItem(listID, itemID, item) {
    return this._fetch("PUT", `lists/${listID}/items/${itemID}`, { item });
  }

  _getAllItem(listID) {
    console.log("_getAllItem listID:", listID);
    return this._fetch("GET", `lists/${listID}/items`, null);
  }

  _getSingleItem(listID, itemID) {
    return this._fetch("GET", `lists/${listID}/items/${itemID}`, null);
  }
}

export default new Api("http://localhost:8080/api");
