import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../Includes/images/logo.svg";
import Gps from "../Includes/images/place.svg";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Travell() {
  const [places, setplaces] = useState([]);
  useEffect(() => {
    axios
      .get("https://traveller.talrop.works/api/v1/places/")
      .then(function (response) {
        // handle success
        console.log(response.data.data);
        setplaces(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const renderItems = () => {
    return places.map((place) => (
      <Item>
        <ItemLink key={place.id}>
          <Link to={`/view/${place.id}`}>
            <Img_Cont>
              <Place src={place.image} alt="Image" />
            </Img_Cont>
            <ItemHeading>{place.name}</ItemHeading>
            <Location>
              <Icon>
                <Map src={Gps} alt="Logo" />
              </Icon>
              <Destination>{place.location}</Destination>
            </Location>
          </Link>
        </ItemLink>
      </Item>
    ));
  };
  return (
    <>
        <Helmet></Helmet>
        <Header>
          <HeaderLeft>
            <Heading>
              <HeadLink>
                <Img src={Logo} alt="Logo" />
              </HeadLink>
            </Heading>
          </HeaderLeft>
          <HeadRight>
            <Login>Login</Login>
          </HeadRight>
        </Header>
      <Main>
        <Content>
          <Top>
            <TopHeading>Welcome</TopHeading>
            <TopPara>Explore the world around you</TopPara>
          </Top>
          <Bottom>{renderItems()}</Bottom>
        </Content>
      </Main>
    </>
  );
}

const Header = styled.header`
  padding: 20px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderLeft = styled.div`
  width: 12%;
`;
const Heading = styled.h1``;
const HeadLink = styled.a`
  cursor: pointer;
`;
const Img = styled.img`
  display: block;
  width: 100%;
  transition: 0.4s ease-in-out;
`;
const HeadRight = styled.div``;
const Login = styled.a`
  background: #036ceb;
  padding: 10px 35px;
  font-size: 18px;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
`;
const Main = styled.section`
  padding: 20px 70px;
`;
const Content = styled.div`
  padding: 20px;
`;
const Top = styled.div``;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const TopHeading = styled.h3`
  font-size: 32px;
`;
const TopPara = styled.p`
  margin-top: 20px;
  color: grey;
`;
const Item = styled.div`
  padding-top: 20px;
  width: 20%;
`;
const Img_Cont = styled.div`
  width: 90%;
  overflow: hidden;
`;
const Place = styled.img`
  width: 100%;
  display: block;
  transition: 0.4s ease-in-out;

  &:hover {
    transition: 0.4s ease-in-out;
    transform: scale(1.5);
  }
`;
const ItemHeading = styled.h3`
  font-size: 16px;
  margin-top: 5px;
`;
const Location = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
const Icon = styled.div`
  width: 5%;
`;
const Map = styled.img`
  display: block;
  width: 100%;
`;
const Destination = styled.span`
  margin-left: 10px;
`;

const ItemLink = styled.a`
  cursor: pointer;
`;
