import React from 'react';

const styleSheet = (marginBottom) => {
  return ({
    marginBottom
  });
}

const Spacer = ({ spacing, children }) => {

  return (
    <div style={styleSheet(spacing)}>
      {children}
    </div>
  )

}

export { Spacer }