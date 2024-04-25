import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #A2E0A5;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Calc = styled.div`
    max-width: 350px;
    height: 550px;
    background-color: #4A5159;
    border-radius: 28px;
    position: relative;
    
    .screen {
        background-color: white;
        margin: 25px;
        width: 300px;
        height: 68px;
        border-radius: 10px;
        box-shadow: 2px 2px 5px #2B2C30;
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px
    }

    .icon {
        font-size: 28px;
        font-weight: 600;
        color: #8AFE8F;
    }

    .result {
        flex: 1;
        max-width: 225px;
        text-align: right;
        font-size: 36px;
        border: none;
        background-color: #FFF;
    }

    .keyboard {
        width: 100%;
        height: 430px;
        background-color: #2B2C30;
        border-radius: 28px;
        position: absolute;
        bottom: 0;
        padding: 15px;
    }

    .keys {
        text-align: center;
        border-collapse: separate;
        border-spacing: 10px;
    }

    .keys td {
        width: 68px;
        height: 68px;
        font-size: 24px;
        color: #999CA3;
        border-radius: 10px;
        cursor: pointer;
    }

    .keys td.highlight {
        color: #8AFE8F;
    }
    
    .keys td.highlight:not(:first-child) {
        font-size: 36px;
    }
    .keys td.ac {
        border: 2px solid  #8AFE8F;
    }
    
    .keys td.equal {
        background-color: #8AFE8F;
        color: #2B2C30;
        font-size: 36px;
        font-weight: 800;
    }
    
    .keys td:hover {
        background-color: rgba(155, 155, 165, 0.5);
    }
`