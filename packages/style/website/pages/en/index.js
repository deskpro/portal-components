/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');


class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
    const pageUrl = (page, lang) => `${siteConfig.baseUrl}${lang ? `${lang}/` : ''}${page}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    const Demos = props => (
      <div className="wrapper homeWrapper">
        {props.children}
      </div>
    );

    return (
      <div>
        <SplashContainer>
          <div className="inner">
            <ProjectTitle siteConfig={siteConfig} />
            <PromoSection>
              <Button href={docUrl('intro.html', language)}>Docs</Button>
              <Button href={pageUrl('demo.html', language)}>Demo</Button>
              <Button href="https://github.com/deskpro/portal-components">GitHub</Button>
            </PromoSection>
          </div>
        </SplashContainer>
        <Demos>
          <h2>Demos</h2>
          <ul>
            <li><a href={pageUrl('demos/kb-view.html')}>KB View</a></li>
          </ul>
        </Demos>
      </div>
    );
  }
}

HomeSplash.propTypes = {
  siteConfig: PropTypes.object.isRequired,
  language:   PropTypes.string.isRequired,
};

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
      </div>
    );
  }
}

Index.propTypes = {
  config:   PropTypes.object.isRequired,
  language: PropTypes.string,
};

Index.defaultProps = {
  language: ''
};

module.exports = Index;
