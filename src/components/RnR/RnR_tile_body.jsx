import React from 'react';
import PT from 'prop-types';
import '../../styles/standard-styles.scss';
import '../../styles/RnR-styles.scss';

class TileBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFullBody: false,
    };
  }

  showFullBody() {
    this.setState((prevState) => ({
      showFullBody: !prevState.showFullBody,
    }));
  }

  render() {
    let { body } = this.props;
    const { showFullBody } = this.state;
    if (body.length > 249) {
      body = (
        <div>
          {showFullBody ? (
            <div>
              <p className="tile-body">{body}</p>
              <div className="show" onClick={this.showFullBody.bind(this)} onKeyDown={this.showFullBody.bind(this)} tabIndex={0} role="link">Show Less</div>
            </div>
          )
            : (
              <div>
                <p className="tile-body">{body.slice(0, 250)}</p>
                <div className="show" onClick={this.showFullBody.bind(this)} onKeyDown={this.showFullBody.bind(this)} tabIndex={0} role="link">Show More</div>
              </div>
            )}
        </div>
      );
    } else { body = <p className="tile-body">{body.slice(0, 1000)}</p>; }

    return (
      <div>
        {body}
      </div>
    );
  }
}

TileBody.propTypes = {
  body: PT.string.isRequired,
};

export default TileBody;
