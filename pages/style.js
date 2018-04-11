import styled, { css } from 'styled-components';

export default styled.div`
    ${(props) =>
        props.right &&
        css`
            padding: 10px 134px 10px 20px;
            &:after {
                left: initial;
                right: 30px;
            }
        `};
`;
