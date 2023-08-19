import { Humidity } from '@/component/weather/Humidity';
import { ReactNode } from "react";
export interface Condition {
  text: string; // Description of the weather condition (e.g., "Sunny")
  icon: string; // URL to the weather condition icon
  code: number; // Numeric code representing the weather condition
}

export interface AirQuality {
  co: number; // Carbon monoxide level
  no2: number; // Nitrogen dioxide level
  o3: number; // Ozone level
  so2: number; // Sulfur dioxide level
  pm2_5: number; // Particulate matter (PM2.5) level
  pm10: number; // Particulate matter (PM10) level
  "us-epa-index": number; // Air quality index according to US EPA standards
  "gb-defra-index": number; // Air quality index according to UK DEFRA standards
}

export interface CurrentWeather {
  last_updated_epoch: number; // Unix timestamp of when the data was last updated
  last_updated: string; // Human-readable date and time when data was last updated
  temp_c: number; // Temperature in degrees Celsius
  temp_f: number; // Temperature in degrees Fahrenheit
  is_day: number; // Indicates if it's currently daytime (1) or nighttime (0)
  condition: Condition; // Weather condition details (defined by Condition interface)
  wind_mph: number; // Wind speed in miles per hour
  wind_kph: number; // Wind speed in kilometers per hour
  wind_degree: number; // Wind direction in degrees
  wind_dir: string; // Wind direction as a cardinal direction (e.g., "NW")
  pressure_mb: number; // Atmospheric pressure in millibars
  pressure_in: number; // Atmospheric pressure in inches of mercury
  precip_mm: number; // Precipitation amount in millimeters
  precip_in: number; // Precipitation amount in inches
  humidity: number; // Relative humidity percentage
  cloud: number; // Cloud cover percentage
  feelslike_c: number; // "Feels like" temperature in degrees Celsius
  feelslike_f: number; // "Feels like" temperature in degrees Fahrenheit
  vis_km: number; // Visibility in kilometers
  vis_miles: number; // Visibility in miles
  uv: number; // UV index
  gust_mph: number; // Wind gust speed in miles per hour
  gust_kph: number; // Wind gust speed in kilometers per hour
  air_quality: AirQuality; // Air quality details (defined by AirQuality interface)
}

export interface Location {
  name: string; // Name of the location (e.g., "Kharian")
  region: string; // Region or locality (e.g., "Punjab")
  country: string; // Country name (e.g., "Pakistan")
  lat: number; // Latitude coordinates
  lon: number; // Longitude coordinates
  tz_id: string; // Timezone identifier (e.g., "Asia/Karachi")
  localtime_epoch: number; // Local time in Unix timestamp format
  localtime: string; // Local time in human-readable format
}

export interface WeatherData {
  location: Location; // Location details (defined by Location interface)
  current: CurrentWeather; // Current weather details (defined by CurrentWeather interface)
}

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
export interface HumidityLabel {
  id: number;
  label: string;
  value: string;
  icons: JSX.Element;
  
}
