import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { OAUTH_CONFIG } from './config/oauth.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'oauth2-oidc-poc';
  oauthService = inject(OAuthService)

  constructor() {
    this.oauthService.configure(OAUTH_CONFIG);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      // DO STUFF WITH TOKENS AFTER LOGIN REDIRECT
      console.log('access token then:', this.oauthService.getIdToken());
    });
  }
}
