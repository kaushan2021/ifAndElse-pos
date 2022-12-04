import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SummeryComponent } from './summery/summery.component';
import { BillingComponent } from './billing/billing.component';


const routes: Routes = [
  {path:'inventory',component:InventoryComponent},
  {path:'users',component:UserPanelComponent},
  {path:'summery',component:SummeryComponent},
  {path:'billing',component:BillingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
