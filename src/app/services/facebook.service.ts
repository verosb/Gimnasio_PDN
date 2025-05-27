import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacebookAuthService {
  loginWithFacebook():  void {
    const clientId = 'CLIENT_ID';
    const redirectUri = 'http://localhost:4200/facebook-callback';
    const scope = 'email,public_profile';

    const url = `https://www.facebook.com/v18.0/dialog/oauth` +
      `?client_id=${clientId}` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&scope=${encodeURIComponent(scope)}` +
      `&response_type=code`;

    window.location.href = url;
  }
}
