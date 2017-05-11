import { Component } from '@angular/core';
import { OSM_TILE_LAYER_URL } from '@yaga/leaflet.ng2';
import { NavController } from 'ionic-angular';

import { LayertreeService } from '../../app/layertree.service';

@Component({
    selector: 'page-map',
    templateUrl: 'map.html'
})
export class MapPage {

    mapCenterLat: number = 0;
    mapCenterLng: number = 0;
    mapZoom: number = 7;

    constructor(public navCtrl: NavController, public layertreeService: LayertreeService) {}

}