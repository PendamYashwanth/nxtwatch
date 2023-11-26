import styled from 'styled-components'

export const BgContainer = styled.div`
  width: 100%;
  max-width: 1040px;
  margin: 10px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  width: 100%;
  max-width: 500px;
  margin-bottom: 12px;
`
export const Title = styled.h2`
  color: ${props => props.theme.colors.colorDefault};
`
export const Description = styled.p`
  text-align: center;
  font-size: 16px;
  color: ${props => props.theme.colors.colorPrimary};
  margin-bottom: 10px;
`
