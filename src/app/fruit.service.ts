import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class FruitService {
  public fruitIsApproved$(fruit: string): Observable<boolean> {
    let approvedFruit: Array<string> = ['apple', 'orange', 'banana', 'pear', 'melon'];
    let isApproved: boolean = approvedFruit.includes(fruit);

    return Observable.of(isApproved)
      .delay(1000);
  }
}
