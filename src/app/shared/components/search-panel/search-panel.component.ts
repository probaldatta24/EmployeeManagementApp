import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-panel',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-panel.component.html',
  styleUrl: './search-panel.component.scss'
})
export class SearchPanelComponent {
  @Output() search = new EventEmitter<any>();
  searchForm: FormGroup = {} as FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.searchForm = new FormGroup({
      firstName: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      phoneNumber: new FormControl(''),
      gender: new FormControl('')
    });
  }

  onSearch(): void {
    const filters = this.searchForm.value;
    const hasAtLeastOneValue = Object.values(filters).some(value => {
      return value !== null && value !== undefined && String(value).trim() !== '';
    });

    if (hasAtLeastOneValue) {
      this.search.emit(filters);
    } else {
      console.warn('Please enter at least one search criteria.');
    }
  }

  onClear(): void {
    this.initializeForm();
    this.search.emit({});
  }
}
