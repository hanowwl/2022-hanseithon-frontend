import { atom } from "recoil";

export const globalAccessToken = atom({
  key: "token",
  default: {
    accessToken: "",
    state: false,
  },
});

export const globalUserPrivacyInfo = atom({
  key: "privacyInfo",
  default: {
    phone: "",
    email: "",
  },
});
