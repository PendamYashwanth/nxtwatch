import styled from 'styled-components'

export const SectionContainer = styled.section`
  height: 90vh;
  display: flex;
  background-color: ${props => props.theme.colors.bgDefault};
  transition: var(--bg-transition);
`

export const BgContainer = styled.div`
  width: 100%;
  overflow-y: auto;
`

export const ResponsiveContainer = styled.div`
  padding: 10px 16px;
  width: 100%;
  display: flex;
`
