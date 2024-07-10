import { Injectable } from '@angular/core';
import { Book } from '../Model/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService
{
  //this will contain all the books as book object
  private apiUrl: string = 'http://localhost:3000';
  private allBooks:Book[]=[];

  constructor(private httpClient: HttpClient) { }

  //1.CREATE
  addBook(book:Book): Observable <Book>
  {
    // book.id=this.generateRandomId();
    // this.allBooks.push(book);

    let url = this.apiUrl + '/createbook';
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json'});
    return this.httpClient.post<Book>(url, book, {headers});

  }

  //2.READ
  getAllBooks(): Observable<Book[]>
  {
    let url = this.apiUrl+'/allbooks';
    return this.httpClient.get<Book[]>(url);
  }

  generateRandomId()
  {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
  }

  getBookById(id:string): Observable <Book>
  // :Book
  {
      // let book:Book;

      // for(let i=0;i<this.allBooks.length;i++)
      // {
      //   (this.allBooks[i].id==id)
      //   {
      //     book=this.allBooks[i];
      //     break;
      //   }
      // }

      // return book;

      let url = this.apiUrl+'/book/'+id;
      return this.httpClient.get<Book>(url);

  }

  deleteBookById(id:string)
  {
    // for(let i=0;i<this.allBooks.length;i++)
    // {
    //   if(this.allBooks[i].id===id)
    //   {
    //     this.allBooks.splice(i,1);
    //     return;
    //   }
    // }

    let url = this.apiUrl+'/deleteBook/'+id;
    return this.httpClient.delete(url);
  }

  updateBook(book:Book)
  {
      for(let i=0;i<this.allBooks.length;i++)
      {
        if(this.allBooks[i].id===book.id)
        {
          this.allBooks[i]=book;
        }
      }
  }

}