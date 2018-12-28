// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SingUpComponent } from './user/sing-up/sing-up.component';
import { SingInComponent } from './user/sing-in/sing-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

//routes
import { UserService } from './shared/user.service';
import { appRoutes } from './routes';

//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserComponent,
    SingInComponent,
    SingUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
