let salAn: number = 10;
//salAn = '10m'; invalid in ts
console.log('Hello welcome in typeScript');
function getSl(): number {
    return salAn;
}
class Details {
    fees : number; // state
    constructor() {
        console.log('before calling constructor');
        this.fees = 100;
    }
    getFees() { // behaviour 
        return this.fees; 
    }
}
console.log('before object created');
let det : Details = new Details();
