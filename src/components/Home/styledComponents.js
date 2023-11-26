import styled from 'styled-components'

export const SectionContainer = styled.section`
  height: 90vh;
  display: flex;
  background-color: ${props => props.theme.colors.bgHome};
  transition: var(--bg-transition);
`

export const BgContainer = styled.div`
  width: 100%;
  overflow-y: auto;
`
