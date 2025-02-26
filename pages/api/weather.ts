import {NextApiRequest, NextApiResponse} from "next";
import {WeatherResponse} from "@/types/weather";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { city } = req.query;
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

    if(!city || typeof city !== 'string') {
        return res.status(400).json({error: 'City is required'});
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if(!response.ok) {
            throw new Error("Failed to fetch weather data.");
        }
        const data: WeatherResponse = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error: (error as Error).message});
    }
}