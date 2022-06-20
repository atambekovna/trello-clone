import React from 'react'
import { useSelector } from 'react-redux'

function useAuth() {
  const {email, token, id} = useSelector(state => state.user)

  return{
    idAuth: !email,
    email,
    token,
    id,
}
}

export default useAuth