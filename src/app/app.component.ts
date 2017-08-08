import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {FruitService} from './fruit.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public fruitForm: FormGroup;

  public constructor(
    private formBuilder: FormBuilder,
    private fruitService: FruitService
  ) {
    this.fruitForm = formBuilder.group({
      fruit: [
        '',
        [Validators.required ,Validators.minLength(4)],
        (control: AbstractControl): Observable<ValidationErrors | null> => this.checkFruitIsApproved$(control)
      ]
    })
  }

  public checkFruitIsApproved$(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.fruitService.fruitIsApproved$(control.value)
      .map(response => {
        if (response) {
          return null;
        } else {
          return {checkFruitIsApproved: 'The fruit is not an approved fruit!'} as ValidationErrors;
        }
      });
  }
}
