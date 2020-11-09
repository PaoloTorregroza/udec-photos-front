import axios from "axios";

class PhotoServices {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async all() {
    const res = await axios.get(`${this.apiUrl}/photo`);
    return res.data;
  }

  async one(id) {
    const res = await axios.get(`${this.apiUrl}/photo/${id}`);
    return res.data;
  }

  async update(photo, id) {
    const res = await axios.put(`${this.apiUrl}/photo/${id}`, photo);
    return res.data;
  }

  async delete(id) {
    const res = await axios.delete(`${this.apiUrl}/photo/${id}`);
    return res.data;
  }

  async save(photo) {
    const res = await axios.post(`${this.apiUrl}/photo/`, photo);
    return res.data;
  }
}

export default PhotoServices;
