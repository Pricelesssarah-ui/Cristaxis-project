// import useSwr, { SWRResponse } from "swr";

import { BOOK_A_TAXI } from "../../utils/routes";
import { mutationRequest } from "./configs/sendData";

export const bookATaxi = async (values) => {
  const result = await mutationRequest(BOOK_A_TAXI, "post", values);
  console.log(result);
  return result;
};
