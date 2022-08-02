import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  textButton! : string;

  
  ngOnInit(){
    this.textButton = 'Oh Snap!';
  }

  onSnap(){
    if(this.textButton == 'Oh Snap!'){
      this.faceSnap.snaps++;
      this.textButton = 'Oops UnSnap!';
    }
    else{
      this.faceSnap.snaps--;
      this.textButton = 'Oh Snap!';
    }
  }
}
