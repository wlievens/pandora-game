import {HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, of, switchMap, timer} from 'rxjs';

export class LoadedObject<T> {
  objectSubject = new BehaviorSubject<T | undefined>(undefined);
  loadingSubject = new BehaviorSubject<boolean>(false);
  errorSubject = new BehaviorSubject<HttpErrorResponse | undefined>(undefined);

  object = this.objectSubject.asObservable();
  loading = this.loadingSubject.pipe( // This pipe emits false values with a delay
    switchMap(value =>
      value
        ? of(true)
        : timer(500).pipe(
          switchMap(() => of(false))
        )
    )
  );
  error = this.errorSubject.asObservable();

  constructor(
    private method: () => Observable<T>
  ) {
    this.reload();
  }

  clear() {
    this.loadingSubject.next(false);
    this.objectSubject.next(undefined);
    this.errorSubject.next(undefined);
  }

  load(observable: Observable<T>) {
    this.loadingSubject.next(true);
    this.errorSubject.next(undefined);
    observable.subscribe({
      next: value => {
        this.loadingSubject.next(false);
        this.objectSubject.next(value);
        this.errorSubject.next(undefined);
      },
      error: error => {
        this.loadingSubject.next(false);
        this.objectSubject.next(undefined);
        this.errorSubject.next(error);
      }
    })
  }

  reload() {
    this.load(this.method());
  }
}
