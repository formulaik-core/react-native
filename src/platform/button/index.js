import { Button } from 'react-native'
import React from 'react'

export default (props) => {
  React.useEffect(() => { }, [])
  const { children, } = props
  return <Button {...props}>
    {children}
  </Button>
}
