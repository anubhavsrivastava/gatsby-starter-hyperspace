import React from 'react';
import Scroll from './Scroll';

const Tab = ({content, href}) =>
  <li>
    <Scroll type="id" element={href}>
      <a href={`#${href}`}>{content}</a>
    </Scroll>
  </li>

export default Tab;
