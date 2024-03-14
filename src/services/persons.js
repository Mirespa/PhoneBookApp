import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (key, newObject) => {
    const request = axios.put(`${baseUrl}/${key}`, newObject)
    return request.then(response => response.data)
}

const remove = key => {
    const request = axios.delete(`${baseUrl}/${key}`)
    return request.then(response => response.data)
}

export default { getAll, create, update, remove }
