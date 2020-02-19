import React from 'react';
import styled from 'styled-components';

export default function SubFooter() {
    const copyDate = new Date().getFullYear();

    return (
        <Wrapper><h5>&copy;{copyDate} FarmWide</h5></Wrapper>
    )
}

const Wrapper =styled.div `
background-color:var(--mainBlack);
color:white;
text-align:center;
padding:0.8em;
`