import * as Rx from "rxjs";


// const obs = Rx.Observable.interval(1000);
//
// obs.subscribe(a => console.log(a));

const obs = Rx.Observable.timer(1000);

obs.subscribe(a => console.log(a));