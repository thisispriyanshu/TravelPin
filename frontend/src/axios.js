import axios from "axios";

const site = axios.create({
  baseURL: "https://travelpin.onrender.com/api",
});

export default site;
