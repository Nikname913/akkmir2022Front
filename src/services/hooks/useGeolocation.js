/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/style-prop-object */
import { useEffect, useState } from 'react'

const useGeolocation = () => {

  const [ position, setPosition ] = useState(null)
  const [ error, setError ] = useState(null)

  const onChange = ({ lat, long }) => setPosition({ lat, long })
  const onError = error => setError(error.message)

  useEffect(() => {

    const GEO_COORDS = navigator.geolocation
    
    if ( !GEO_COORDS ) {

      setError('геолокация не поддерживается вашим браузером')
      return

    }

    GEO_COORDS.watchPosition(onChange, onError)

  },[])

  return { ...position, error }

}

export default useGeolocation