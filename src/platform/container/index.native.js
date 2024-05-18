import { View } from 'react-native'
import React from 'react'

export default (props) => {
  React.useEffect(() => { }, [])
  const { children, } = props

  return <View {...props}>
    {children}
  </View>
}
