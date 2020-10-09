import React, { Component } from 'react'


const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.UserConsumer


export {UserProvider, UserConsumer}
