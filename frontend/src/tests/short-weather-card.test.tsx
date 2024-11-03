import ShortWeatherCard from '../components/short-weather-card';
import { describe, expect, it } from 'vitest';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { theme, ThemeProvider } from '@chakra-ui/react';

describe("ShortWeatherCard", () => {
  it("renders ShortWeatherCard with provided data", () => {
    
    // Test data
    const city = "City";
    const region = "Region";
    const currentTime = "20:11 2024/10/21";
    const currentTemp = 13;
    const cloudState = "broken clouds";
    const maxTemp = 15;
    const minTemp = 8;
    const icon = "04d";
    
    // Render the component
    render(<ThemeProvider theme={theme}>
      <ShortWeatherCard
        city={city}
        region={region}
        currentTime={currentTime}
        currentTemp={currentTemp}
        cloudState={cloudState}
        maxTemp={maxTemp}
        minTemp={minTemp}
        icon={icon}
      />
    </ThemeProvider>);

    expect(screen.getByText(`${city}, ${region} Region as of ${currentTime}`)).toBeInTheDocument();
    expect(screen.getByText(`${currentTemp}°`)).toBeInTheDocument();
    expect(screen.getByText(cloudState)).toBeInTheDocument();
    expect(screen.getByText(`Max - ${maxTemp}° • Min - ${minTemp}°`)).toBeInTheDocument();
    
    const weatherIcon = screen.getByTestId("weather-icon-wrap").querySelector('svg');
    expect(weatherIcon).toBeInTheDocument();
    expect(weatherIcon?.tagName).toBe("svg");
  });
});