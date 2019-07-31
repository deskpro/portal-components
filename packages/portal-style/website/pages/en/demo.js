const React = require('react');

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

class Demo extends React.Component {
  render() {
    return (
      <div className="dp-Template">
        <header>
          <ul className="dp-po-nav">
            <li className="dp-po-Logo-wrap">
              <span className="dp-po-Icon Icon-Tech-company"/>
                Support Center
            </li>
            <li className="dp-po-nav-control">
              <ul>
                <li className="dp-po-Select-Language">
                  <span className="dp-po-Icon dp-icon-UK" />
                    English
                  <span className="dp-po-arrow arrow--bottom arrow--brand-primary" />
                </li>
                <li>
                  <button className="dp-po-Button Button--small">Contact us</button>
                </li>
                <li>
                  <span className="dp-po-Avatar">
                    <img src="/portal-components/style/img/docs/avatar.png" className="dp-po-Avatar-icon" alt="" />
                    <span className="dp-po-arrow arrow--bottom arrow--brand-primary" />
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </header>

        <container className="dp-po-Header-container">
          <form className="dp-po-Forms dp-po-Search-bar">
            <div className="dp-po-Searchbar-wrap">
              <input type="" name="" placeholder="How can we help you today?" />
              <span className="dp-po-Icon Icon--find Icon--primary" />
            </div>
          </form>
        </container>

        <ul className="dp-po-Breadcrumbs">
          <li className="dp-po-Icon Icon-Tech-company" />
          <li className="dp-po-Breadcrumb-item">Support Centre</li>
          <li className="dp-po-Breadcrumb-item">Knowledgbase</li>
          <li className="dp-po-Breadcrumb-item">Getting started</li>
          <li className="dp-po-Breadcrumb-item is-active">Deskpro for IT Teams</li>
        </ul>

      </div>
    );
  }
}

module.exports = Demo;
