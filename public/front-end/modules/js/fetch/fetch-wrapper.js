export default class Fetch {
  async doPost(URL, method) {
    const response = await fetch("/request", {
      method: "POST",
      body: JSON.stringify(method),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await (URL, response).then((response) => response.json());
  }

  async doGet(URL) {
    const response = await fetch("/request", {
      method: "GET",
    });
    return await (URL, response).then((response) => response.json());
  }

  async doPut(URL, method) {
    const response = await fetch("/request", {
      method: "PUT",
      body: JSON.stringify(method),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await (URL, response).then((response) => response.json());
  }

  async doDelete(URL) {
    const response = await fetch("/request", {
      method: "POST",
    });
    return await (URL, response).then((response) => response.json());
  }
}
