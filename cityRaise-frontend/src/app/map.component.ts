import {Component, OnInit} from '@angular/core';
import {WebService} from './web.service';

import OlMap from '../../node_modules/ol/Map.js';
// import OlXYZ from '../../node_modules/ol/source/xyz';
// import OlTileLayer from '../../node_modules/ol/layer/tile';
import OlView from '../../node_modules/ol/View.js';
import {fromLonLat} from '../../node_modules/ol/proj';
import OSM from '../../node_modules/ol/source/OSM.js';
import Tile from '../../node_modules/ol/layer/Tile.js';
import Vector from '../../node_modules/ol/source/Vector';
import Style from '../../node_modules/ol/style/Style.js';
import Icon from '../../node_modules/ol/style/Icon.js';
import VectorLayer from '../../node_modules/ol/layer/Vector.js';
import Feature from '../../node_modules/ol/Feature';
import Point from '../../node_modules/ol/geom/Point.js';
import {transform} from '../../node_modules/ol/proj';
import {element} from 'protractor';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  map: OlMap;
  // source: OlXYZ;
  // layer: OlTileLayer;
  view: OlView;
  markerSource = new Vector();

  coords;

  constructor(private webService: WebService/*, private authService: AuthService*/) {
  }

  setCoordsList() {
    // this.coords = this.webService.coords_list;
    // while (this.webService.coords_list === undefined) {};
    this.webService.coords_list.subscribe(elem => {
      // console.log(elem[1].coords[0]);

      for (const e of Object.values(elem)) {
        this.addMarker(e.coords[0], e.coords[1]);
      }
      // const values = Object.keys(elem);
      // console.log('VALUES: ' + values);
      // elem.forEach(e => {
      //   this.addMarker(e.coords[0], e.coords[1]);
      // });
    });
  }

  addMarker(lon, lat) {
    // console.log('lon:', lon);
    // console.log('lat:', lat);

    const iconFeature = new Feature({
      geometry: new Point(transform([lon, lat], 'EPSG:4326',
        'EPSG:3857'))
    });
    this.markerSource.addFeature(iconFeature);
  }

  // zeroCoord() {
  //   this.coord = [];
  // }

  ngOnInit() {

    this.webService.getAllPublicWorkCoords();

    const markerStyle = new Style({
      image: new Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: '../assets/marker.svg'
      }))
    });

    this.view = new OlView({
      center: fromLonLat([6.661594, 50.433237]),
      zoom: 5,
    });

    this.map = new OlMap({
      target: 'map',
      layers: [
        new Tile({
          source: new OSM(),
        }),
        new VectorLayer({
          source: this.markerSource,
          style: markerStyle,
        }),
      ],
      view: this.view
    });

  }
}
