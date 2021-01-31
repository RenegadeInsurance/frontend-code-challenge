import styled from '@emotion/styled';
import React from 'react';
import Row from '../common/Row';

const Body: React.FC = () => {
  const style = {
    justifyContent: 'space-between',
  };
  return (
    <BodyContainer>
      <BodyTopContainer>
        <Row justifyContent="space-between">
          <div>Hello Jimmy,</div>
          <div>Find a Gym Club</div>
        </Row>
        <Row>What do you want to do today?</Row>
      </BodyTopContainer>
      <BodyBottomContainer>Bottom</BodyBottomContainer>
    </BodyContainer>
  );
};

export default Body;

const BodyContainer = styled.div({
  overflowY: 'scroll',
  backgroundColor: 'white',
});

const BodyTopContainer = styled.div({
  backgroundColor: '#f4f4f4',
  height: '25%',
  padding: '4rem 6rem',
  paddingBottom: '0',
  borderBottomRightRadius: '2rem',
});

const BodyBottomContainer = styled.div({
  height: '75%',
  padding: '0 6rem',
});
