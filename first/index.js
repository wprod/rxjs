import Rx from 'rxjs';

const interval = Rx.Observable.interval(100);

interval
    .first()
    /// .first(x => x === 3)
    .subscribe(x => console.log(x));