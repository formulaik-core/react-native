import { Text } from 'react-native'
import React from 'react'

export default (props) => {
  React.useEffect(() => { }, [])
  const { children, } = props

  return <Text {...props}>
    {children}
  </Text>
}
