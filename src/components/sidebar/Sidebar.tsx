import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import RoundedContainer from '../roundedContainer/RoundedContainer';

const Sidebar: React.FC = () => (
  <RoundedContainer borderRadius="0 47px 0 0">
    <div>top</div>
    <div>Bottom</div>
  </RoundedContainer>
);
export default Sidebar;
