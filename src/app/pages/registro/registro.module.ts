import { CommonModule } from '@angular/common';
import { Input, NgModule } from '@angular/core';
import { RegistroComponent } from './registro.component';
import { loginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    RegistroComponent,
    loginComponent,
  ]
})
export class RegistroModule {

  @Input()
  senha: string = "";

  @Input()
  Confirmarsenha: string = "";

  SalvarDados() {
    if (this.senha != "") {
      if (this.senha == this.Confirmarsenha) {
        console.log(this.senha);
      }
    }
  }

}
