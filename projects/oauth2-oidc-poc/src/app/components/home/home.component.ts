import { Component, inject } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { OAUTH_STORAGE } from '../../config/oauth.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private authService = inject(OAuthService);
  claims: Record<string, unknown> | null = null;

  login() {
    this.authService.initCodeFlow();
  }

  logout() {
    this.authService.revokeTokenAndLogout();
  }

  get username() {
    return this.authService.getIdentityClaims()?.['name'];
  }

  get accessToken() {
    return OAUTH_STORAGE.getItem('access_token');
  }
}
