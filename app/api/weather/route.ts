import {WeatherResponse} from "@/types/weather";
import {type NextRequest} from "next/server";

export async function GET(req: NextRequest) {
    const city = req.nextUrl.searchParams.get('city');
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

    if(!city) {
        return new Response('City is required', {
            status: 400
        });
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if(!response.ok) {
            throw new Error("Failed to fetch weather data.");
        }
        const data: WeatherResponse = await response.json();
        return Response.json(data, {status: 200});
    } catch (error) {
        return new Response((error as Error).message, {status: 500})
    }
}