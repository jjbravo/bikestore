import { FormControl } from '@angular/forms'
import { timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';


export const existAsyncValidator = (validatorService: any) => {
  return (input: FormControl) => {
    return timer(200).pipe(
      switchMap(() => validatorService.findBikeBySerial({serial: input.value}).pipe(
        map((res: any) => {
          if (res && res.length > 0 ) {
            return { exist: true };
          }
          return null;
        })
      ))
    );
  };
};
