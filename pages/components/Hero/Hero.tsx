import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <Flex
      w="100%"
      background="linear-gradient(93.73deg, #FEAC5E, #C779D0 47.86%, #4BC0C8 90.58%)"
    >
      <Container py="64px">
        <Heading>
          Increase your productivity
          <br />
          Make Your app in minutes
        </Heading>
        <Text mt="8px" fontSize="26px" lineHeight="64px" color="gray.600">
          Your Fullstack React app
        </Text>
      </Container>
    </Flex>
  );
}
