import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../artist';
import {Album} from '../../album';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class ArtistComponent {
    id: string;
    artist: Artist[];
    albums: Album[];

    constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
        this._spotifyService.getArtist(this._route.snapshot.params.id)
            .subscribe(artist => {
                this.artist = artist;
        });

        this._spotifyService.getAlbums(this._route.snapshot.params.id)
            .subscribe(albums => {
                this.albums = albums.items;
        });
    }

    onClick(album: Album[]) {
        this._router.navigate(['/album', album.id]);
    }
}
