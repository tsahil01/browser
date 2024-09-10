import { atom } from "recoil";

export const activeTabAtom = atom({
    key: "activeTabAtom",
    default: {
        title: "Home",
        url: "/home",
        id: 1,
    },
})