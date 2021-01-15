import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /**
   * filter array
   * 
   * 
   * @param items 
   * @param searchText 
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    return items.filter(item => {
      if (item) {
        return item.genres.includes(searchText);
      }
      return false;
    });
  }
}
