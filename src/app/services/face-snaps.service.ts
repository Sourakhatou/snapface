import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {

    faceSnaps: FaceSnap[] =[
        {
            id : 1,
          title : 'Archibald',
          description : 'Mon meilleur ami depuis tout petit !',
          imageUrl :  'https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/8/8/6/886a1f5f0b_84113_fs-01-13668997695-1b11821209-k.jpg',
          createdDate : new Date(),
          snaps : 100,
          location : 'Paris'
        },
  
        {
            id: 2,
          title : 'Three Rocks Mountain',
          description :'Un endroit magnifique pour les randonnées',
          imageUrl : 'https://ete.abondance-tourisme.com/wp-content/uploads/2021/09/Abondance-balades-et-randonnees.jpg',
          createdDate : new Date(),
          snaps : 500,
          location : 'Saint-Louis'
        },
  
        {
            id : 3,
          title : 'Un bon repas',
          description : 'Mmmmmh que c\'est bon',
          imageUrl : 'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fcuisine.2Frecettes-de-cuisine.2Fun-repas-ete-pour-10-personnes-40995.2F14609271-1-fre-FR.2Fun-repas-d-ete-pour-10-personnes.2Ejpg/750x562/quality/80/crop-from/center/cr/wqkgVGhpbnN0b2NrIC8gRmVtbWUgQWN0dWVsbGU%3D/recettes-repas-d-ete-pour-10-personnes.jpeg',
          createdDate : new Date(),
          snaps : 0
        }
      ];

    getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);

        if(!faceSnap){
            throw new Error ('FaceSnap not found');
        }else{
            return faceSnap;
        }
    }


    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);

        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}