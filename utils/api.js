export default {
  baseUrl: `${location.href}rc_api/`,
  async post(path) {
    const res = await fetch(this.baseUrl + path, {
      method: "POST", // or 'PUT
    });
    res.json();
    return res;
  },
  async getStats() {
    return await this.post("core/stats");
  }
}
