import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface ChatMessageRequest {
  text: string;
}

export interface ChatResponse {
  sender: string;
  text: string;
  intent: string;
  confidence: number;
  options?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'http://localhost:8080/api/chat/send';

  constructor(private http: HttpClient) {}

  sendMessage(text: string): Observable<ChatResponse> {
    const body: ChatMessageRequest = { text };
    return this.http
      .post<ChatResponse>(this.apiUrl, body)
      .pipe(catchError(this.handleError));
  }

  //tratamento de erros
  private handleError(error: HttpErrorResponse) {
    console.error('Fehler im ChatService aufgetreten:', error);
    return throwError(
      () =>
        new Error(
          'Verbindungsfehler zum KI-Server. Bitte versuchen Sie es später noch einmal.',
        ),
    );
  }
}
