import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import LinkItem from '../LinkItem';
import { LinkFilterButton, LinkListElement, LinkListHeader, LinkListWrapper, NextButton, NextLoadingMessage } from './styled';

const LoadMore = ({ next, loading, empty, ended }) => {
    if (ended) {
        return (
            <p>Não há mais resultados.</p>
        );
    }

    if (loading) {
        return (
            <NextLoadingMessage>
                Carregando...
            </NextLoadingMessage>
        );
    }

    if (empty) {
        return (
            <p>Nada para exibir :( Tente uma pesquisa diferente.</p>
        )
    }

    return (
        <NextButton
            onClick={() => next()}
        >
            Carregar mais
        </NextButton>
    );
};

export default function LinkList() {
    const {
        links, search, loading, ended,
        next, requestSearch,
    } = useContext(GlobalContext);

    return (
        <LinkListWrapper>
            {search && (
                <LinkListHeader>
                    <p>Pesquisando por: <strong>{search}</strong>.</p>
                    <LinkFilterButton onClick={() => requestSearch('')}>
                        Remover filtro
                    </LinkFilterButton>
                </LinkListHeader>
            )}

            <LinkListElement>
                {links.map((link) => (
                    <LinkItem key={link.id} link={link} />
                ))}
            </LinkListElement>

            <LoadMore
                next={next}
                loading={loading}
                empty={!links.length}
                ended={ended} />
        </LinkListWrapper>
    )
}
