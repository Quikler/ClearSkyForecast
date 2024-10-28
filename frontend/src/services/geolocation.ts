export interface ILocation {
  get(): Promise<{ latitude: number, longitude: number }>;
}

export abstract class GeoGetter {
  static async get(): Promise<{ latitude: number; longitude: number; }> {
    
    if (import.meta.env.DEV) {
      return await new IpInfoLocation().get();
    } else {
      const isChromeBased = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

      if (isChromeBased && navigator.geolocation) {
        return await new NativeLocation().get();
      }
      else {
        return await new IpInfoLocation().get();
      }
    }
  }
}

export class NativeLocation implements ILocation {
  get() {
    return new Promise<{ latitude: number, longitude: number }>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      }, error => {
        reject(new Error(error.message));
      });
    });
  }
}

export class IpInfoLocation implements ILocation {
  async get() {
    const resp = await fetch("https://localhost:7115/api/location/coordinates");
    const txt = await resp.json();
    
    return { latitude: txt.lat, longitude: txt.lon };
  }
}