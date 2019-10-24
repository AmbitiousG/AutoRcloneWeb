export default {
  baseUrl: `${location.href}rc_api/`,
  async post(path, data) {
    let body = null;
    if(!data) {
      body = JSON.stringify(data);
    }
    const res = await fetch(this.baseUrl + path, {
      method: "POST", // or 'PUT
      body
    });
    res.json();
    return res;
  },
  async asyncPost(path, data) {
    data = data || {};
    data = {...data, _async: true};
    return await this.post(path, data);
  },
  async getStats() {
    return await this.post("core/stats");
  },
  async copy(source, dest) {
    return await this.asyncPost("sync/copy");
  }
}
