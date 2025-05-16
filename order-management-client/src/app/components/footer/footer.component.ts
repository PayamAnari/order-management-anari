import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  companyName: string = 'Order Management';
  companyWebsite: string = 'https://www.yourcompany.com';
  privacyPolicyUrl: string = 'https://www.yourcompany.com/privacy-policy';
  termsOfServiceUrl: string = 'https://www.yourcompany.com/terms-of-service';
  contactUrl: string = 'https://www.yourcompany.com/contact';
  socialMediaLinks: { platform: string; url: string }[] = [
    { platform: 'Facebook', url: 'https://www.facebook.com/yourcompany' },
    { platform: 'Twitter', url: 'https://twitter.com/yourcompany' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/yourcompany' },
    { platform: 'Instagram', url: 'https://www.instagram.com/yourcompany' }
  ];
}
