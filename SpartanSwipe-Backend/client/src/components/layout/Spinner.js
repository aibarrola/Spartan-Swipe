import React, { Fragment } from 'react';
import spinner from './spinner.gif';

// When implementing Spinner as the application's loading thing, a lot of problems were ran into, so it was decided to 
// not use Spinner. Code will remain if there is time to debug/implement.
export default () => {
    <Fragment>
        <img 
            src={spinner}
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            alt='Loading...'
        />
    </Fragment>
}