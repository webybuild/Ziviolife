import { atom } from "recoil";

const variantState = atom({
    key: 'variants',
    default: []
})

export default variantState