import qs from "qs";
import axios from "axios";
export const getAuthorizationHeader = async () => {
  const parameter = {
    grant_type: "client_credentials",
    client_id: "a183492765-0c200f8b-de74-4c41",
    client_secret: "ccb67e23-a87e-4489-8702-76b100ccb211",
  };

  const auth_url =
    "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";
  const res = await axios({
    method: "POST",
    url: auth_url,
    data: qs.stringify(parameter),
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
  const accesstoken = res.data;
  return {
    authorization: `Bearer ${accesstoken.access_token}`,
  };
};
