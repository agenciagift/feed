import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import LinkItem from '../LinkItem';
import { LinkListElement, LinkListWrapper, NextButton, NextLoadingMessage } from './styled';

export default function LinkList() {
    const { docs, next, loading } = useFirestore('links');

    return (
        <LinkListWrapper>
            <LinkListElement>
                {docs.map((link) => (
                    <LinkItem key={link.id} link={link} />
                ))}
            </LinkListElement>

            {loading
                ? (
                    <NextLoadingMessage>
                        Carregando...
                    </NextLoadingMessage>
                )
                : (
                    <NextButton
                        onClick={() => next()}
                    >
                        Carregar mais
                    </NextButton>
                )}
        </LinkListWrapper>
    )
}
