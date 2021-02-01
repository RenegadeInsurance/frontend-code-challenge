import styled from '@emotion/styled';
import React from 'react';
import Divider from '../common/Divider';
import DownshiftDropdown from '../common/DownshiftDropdown';
import RichText from '../common/RichText';
import RoundedButton from '../common/RoundedButton';
import Row from '../common/Row';

const Form: React.FC = () => {
  return (
    <form>
      <Row>
        {/* <Input type="text" placeholder="Name" /> */}
        <FlatInput>
          <div className="label">Name</div>
          <input type="text" className="input" />
        </FlatInput>
        <Input type="text" placeholder="Email" />
      </Row>
      <Row>
        <Input type="text" placeholder="Phone Number" />
        <DownshiftDropdown />
      </Row>
      <Row>
        <Input type="text" placeholder="Address" />
        <Input type="text" placeholder="Apt/Suite/Other" />
      </Row>
      <Divider />
      <Row justifyContent="space-between" spacing="2rem 0">
        <RichText color="#B7B7B7">
          Lorem Ipsum dolor sit amet & Lorem Ipsum
        </RichText>
        <RoundedButton background="#ECF4F9" color="#262758">
          REFER
        </RoundedButton>
      </Row>
    </form>
  );
};

export default Form;
const FlatInput = styled.div({
  height: '2.5rem',
  width: '20rem',
  border: '1px solid rgba(60,73,138,0.42)',
  borderRadius: '4px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  '.label': {
    padding: '0 .7rem',
    position: 'absolute',
    top: '.8rem',
    pointerEvents: 'none',
  },
  '.input': {
    border: 'none',
    height: '100%',
    padding: '0 .7rem',
    '&:focus': {
      label: {
        color: 'red',
        margin: '11rem',
      },
    },
  },
});

const Input = styled.input({
  height: '2.5rem',
  width: '20rem',
  border: '1px solid rgba(60,73,138,0.42)',
  borderRadius: '4px',
  margin: '.5rem 1rem',
  paddingLeft: '.7rem',
  marginLeft: '0',
  ':focus': {
    outline: 'none',
    border: '1px solid rgba(60, 73, 138, 0.92)',
  },
  '::placeholder': {
    opacity: '1',
    color: 'black',
  },
});
