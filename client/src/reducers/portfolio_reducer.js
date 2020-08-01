export default function (state = {}, action) {
    switch (action.type) {
        case 'Get_Works':
            return { ...state, list: action.payload }
        case 'Get_Work':
            return {
                ...state, work: action.payload
            }
        case 'Clear_Work':
            return {
                ...state, work: action.payload
            }
        case 'Add_portfolio':
            return { ...state, newwork: action.payload }
        case 'Clear_NewWork':
            return { ...state, newwork: action.payload }
        case 'Update_Work':
            return {
                ...state,
                updateWork: action.payload.success,
                work: action.payload.doc
            }
        case 'Delete_work':
            return {
                ...state,
                postDeleted: action.payload
            }
        case 'Clear_Workedit':
            return {
                ...state,
                updateWork: action.payload.updateWork,
                postDeleted: action.payload.postDeleted,
                work: action.payload.work

            }
        default:
            return state;
    }
}