import Rx from 'rxjs';

const friendsApi = Rx.Observable.interval(1000);

friendsApi
    .map(i => ({ name: `Friend #${i}`, friendsNumber: i}))
    // .pluck('name')
    .subscribe(a => console.log(a));