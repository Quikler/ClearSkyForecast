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