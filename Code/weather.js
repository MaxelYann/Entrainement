 const apiKey = '3e677316641500a361226f557a5862f9';
        const city = 'Tokyo';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

        
        function getWeather() {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === 200) {
                        const temperature = data.main.temp;
                        const pressure = data.main.pressure;
                        const humidity = data.main.humidity;
                        const description = data.weather[0].description;

                        const weatherInfo = `
                            <h2>Météo à ${city} :</h2>
                            <p>Température : ${temperature}°C</p>
                            <p>Pression : ${pressure} hPa</p>
                            <p>Humidité : ${humidity}%</p>
                            <p>Conditions : ${description.charAt(0).toUpperCase() + description.slice(1)}</p>
                        `;
                        document.getElementById('weather').innerHTML = weatherInfo;
                    } else {
                        document.getElementById('weather').innerHTML = `<p>Erreur : Impossible de récupérer les informations météo.</p>`;
                    }
                })
                .catch(error => {
                    document.getElementById('weather').innerHTML = `<p>Erreur : ${error}</p>`;
                });
        }