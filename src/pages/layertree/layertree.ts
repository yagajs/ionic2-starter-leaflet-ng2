import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ITileLayerInfo } from '../../app/layertree.service'

import { LayertreeService } from '../../app/layertree.service';

@Component({
    selector: 'page-layertree',
    templateUrl: 'layertree.html'
})
export class LayertreePage {
    public tileLayers: ITileLayerInfo[] = [];
    public newLayer: ITileLayerInfo = {
        name: 'OpenTopoMap',
        url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        attribution: '© OpenTopoMap',
        enabled: true,
    };
    constructor(
        public navCtrl: NavController,
        public layertreeService: LayertreeService,
    ) {
        this.tileLayers = this.layertreeService.tileLayers;
    }

    public removeLayer(layer: ITileLayerInfo) {
        this.tileLayers.splice(this.tileLayers.indexOf(layer), 1);
    }
    public addLayer() {
        this.tileLayers.push(this.newLayer);
        this.newLayer = {
            name: '',
            url: '',
            attribution: '',
            enabled: true,
        };

    }

    public ionViewWillLeave() {
        this.layertreeService.tileLayers = this.tileLayers;
    }
}
