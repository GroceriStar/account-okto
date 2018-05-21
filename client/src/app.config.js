const settings = {
  url: process.env.REACT_APP_OKTA_ORG_NAME,
  issuer: process.env.REACT_APP_OKTA_ORG_NAME + '/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: process.env.REACT_APP_OKTA_CLIENT_ID
}

export default settings;
