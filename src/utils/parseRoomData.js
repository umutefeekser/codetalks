import parseContentData from "./parseContentData"

export default (data) => {
    return Object.keys(data)
    .map(key => {
        return {
            id: key,
            ...data[key]
        }
    })
    .sort((a, b) => Object.keys(b.messages || {}).length - Object.keys(a.messages || {}).length)
}