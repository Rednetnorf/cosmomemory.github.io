import {Component, OnInit } from '@angular/core';
import ymaps from 'ymaps';
import { Router } from '@angular/router'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    async function showMap(router) {
      const app = document.getElementById("app");
      const maps = await ymaps.load();
      const mapContainer = document.createElement("div");
      mapContainer.style.height = "2000px";
      mapContainer.style.width = "2000px";
      app.appendChild(mapContainer);
      let myMap = new maps.Map(mapContainer, {
        center: [53.8, 27.6],
        zoom: 12
      });

      let collection = {
        type: "FeatureCollection",
        features: [
          {
            id: 0,
            geometry: {
              type: "Point",
              coordinates: [53.86, 27.550]
            },
            properties: {
              balloonContent: "Октябрьский район"
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: '../../assets/rob22.png',
              iconImageSize: [70, 89],
              iconImageOffset: [-5, -38]
            }
          },
          {
            id: 1,
            geometry: {
              type: "Point",
              coordinates: [53.86, 27.602]
            },
            properties: {
              balloonContent: "Ленинский район"
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: '../../assets/rob22.png',
              iconImageSize: [70, 89],
              iconImageOffset: [-5, -38]
            }
          },
          {
            id: 2,
            geometry: {
              type: "Point",
              coordinates: [53.87, 27.632]
            },
            properties: {
              balloonContent: "Заводской район"
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: '../../assets/rob22.png',
              iconImageSize: [70, 89],
              iconImageOffset: [-5, -38]
            }
          },
          {
            id: 3,
            geometry: {
              type: "Point",
              coordinates: [53.906, 27.636]
            },
            properties: {
              balloonContent: "Партизанский район"
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: '../../assets/rob22.png',
              iconImageSize: [70, 89],
              iconImageOffset: [-5, -38]
            }
          },
          {
            id: 4,
            geometry: {
              type: "Point",
              coordinates: [53.940, 27.631]
            },
            properties: {
              balloonContent: "Первомайский район"
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: '../../assets/rob22.png',
              iconImageSize: [70, 89],
              iconImageOffset: [-5, -38]
            }
          },
          {
            id: 5,
            geometry: {
              type: "Point",
              coordinates: [53.942, 27.585]
            },
            properties: {
              balloonContent: "Советский район"
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: '../../assets/rob22.png',
              iconImageSize: [70, 89],
              iconImageOffset: [-5, -38]
            }
          },
          {
            id: 6,
            geometry: {
              type: "Point",
              coordinates: [53.937, 27.530]
            },
            properties: {
              balloonContent: "Центральный район"
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: '../../assets/rob22.png',
              iconImageSize: [70, 89],
              iconImageOffset: [-5, -38]
            }
          },
          {
            id: 7,
            geometry: {
              type: "Point",
              coordinates: [53.9089, 27.455]
            },
            properties: {
              balloonContent: "Фрунзенский район"
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: '../../assets/rob22.png',
              iconImageSize: [70, 89],
              iconImageOffset: [-5, -38]
            }
          },
          {
            id: 8,
            geometry: {
              type: "Point",
              coordinates: [53.873, 27.480]
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: '../../assets/rob22.png',
              iconImageSize: [70, 89],
              iconImageOffset: [-5, -38]
            }
          }
        ]
      };

      let objectManager = new maps.ObjectManager({ clusterize: true });
      objectManager.events.add(['click'], (event) => {
        let districtId = (event.get('objectId'));
        router.navigate(['districts', districtId]);
      });
      objectManager.add(collection);
      myMap.geoObjects.add(objectManager);
    }
    showMap(this._router);
  }

}
