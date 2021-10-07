import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');

    :root {
        --primary-color: #ecf1f8;
        --secondary-color: #32D460;
        --title-color: #fff;
        --list-colors: #333;
    } 

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        font: 14px "Roboto", "sans-serif";
        background: var(--primary-color);
        color: var(--list-colors);
        -webkit-font-smoothing: antialiased;
    }
    ul {
        list-style: none;
    }
`;
