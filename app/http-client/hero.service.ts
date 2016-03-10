import {Injectable} from 'angular2/core';
import {Http,Headers,RequestOptions} from 'angular2/http';
import {Hero} from './hero';

@Injectable()
export class HeroService {
  constructor(private http: Http) {}

  public heroes: Hero[];
  private _heroUrl = "app/http-client/heroes.json";
  getHeroes() {
    return this.http.get(this._heroUrl)
                .toPromise()
      .then(res => <Hero[]>res.json());
  }
}
