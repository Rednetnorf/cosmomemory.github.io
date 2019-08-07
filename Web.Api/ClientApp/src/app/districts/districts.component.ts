import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.scss']
})

export class DistrictsComponent implements OnInit {
  private districtId: string;
  closeResult: string;

  private districtsMap: object = {
    '0': 'Kastrichnickiy',
    '1': 'Leninskiy',
    '2': 'Zavodskoi',
    '3': 'Partizanskiy',
    '4': 'Pervomaiskiy',
    '5': 'Sovetskiy',
    '6': 'Centralniy',
    '7': 'Frunzenskiy',
    '8': 'Moskovskiy'
  };
  private selectedDistrict: string;

  showCriminalInfo(info: object): void {
    console.log(info);

    this.modalService.open(ModalComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  criminalData = [
    { id: 123123,
      start_time: '11/12/2009 - 12:43pm',
      end_time: '12/12/2009 - 13-45 pm',
      location: 'Queen street 15, LA 12314',
      crime: 'Drugs',
      criminal: 'Alex Cameron Broskow'
    },
    { id: 123123,
      start_time: '11/12/2009 - 12:43pm',
      end_time: '12/12/2009 - 13-45 pm',
      location: 'Queen street 15, LA 12314',
      crime: 'Drugs',
      criminal: 'Alex Cameron Broskow'
    },
    { id: 123123,
      start_time: '11/12/2009 - 12:43pm',
      end_time: '12/12/2009 - 13-45 pm',
      location: 'Queen street 15, LA 12314',
      crime: 'Drugs',
      criminal: 'Alex Cameron Broskow'
    }
  ];
  constructor(private _activatedRoute: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit() {
    this.districtId = this._activatedRoute.snapshot.paramMap.get("id");
    this.selectedDistrict = this.districtsMap[this.districtId];
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
