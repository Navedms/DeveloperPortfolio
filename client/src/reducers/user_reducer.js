export default function (state = {}, action) {
    switch (action.type) {
        case 'User_Login':
            return { ...state, login: action.payload }
        case 'User_Auth':
            return { ...state, login: action.payload }
        case 'Get_User_Works':
            return { ...state, userWorks: action.payload }
        case 'Register_user':
            return { ...state, user: action.payload }
        case 'Clear_Register':
            return { ...state, user: action.payload }
        default:
            return state;
    }
}