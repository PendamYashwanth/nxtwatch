import styled from 'styled-components'

export const SectionContainer = styled.section`
  height: 90vh;
  display: flex;
  background-color: ${props => props.theme.colors.bgDefault};
  transition: var(--bg-transition);
`
