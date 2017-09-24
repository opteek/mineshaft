/* ------------------------- External Dependencies -------------------------- */
import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import ReduxField from 'organisms/ReduxField'

import NameFieldCollection from 'containers/fields/NameFieldCollection'
import AddressFieldCollection from 'containers/fields/AddressFieldCollection'
import ContactFieldCollection from 'containers/fields/ContactFieldCollection'
import EntityFieldCollection from 'containers/fields/EntityFieldCollection'
import ProjectFieldCollection from 'containers/fields/ProjectFieldCollection'
import TimeRangeFieldCollection from 'containers/fields/TimeRangeFieldCollection'
import DateRangeFieldCollection from 'containers/fields/DateRangeFieldCollection'

/* --------------------------- Styled Components ---------------------------- */
const FormWrapper = styled.form`
  background: #FFF;
  display: block;
  padding: 20px;
`
/* ---------------------------- Form Component ------------------------------ */
const FormElements = (props, fields) => {
  console.log(fields)
  const { handleSubmit, isSubmitting } = props
  return (
    <FormWrapper method="POST" onSubmit={handleSubmit}>
      <NameFieldCollection {...props}/>
      <AddressFieldCollection {...props}/>
      <ContactFieldCollection {...props}/>
      <ProjectFieldCollection {...props}/>
      <DateRangeFieldCollection {...props}/>
      <TimeRangeFieldCollection {...props}/>
      
      <div><Button type="submit">Submit</Button></div>
    </FormWrapper>
  )
}

/* -------------------------- Form Configuration ---------------------------- */
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FormElements
