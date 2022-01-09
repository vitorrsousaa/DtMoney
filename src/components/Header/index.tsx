import logoImg from '../../assets/logo.svg'

import { Content, Container } from './styles'

interface HeaderProps {
    onOpenNewTransactionsModal: () => void;
}

export function Header(
    { onOpenNewTransactionsModal }: HeaderProps){

    return (
        <>
            <Container>
                <Content>
                <img src={logoImg} alt="dt-money" />
                <button type="button" onClick={onOpenNewTransactionsModal}>
                    Nova Transação
                </button>
                </Content>
            </Container>

        </>
    )
}