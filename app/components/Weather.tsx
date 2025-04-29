"use client";

import {WeatherResponse} from "@/types/weather";
import {useState} from "react";
import {createLocation} from "@/app/actions/addLocation";

export default function Weather() {
    const [city, setCity] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [weather, setWeather] = useState<WeatherResponse | null>(null);

    const fetchWeather = async () => {
        if(!city) return;
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`api/weather?city=${city}`);
            const data: WeatherResponse = await res.json();
            if(res.ok) {
                setWeather(data);
            } else {
                setError(new Error(data.error) || new Error('Failed to fetch weather data'));
                setWeather(null);
            }
        } catch (error) {
            setError(new Error(`An error occurred while fetching data: ${error}`));
            setWeather(null);
        }
        setLoading(false);
    };

    const handleLocation = async () => {
        await createLocation(city);
    }
    return (
        <div>
            <div className="w-[800px] m-auto flex gap-4 pt-12">
                <input
                    type="text"
                    className="w-full p-3 rounded text-gray-600"
                    placeholder="Enter the city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    onClick={fetchWeather}
                    className="bg-white text-blue-600 px-4 py-2 rounded"
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Search"}
                </button>
            </div>
            {error && <p className="text-red-600">error</p>}
            { weather &&
                <div className="p-4 bg-white text-gray-500 max-w-3xl rounded-lg mx-auto shadow-md mt-4">
                    <h2 className="text-lg font-semibold">{weather.name}</h2>
                    <p>{weather.weather[0].description}</p>
                    <p>Temp: {weather.main.temp}°C</p>
                    <form >
                        <button className="bg-blue-500 text-white p-3 rounded" onClick={handleLocation}>Add location</button>
                    </form>
                </div>}
        </div>
    )

}