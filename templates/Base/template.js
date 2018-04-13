import React from 'react';

import components from 'components';

const { Foo } = components;

const Base = () => (
    <div>
        <div className="page-div index-page">initial page</div>
        <Foo />
    </div>
);

export default Base;
