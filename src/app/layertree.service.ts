import { Injectable } from '@angular/core';
import { OSM_TILE_LAYER_URL } from '@yaga/leafelt-ng2';

export interface ITileLayerInfo {
    url: string;
    attribution: string;
    enabled?: boolean;
}

@Injectable()
export class LayertreeService {
    public tileLayers: ITileLayerInfo[] = [
        {
            attribution: '© <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            enabled: true,
            url: OSM_TILE_LAYER_URL,
        },
    ];

    public addTileLayer(layer: ITileLayerInfo): void {
        this.tileLayers.push(layer);
    }
    public removeTileLayer(layer: ITileLayerInfo): boolean {
        const pos: number = this.tileLayers.indexOf(layer);
        if (pos === -1) {
            return false;
        }
        this.tileLayers.splice(this.tileLayers.indexOf(layer), 1);
        return true;
    }
    public enableTileLayer(layer: ITileLayerInfo): boolean {
        const pos: number = this.tileLayers.indexOf(layer);
        if (pos === -1) {
            return false;
        }
        this.tileLayers.splice(this.tileLayers.indexOf(layer), 1);
        return true;
    }
}