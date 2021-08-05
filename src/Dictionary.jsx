import React, { useState } from 'react'
import './Dictionary.css'
import axios from 'axios'
import Results from './Results'
import Photos from './Photos'

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword)
  let [results, setResults] = useState(null)
  let [loaded, setLoaded] = useState(false)
  let [photos, setPhotos] = useState(null)

  function handleResponse(response) {
    setResults(response.data[0])
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos)
  }

  function search() {
    //documnetation from dictionaryapi.dev //

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
    axios.get(apiUrl).then(handleResponse)

    let pexelsApiKey =
      '563492ad6f91700001000001deec0b39966b4778b5490d4490d19384'
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`

    let headers = { Authorization: `Bearer ${pexelsApiKey}` }
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse)
  }

  function handleSubmit(event) {
    event.preventDefault()
    search()
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value)
  }

  function load() {
    setLoaded(true)
    search()
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <div className="hint">example: fitness, love, beauty</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    )
  } else {
    load()
    return 'Loading'
  }
}
