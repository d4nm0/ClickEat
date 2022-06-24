import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-baby-unicorn-modal',
  templateUrl: './create-baby-unicorn-modal.component.html',
  styleUrls: ['./create-baby-unicorn-modal.component.sass']
})
export class CreateBabyUnicornModalComponent implements OnInit {
  @Input() currentUnicornListJson: any;

  UnicornMale:any=''
  UnicornFemale:any =''
  name: any;
  color: any;
  gender: any;
  age: any;
  tempDaraArray: any;
  currentListUnicorn: any;

  makeBabyUnicorn(female:any, male:any){
    // function for create and mix data for unicorn baby
    const femaleArray = female.split(',');
    const maleArray = male.split(',');
    const babyUnicornColor = blendColors(femaleArray[1],maleArray[1],0.5)

    const genre = ["male", "female"];
    const random = Math.floor(Math.random() * genre.length);
      if(localStorage.getItem('UnicornList') != ''){
      this.tempDaraArray = ',{"name":'+'"'+femaleArray[0]+maleArray[0]+'"'+',"color":'+'"'+babyUnicornColor+'"'+',"gender":'+'"'+genre[random]+'"'+',"age":'+1+'}'
      } else {
        this.tempDaraArray = '{"name":'+'"'+femaleArray[0]+maleArray[0]+'"'+',"color":'+'"'+babyUnicornColor+'"'+',"gender":'+'"'+genre[random]+'"'+',"age":'+1+'}'
      }

      this.currentListUnicorn = localStorage.getItem('UnicornList')
      const temp = this.currentListUnicorn.concat(this.tempDaraArray);
      localStorage.setItem('UnicornList', temp);
      this.modalService.close('Close');


  }

  constructor(public modalService: NgbActiveModal) { }

  ngOnInit(): void {
  }

}

function blendColors(colorA:any, colorB:any, amount:any) {
  // mix hex code color
  const [rA, gA, bA] = colorA.match(/\w\w/g).map((c:any) => parseInt(c, 16));
  const [rB, gB, bB] = colorB.match(/\w\w/g).map((c:any) => parseInt(c, 16));
  const r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0');
  const g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0');
  const b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0');
  return '#' + r + g + b;
}

