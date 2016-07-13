import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../artist';
import {Album} from '../../album';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html'
})

export class AlbumComponent {
    id: string;
    album: Album[];

    constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this._spotifyService.getAlbum(this._route.snapshot.params.id)
            .subscribe(album => {
                this.album = album;
        });
    }
}
