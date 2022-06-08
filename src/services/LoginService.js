import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:8080/";

class LoginService {
  async login(userName, password) {
    let credentials = {
      userName,
      password,
    };

    await axios.post(BASE_URL + "login", credentials).then((response) => {
      console.log(response.headers);
      Cookies.set("authorization", response.headers["authorization"]);
      Cookies.set("roles", response.headers["authorities"]);
    });
  }
}

export default new LoginService();

/*

    await axios.post(BASE_URL + "login", credentials).catch().then((response) => {
      Cookies.set("authorization", response.headers["authorization"]);
    });
    */
