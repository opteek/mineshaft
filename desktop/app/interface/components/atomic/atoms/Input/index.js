import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import { font, palette } from 'styled-theme'
import { color, fontSize, space, width, height, borderRadius } from 'quarks'


const styles = css`
  background-color: ${palette('grayscale', 0, true)};
  border: 1px solid ${ifProp('invalid', palette('danger', 2), palette('grayscale', 3))};
  border-radius: 2px;
  ${borderRadius}
  box-sizing: border-box;
  ${color}
  display: block;
  ${fontSize}
  ${height}
  margin: 0;
  outline:  none;
  padding: ${ifProp({ type: 'textarea' }, '0.4444444444em', '0 0.4444444444em')};
  position: relative;
  ${width}


  &::placeholder,
  &::-webkit-input-placeholder {
    font-size: 13px;
  }

  &::placeholder-shown,
  &::-webkit-input-placeholder-shown {

  }

  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
`

const StyledTextarea = styled.textarea`${styles}`
const StyledSelect = styled.select`${styles}`
const StyledInput = styled.input`${styles}`

const Input = ({ ...props }) => {
  if (props.type === 'textarea') {
    return <StyledTextarea {...props}/>
  } else if (props.type === 'select') {
    return <StyledSelect {...props}/>
  }
  return <StyledInput {...props}/>
}

Input.propTypes = {
  type: PropTypes.string,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  invalid: PropTypes.bool,
}

Input.defaultProps = {
  color: 'charcoal',
  f: [2,3],
  type: 'text',
  height: 40,
  value: '',
  w: 1
}

export default Input
