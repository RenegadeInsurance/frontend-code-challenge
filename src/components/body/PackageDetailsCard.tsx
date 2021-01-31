import React from 'react';
import Card from '../common/Card';
import CircularIcon from '../common/CircularIcon';
import Column from '../common/Column';
import RichText from '../common/RichText';
import RoundedButton from '../common/RoundedButton';
import Row from '../common/Row';
import SVG from '../common/SVG';

const PackageDetailsCard: React.FC = () => (
  <Column margin="1rem 0">
    <Card>
      <Row justifyContent="space-between">
        <Row>
          <CircularIcon color="#A9A9A966" padding=".5rem">
            <SVG src="/assets/images/aeroplane.svg" />
          </CircularIcon>
          <Column spacing="0 1rem">
            <RichText bold>Pilates</RichText>
            <RichText color="#858585" spacing=".4rem 0">
              Developed first by Joseph Pilates, after whom the technique is
              name…
            </RichText>
          </Column>
        </Row>
        <Column>
          <RichText>Estimated Price</RichText>
          <RichText bold color="#262758">
            $ 4,220/6 mo.
          </RichText>
        </Column>
        <RoundedButton background="#ECF4F9" color="#262758">
          Order Now
        </RoundedButton>
      </Row>
    </Card>
  </Column>
);

export default PackageDetailsCard;
