import { Text } from "@chakra-ui/react";
import { TopBarDTO } from "../interfaces/dto";
import { fiveXlFs, twoXlFs } from "../App";

export default function TopBar({ latitude, longitude, city, region, country }: TopBarDTO) {
  return (
    <>
      <Text fontWeight='bold' fontSize={fiveXlFs()}>{latitude} °N, {longitude} °E</Text>
      <Text fontWeight='bold' fontSize={twoXlFs()}>{city}, {region} Oblast, {country}</Text>
    </>
  );
}