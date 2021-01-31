import styled from '@emotion/styled';

const Row = styled.div(
  (props: { spacing?: string; justifyContent?: string }) => ({
    display: 'flex',
    justifyContent: props.justifyContent,
    alignItems: 'center',
    margin: '0',
    div: {
      margin: props.spacing || '0',
    },
  })
);

export default Row;
