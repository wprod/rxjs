import Rx from 'rxjs';

const interval = Rx.Observable.timer(2000, 500);

console.log('API_CALL');

interval
    .map(x => x + 1)
    // .startWith(0)
    .subscribe(x => console.log(`CALL_${x}`));