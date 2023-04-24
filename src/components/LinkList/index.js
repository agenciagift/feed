import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import LinkItem from '../LinkItem';
import { LinkFilterButton, LinkListElement, LinkListHeader, LinkListWrapper, NextButton, NextLoadingMessage } from './styled';
import useUserLikes from "../../hooks/useUserLikes";
import useAuth from "../../hooks/useAuth";

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
        next, requestSearch, setUserLikes
    } = useContext(GlobalContext);
    const { user } = useAuth();
    const { initialLikes } = useUserLikes(user);

    useEffect(() => {
         if (initialLikes && initialLikes.length) {
            setUserLikes(initialLikes);
        };
    }, [initialLikes])

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
