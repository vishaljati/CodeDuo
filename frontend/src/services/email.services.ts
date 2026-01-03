import api from "../libs/axios.ts";

export interface Email {
    email: string;
}
interface CreateEmailResponse {
    id: string;
    email: string;
}
export const postEmail = async (email: Email): Promise<CreateEmailResponse> => {
  const res = await api.post<CreateEmailResponse>("/email-waitlist", email);
  return res.data;
};


