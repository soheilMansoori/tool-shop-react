export default function useGetStorage(key) {
    const value = JSON.parse(localStorage.getItem(key))
    return [value]
}
