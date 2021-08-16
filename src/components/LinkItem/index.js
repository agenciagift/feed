import React from 'react'
import { LinkItemWrapper } from './styled';

export default function LinkItem({ link }) {
    return (
        <LinkItemWrapper key={link.id}>
            <p>
                <strong>
                    <a href={link.url} target="_blank" rel="noreferrer">
                        {link.title || link.url}
                    </a>
                </strong>
            </p>
            <p>{link.description}</p>
        </LinkItemWrapper>
    );
}
