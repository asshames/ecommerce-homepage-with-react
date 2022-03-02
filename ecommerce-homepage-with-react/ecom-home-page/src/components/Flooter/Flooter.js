import { ArrowForwardIos, Facebook, Instagram, LinkedIn, Twitter, YouTube } from "@material-ui/icons";
import React from "react";
import Logo from "../Logo/Logo";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  margin-top:20px;
  padding-left: 140px;
  background-color: #ccc;
  width: 95%;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;


const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Store = styled.div`
 display: flex;
`;

const Ap = styled.div`
margin-left: 10px; 
padding: 10px;
`
const Flooter = () => {
    return (
        <Container>
            <Left>
                <Logo>MyShop</Logo>
                <p>Contact Number: +880 XXXX XXX XXX</p>
                <p> Email ID: Support@myshop.com</p>
                <p>Address: BDBL Bhaban, Level-7, Kazi Nazrul Islam Ave, Dhaka 1215</p>
            </Left>
            <Center>
                <Title>Contact Info</Title>
                <List>
                    <ListItem> <ArrowForwardIos /> About Us</ListItem>
                    <ListItem> <ArrowForwardIos /> Track My Order</ListItem>
                    <ListItem> <ArrowForwardIos /> Privacy and Confidentially</ListItem>
                    <ListItem> <ArrowForwardIos /> Terms and Conditions</ListItem>
                    <ListItem> <ArrowForwardIos /> Return and Refund Policy</ListItem>
                    <ListItem> <ArrowForwardIos /> Contact Us</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Download Mobile App</Title>
                <Store>
                    <Ap>App Store</Ap>
                    <Ap>Google PlayStore</Ap>
                </Store>
                <Title>Follow Us</Title>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="3B5999">
                        <LinkedIn />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <YouTube />
                    </SocialIcon>
                </SocialContainer>
            </Right>
        </Container>
    )
}

export default Flooter;