import styled from 'styled-components'

export const VideoItemsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 109x 16px;
`

export const ResponsiveContainer = styled.div`
  padding: 15px 20px;
  width: 100%;
`
export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`
/* ------------- SEARCH INPUT FIELD CONTAINER ------------------------ */

export const SearchInputBgContainer = styled.div`
  margin-top: 20px;
  padding: 0px 20px;
`

export const SearchInputContainer = styled.div`
  width: 90%;
  max-width: 700px;
  margin-right: auto;
  display: flex;
  border: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors.colorAccentPrimary};
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const Input = styled.input`
  height: 30px;
  width: 90%;
  outline: none;
  border: none;
  padding: 8px 16px;
`

export const SearchIconContainer = styled.div`
  width: 10%;
  border-left: 1px solid;
  border-left-color: ${props => props.theme.colors.colorAccentPrimary};
  background-color: ${props => props.theme.colors.bgSecondary};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SearchIcon = styled.button`
  background: transparent;
  outline: none;
  border: none;
  height: 25px;
  width: 25px;
  color: ${props => props.theme.colors.colorDefault};
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
