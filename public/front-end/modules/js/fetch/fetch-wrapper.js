export default class Fetch {
    async post(method) {
      const response = await fetch("/request", {
        "method": "POST",
        "body": JSON.stringify({method}),
        "headers": {
          "Content-Type": "application/json"
        }
      })
      return await response.json()
    }
}
