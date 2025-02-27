import Layout from '@/components/Layout';
import Weather from "@/components/Weather";
import Header from "@/components/Header";
import {useState} from "react";
import {WeatherResponse} from "@/types/weather";

export default function Home() {
    const [weather, setWeather] = useState<WeatherResponse | null>(null);
    return (
        <Layout>
            <Header onWeatherFetched={setWeather} />
            <Weather weather={weather} />
        </Layout>
    );
}