import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:8080/";

class UserService {
  getUsers() {
    let config = {
      headers: {
        Authorization: Cookies.get("authorization"),
      },
    };
    return axios.get(BASE_URL + "user", config);
  }
}

export default new UserService();
