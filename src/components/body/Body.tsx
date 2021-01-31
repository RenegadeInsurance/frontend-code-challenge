import styled from '@emotion/styled';
import React from 'react';
import Row from '../common/Row';

const Body: React.FC = () => {
  return (
    <BodyContainer>
      <BodyTopContainer>
        <Row justifyContent="space-between">
          <Row>
            <RichText color="#555555" size="1.5rem" bold>
              Hello&nbsp;
            </RichText>
            <RichText color="#3D3FA8" size="1.5rem" bold>
              Jimmy,
            </RichText>
          </Row>
          <RoundedButton>Find a Gym Club</RoundedButton>
        </Row>
        <Row spacing="1rem 0">
          <RichText color="#2C2C2C" size="2rem">
            What do you want to do today?
          </RichText>
        </Row>
      </BodyTopContainer>
      <BodyBottomContainer>
        <Row>
          <Card column={2}>
            <div>hello</div>
            <div>world</div>
          </Card>
        </Row>
      </BodyBottomContainer>
    </BodyContainer>
  );
};

export default Body;

const Card = styled.div((props: { column: number }) => ({
  padding: '1rem',
  boxShadow: '0px 5px 10px #A9A9A933',
  border: '1px solid #ECECEC',
  borderRadius: '4px',
  display: 'grid',
  gridTemplateColumns: `repeat(${props.column},1fr)`,
}));

const BodyContainer = styled.div({
  overflowY: 'scroll',
  backgroundColor: 'white',
});

const RichText = styled.div(
  (props: { color?: string; bold?: boolean; size?: string }) => ({
    color: props.color,
    fontSize: props.size,
    fontWeight: props.bold ? 'bold' : 'inherit',
  })
);

const RoundedButton = styled.button({
  backgroundColor: '#262758',
  outline: 'none',
  color: 'white',
  border: 'none',
  textTransform: 'uppercase',
  fontWeight: 'bolder',
  padding: '0 2rem',
  borderRadius: '25px',
  height: '3rem',
});

const BodyTopContainer = styled.div({
  backgroundColor: '#f4f4f4',
  height: '30%',
  padding: '4rem 6rem',
  paddingBottom: '0',
  borderBottomRightRadius: '2rem',
});

const BodyBottomContainer = styled.div({
  padding: '0 6rem',
});
