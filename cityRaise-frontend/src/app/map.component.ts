import {Component, OnInit} from '@angular/core';
import {WebService} from './web.service';

import OlMap from '../../node_modules/ol/map';
import OlXYZ from '../../node_modules/ol/source/xyz';
import OlTileLayer from '../../node_modules/ol/layer/tile';
import OlView from '../../node_modules/ol/view';
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

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

    map: OlMap;
    source: OlXYZ;
    layer: OlTileLayer;
    view: OlView;
    markerSource = new Vector();
    
    coord = [];
    
    constructor(private webService: WebService/*, private authService: AuthService*/) {
    }

    addMarker (lon, lat) {
        console.log('lon:', lon);
        console.log('lat:', lat);
      
        var iconFeatures = [];
      
        var iconFeature = new Feature({
          geometry: new Point(transform([lon, lat], 'EPSG:4326',
            'EPSG:3857'))
        });
        this.markerSource.addFeature(iconFeature);
    }

    zeroCoord(){
        this.coord = [];
    }

    ngOnInit() {
        // this.source = new OlXYZ({
        //     // Tiles from Mapbox (Light)
        //     url: 'https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
        // });

        // this.layer = new OlTileLayer({
        //     source: this.source
        // });

        this.webService.getAllPublicWorkCoords();

        var markerStyle = new Style({
            image: new Icon(/** @type {olx.style.IconOptions} */ ({
                anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                opacity: 0.75,
                src: 'https://openlayers.org/en/v4.6.4/examples/data/icon.png'
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
