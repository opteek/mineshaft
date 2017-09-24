/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Flex, Box, Heading, Paragraph } from 'atomic'
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle,
  DatePicker,
  TimePicker
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import {Button, ReduxField } from 'atomic'

/* --------------------------- Styled Components ---------------------------- */
const FormWrapper = styled.form`
  background: #FFF;
  display: block;
  padding: 20px;
`
/* ---------------------------- Form Component ------------------------------ */
const FormElements = (props) => {
  const { handleSubmit, isSubmitting, layout } = props
  return (
    <FormWrapper  {...layout} {...props}>
      <Field name="userID" component={ReduxField} type="hidden" />
      <Heading level={[2]} f={[4]} >Rapid Response</Heading>
      <Paragraph f={[1]}>Easily assign community members to manage the rapid response hotline. Select a timeframe, date range and what days. The hotline will call multiple phones at the same time, so don't worry about scheduling different people for the same time slots.</Paragraph>
      <Heading level={[3]} f={[3]} >Select Time Range</Heading>
      <Flex direction={['column', 'row']}>
        <Box w={[1,1,0.5]}><Field name="timeStart" component={TimePicker} format={null} hintText="Time Start" fillWidth /></Box>
        <Box w={[1,1,0.5]}><Field name="timeEnd" component={TimePicker} format={null} hintText="Time End"/></Box>
      </Flex>
      <Heading level={[3]} f={[3]} >Select Date Range</Heading>
      <Flex direction={['column', 'row']}>
        <Box w={[1,1,0.5]}><Field name="dateStart" component={DatePicker} format={null} hintText="Date Start" fillWidth /></Box>
        <Box w={[1,1,0.5]}><Field name="dateEnd" component={DatePicker} format={null} hintText="Date End"/></Box>
      </Flex>

      <Heading level={[3]} f={[3]} >Select Days Active</Heading>
      <Flex direction={['column']} w={[1]} justify='space-evenly' wrap='wrap' >
        <Box><Field name="dayMonday" component={Checkbox} label="Monday" /></Box>
        <Box><Field name="dayTuesday" component={Checkbox} label="Tuesday" /></Box>
        <Box><Field name="dayWednesday" component={Checkbox} label="Wednesday" /></Box>
        <Box><Field name="dayThursday" component={Checkbox} label="Thursday" /></Box>
        <Box><Field name="dayFriday" component={Checkbox} label="Friday" /></Box>
        <Box><Field name="daySaturday" component={Checkbox} label="Saturday" /></Box>
        <Box><Field name="daySunday" component={Checkbox} label="Sunday" /></Box>
      </Flex>
      
      <Button type="submit" onClick={handleSubmit} gradient='chery' >Submit</Button>
    </FormWrapper>
  )
}

/* -------------------------- Form Configuration ---------------------------- */
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

FormElements.defaultProps = {
  is: 'form',
}

export default FormElements
