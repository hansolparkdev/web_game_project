/* eslint-disable react/prop-types */
// import React, { memo } from 'react';
import React, { PureComponent } from 'react';

class Try extends PureComponent {
  render() {
    const { tryinfo } = this.props;
    return (
      <li>
        <div>{tryinfo.try}</div>
        <div>{tryinfo.result}</div>
      </li>
    );
  }
}
// const Try = memo(({ tryinfo }) => (
//   <li>
//     <div>{tryinfo.try}</div>
//     <div>{tryinfo.result}</div>
//   </li>
// ));

export default Try;
