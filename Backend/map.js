//   var iconFeatures=[];

//   var iconFeature = new ol.Feature({
//       geometry: new ol.geom.Point(ol.proj.transform([-72.0704, 46.678], 'EPSG:4326',
//       'EPSG:3857')),
//       name: 'Null Island',
//       population: 4000,
//       rainfall: 500
//   });

//   iconFeatures.push(iconFeature);

  
//   var vectorSource = new ol.source.Vector({
//       features: iconFeatures //add an array of features
//   });

//   var iconStyle = new ol.style.Style({
//       image: new ol.style.Icon(/* @type {olx.style.IconOptions} */ ({
//           anchor: [0.5, 46],
//           anchorXUnits: 'fraction',
//           anchorYUnits: 'pixels',
//           opacity: 0.75,
//           src: 'res/marker.png'
//       }))
//   });

//   var map = new ol.Map({
//     target: 'map',
//     layers: [
//       new ol.layer.Tile({
//         source: new ol.source.OSM()
//       }),
//       new ol.layer.Vector({
//         source: vectorSource,
//         style: iconStyle,
//       }),
//     ],
//     view: new ol.View({
//       center: ol.proj.fromLonLat([37.93052, 23.74783]),
//       zoom: 4
//     })
//   });

const markerSource = new ol.source.Vector();

var markerStyle = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    opacity: 0.75,
    src: 'https://openlayers.org/en/v4.6.4/examples/data/icon.png'
  }))
});

let map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
    new ol.layer.Vector({
      source: markerSource,
      style: markerStyle,
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([6.661594, 50.433237]),
    zoom: 3,
  })
});

function addMarker (lon, lat) {
  console.log('lon:', lon);
  console.log('lat:', lat);

  var iconFeatures = [];

  var iconFeature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.transform([lon, lat], 'EPSG:4326',
      'EPSG:3857')),
    name: 'Null Island',
    population: 4000,
    rainfall: 500
  });
  markerSource.addFeature(iconFeature);
}

// map.on('singleclick',function(event){
//   var lonLat = ol.proj.toLonLat(event.coordinate);
//   addMarker(lonLat[0], lonLat[1]);
// });

var lonLat = [[23,24],[24.5,23.5],[18.7,19.6]];
for(var i=0; i<3; i++){
    addMarker(lonLat[i][0], lonLat[i][1])
}