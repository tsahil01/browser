import { atom } from "recoil";

export const tabsAtom = atom({
    key: "tabsAtom",
    default: [
        {
            title: "Home",
            url: "/home",
            id: 1,
        },
    ],
})