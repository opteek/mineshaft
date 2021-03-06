import React from 'react'
import { Absolute, BackgroundImage} from 'particles'
export default props => <Absolute left right top bottom {...props} >
  <BackgroundImage src={props.image} ratio={1/2.25} h={1} {...props} />
</Absolute>