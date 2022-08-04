import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  textButton! : string;

  constructor(private faceSnapService: FaceSnapsService, private router: Router){

  }
  
  ngOnInit(){
    this.textButton = 'Oh Snap!';
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

  onViewFaceSnap(){
    this.router.navigateByUrl(`faceSnaps/${this.faceSnap.id}`);
  }
}
