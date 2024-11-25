import { ChakraComponent, Flex, FlexProps, Text } from "@chakra-ui/react";
import { ElementType, JSX } from "react";

interface TextWithIconProps {
  icon: JSX.Element;
  title: string;
  isTitleVisible?: boolean;
  isIconVisible?: boolean;
}

export const TextWithIcon: ChakraComponent<ElementType, FlexProps & TextWithIconProps> = ({
  icon,
  title,
  isTitleVisible: isTextVisible = true,
  isIconVisible = true,
  ...rest
}) => (
  <Flex alignItems="center" gap={3} {...rest}>
    {isIconVisible && icon}
    {isTextVisible && <Text>{title}</Text>}
  </Flex>
);