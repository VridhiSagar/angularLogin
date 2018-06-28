import { Directive, forwardRef, Attribute , Provider  } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS} from '@angular/forms' ;

@Directive({
  selector: '[appValidateEqual]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidateEqual), multi: true }
  ]
})
export class ValidateEqualDirective  {

  constructor() { }

}
export class ValidateEqual {

}
