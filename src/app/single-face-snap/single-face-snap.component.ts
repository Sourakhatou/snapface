import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

  textButton! : string;

  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute){

  }
  
  ngOnInit(){
    this.textButton = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap(){
    if(this.textButton == 'Oh Snap!'){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.textButton = 'Oops UnSnap!';
    }
    else{
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.textButton = 'Oh Snap!';
    }
  }

}
