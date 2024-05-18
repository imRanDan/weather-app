"use client"

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useQuery } from "react-query";
import NEXT_PUBLIC_WEATHER_KEY from '.env.local'

interface WeatherDetail {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_jf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_text: string;
}

interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherDetail[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;  
  };
}


// https://api.openweathermap.org/data/2.5/forecast?q=toronto&appid=NEXT_PUBLIC_WEATHER_KEY&cnt=56
export default function Home() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.openweathermap.org/data/2.5/forecast?q=toronto&appid=27e19f6fd534a77deb2222f11b2db7b321&cnt=56'
      ).then((res) => res.json())
  });

  if (isLoading) return 'Loading...'

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
    </div>
  );
}
