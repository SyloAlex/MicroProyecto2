import { SET_USER, SET_VIEW } from "./type";

const setUserAction = (payload) => ({
    type: SET_USER,
    payload
})
const setViewAction = (payload) => ({
    type: SET_VIEW,
    payload
})

export { setUserAction, setViewAction };