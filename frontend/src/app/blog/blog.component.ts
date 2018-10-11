import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  imageUrl:String = "/assets/img/No-image-full.jpg";
  fileToUpload: File = null;
  show = false;
  userName: String;
  postName: String;
  postImage: String = "/assets/img/No-image-full.jpg";
  cards1;
  
  handleFileInput(file: FileList){
    this.show = true;
     this.fileToUpload = file.item(0);

     var reader = new FileReader();
     reader.onload = (event: any) => {
        this.imageUrl = event.target.result; 
     }
     reader.readAsDataURL(this.fileToUpload);
  }

 showCard(){
   this.show = true;
 }


  cards2 = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 1', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,private router:Router, private service: ServiceService) {}

  ngOnInit(){
    this.getData();
  }

  getData(){
    
    this.service.shareDataSubject.subscribe(recievedData => {this.userName = recievedData})
    this.userName = localStorage.getItem('name');
  }

  post(e){
    this.postName = this.userName;
    this.postImage = this.imageUrl;
    console.log(e);
      /** Based on the screen size, switch from standard to one column per row */
 this.cards1 = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  map(({ matches }) => {
    if (matches) {
      return [
        { title: 'Card 1', cols: 1, rows: 1 }
      ];
    }

    return [
      { title: 'Card 1', cols: 1, rows: 1 }
      
    ];
  })
);
    
  }

}
