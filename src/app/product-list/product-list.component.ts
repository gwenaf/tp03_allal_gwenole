import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductMockService } from '../services/product/mock-product-crud-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductMockService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  onSearchCriteriaChanged(criteria: {
    name: string;
    category: string;
    description: string;
    minPrice: number | null;
    maxPrice: number | null;
    minDate: Date | null;
    maxDate: Date | null;
  }): void {
    this.filteredProducts = this.products.filter(product => {
      const matchesName = criteria.name ? product.name.toLowerCase().includes(criteria.name.toLowerCase()) : true;
      const matchesCategory = criteria.category ? product.category.toLowerCase().includes(criteria.category.toLowerCase()) : true;
      const matchesDescription = criteria.description ? product.description.toLowerCase().includes(criteria.description.toLowerCase()) : true;

      const matchesMinPrice = criteria.minPrice !== null ? product.price >= criteria.minPrice : true;
      const matchesMaxPrice = criteria.maxPrice !== null ? product.price <= criteria.maxPrice : true;

      const matchesMinDate = criteria.minDate ? new Date(product.createdDate) >= new Date(criteria.minDate) : true;
      const matchesMaxDate = criteria.maxDate ? new Date(product.createdDate) <= new Date(criteria.maxDate) : true;

      return (
        matchesName &&
        matchesCategory &&
        matchesDescription &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesMinDate &&
        matchesMaxDate
      );
    });
  }
}
