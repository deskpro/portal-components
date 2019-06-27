const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');
function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);


const ProjectTitle = props => (
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


class Demo extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
    <div class="dp-Template">

        <header>
            <ul class="dp-po-nav">
                <li class="dp-po-Logo-wrap">
                    <span class="dp-po-Icon Icon-Tech-company"></span>
                    Support Center
                </li>
                <li class="dp-po-nav-control">
                    <ul>
                        <li class="dp-po-Select-Language">
                            <span class="dp-po-Icon dp-icon-UK"></span>
                            English
                            <span class="dp-po-arrow arrow--bottom arrow--brand-primary"></span>
                        </li>
                        <li>
                            <button class="dp-po-Button Button--small">Contact us</button>
                        </li>
                        <li>
                            <span class="dp-po-Avatar">
                                <img src="/portal-components/style/img/docs/avatar.png" class="dp-po-Avatar-icon" alt=""></img>
                                <span class="dp-po-arrow arrow--bottom arrow--brand-primary"></span>
                            </span>
                        </li>
                    </ul>
                </li>
            </ul>
        </header>

        <container class="dp-po-Header-container">
            <form class="dp-po-Forms dp-po-Search-bar">
                <div class="dp-po-Searchbar-wrap">
                    <input type="" name="" placeholder="How can we help you today?"></input>
                    <span class="dp-po-Icon Icon--find Icon--primary"></span>
                </div>
            </form>
        </container>

        <ul class="dp-po-Breadcrumbs">
            <li class="dp-po-Icon Icon-Tech-company"></li>
            <li class="dp-po-Breadcrumb-item">Support Centre</li>
            <li class="dp-po-Breadcrumb-item">Knowledgbase</li>
            <li class="dp-po-Breadcrumb-item">Getting started</li>
            <li class="dp-po-Breadcrumb-item is-active">Deskpro for IT Teams</li>
        </ul>

    </div>
    );
  }
}

module.exports = Demo;
