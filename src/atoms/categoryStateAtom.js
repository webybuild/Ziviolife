import { atom } from "recoil";

const categoryState = atom({
    key: 'category',
    default: []
})

export default categoryState