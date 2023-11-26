import styled from 'styled-components'

export const BgContainer = styled.div`
  width: 15%;
  max-width: 200px;
  flex-shrink: 0;
  height: 90vh;
  background-color: ${props => props.theme.colors.bgPrimary};
  transition: var(--bg-transition);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
