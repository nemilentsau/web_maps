window.onload = function () {
    var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'});

    $.getJSON("data/census_json.geojson", function(data) {

    var geojson = L.geoJson(data, {

        pointToLayer: function (feature, latlng) {
            var smallIcon = L.icon({
                               iconSize: [27, 27],
                               iconAnchor: [13, 27],
                               popupAnchor:  [1, -24],
                               iconUrl: 'data/leaf.png'});
     
              return L.marker(latlng, {icon: smallIcon});
            },

        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.Area_Name);
      }
    });

    var map = L.map('my-map')
    .fitBounds(geojson.getBounds());
//    .setView([0.0,-10.0], 2);

    basemap.addTo(map);
    geojson.addTo(map);
  });

};
