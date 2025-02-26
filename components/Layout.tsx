import {useState} from "react";
import Header from "./Header";
import Weather from "./Weather";
import "@/app/globals.css";
import {WeatherResponse} from "@/types/weather";
import {Geist, Geist_Mono} from "next/font/google";
import type {Metadata} from "next";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Next Weather",
    description: "App to check weather around the globe",
};

export default function RootLayout() {
    const [weather, setWeather] = useState<WeatherResponse | null>(null);

    return (
        <div
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            <Header onWeatherFetched={setWeather} />
            <main>
                <Weather weather={weather} />
            </main>
        </div>
    )
}