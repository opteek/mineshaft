/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import ActionsSimple from 'content/static/actions/ActionsSimple'
import { Absolute, Flex, Box, Grid } from 'particles'
import { Heading, Image, Paragraph, Container, Section, Span} from 'atomic'
import { GridCentered } from 'foundry'
import { AuthorizationLogin } from 'workshop/forms'
/* ------------------------------- Component -------------------------------- */
export default props => (
<Section {...props} bg="white" color={['charcoal']} pos="relative" pb={[20, 40, 80]} pt={[20,40,80]} z={[15]} pos='relative' >
  <Container>
      <Heading f={[5,6,7]} level={[2]} color={'green'} mt={[10, 20]} textAlign="center">Actions For Today</Heading>
      <Paragraph f={[2]} color={['charcoal']} textAlign="center">Want to get involved? Start by registering an account an announcing to the community you've arrived.</Paragraph>
    <Flex justify={['space-evenly']} color='white' br={[10]} bs={[5]} overflow='hidden' mt={[20,40]} >
      <GridCentered 
        items={ActionsSimple}
        itemsStyled={{ta: 'center',py:[50,125],}}
        wrapper={{wrap:'wrap'}}
      />
    </Flex>
  </Container>
  <Container ta='center' py={[20,40]} w={[420]} >
    <AuthorizationLogin label="Register Today" f={[4]}  />
    <Paragraph f={[2]} color={['gray']} textAlign="center"><strong>Instant Access </strong>to MarinCultureCenter Tools/Resources.</Paragraph>
  </Container>
</Section>
)
