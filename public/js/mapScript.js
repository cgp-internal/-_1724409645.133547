let map;
let polyline;
let currentRequest;

document.addEventListener("DOMContentLoaded", () => {
  map = L.map("map").setView([51.505, -0.09], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    subdomains: ["a", "b", "c"],
  }).addTo(map);

  polyline = L.polyline([], { color: "blue" }).addTo(map);

  map.on("click", (e) => {
    const latLng = e.latlng;
    polyline.addLatLng(latLng);
    currentRequest = [...polyline.getLatLngs()];
  });

  document.getElementById("submit-request").addEventListener("click", async () => {
    try {
      const response = await fetch("/flight-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ polygon: currentRequest }),
      });

      const result = await response.json();
      console.log(result);

      // Display result on the map
      const resultPolyline = L.polyline(result.polygon, { color: "green" }).addTo(map);
    } catch (error) {
      console.error(error);
    }
  });
});