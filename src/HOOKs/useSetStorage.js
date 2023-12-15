import { useState } from "react"

export default function useSetStorage(key) {
    const  [value,setValue] = useState(JSON.parse(localStorage.getItem(key)))
    if(key) {
        localStorage.setItem(key,JSON.stringify(value))
    }

    return [setValue]
}
