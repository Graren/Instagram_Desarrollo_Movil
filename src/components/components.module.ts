import { NgModule } from '@angular/core';
import { LoginCardComponent } from './login-card/login-card';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [LoginCardComponent],
	imports: [IonicModule, CommonModule],
	exports: [LoginCardComponent]
})
export class ComponentsModule {}
