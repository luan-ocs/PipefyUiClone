import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 100%;
    padding: 0px 40px;
    align-items: center;
    opacity: ${props => props.done ? 0.6 : 1};

    & + div {
        border-left: 1px solid rgba(0, 0, 0, 0.09);
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    font-weight: bold;
    font-size: 16px;
`;

export const Body = styled.div`
    > ul {
        margin-top: 30px;
    }
`;

export const Button = styled.button`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    border: none;
    background-color: var(--list-colors);
    margin-top: 15px;
    cursor: pointer;
    margin-bottom: 15px;
    > svg {
        fill: var(--primary-color);
    }
`; 