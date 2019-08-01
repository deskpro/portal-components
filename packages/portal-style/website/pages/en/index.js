/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
const PropTypes = require("prop-types");

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
    const pageUrl = (page, lang) =>
      `${siteConfig.baseUrl}${lang ? `${lang}/` : ""}${page}`;

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
      <div className="wrapper homeWrapper">{props.children}</div>
    );

    return (
      <div>
        <SplashContainer>
          <div className="inner">
            <ProjectTitle siteConfig={siteConfig} />
            <PromoSection>
              <Button href={docUrl("intro.html", language)}>Docs</Button>
              <Button href={pageUrl("demo.html", language)}>Demo</Button>
              <Button href="https://github.com/deskpro/portal-components">
                GitHub
              </Button>
            </PromoSection>
          </div>
        </SplashContainer>
        <Demos>
          <h2>Demos</h2>
          <ol>
            <li>
              Knowledgebase
              <ol>
                <li>Home</li>
                <li>
                  <a href={pageUrl("demos/knowledgebase-article.html")}>
                    Article
                  </a>
                </li>
                <li>
                  <a href={pageUrl("demos/knowledgebase-article-rtl.html")}>
                    Article-RTL
                  </a>
                </li>
                <li>
                  <a href={pageUrl("demos/knowledgebase-article-pdf.html")}>
                    Article-PDF
                  </a>
                </li>
              </ol>
            </li>
            <li>
              News
              <ol>
                <li>Home</li>
                <li>
                  <a href={pageUrl("demos/news-post.html")}>Post</a>
                </li>
              </ol>
            </li>
            <li>
              Community
              <ol>
                <li>Home</li>
                <li>
                  <a href={pageUrl("demos/community-topic.html")}>Topic</a>
                </li>
                <li>Create Topic</li>
              </ol>
            </li>
            <li>
              Downloads
              <ol>
                <li>Home</li>
                <li>
                  <a href={pageUrl("demos/downloads-eula.html")}>EULA</a>
                </li>
                <li>File</li>
              </ol>
            </li>
            <li>
              Tickets
              <ol>
                <li>
                  <a href={pageUrl("demos/tickets-home.html")}>Home</a>
                </li>
                <li>View Ticket</li>
                <li>Create Ticket</li>
                <li>Edit Ticket</li>
              </ol>
            </li>
            <li>
              Account
              <ol>
                <li>
                  <a href={pageUrl("demos/account-register.html")}>Register</a>
                </li>
                <li>Forgotton Password</li>
                <li>Profile</li>
              </ol>
            </li>
            <li>
              Chat
              <ol>
                <li>Home</li>
                <li>View Log</li>
              </ol>
            </li>
            <li>
              <a href={pageUrl("demos/member-directory.html")}>
                Member Directory
              </a>
            </li>
            <li>Direct Messages</li>
          </ol>
        </Demos>
      </div>
    );
  }
}

HomeSplash.propTypes = {
  siteConfig: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired
};

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
      </div>
    );
  }
}

Index.propTypes = {
  config: PropTypes.object.isRequired,
  language: PropTypes.string
};

Index.defaultProps = {
  language: ""
};

module.exports = Index;
