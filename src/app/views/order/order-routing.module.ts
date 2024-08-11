import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';
import { AuthGuard } from '../../../app/core/auth/auth.guard';

const routes: Routes = [
  //{path: 'order', component: OrderComponent, canActivate: [AuthGuard]},
  //делаем пустую строку, потому что children и строки соединяются
  {path: '', component: OrderComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
