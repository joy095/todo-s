import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type MenuItemProps = {
  text: string;
  href: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({ text, href }) => {
  return (
    <Text color="#666" fontSize="18px">
      <Link href={href}>{text}</Link>
    </Text>
  );
};
