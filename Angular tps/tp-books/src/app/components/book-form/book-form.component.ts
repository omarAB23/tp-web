// src/app/book-form/book-form.component.ts
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  @Input() categories: string[] = [];
  @Input() bookToEdit: Book | null = null;

  @Output() save = new EventEmitter<Book>(); // create or update

  model: Partial<Book> = { isAvailable: true };
  isEdit = false;

  ngOnChanges(changes: SimpleChanges) {
    if (this.bookToEdit) {
      // preload form for edit (clone to avoid two-way mutating parent array)
      this.model = { ...this.bookToEdit };
      this.isEdit = true;
    } else {
      // reset -> add mode
      this.resetModel();
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      // mark all as touched/dirty to show errors
      Object.values(form.controls).forEach(c => c.markAsDirty());
      return;
    }

    // ensure numbers and booleans typed correctly
    const emission: Book = {
      id: (this.model.id as number) || 0,
      title: (this.model.title || '').toString(),
      author: (this.model.author || '').toString(),
      publisherEmail: (this.model.publisherEmail || '').toString(),
      publisherPhone: (this.model.publisherPhone || '').toString(),
      releaseDate: (this.model.releaseDate || '').toString(),
      category: (this.model.category || '').toString(),
      isAvailable: !!this.model.isAvailable,
      stock: this.model.stock !== undefined && this.model.stock !== null ? Number(this.model.stock) : undefined
    };

    this.save.emit(emission);

    // reset form and model to add-mode
    form.resetForm({ isAvailable: true });
    this.resetModel();
    this.isEdit = false;
  }

  resetModel() {
    this.model = { isAvailable: true };
  }
}
