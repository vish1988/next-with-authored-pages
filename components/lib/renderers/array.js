import React, { Fragment } from 'react';
import ComponentRegistry from '../componentRegistry';

const arrayRenderer = (compArr, nested, level = 0) => {
  if (!Array.isArray(compArr)) {
    return null;
  }
  return compArr.map(item => {
    if (typeof item === 'string') {
      const Component = ComponentRegistry.components[item];
      return (
        <Fragment key={Math.random()}>
          {!nested && (
            <h4>
              <strong>Direct</strong>
            </h4>
          )}
          <span>Component:</span>{' '}
          <span>
            <strong>{item}</strong>
          </span>
          <Component />
          <br />
          <br />
        </Fragment>
      );
    } else if (Array.isArray(item)) {
      return (
        <div key={Math.random()}>
          <h5>
            <strong>
              Nested -- L{level + 1} -- {item.join(' // ')}
            </strong>
          </h5>
          {arrayRenderer(item, true, level + 1)}
        </div>
      );
    } else {
      return null;
    }
  });
};

export default arrayRenderer;