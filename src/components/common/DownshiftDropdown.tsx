/* eslint-disable consistent-return */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import Downshift from 'downshift';
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import SVG from './SVG';

const items: Array<string> = ['Male', 'Female', 'Other', "Don't Specify"];
const DownshiftDropdown: React.FC = () => {
  return (
    <Wrapper>
      <Downshift>
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          getToggleButtonProps,
          isOpen,
          highlightedIndex,
          selectedItem,
        }) => (
          <div>
            <Dropdown>
              <Input
                readOnly
                placeholder="Please select"
                {...getInputProps()}
              />
              <Button {...getToggleButtonProps()}>
                <SVG src="/assets/images/dropdown.svg" />
              </Button>
            </Dropdown>
            {isOpen ? (
              <Menu {...getMenuProps()}>
                {items.map((item, index) => (
                  <Items
                    highlighted={highlightedIndex === index}
                    selected={selectedItem === item}
                    {...getItemProps({
                      key: item,
                      index,
                      item,
                    })}
                  >
                    {item}
                  </Items>
                ))}
              </Menu>
            ) : null}
          </div>
        )}
      </Downshift>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Dropdown = styled.div({
  height: '2.5rem',
  width: '20rem',
  borderRadius: '4px',
  opacity: '0.42',
  margin: '.5rem 1rem',
  position: 'relative',
});
const Input = styled.input({
  height: '2.4rem',
  width: '20rem',
  border: '1px solid #3C498A',
  paddingLeft: '.7rem',
  marginLeft: '0',
  '::focus': {
    outline: 'none',
  },
  '::placeholder': {
    opacity: '1',
    color: 'black',
  },
});
const Button = styled.button({
  background: 'transparent',
  outline: 'none',
  border: 'none',
  position: 'absolute',
  right: '0',
  top: '35%',
  width: '1rem',
});
const Menu = styled.ul({
  width: '198px',
  border: '1px solid white',
  borderRadius: '4px',
  margin: '0px',
  padding: '0px',
});

const Items = styled.li(
  ({ highlighted, selected }: { highlighted: boolean; selected: boolean }) => ({
    width: '100%',
    padding: '5px',
    listStyle: 'none',
    textDecoration: 'none',
    border: ' 1px solid #ECECEC',
    borderRadius: ' 4px 4px 0px 0px',
    background: selected ? '#ECECEC' : 'white',
    ':hover': {
      backgroundColor: '#ECECEC',
    },
  })
);

export default DownshiftDropdown;
