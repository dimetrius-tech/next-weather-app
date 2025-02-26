import {WeatherResponse} from "@/types/weather";

type WeatherProps = {
    weather: WeatherResponse | null;
}

export default function Weather({weather}: WeatherProps) {
    if(!weather) return (
        <div className="bg-white max-w-3xl rounded-lg flex justify-center m-auto p-4 mt-4">
            <p className="text-gray-500">Enter name of the city</p>
        </div>
    );

    return (
        <div className="p-4 bg-white text-gray-500 max-w-3xl rounded-lg mx-auto shadow-md mt-4">
            <h2 className="text-lg font-semibold">{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p>Temp: {weather.main.temp}°C</p>
        </div>
    )

}