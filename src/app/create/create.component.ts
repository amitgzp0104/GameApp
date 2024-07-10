import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../Model/book';
import { BookService } from '../Services/book.service';
import { response } from 'express';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent
{

  constructor(private bookService:BookService){}

  onBookFormSubmit(bookForm:NgForm)
  {
    let book:Book=
    {
      title: bookForm.value.title,
      author: bookForm.value.author,
      date: bookForm.value.date,
      price: bookForm.value.price,
      genre: bookForm.value.genre,
      pages: bookForm.value.pages,
      description: bookForm.value.desc,
      coverpage: bookForm.value.curl
    }

    // this.bookService.addBook(book);

    this.bookService.addBook(book).subscribe(
      {
        next: response => { alert("Book Created");}
        ,
        error: err => { alert("Failed to create book, Try Again !");}

      }
    );

    //alert("BOOK CREATED");
    bookForm.resetForm();

  }
}