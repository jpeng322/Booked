export default function updateSignupAction(state, payload) {
    console.log("This is the state: ", state);
    console.log("This is the payload: ", payload);
    return {
        ...state,
        ...payload
    }


}