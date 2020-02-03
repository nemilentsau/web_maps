window.onload = function () {
    var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'});

    function getColor(area) {
        switch (area) {
          case 'City of London':
            return  'red';
          default:
            return 'blue';
        }
      }


    $.getJSON("data/census_json.geojson", function(data) {

    var jsonfeature = L.geoJson(data, {

        pointToLayer: function (feature, latlng) {
            var geojsonMarkerOptions = {
                radius: 8,
                fillColor: getColor(feature.properties.Area_Name),
                color: "blue",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            };
     
              return L.circleMarker(latlng, geojsonMarkerOptions);
            },

        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.Area_Name);
      }
    });

    var map = L.map('my-map')
    .fitBounds(jsonfeature.getBounds());
//    .setView([0.0,-10.0], 2);

    basemap.addTo(map);
    jsonfeature.addTo(map);
  });

};
