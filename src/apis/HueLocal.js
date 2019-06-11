import axios from "axios";

const BASE_URL = "http://192.168.0.104/api";
const KEY = "8gvccY9GfZS0t8HQF4rPTQw0YezVYzdvPCAMnqyO";

export default axios.create({
  baseURL: [BASE_URL, KEY].join("/")
});
