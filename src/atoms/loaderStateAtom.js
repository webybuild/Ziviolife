import { atom } from "recoil";

const loaderState = atom({
    key: 'loaderstate',
    default: false
})

export default loaderState