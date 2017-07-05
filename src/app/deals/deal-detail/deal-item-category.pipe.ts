import { Pipe, PipeTransform } from '@angular/core';

import { DealItem } from '../deal-item.model';

@Pipe({
  name: 'dealItemCategoryPipe'
})
export class DealItemCategoryPipe implements PipeTransform {
  transform(dealItems: DealItem[], category: string) {
    if (!dealItems || !category || category == "All") {
      return dealItems;
    }

    return dealItems.filter(dealItem => dealItem.category.name == category);
  }
}