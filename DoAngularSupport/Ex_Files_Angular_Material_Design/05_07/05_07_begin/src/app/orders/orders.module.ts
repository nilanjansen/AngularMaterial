import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';

// Material components
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatTabsModule
  ],
  declarations: [OrderListComponent]
})
export class OrdersModule { }
