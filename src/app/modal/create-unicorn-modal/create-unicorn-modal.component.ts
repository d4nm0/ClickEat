import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-unicorn-modal',
  templateUrl: './create-unicorn-modal.component.html',
  styleUrls: ['./create-unicorn-modal.component.sass']
})
export class CreateUnicornModalComponent implements OnInit {
  name =''
  color =''
  gender =''
  age =''
  currentListUnicorn: any;
  tempDaraArray:any

  addUnicorn(){
    // make a unicorn
    if (this.name &&this.color&&this.gender&&this.age) {
      if(localStorage.getItem('UnicornList') != ''){
      this.tempDaraArray = ',{"name":'+'"'+this.name+'"'+',"color":'+'"'+this.color+'"'+',"gender":'+'"'+this.gender+'"'+',"age":'+this.age+'}'
      } else {
        this.tempDaraArray = '{"name":'+'"'+this.name+'"'+',"color":'+'"'+this.color+'"'+',"gender":'+'"'+this.gender+'"'+',"age":'+this.age+'}'
      }

      this.currentListUnicorn = localStorage.getItem('UnicornList')
      const temp = this.currentListUnicorn.concat(this.tempDaraArray);
      localStorage.setItem('UnicornList', temp);
      this.modalService.close('Close');
    } else {
      console.log('data not complete')
    }

  }

  constructor(public modalService: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
