import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.post<ChatResponse>(this.apiUrl, body);
  }
}
