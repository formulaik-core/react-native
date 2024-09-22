import React from 'react'
import { FieldArray, } from 'formik'
import render from './render'
import ErrorMessage from './errorMessage'
import LabelRenderer from '../chunks/label'

import PlatformContainer from '../../platform/container/index.js'

export default (props) => {
  const {
    item: {
      input,
      type,
      id,
      className = "",
    },
    hideErrors,
  } = props

  const _type = input ? input : type

  return <React.Fragment>
    <PlatformContainer
      className={`${className}`}
      data-id='array-index'>
      <LabelRenderer {...props} />
      <FieldArray
        type={_type}
        name={id}
        //validateOnChange
        component={(arrayHelpers) => render({ ...props, arrayHelpers })} />
      {/* <FieldArray
      type={type}
      name={id}
      render={(arrayHelpers) => render({ ...props, arrayHelpers })} /> */}
      {/* <FieldArray
      type={type}
      name={id}>
      {(arrayHelpers) => render({ ...props, arrayHelpers })}
    </FieldArray> */}
      {!hideErrors ?
        <ErrorMessage
          name={id}
          component="div"
          className={"error-message"} /> : null}
    </PlatformContainer>
    {/* <style jsx>{`
      .error-message {
        padding-top: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: #DC2626;
      }
    `}</style> */}
  </React.Fragment>
}
