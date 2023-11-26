import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 250px;
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  @media screen and (max-width: 767px) {
    height: 200px;
  }
`
export const ResponsiveContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
`
export const LogoContainer = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`

export const Logo = styled.img`
  width: 100%;
`
export const Title = styled.h2`
  color: #000000;
`
export const Button = styled.button`
  padding: 8px 16px;
  width: max-content;
`
export const CloseIcon = styled.button`
  height: 25px;
  width: 25px;
  font-size: 25px;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`
