import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:8080/";

class UserService {
  async getClassRoom() {
    let config = {
      headers: {
        Authorization: Cookies.get("authorization"),
      },
    };

    let data = "";
    await axios.get(BASE_URL + "classroom", config).then((response) => {
      data = response;
    });
    return data;
  }
}

export default new UserService();
