import { useEffect } from "react";
import axios from "axios";

const Map = () => {
  useEffect(() => {
    // Load Google Maps API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize map after the script is loaded
      initMap();
    };
  }, []);

  const initMap = () => {
    // Set up map options
    const mapOptions = {
      center: { lat: 37.7749, lng: -122.4194 }, // Set initial map center (San Francisco coordinates)
      zoom: 12, // Set initial zoom level
    };

    // Create a new map
    const map = new window.google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );

    // Example: Add a marker
    const marker = new window.google.maps.Marker({
      position: { lat: 37.7749, lng: -122.4194 },
      map: map,
      title: "Hello, Google Maps!",
    });

    // Example: Make a request to a map-related API (Geocoding API in this case)
    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: "San Francisco, CA",
          key: "YOUR_API_KEY",
        },
      })
      .then((response) => {
        console.log(response.data.results[0].geometry.location);
      })
      .catch((error) => {
        console.error("Error fetching geocoding data:", error);
      });
  };
  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
};

export default Map;
