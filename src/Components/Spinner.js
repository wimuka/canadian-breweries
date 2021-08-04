import React, { Fragment } from 'react';
import spinner from '../Media/spinner-circle.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='Loading...'
      style={{
        width: '25rem',
        margin: 'auto',
      }}
    />
  </Fragment>
);

export default Spinner;
