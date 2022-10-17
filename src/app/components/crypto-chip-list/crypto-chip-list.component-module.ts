import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CryptoChipListComponent } from './crypto-chip-list.component';

@NgModule({
  imports: [MatCardModule, MatChipsModule, CommonModule],
  declarations: [CryptoChipListComponent],
  providers: [],
  exports: [CryptoChipListComponent]
})
export class CryptoChipListComponentModule {
}
