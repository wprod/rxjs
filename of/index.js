import Rx from 'rxjs';

Rx.Observable.of(
    1, 2, 'trois', 4, [5, 6]
).subscribe(
    a => console.log(a)
);