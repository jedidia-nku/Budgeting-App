// local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

//delte item
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key)
}