import * as Rx from "rxjs";

const arr = [3, 1, 4, 1, 5];

function* fiboGenerator() {
    let a = 1, b = 1;

    while (true) {
        let c = a + b;
        yield c;
        a = b;
        b = c;
    }
}

Rx.Observable.from(fiboGenerator())
    .take(20)
    .subscribe(a => console.log(a));