import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = (authToken) => {
  try {
    SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("error");
  }
};

const getToken = () => {
  try {
    return SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error Getting Auth Code");
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = () => {
  try {
    SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default { getToken, getUser, removeToken, storeToken };
