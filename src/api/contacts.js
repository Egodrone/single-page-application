import axios from "axios";

// we can also use this api as a baseURL
// https://mj-tg-productmanagement.herokuapp.com/api/product/
export default axios.create({
    baseURL: "http://localhost:3006/",
});