import { Component } from '@angular/core';
import { EcoinflService } from '../../ecoinfl.service';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  constructor(public _service: EcoinflService) {
    
  }
  Posts:any;
  ngOnInit():void{
    this._service.ShowPosts().subscribe((res:any)=>{
      this.Posts=res;
    })
  }

}
