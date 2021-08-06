export default class Fetch {
    async doPost(method) {
      const response = await fetch("/request", {
        "method": "POST",
        "body": JSON.stringify({method}),
        "headers": {
          "Content-Type": "application/json"
        }
      })
      return await response.json()
    }

    async doGet() {
      const response = await fetch("/request", {
        "method": "GET"
      })
      return await response.json()
    }

    async doPut(method) {
      const response = await fetch("/request", {
        "method": "PUT",
        "body": JSON.stringify({method}),
        "headers": {
          "Content-Type": "application/json"
        }
      })
      return await response.json()
    }

    async doDelete() {
      const response = await fetch("/request", {
        "method": "DELETE"
      })
      return await response.json()
    }
}
