import axios from 'axios';

export function getTableData() {
    return axios.get('/api/tabledata')
}

export function deleteById(name) {
    return axios.get('/api/delete',{
        params: {
            name
        }
      })
}

export function getDetail(name) {
    return axios.get('/api/detail', {
        params: {
            name
        }
    })
}

export function add(data) {
    return axios.post('/api/add', data)
}

export function update(data) {
    return axios.post('/api/update', data)
}