import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipe implements PipeTransform {
  public static DEFAULT_CATEGORY: string = 'c0';

  transform<T extends ArrayCategoryPipeInterface>(values: T[], id: string = ''): T[] {
    return (id === '' || id === CategoryPipe.DEFAULT_CATEGORY) ? values : values.filter(v => v.category === id);
  }

}

export interface ArrayCategoryPipeInterface {
  category: string;
}
