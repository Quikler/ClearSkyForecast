declare global {
  interface Window {
    [key: string]: any;
  }
}

export function fetchGeo(callbackName = "callback"): Promise<any> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://geolocation-db.com/jsonp?callback=${callbackName}`;
    script.async = true;

    window[callbackName] = (data: any) => {
      resolve(data);
      delete window[callbackName];
      document.body.removeChild(script);
    };

    script.onerror = () => {
      reject(new Error("Failed to load script"));
    };

    document.body.appendChild(script);
  });
}

export function fetchGeoAndApi(apiUrl: string) {
  return fetchGeo()
    .then(location => {
      console.log("[LOCATION]:", location);
      const urlWithParams = `${apiUrl}?${new URLSearchParams(location)}`;
      return fetch(urlWithParams);
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      throw error; // Rethrow to handle it elsewhere if needed
    });
}