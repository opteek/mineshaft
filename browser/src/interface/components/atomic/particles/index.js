import components from './components'
import { Flex, Box, Grid } from './grid'
import Provider from './Provider'
import createLibrary from './create-library'

const library = createLibrary(components)

const { length } = Object.keys(library)

const Rebass = Object.assign({}, library, { Provider, Flex, Box })

export { Flex, Box, Grid } from './grid'
export { default as Provider } from './Provider'
export { default as hoc } from './hoc'
export { default as theme } from './theme'
export { default as tag } from './tag'
export { default as createLibrary } from './create-library'
export { default as createComponent } from './create-component'
export { default as util } from './util'

export const {
  Block,
  Button,
  ButtonOutline,
  ButtonCircle,
  ButtonTransparent,
  Link,
  NavLink,
  BlockLink,
  Heading,
  Subhead,
  Text,
  Small,
  Lead,
  Pre,
  Code,
  Samp,
  Blockquote,
  Label,
  Input,
  Select,
  Textarea,
  Checkbox,
  Radio,
  Slider,
  Image,
  Avatar,
  BackgroundImage,
  Container,
  Divider,
  Border,
  Media,
  Card,
  Banner,
  Panel,
  PanelHeader,
  PanelFooter,
  Progress,
  Message,
  Group,
  Toolbar,
  Badge,
  Circle,
  Tabs,
  TabItem,
  DotButton,
  Close,
  Relative,
  Absolute,
  Fixed,
  Sticky,
  Drawer,
  Overlay,
  Carousel,
  ScrollCarousel,
  CarouselSlide,
  Tooltip,
  Switch,
  Arrow,
  Star,
  Embed,
  Donut,
} = library

export default Rebass
