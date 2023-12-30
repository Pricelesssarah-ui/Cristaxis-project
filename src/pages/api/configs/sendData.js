// import { AxiosResponse } from "axios";
// import { axiosInstance } from "./fetcher";

const { axiosInstance } = require("./fetcher");

export const postData = async (url, data) => {
  try {
    const result = await axiosInstance().post(url, data);
    return result;
  } catch (err) {
    return err.response;
  }
};

export const putData = async (url, data, ) => {
  try {
    const result = await axiosInstance().put(url, data);
    return result;
  } catch (err) {
    return err.response;
  }
};

export const patchData = async (url, data) => {
  try {
    const result = await axiosInstance().patch(url, data);
    return result;
  } catch (err) {
    return err.response;
  }
};

export const deleteData = async (url, ) => {
  try {
    const result = await axiosInstance().delete(url);
    return result;
  } catch (err) {
    return err.response;
  }
};

export const postMultipartData = async (url, data) => {
  try {
    const result = await axiosInstance().post(url, data, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    return result;
  } catch (err) {
    return err.response;
  }
};

export const mutationRequest = (url, type, data) => {
  switch (type) {
    case "post":
      return postData(url, data);
    case "put":
      return putData(url, data);
    case "patch":
      return patchData(url, data);
    case "delete":
      return deleteData(url);
    case "data":
      return postMultipartData(url, data);
    default:
      return postData(url, data);
  }
};

// module.exports = {
//   postData,
//   putData,
//   patchData,
//   deleteData,
//   postMultipartData,
//   mutationRequest,
// };
