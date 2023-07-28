export const base_url = "http://localhost:6000/api/";

const getTokenFromLocalStorage = localStorage.getItem("loggedcustomer")
  ? JSON.parse(localStorage.getItem("loggedcustomer"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage?.token !== null
        ? getTokenFromLocalStorage?.token
        : ""
    }`,
    Accept: "application/json",
  },
};
