import requests
import os
from datetime import datetime

def get_weather_data(city, api_key):
    """
    Fetch weather data for a given city using OpenWeatherMap API
    """
    base_url = "http://api.openweathermap.org/data/2.5/weather"
    params = {
        "q": city,
        "appid": api_key,
        "units": "metric"  # Use metric units for temperature
    }

    try:
        response = requests.get(base_url, params=params)
        response.raise_for_status()
        weather_data = response.json()
        
        return {
            "city": weather_data["name"],
            "temperature": weather_data["main"]["temp"],
            "description": weather_data["weather"][0]["description"],
            "humidity": weather_data["main"]["humidity"],
            "wind_speed": weather_data["wind"]["speed"]
        }
    except requests.exceptions.RequestException as e:
        print(f"Error fetching weather data: {e}")
        return None

def main():
    # Replace with your OpenWeatherMap API key
    api_key = "YOUR_API_KEY"
    city = "London"  # Example city
    
    weather = get_weather_data(city, api_key)
    
    if weather:
        print(f"\nWeather in {weather['city']}:")
        print(f"Temperature: {weather['temperature']}°C")
        print(f"Description: {weather['description']}")
        print(f"Humidity: {weather['humidity']}%")
        print(f"Wind Speed: {weather['wind_speed']} m/s")

if __name__ == "__main__":
    main()