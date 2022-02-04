import React from 'react';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';


function Header(props) {
    Header.defaultProps = {
            title: "Showcase"
    }

    Header.propTypes = {
        title: PropTypes.string.isRequired
        }

  return <div>
   {props.title}
  </div>;
}

export default Header;
