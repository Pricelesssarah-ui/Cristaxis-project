import useSwr, { SWRResponse } from "swr";

import { CONTACT_US } from "../../utils/routes";
import { mutationRequest } from "./configs/sendData";

export const contactCompany = async (values) => {
    const result = await mutationRequest(CONTACT_US, "post", values);
    return result;
};