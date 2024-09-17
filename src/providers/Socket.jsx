import React,{useMemo} from 'react'
import {io} from 'socket.io-client'

const Socketcontext = React.createContext(null)

export const SocketProvider = (props) =>{
  const socket = useMemo(() => io('http://localhost:3001'), [])
  return (
    <Socketcontext.Provider value={useMemo(() => io('http://localhost:3001'),
    [])}></Socketcontext.Provider>
  )
}

export default Socket
