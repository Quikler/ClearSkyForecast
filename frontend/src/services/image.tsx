import { SVGProps } from "react";
import { ClearSky, Clouds, FewClouds, Mist, Rain, Snow, SunnyRain, YellowPC, Thunderstorm } from "../components/svgr/openweather-icons";
import { PrimaryColor } from "../interfaces/shared";


const svgComponents: { [key: string]: React.FC<PrimaryColor & SVGProps<SVGSVGElement>> } = {
  "01n": ClearSky,
  "01d": ClearSky,
  "02n": FewClouds,
  "02d": FewClouds,
  "03n": Clouds,
  "03d": Clouds,
  "04n": Clouds,
  "04d": Clouds,
  "09n": Rain,
  "09d": Rain,
  "10n": SunnyRain,
  "10d": SunnyRain,
  "11n": Thunderstorm,
  "11d": Thunderstorm,
  "13n": Snow,
  "13d": Snow,
  "50n": Mist,
  "50d": Mist,
};

export function getOWSVGByName(name: string, props: SVGProps<SVGSVGElement>): JSX.Element | undefined {
  if (!name) return undefined;
  
  const primaryColor = name.includes("n") ? "black" : YellowPC;
  const Component = svgComponents[name];

  return Component ? <Component {...props} primaryColor={primaryColor} /> : undefined;
}