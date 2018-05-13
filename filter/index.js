import Rx from 'rxjs';

const range = Rx.Observable
    .range(1, 10)
    .filter(n => n % 2 === 0)
    .subscribe(x => console.log(x));