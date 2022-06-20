import styled from "styled-components";
import trelloIcon from '../../assets/trello-logo-blue.svg'

export const TrelloIcon = () => {
    return <Icon src={trelloIcon} alt="trelloIcon" />
}

const Icon = styled.img`
    width: 200px;
`