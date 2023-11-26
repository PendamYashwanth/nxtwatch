// CSS-IN-JS
import {
  BgContainer,
  IconContainer,
  Icon,
  SectionHeading,
} from './styledComponents'

const Banner = props => {
  const {icon, section} = props

  return (
    <BgContainer data-testid="banner">
      <IconContainer>
        <Icon>{icon}</Icon>
      </IconContainer>
      <SectionHeading>{section}</SectionHeading>
    </BgContainer>
  )
}

export default Banner
