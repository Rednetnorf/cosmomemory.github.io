import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.scss']
})

export class DistrictsComponent implements OnInit {
  private districtId: string;
  private _modal: ModalComponent
  
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
    console.log(info)
    console.log(this._modal)
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
  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.districtId = this._activatedRoute.snapshot.paramMap.get("id");
    this.selectedDistrict = this.districtsMap[this.districtId];
  }

}
