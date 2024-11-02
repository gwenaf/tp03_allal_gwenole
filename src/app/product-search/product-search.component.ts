import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {
  searchCriteria = {
    name: '',
    category: '',
    description: '',
    minPrice: null,
    maxPrice: null,
    minDate: null,
    maxDate: null
  };

  @Output() searchCriteriaChanged = new EventEmitter<{
    name: string;
    category: string;
    description: string;
    minPrice: number | null;
    maxPrice: number | null;
    minDate: Date | null;
    maxDate: Date | null;
  }>();

  onSearchCriteriaChanged(): void {
    this.searchCriteriaChanged.emit(this.searchCriteria);
  }
}
