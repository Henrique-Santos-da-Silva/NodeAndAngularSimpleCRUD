import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Telephone} from './models/Telephone';
import {catchError, take} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelephonebookService {
  private readonly API_LOCAL_URL = 'http://localhost:3333/api/';

  constructor(private http: HttpClient) { }

  getAllTelephones() {
    return this.http.get<Telephone[]>(this.API_LOCAL_URL)
      .pipe(take(1), catchError(this.handleError));
  }

  getTelephoneById(id) {
    return this.http.get<Telephone>(this.API_LOCAL_URL + id)
      .pipe(take(1), catchError(this.handleError));
  }

  createTelephone(telephone)  {
    return this.http.post<Telephone>(this.API_LOCAL_URL, telephone)
      .pipe(take(1), catchError(this.handleError));
  }

  updateTelephone(telephone) {
    return this.http.put(this.API_LOCAL_URL + telephone.id, telephone)
      .pipe(take(1), catchError(this.handleError));
  }

  deleteTelephone(id) {
    return this.http.delete(this.API_LOCAL_URL + id)
      .pipe(take(1), catchError(this.handleError));
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
