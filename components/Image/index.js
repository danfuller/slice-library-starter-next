import React from 'react';
import { string } from 'prop-types';

/*
  Image
  TODO: Add preloading
*/


const Image = ({ src, className }) => (
  <img
    className={className}
    src={src}
  />
);

Image.propTypes = {
  src: string.isRequired,
  className: string
}

export default Image
