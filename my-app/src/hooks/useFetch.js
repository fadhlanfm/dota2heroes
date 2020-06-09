import React, { useState, useEffect } from 'react'

const useFetch = (url, headers) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url, headers)
      .then(result => result.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return [data, loading, error]
}

export default useFetch