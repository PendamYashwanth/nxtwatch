import {Component} from 'react'
import {Redirect} from 'react-router-dom'
// THIRD PARTY PACKAGES
import Cookies from 'js-cookie'
// CONTEXT
import NxtWatchAppContext from '../../context/NxtWatchAppContext'
// CSS-IN-JS
import {
  BgContainer,
  FormContainer,
  WebsiteLogoContainer,
  WebsiteLogo,
  Form,
  InputFieldContainer,
  CheckboxInputFieldContainer,
  Input,
  CheckboxInput,
  Label,
  CheckboxLabel,
  LoginButton,
} from './styledComponents'
// ASSETS
const logoLight =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const logoDark =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const jwtToken = data.jwt_token
      this.onLoginSuccess(jwtToken)
    } else {
      const data = await response.json()
      const errorMsg = data.error_msg
      this.onLoginFailure(errorMsg)
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    const {
      username,
      password,
      showPassword,
      showErrorMsg,
      errorMsg,
    } = this.state
    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const WebsiteLogoImg = isDarkTheme ? logoDark : logoLight
          return (
            <BgContainer>
              <FormContainer className="d-flex flex-column justify-content-center align-items-center">
                <WebsiteLogoContainer className="mb-5">
                  <WebsiteLogo src={WebsiteLogoImg} alt="website logo" />
                </WebsiteLogoContainer>
                <Form onSubmit={this.onSubmitLoginForm}>
                  <InputFieldContainer>
                    <Label htmlFor="username">USERNAME</Label>
                    <Input
                      id="username"
                      type="text"
                      value={username}
                      onChange={this.onChangeUsername}
                    />
                  </InputFieldContainer>
                  <InputFieldContainer>
                    <Label htmlFor="password">PASSWORD</Label>
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={this.onChangePassword}
                    />
                  </InputFieldContainer>
                  <CheckboxInputFieldContainer>
                    <CheckboxInput
                      className="mr-2"
                      id="showPassword"
                      type="checkbox"
                      onClick={this.onShowPassword}
                    />
                    <CheckboxLabel htmlFor="showPassword">
                      Show Password
                    </CheckboxLabel>
                  </CheckboxInputFieldContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrorMsg && <p>*{errorMsg}</p>}
                </Form>
              </FormContainer>
            </BgContainer>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }
}

export default Login
