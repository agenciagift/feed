import React from 'react';
import useAuth from '../../hooks/useAuth';
import { BaseInput } from '../form';
import { VerticalLayout } from '../layout';
import { ErrorMessage, Message } from '../messages';
import PublishForm from './PublishForm';
import useAddLinkState from './useAddLinkState';

function AddLink() {
    const { state, actions } = useAddLinkState();
    const { user, error } = useAuth();

    if (error && !user) {
        return (
            <ErrorMessage>Erro no login. Tente novamente.</ErrorMessage>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <form onSubmit={actions.addLink}>
            <h4>Compartilhar link</h4>

            <VerticalLayout>
                <BaseInput
                    placeholder="https://"
                    value={state.url}
                    onChange={(e) => actions.setUrl(e.target.value)} />

                {state.loading && <Message>Carregando...</Message>}

                {state.showPublishForm && <PublishForm {...state} {...actions} />}

                {state.error && (
                    <ErrorMessage>
                        Desculpe! Ocorreu um erro inesperado :(
                    </ErrorMessage>
                )}
            </VerticalLayout>
        </form>
    );
}

export default AddLink;
