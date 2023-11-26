import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.bgDefault};
`

export const FormContainer = styled.div`
  padding: 64px 48px 64px 48px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.bgPrimary};
  box-shadow: 0px 8px 40px #00000020;
`
export const WebsiteLogoContainer = styled.div`
  min-width: 350px;
  max-width: 400px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WebsiteLogo = styled.img`
  width: 50%;
  margin: auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

export const CheckboxInputFieldContainer = styled(InputFieldContainer)`
  flex-direction: row;
  align-items: center;
`

export const Label = styled.label`
  color: ${props => props.theme.colors.colorPrimary};
  font-weight: 800;
`
export const CheckboxLabel = styled(Label)`
  font-size: 14px;
  color: ${props => props.theme.colors.colorPrimary};
  line-height: 0px;
  margin-bottom: 0px;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  padding: 8px 16px 8px 16px;
  border: 1px solid ${props => props.theme.colors.colorAccentPrimary};
`

export const CheckboxInput = styled.input`
  width: 20px;
  height: 40px;
  outline: none;
  border: 1px solid ${props => props.theme.colors.colorAccentPrimary};
  cursor: pointer;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  border-radius: 8px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
`
