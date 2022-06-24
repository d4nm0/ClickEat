import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateBabyUnicornModalComponent } from 'src/app/modal/create-baby-unicorn-modal/create-baby-unicorn-modal.component';
import { CreateUnicornModalComponent } from 'src/app/modal/create-unicorn-modal/create-unicorn-modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  currentListUnicorn: any;
  tempjson: any;
  currentUnicornListJson: any;
  MyMateList: Array<any> = [];

  addToMate(mate:any){
    if(this.MyMateList.length < 2){
      this.MyMateList.push(mate)
      console.log(this.MyMateList)
    }
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    if(!localStorage.getItem('UnicornList')){
      localStorage.setItem('UnicornList', '')
    }
    this.GetListOfUnicorn()
  }

  OpenCreateBabyUnicorn(){
    // open modal for create baby unicorn
    const ModalCreateBabyUnicorn = this.modalService.open(
      CreateBabyUnicornModalComponent,
      {
        ariaLabelledBy: 'modal-basic-title',
        size: 'sm',
        windowClass: 'lgModal',
      }
    );
    ModalCreateBabyUnicorn.componentInstance.currentUnicornListJson = this.currentUnicornListJson;
    ModalCreateBabyUnicorn.result.then(()=>{
      this.GetListOfUnicorn()
    })
  }

  OpenCreateUnicornModal(){
    // open modal for create unicorn
    const ModalCreateUnicorn = this.modalService.open(
      CreateUnicornModalComponent,
      {
        ariaLabelledBy: 'modal-basic-title',
        size: 'sm',
        windowClass: 'lgModal',
      }
    );
    ModalCreateUnicorn.result.then(()=>{
      this.GetListOfUnicorn()
    })
  }

  GetListOfUnicorn(){
    // get unicorn list
    this.currentListUnicorn = localStorage.getItem('UnicornList')
    const UnicornListForJson = '['+this.currentListUnicorn+']'
    this.currentUnicornListJson = JSON.parse(UnicornListForJson)
  }

}
