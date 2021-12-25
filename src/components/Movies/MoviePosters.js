import React, { useState, useEffect } from 'react'
import axios from 'axios'


const MoviePosters = () => {

  const [ posters, setPosters ] = useState([])
  
  useEffect(() => {
    const api = 'api_key=a68aa67bd52b5478f023c1d5878cdd61'
    const getData = async () => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?${api}`)
      setPosters(data.results)
      console.log('My Data--->', data)
    }
    getData()
  }, [])

  // 
  return (

    <div className="ui stackable two column grid">
      {posters.map(() => {
        
        return (
          <article key={posters.id}>
            <div>
              <img src={posters.poster_path}/>
              <h3>
              Name: {posters.title}
              </h3>
            </div>
          </article>
        )
      }
      )}
    </div>
  )

}

export default MoviePosters