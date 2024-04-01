import { Component } from '@angular/core';
import { EcoinflService } from '../../ecoinfl.service';

@Component({
  selector: 'app-nft-store',
  standalone: true,
  imports: [],
  templateUrl: './nft-store.component.html',
  styleUrl: './nft-store.component.css'
})
export class NftStoreComponent {
  constructor(public _service: EcoinflService) {
    
  }
  Nfts:any;
  ngOnInit():void{
    this._service.ShowNfts().subscribe((res:any)=>{
      this.Nfts=res;
    })
  }

}
