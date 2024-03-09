import { CanMatchFn } from '@angular/router';

export const checkGuard: CanMatchFn = (route, segments) => {
  return true;
};
