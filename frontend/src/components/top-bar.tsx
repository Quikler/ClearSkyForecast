import { Text } from "@chakra-ui/react";
import { TopBarDTO } from "../interfaces/dto";
import { useFontSizes } from "../hooks/breakpoints";

export default function TopBar({ latitude, longitude, city, state, country_name }: TopBarDTO) {
  const { fiveXlFs, twoXlFs } = useFontSizes();
  
  return (
    <>
      <Text fontWeight='bold' fontSize={fiveXlFs}>{latitude} °N, {longitude} °E</Text>
      <Text fontWeight='bold' fontSize={twoXlFs}>{city}, {state} Oblast, {country_name}</Text>
    </>
  );
}