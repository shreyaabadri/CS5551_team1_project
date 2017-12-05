import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { HttpModule, Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleServiceProvider {
	data:any;
  headers;
  amar;
  amar123;
  loading;
    token;

  constructor(public http: Http, private loadingCtrl: LoadingController) {
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

  signIn(email, password, role) {
    this.loading = this.loadingCtrl.create({
      content: 'Signing In'
    });
    this.loading.present();
    return new Promise(resolve => {
      this.http.get("https://food-cycle.herokuapp.com/sessions/signin?email="+email+"&password="+password+'&role='+role)
        .map(res => res.json())
        .subscribe(data => {
          this.loading.dismiss();
          resolve(data);
        });
    });
  }
  signUp(name, email, password, phone, address, code, role) {
    return new Promise(resolve => {
      this.http.get("https://food-cycle.herokuapp.com/sessions/signUP?email="+email+"&password="+password+"&phone=" + phone + "&address=" + address + "&code=" + code + "&role=" + role + '&name=' + name )
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  get_orders(token) {
    return new Promise(resolve => {
      this.http.get("http://food-cycle.herokuapp.com/food_orders?token=" + token )
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  place_order(cuisine, title, prep_date, expiry_date, spice_value) {

    let postParams = {
        food_name: title,
        prep_date: prep_date,
        expiry_date: expiry_date,
        spice_value: spice_value,
        token: localStorage.getItem('access_token')
      }
      
    return new Promise(resolve => {
      this.http.post("https://food-cycle.herokuapp.com/food_orders", postParams)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  get_order_history(token) {

    return new Promise(resolve => {
      this.http.get("http://food-cycle.herokuapp.com/food_orders/history?token=" + token )
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  get_user_order_history(token) {

    return new Promise(resolve => {
      this.http.get("http://food-cycle.herokuapp.com/food_orders/user_history?token=" + token )
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  update_status(id, token) {
    return new Promise(resolve => {
      this.http.get("http://food-cycle.herokuapp.com/food_orders/"+id+"/update_status?token="+token )
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }


}
