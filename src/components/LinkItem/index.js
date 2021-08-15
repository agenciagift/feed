import React from 'react'
import { LinkItemWrapper } from './styled';

export default function LinkItem({ link }) {
    return (
        <LinkItemWrapper key={link.id}>
            <a href={link.url} target="_blank" rel="noreferrer">
                {link.text || link.url}
            </a>
        </LinkItemWrapper>
    );
}
