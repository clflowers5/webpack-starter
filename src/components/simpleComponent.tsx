import React from 'react';

interface Props {
  message: string;
}

function simpleComponent(props: Props): JSX.Element {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}

export default simpleComponent;
