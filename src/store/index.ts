import { atom } from "recoil";

export const globalAccessToken = atom({
  key: "token",
  default: {
    accessToken: "",
    state: false,
  },
});
