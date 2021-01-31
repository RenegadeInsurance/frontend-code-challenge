import styled from '@emotion/styled';
import React from 'react';
import Card from '../common/Card';
import CircularIcon from '../common/CircularIcon';
import Column from '../common/Column';
import RichText from '../common/RichText';
import RoundedButton from '../common/RoundedButton';
import Row from '../common/Row';
import SVG from '../common/SVG';
import PackageDetailsCard from './PackageDetailsCard';

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
        <AlignVerticle>
          <Row spacing="0 1rem">
            <Card>
              <Row spacing="0 .5rem">
                <SVG src="/assets/images/form.png" />
                <Column>
                  <Row justifyContent="space-between">
                    <RichText bold>Fill up the form</RichText>
                    <SVG src="/assets/images/arrowRightBlack.png" />
                  </Row>
                  <RichText color="#858585" spacing=".4rem 0">
                    Fill in your basic information to join the Gym Club.
                  </RichText>
                </Column>
              </Row>
            </Card>
            <Card>
              <Row spacing="0 .5rem">
                <SVG src="/assets/images/find.png" />
                <Column>
                  <Row justifyContent="space-between">
                    <RichText bold>Fill up the form</RichText>
                    <SVG src="/assets/images/arrowRightBlack.png" />
                  </Row>
                  <RichText color="#858585" spacing=".4rem 0">
                    Fill in your basic information to join the Gym Club.
                  </RichText>
                </Column>
              </Row>
            </Card>
            <Card>
              <Row spacing="0 .5rem">
                <SVG src="/assets/images/progress.png" />
                <Column>
                  <Row justifyContent="space-between">
                    <RichText bold>Fill up the form</RichText>
                    <SVG src="/assets/images/arrowRightBlack.png" />
                  </Row>
                  <RichText color="#858585" spacing=".4rem 0">
                    Fill in your basic information to join the Gym Club.
                  </RichText>
                </Column>
              </Row>
            </Card>
          </Row>
        </AlignVerticle>
        <Column>
          <RichText bold size="1.2rem" spacing="1rem 0" color="#555555">
            Recommended Tour Packages
          </RichText>
          <RichText color="#858585">
            These recommendations are based on your profile information
          </RichText>
        </Column>
        <PackageDetailsCard />
      </BodyBottomContainer>
    </BodyContainer>
  );
};

export default Body;

const AlignVerticle = styled.div({
  transform: 'translateY(-50%)',
});

const BodyContainer = styled.div({
  overflowY: 'scroll',
  backgroundColor: 'white',
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
