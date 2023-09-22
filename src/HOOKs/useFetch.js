import { useState, useEffect } from 'react'

function useFetch() {
    const [url, setUrl] = useState(null)
    const [method, setMethod] = useState(null)
    const [body, setBody] = useState(null)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        if (url && method === 'POST' && body) {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {}
            }).then(res => res.json)
                .then(data => {
                    console.log(data);
                    setData(data)
                    setLoading(false)
                    setError(null)
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false)
                    setError(true)
                })
        }

        if (url && method === 'PUT' && body) {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: {},
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    setData(data)
                    setLoading(false)
                    setError(null)
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false)
                    setError(true)
                })
        }

        if (url && method === 'DELETE') {
            fetch(url, {
                method: "DELETE",
                headers: {}

            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    setData(data)
                    setLoading(false)
                    setError(false)
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false)
                    setError(true)
                })
        }
        if (url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setData(data)
                    setLoading(false)
                    setError(null)
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false)
                    setError(true)
                })
        }

        setLoading(false)
    }, [url])

    return [setUrl, setMethod, setBody, data, loading, error]
}


export default useFetch