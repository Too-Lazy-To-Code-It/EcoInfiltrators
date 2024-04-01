import { Component } from '@angular/core';
import { EcoinflService } from '../../../ecoinfl.service';

@Component({
  selector: 'app-nft-section',
  standalone: true,
  imports: [],
  templateUrl: './nft-section.component.html',
  styleUrl: './nft-section.component.css'
})
export class NftSectionComponent {
  constructor(public _service: EcoinflService) {
    
  }
  Nfts:any;
  ngOnInit():void{
    this._service.ShowNfts().subscribe((res:any)=>{
      this.Nfts=res;
    })
  }

}
