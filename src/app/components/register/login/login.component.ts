import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CredentialService, AccountService, CoreService } from 'src/app/core/services';
import { Router } from '@angular/router';
import { LoginSliderList } from 'src/app/core/lists';
import { ConstEnum } from 'src/app/core/enums';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  slideConfig = { slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 1000, dots: false, arrows: false };

  sliderList: any[] = LoginSliderList;

  constructor(
    private credentialService: CredentialService,
    public coreService: CoreService,
    private accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder,
    public translate: TranslateService,
    private titleService: Title
  ) {
    this.createForm();
    this.translate.use(coreService.currentLanguage);
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', Validators.required],
      rememberMe: ['']
    });
  }

  ngOnInit() {
    this.titleService.setTitle(this.translate.instant('Login'));
    if (localStorage.getItem(ConstEnum.username)) {
      this.loginForm.patchValue({});
      this.loginForm.setValue({
        name: localStorage.getItem(ConstEnum.username),
        password: localStorage.getItem(ConstEnum.password),
        rememberMe: true
      });
    }
  }

  public errorHandling = (control: string, error: string) => {
    return this.loginForm.controls[control].hasError(error);
  }

  login() {
    this.accountService.login(this.loginForm.value).subscribe(
      (res: any) => {

        if (this.loginForm.value.rememberMe) {
          localStorage.setItem(ConstEnum.username, this.loginForm.value.name);
          localStorage.setItem(ConstEnum.password, this.loginForm.value.password);
        } else {
          localStorage.removeItem(ConstEnum.username);
          localStorage.removeItem(ConstEnum.password);
        }

        localStorage.setItem(ConstEnum.token, res.token);
        this.router.navigate(['/home']);
      });
  }

}
