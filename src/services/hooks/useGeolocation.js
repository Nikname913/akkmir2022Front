/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react'

const useGeolocation = () => {

  const [ position, setPosition ] = useState(null)
  const [ error, setError ] = useState(null)

  return { ...position, error }

}

export default useGeolocation