import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController } from 'ionic-angular';

import { LayertreeService, ITileLayerInfo } from '../../app/layertree.service';

interface IOfficialCommon {
    official: string;
    common: string;
}

interface ICountry {
    name: {
        common: string;
        official: string;
        native: {
            nld: IOfficialCommon;
            pap: IOfficialCommon;
        };
    };
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    currency: string[];
    callingCode: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: {
        nld: string;
        pap: string;
    };
    translations: {
        deu: IOfficialCommon;
        fra: IOfficialCommon;
        hrv: IOfficialCommon;
        ita: IOfficialCommon;
        jpn: IOfficialCommon;
        nld: IOfficialCommon;
        por: IOfficialCommon;
        rus: IOfficialCommon;
        slk: IOfficialCommon;
        spa: IOfficialCommon;
        fin: IOfficialCommon;
        zho: IOfficialCommon;
    }
    latlng: [number, number];
    demonym: string;
    landlocked: boolean,
    borders: string[];
    area: number;
}


@Component({
    selector: 'page-map',
    templateUrl: 'map.html'
})
export class MapPage {

    public mapCenterLat: number = 0;
    public mapCenterLng: number = 0;
    public mapZoom: number = 1;

    public tileLayers: ITileLayerInfo[];

    public geoData: ICountry[] = [];

    constructor(
        public navCtrl: NavController,
        public layertreeService: LayertreeService,
        private http: Http,
    ) {
        this.tileLayers = this.layertreeService.tileLayers;
        this.http.get('assets/countries.json').subscribe((data: Response) => {
            this.geoData = data.json();
        });
    }

    public calculateColor(size: number): string {
        if (size < 100) {
            return '#0f0'
        }
        if (size < 5000) {
            return '#9f0'
        }
        if (size < 10000) {
            return '#ff0'
        }
        if (size < 500000) {
            return '#f90'
        }
        return '#f00';
    }
    public calculateRadius(size: number): number {
        return Math.log(size);
    }

}

