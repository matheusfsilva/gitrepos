/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

// Estilos do input styled-components
const InputStyle = styled.input`
    background-color: #ffffff5c;
    border: none;
    font-size: 18px;
    height: 30px;
    padding: 10px;
    color: white;
    margin-bottom: 20px;
    ::placeholder{
        color: #24292D;
    }
`;


export default function Input(props: any) {
    // component
    return (
        <InputStyle {...props} title="Home" />
    )
}