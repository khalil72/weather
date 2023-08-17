import { ReactNode } from "react";

export interface BackgroundContainerProps {
  children: ReactNode;
}

export interface temperature {
  location: string | undefined;
  condition: string | undefined;
  icon: string | undefined;
  temperatureC: number | undefined;
}
export interface HumidityProps {
  humidity: number | undefined;
  airPressure: number | undefined;
  chanceOfRain: number | undefined;
  windSpeed: number | undefined;
}
