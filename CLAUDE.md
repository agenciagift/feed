# O Feed — instruções para sessões de IA

Lista permanente de recursos compartilhados pela comunidade Agência Gift. React (Create React App) + Redux Toolkit + Firebase/Firestore.

## Comandos
- `npm install` e `npm start` — servidor local
- `npm test` — testes; `npm run build` — build; `npm run deploy` — publica (**só com OK do João**)

## Estrutura
`src/` (código), `public/`, `build/` (artefato, não editar).

## Regras
1. **Não publicar sem OK explícito do João:** `git push`, merge e deploy dependem de aprovação por mensagem. Trabalhe em branch, faça commits locais e mostre o `git diff`.
2. **Nunca inventar fato** (serviços, preços, endereços, números, depoimentos): o conteúdo vem do cliente; se faltar dado, pergunte.
3. **Sem dado sensível no repositório:** senhas, chaves, CPF/RG, dados pessoais de clientes ou usuários.
4. Mudança mínima e reversível; confirmar antes de apagar páginas, mudar `CNAME` ou domínio.
5. Não expor credenciais do Firebase fora de variáveis de ambiente; nunca alterar regras do Firestore sem OK.
