import React, { Component } from "react";
import PropTypes from "prop-types";
import _googleApi from "./gapi-loader";

class GoogleUrlShortner extends Component {
  constructor(props) {
    super(props);

    /* setting initial state for shortUrl */
    this.state = {
      shortUrl: ""
    };
    this._getShortUrl = this._getShortUrl.bind(this);
    this._connectGoogleApi = this._connectGoogleApi.bind(this);
  }

  componentDidMount() {
    const { GOOGLE_API_KEY, url } = this.props;
    this._connectGoogleApi(GOOGLE_API_KEY, url);
  }

  /*
  @param
  GOOGLE_API_KEY : API KEY for googleApi,
  url : Long url Input of urlshortener
  */
  /* This function is used to make connection with GoogleClientApi */
  _connectGoogleApi(GOOGLE_API_KEY, url) {
    _googleApi().then(gapi => {
      this._getShortUrl(gapi, url, GOOGLE_API_KEY);
    });
  }

  /*
  @param
  gapi : google api client object,
  API_KEY : API KEY for googleApi,
  url : Long url Input of urlshortener
  */
  /* This function returns short url with the help of GoogleUrlShortner */
  _getShortUrl(gapi, url, API_KEY) {
    gapi.setApiKey(API_KEY);
    gapi
      .load("urlshortener", "v1")
      .then(() => {
        if (!url) {
          return false;
        }
        return window.gapi.client.urlshortener.url
          .insert({
            resource: {
              longUrl: url
            }
          })
          .then(res => {
            if (res.result.id) {
              this.setState({
                shortUrl: res.result.id
              });
            }
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
  /* render function for rendering component */
  render() {
    return <div className="GoogleUrlShortner">{this.state.shortUrl}</div>;
  }
}

GoogleUrlShortner.propTypes = {
  url: PropTypes.string.isRequired,
  GOOGLE_API_KEY: PropTypes.string.isRequired
};

export default GoogleUrlShortner;
