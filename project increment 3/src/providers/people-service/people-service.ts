import { Injectable } from '@angular/core';
import { HttpModule, Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleServiceProvider {
	data:any;
  headers;
  amar;
  amar123;
    token;

  constructor(public http: Http) {
  }
  loadin(name) {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('https://api.edamam.com/search?q='+name+'&app_id=4b936114&app_key=5b96d37ce1ef31cd87a0a5e94a28e667&from=0&to=3')
        .subscribe(data => {
          this.data = data.json();
          resolve(this.data);
        });
    });
  }
  loadingg() {
    return new Promise(resolve => {
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers })

      let postParams = {
        title: 'foo',
        body: 'bar',
        userId: 1
      }
      this.http.post("https://food-cycle.herokuapp.com/users/sign_in.json", postParams, options)
        // .map(res => res.json())
        .subscribe(data => {
          console.log(data)
          resolve(this.data);
        });
    });
  }

  signIn(email, password) {
    return new Promise(resolve => {
      this.http.get("https://food-cycle.herokuapp.com/sessions/signin?email="+email+"&password="+password)
        .map(res => res.json())
        .subscribe(data => {
          console.log('data in Promise')
          console.log(data)
          resolve(data);
        });
    });
  }
  signUp(email, password, phone, address, house, code, role) {
    return new Promise(resolve => {
      this.http.get("https://food-cycle.herokuapp.com/sessions/signUP?email="+email+"&password="+password+"&phone=" + phone + "&address=" + address + "&house=" + house + "&code=" + code + "&role=" + role )
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }


}
