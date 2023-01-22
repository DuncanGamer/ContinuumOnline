export const token = () => {
  return localStorage.getItem("token");
}

export const setToken =(token) => {
  localStorage.setItem("token", token);
}

export const removeToken = () => {
  localStorage.removeItem("token");
}

export const clearLocal =() => {
  localStorage.clear();
}