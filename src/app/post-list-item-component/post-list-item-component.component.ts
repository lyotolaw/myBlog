import { Component, OnInit, Input } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle:string;
  @Input() postContent:string;
  @Input() postCreate_at;

  postLoveIts:number = 0;
  count:number=0;
  isLoved:boolean;

  colorLoved:string="rgb(81, 236, 81)";
  colorUnloved:string="rgb(247, 72, 72)";
    
  constructor() { }

  ngOnInit() {
  }

  onLoved() {
    this.postLoveIts = this.count + 1;
    this.count ++;
    if (this.postLoveIts >0){
      this.isLoved = true;
    }else{
      this.isLoved=false;
    }
    console.log("Il y a "+ this.postLoveIts + " like et la variable isLoved est : " + this.isLoved);
    return this.isLoved;    
  }

  onUnloved() {
    this.postLoveIts = this.count - 1;
    this.count --;
    if (this.postLoveIts < 0){
      this.isLoved = false;
    }
    console.log("Il y a "+ this.postLoveIts + " like et la variable isLoved est : " + this.isLoved);
    return this.isLoved;  
  }

  getColor() {
    
    if (this.isLoved && this.postLoveIts !== 0){
      return this.colorLoved;
    }else if (this.postLoveIts === 0) {
      return
    }else {
      return this.colorUnloved;
    }
  }
}

