import './Map.css';
import React, { Component } from "react";
import {createStringXY} from 'ol/coordinate';
import {defaults as defaultControls} from 'ol/control';
import MousePosition from"ol/control/MousePosition";
import OlLayerTile from "ol/layer/Tile";
import OlMap from "ol/Map";
import OlSourceOSM from "ol/source/OSM";
import OlView from "ol/View";
import proj4 from 'proj4';
import {applyTransform} from 'ol/extent';
import {get as getProjection, getTransform} from 'ol/proj';
import {register} from 'ol/proj/proj4';

var mousePositionControl = new MousePosition({
  coordinateFormat: createStringXY(4),// this means precision 4
});

// var newProjCode = 'EPSG:28992';
// proj4.defs(newProjCode, proj4def);
// register(proj4);
// var newProj = setWorldExtent(newProjCode);

class Map extends Component {
    map = new OlMap({
      controls: defaultControls().extend([mousePositionControl]),
      target: null,
      projection: 'EPSG:28992',
      layers: [
        new OlLayerTile({
          source: new OlSourceOSM()
        })
      ],
      view: new OlView({
        center: [0,0],
        zoom: 0
      })
    });
  componentDidMount() {
    this.map.setTarget("map");
  }


  render() {
    return (
      <div id="map" style={{ width: "100%", height: "500px" }}>
      </div>      
    );
  }
}

export default Map;
