import { Charger } from './Charger';

export class Mobile implements Charger {

    DC_SUPPLY: number = 5;
   
    powerSupply(): number {
        console.log('yes we are done')
        return 230;
    }
}

let ch : Charger = new Mobile();
console.log('yes we are done');
let ch1: Charger = {

    DC_SUPPLY: 5,
    powerSupply: () => 230
}; 

ch1 = ch;