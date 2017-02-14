import React from 'react';

const TestPage = ({store}) =>
  <div>
    {store.loading &&
    <h1>loading</h1>
    }
    {!store.loading &&
    <h1>loaded</h1>
    }
  </div>

export default TestPage
