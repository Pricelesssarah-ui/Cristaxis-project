import { AxiosResponse } from "axios";
import { axiosInstance } from "./fetcher";

const { axiosInstance } = require("./fetcher");

const postData = async (url, data, service) => {
  try {
    const result = await axiosInstance(service).post(url, data);
    return result;
  } catch (err) {
    return err.response;
  }
};

const putData = async (url, data, service) => {
  try {
    const result = await axiosInstance(service).put(url, data);
    return result;
  } catch (err) {
    return err.response;
  }
};

const patchData = async (url, data, service) => {
  try {
    const result = await axiosInstance(service).patch(url, data);
    return result;
  } catch (err) {
    return err.response;
  }
};

const deleteData = async (url, service) => {
  try {
    const result = await axiosInstance(service).delete(url);
    return result;
  } catch (err) {
    return err.response;
  }
};

const postMultipartData = async (url, data, service) => {
  try {
    const result = await axiosInstance(service).post(url, data, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    return result;
  } catch (err) {
    return err.response;
  }
};

const mutationRequest = (url, type, data, service) => {
  switch (type) {
    case "post":
      return postData(url, data, service);
    case "put":
      return putData(url, data, service);
    case "patch":
      return patchData(url, data, service);
    case "delete":
      return deleteData(url, service);
    case "data":
      return postMultipartData(url, data, service);
    default:
      return postData(url, data, service);
  }
};

module.exports = {
  postData,
  putData,
  patchData,
  deleteData,
  postMultipartData,
  mutationRequest,
};
