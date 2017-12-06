import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  numberAlpha : number[]= [];
  numberBeta: number[] =[];
   sum: number =0;
  sum2:number =0;
  res: number =0;



  constructor() { }

  ramdomNumberAlpha(num:number){
    const rand = (Math.floor(Math.random() * 10) ) + 1;
    this.numberAlpha.push(rand)
  }

  
  retrieveNumbers():number[]{
    return this.numberAlpha;
  }

 


 

  ramdomNumberBeta(num:number){
    const rand = (Math.floor(Math.random() * 10) ) + 1;
    this.numberBeta.push(rand)
  }


  retrieveNumberBeta():number[]{
    return this.numberBeta;
  }

  result(){
    this.sum=0;
    for(let i of this.numberAlpha){
      this.sum+= i;
    }

    this.sum2 =0;
    for (let k of this.numberBeta){
      this.sum2+=k;
    }
    this.res=0;
    this.res = this.sum -this.sum2
    return this.res
  }


  
}
