import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EcoinflService {
  User:any;
  url = 'http://localhost:9090/'
  constructor(private http: HttpClient) {
  }
  SignUp(user: any) {
    console.log(`User signup ${user}`);
    return this.http.post(this.url+'user/signup',user)
  }
  SignIn(Email:string,password:string) {
    const body={Email,password}
    return this.http.post(this.url + 'user/signin',body)
  }
  ShowPosts()
  {
    return this.http.get(this.url+'post/');
  }
  ShowNfts()
  {
    return this.http.get(this.url+'nft/');
  }
}
