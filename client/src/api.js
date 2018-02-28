const baseURL = "http://localhost:8080/api";

class Api {
  signup(email, username, password) {
    return fetch(`${baseURL}/users`, {
      method: "POST",
      body: JSON.stringify({
        email,
        username,
        password
      })
    }).then(res => res.json());
  }
}

export default new Api();
