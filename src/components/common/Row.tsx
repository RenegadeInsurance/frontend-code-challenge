import styled from '@emotion/styled';

const Row = styled.div(
  (props: { spacing?: string; justifyContent?: string }) => ({
    display: 'flex',
    justifyContent: props.justifyContent,
    margin: '1rem 0',
    div: {
      marginRight: props.spacing,
    },
  })
);

export default Row;
