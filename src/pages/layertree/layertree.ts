import { Component } from '@angular/core';
import { OSM_TILE_LAYER_URL } from '@yaga/leaflet.ng2';
import { NavController } from 'ionic-angular';
import { ITileLayerInfo } from '../../app/layertree.service';

import { LayertreeService } from '../../app/layertree.service';

@Component({
    selector: 'page-layertree',
    templateUrl: 'layertree.html'
})
export class LayertreePage {
    public createLayer: ITileLayerInfo = {
        attribution: '',
        enabled: false,
        url: '',
    };
    constructor(public navCtrl: NavController, public layertreeService: LayertreeService) {}

}