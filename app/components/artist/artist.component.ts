import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../artist';
import {Album} from '../../album';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html'
})

export class ArtistComponent {
    id: string;
    artist: Artist[];
    albums: Album[];

    constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this._spotifyService.getArtist(this._route.snapshot.params.id)
            .subscribe(artist => {
                this.artist = artist;
        });
    }
}
