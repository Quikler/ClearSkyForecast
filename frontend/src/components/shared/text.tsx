import { ChakraComponent, Flex, FlexProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface TextWithIcon {
  icon: JSX.Element,
  title: string
}

export const TextWithIcon: ChakraComponent<ElementType, FlexProps & TextWithIcon> = ({ icon, title, props }) => (
  <Flex {...props} alignItems="center" gap={3}>
    {icon}
    <Text>{title}</Text>
  </Flex>
);