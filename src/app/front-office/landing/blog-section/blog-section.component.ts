import { Component,OnInit } from '@angular/core';
import { EcoinflService } from '../../../ecoinfl.service';

@Component({
  selector: 'app-blog-section',
  standalone: true,
  imports: [],
  templateUrl: './blog-section.component.html',
  styleUrl: './blog-section.component.css'
})
export class BlogSectionComponent {
  constructor(public _service: EcoinflService) {
    
  }
  Posts:any;
  ngOnInit():void{
    this._service.ShowPosts().subscribe((res:any)=>{
      this.Posts=res;
    })
  }

}
