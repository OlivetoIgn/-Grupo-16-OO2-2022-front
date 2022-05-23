import axios from "axios";

const BASE_URL = "http://localhost:8080/";

class UserService {
  getUsers() {
    let config = {
      headers: {
        //Este token expira, es solo de prueba
        Authorization:
          "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzb21lbWFpbEBkdW1teS5jb20iLCJleHAiOjE2NTMyODIzODJ9.wXnR0CKK_lWPh-RfVPOetENhEVkmto85pskiLunevabpecKInNdtGlwTS4lD0AB7GgEMhJqaUMRGWJgfPBmiRA",
      },
    };
    return axios.get(BASE_URL + "user", config);
  }
}

export default new UserService();
