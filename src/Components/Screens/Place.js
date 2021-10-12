import React from "react";
import Gps from "../Includes/images/place.svg";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function Place() {
  const [travel, setTravel] = useState([]);
  const [gallery, setGallery] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://traveller.talrop.works/api/v1/places/view/${id}`)
      .then(function (response) {
        // handle success
        console.log(response.data.data);
        setTravel(response.data.data);
        setGallery(response.data.data.gallery);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  const renderImages = () => {
    return gallery.map((item) => <Image src={item.image} alt="Image" />);
  };
  const renderItems = () => {
    console.log(gallery);
    return (
      <>
        <Container>
          <Top>
            <Heading>{travel.name}</Heading>
            <SubTop>
              <Geography>{travel.category_name}</Geography>
              <Location>
                <Icon>
                  <Map src={Gps} alt="Logo" />
                </Icon>
                <SubHeading>{travel.location}</SubHeading>
              </Location>
            </SubTop>
          </Top>
          <Middle>
            <Left>
              <Main src={travel.image} alt="Image" />
            </Left>
            <Right>{renderImages()}</Right>
          </Middle>
          <Bottom>
            <SubHeading2>Place Details</SubHeading2>
            <SubPara>{travel.description}</SubPara>
          </Bottom>
        </Container>
        )
      </>
    );
  };

  return (
    <>
      <Helmet>
        <title>{travel.name}</title>
      </Helmet>
      {renderItems()}
    </>
  );
}

const Container = styled.section`
  width: 90%;
  margin: 0 auto;
`;
const Top = styled.div``;
const Heading = styled.h2``;
const SubTop = styled.div`
  display: flex;
  align-items: center;
`;
const Geography = styled.span`
  border: 1px solid grey;
  padding: 4px 11px;
  border-radius: 12px;
`;
const Location = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const Icon = styled.div`
  width: 8%;
`;
const Map = styled.img`
  display: block;
  width: 100%;
`;
const SubHeading = styled.span`
  font-size: 12px;
  margin-left: 7px;
  color: grey;
`;
const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 15px;
`;
const Left = styled.div`
  width: 50%;
`;
const Main = styled.img`
  display: block;
  width: 100%;
  border-radius: 21px 0 0 21px;
`;
const Right = styled.div`
  display: grid;
  grid-gap: 16px 11px;
  grid-template-columns: auto auto;
  width: 49%;
`;
const Image = styled.img`
  width: 100%;
 `;
const Bottom = styled.div`
  margin-top: 15px;
`;
const SubHeading2 = styled.h3``;
const SubPara = styled.p``;
