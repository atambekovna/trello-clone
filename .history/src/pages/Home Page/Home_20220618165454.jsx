import mainLogo from '../../assets/Hero-mobile_2x.webp'
import { TrelloIcon } from "../../assets/TrelloIcon/TrelloIcon"
import down from '../../assets/icons/down.png'
import { Button } from "../../components/UI/Button/Button"
import { Link } from 'react-router-dom'
import styled from "styled-components";

export const Home = ({login}) => {
    return (
        <>
        <HeaderStyled>
            <CardHeader>
            <TrelloIcon/>
            <BtnBlock>
                <Button>Features<img src={down}/></Button>
                <Button>Solitions<img src={down}/></Button>
                <Button>Plans<img src={down}/></Button>
                <Button>Pricing<img src={down}/></Button>
                <Button>Resources<img src={down}/></Button>
            </BtnBlock>
            </CardHeader>
            <BtnBlock>
                <Button><Link to='/login'>Log in</Link></Button>
                <Button primary={true}>Get Trello for free</Button>
            </BtnBlock>
        </HeaderStyled>
        <Card>
        <Main>
            <Text>
                <div>
                    <H1>Trello helps teams move work forward.</H1>
                    <Title>Collaborate, manage projects, and reach new 
                        productivity peaks. From high rises to the home 
                        office, the way your team works is unique—accomplish 
                        it all with Trello.
                    </Title>
                </div>
                <MainLogo src={mainLogo} alt="" />
            </Text>
        </Main>
        </Card>
        </>
    )
}

const Main = styled.main`
    box-sizing: border-box;
    margin: 0 auto;
    width: 1600px;
    height: 900px;
    padding: 80px 0;
`

const Card = styled.div`
    background-color: #d6dada81;
`

const Text  = styled.div`
    display: flex;
`

const MainLogo = styled.img`
    width: 700px;
`

const H1 = styled.h1`
    font-size: 70px;
`
const Title =styled.p`
    font-size: 30px;
`
const CardHeader = styled.div`
    display: flex;
`

const BtnBlock = styled.div`
    display: flex;
`

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 80px;
  background-color: white;
`

