import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BookListComponent } from '../book-list/book-list.component';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [CommonModule, FormsModule, BookListComponent, BookFormComponent],
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.css']
})
export class BookContainerComponent {

  // données initiales
  books: Book[] = [
    { id: 1, title: 'Le Petit Prince', author: 'Antoine de Saint-Exupéry', publisherEmail: 'ed1@ex.com', publisherPhone: '12345678', releaseDate: '1943-01-01', category: 'Roman', isAvailable: true, stock: 5 },
    { id: 2, title: 'Algo & Structures', author: 'T. Cormen', publisherEmail: 'ed2@ex.com', publisherPhone: '87654321', releaseDate: '2009-07-31', category: 'Informatique', isAvailable: true, stock: 2 },
    { id: 3, title: 'Histoire Antique', author: 'J. Dupont', publisherEmail: 'ed3@ex.com', publisherPhone: '', releaseDate: '1998-05-12', category: 'Histoire', isAvailable: false, stock: 0 },
  ];

  categories = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];

  
  selectedBook: Book | null = null;
  searchText = '';
  sortBy: '' | 'category' | 'availability' = '';

  get displayedBooks(): Book[] {
    let result = [...this.books];

    // recherche (titre ou auteur)
    const q = this.searchText?.trim().toLowerCase();
    if (q) {
      result = result.filter(b =>
        (b.title || '').toLowerCase().includes(q) ||
        (b.author || '').toLowerCase().includes(q)
      );
    }

    // tri
    if (this.sortBy === 'category') {
      result.sort((a, b) => (a.category || '').localeCompare(b.category || ''));
    } else if (this.sortBy === 'availability') {
      // disponible d'abord
      result.sort((a, b) => Number(b.isAvailable) - Number(a.isAvailable));
    }

    return result;
  }

  // CREATE or UPDATE
  onSave(book: Book) {
    if (book.id && this.books.some(b => b.id === book.id)) {
      // UPDATE
      const idx = this.books.findIndex(b => b.id === book.id);
      if (idx !== -1) this.books[idx] = { ...book };
    } else {
      // CREATE
      book.id = this.generateId();
      this.books.push({ ...book });
    }

    // return to add-mode
    this.selectedBook = null;
  }

  onEdit(book: Book) {
    this.selectedBook = { ...book }; // clone to avoid reference issues
  }

  onDelete(id: number) {
    // remove
    this.books = this.books.filter(b => b.id !== id);
    // if the removed book was being edited, reset edit mode
    if (this.selectedBook?.id === id) this.selectedBook = null;
  }

  generateId(): number {
    return this.books.length ? Math.max(...this.books.map(b => b.id)) + 1 : 1;
  }

  // dynamic counters
  get totalCount(): number { return this.books.length; }
  get displayedCount(): number { return this.displayedBooks.length; }
}
