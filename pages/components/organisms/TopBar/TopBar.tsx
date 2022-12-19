import { Flex, HStack, Button, Text } from "@chakra-ui/react";
import React from "react";
import { MenuItem } from "../../molecules/MenuItem/MenuItem";

type Props = {};

const TopBar = ({}: Props) => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Flex justifyContent="space-between" py="2">
        <Text
          fontSize="36px"
          fontWeight="bold"
          lineHeight="42px"
          color="#1F79BA"
        >
          SuperApp
        </Text>
        <Flex>
          <HStack spacing="16px">
            <MenuItem text="Blog" href="/Blog" />
            <MenuItem text="Product" href="/product" />
            <MenuItem text="Pricing" href="/pricing" />
          </HStack>

          <Flex marginLeft="80px">
            <Button variant="solid" colorScheme="blue">
              Get started
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default TopBar;
