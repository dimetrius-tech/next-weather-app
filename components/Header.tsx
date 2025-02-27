import {useState} from "react";
import {WeatherResponse} from "@/types/weather";
import Modal from "@/components/Modal";

type HeaderProps = {
    onWeatherFetched: (data: WeatherResponse | null) => void;
}

export default function Header({onWeatherFetched}: HeaderProps) {
    const [city, setCity] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [openLogin, setOpenLogin] = useState<boolean>(false);

    const fetchWeather = async () => {
        if(!city) return;
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`/api/weather?city=${city}`);
            const data: WeatherResponse = await res.json();
            if(res.ok) {
                onWeatherFetched(data);
            } else {
                setError(new Error(data.error) || new Error('Failed to fetch weather data'));
                onWeatherFetched(null);
            }
        } catch (error) {
            setError(new Error(`An error occurred while fetching data: ${error}`));
            onWeatherFetched(null);
        }
        setLoading(false);
    };

    return (
        <header className="w-full p-4 bg-blue-500 text-white text-center shadow-md">
            <div className="flex justify-between gap-4">
                <h1 className="text-4xl my-auto font-bold uppercase">Weather</h1>
                <div className="w-[800px] flex gap-4">
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
                <div className="flex gap-4">
                    <button onClick={() => setOpenLogin(true)}>Login</button>
                    <button>Sign up</button>
                </div>
                {error && <p className="text-red-600">error</p>}
            </div>
            {openLogin && <Modal />}
        </header>
    );
}