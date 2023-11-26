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

export const Button = styled.button`
  padding: 8px 16px;
  width: max-content;
  outline: none;
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
`
