import axios from 'axios';

export function getWork(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ''
) {
    const request = axios.get(`/api/portfolios?limit=${limit}&skip=${start}&order=${order}`)
        .then(response => {
            if (list) {
                return [...list, ...response.data]
            } else {
                return response.data
            }
        })
    return {
        type: 'Get_Works',
        payload: request
    }
}

export function GetWork(id) {
    const request = axios.get(`/api/getportfolio?id=${id}`)

        .then(response => response.data)
    return {
        type: 'Get_Work',
        payload: request
    }
}

export function ClearWork() {
    return {
        type: 'Clear_Work',
        payload: {
        }
    }
}
export function getUserWorks(userId) {
    const request = axios.get(`/api/user_posts?user=${userId}`)
        .then(response => response.data)
    return {
        type: 'Get_User_Works',
        payload: request
    }
}

export function updateWork(data) {
    const request = axios.post('/api/portfolio_update', data)
        .then(response => response.data);
    return {
        type: 'Update_Work',
        payload: request
    }
}

export function deleteWork(id) {
    const request = axios.delete(`/api/portfolio_delete?id=${id}`)
        .then(response => response.data)

    return {
        type: 'Delete_work',
        payload: request
    }
}

export function ClearWorkedit() {
    return {
        type: 'Clear_Workedit',
        payload: {
            work: {},
            updateWork: false,
            postDeleted: false
        }
    }
}

// ========== User ==========

export function loginUser({ email, password }) {
    const request = axios.post('/api/login', { email, password })
        .then(response => response.data)
    return {
        type: 'User_Login',
        payload: request
    }
}

export function auth() {
    const request = axios.get('/api/auth')
        .then(response => response.data);

    return {
        type: 'User_Auth',
        payload: request
    }
}
// ========== POST PortFolio ========= //
export function AddWorkAction(portfolio) {
    const request = axios.post('/api/portfolio', portfolio)
        .then(response => response.data);

    return {
        type: 'Add_portfolio',
        payload: request
    }
}
export function clearNewWork() {
    return {
        type: 'Clear_NewWork',
        payload: {}
    }
}

export function registerUser(user) {
    const request = axios.post(`/api/register`, user)
        .then(response => response.data);

    return {
        type: 'Register_user',
        payload: request
    }
}
export function ClearRegisterUser() {
    return {
        type: 'Clear_Register',
        payload: {}
    }
}