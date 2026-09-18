import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ChatService, ChatResponse } from '../../services/chat.service';

interface Message {
  sender: string;
  text: string;
  isUser: boolean;
  intent?: string;
  confidence?: number;
  options?: string[];
}

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
})
export class DashboardLayoutComponent {
  userInput = '';
  isLoading = false;

  messages: Message[] = [
    {
      sender: 'Michael Weber',
      text: 'Hallo, ich möchte eine Rückerstattung für meine Bestellung #8372 beantragen. Wie funktioniert das?',
      isUser: true,
    },
  ];

  constructor(private chatService: ChatService) {}

  sendMessage(): void {
    const text = this.userInput.trim();

    if (!text) {
      return;
    }

    this.messages.push({
      sender: 'KiProjekt Bot',
      text: 'Hallo! Wie kann ich Ihnen heute helfen? Wählen Sie eine Option:',
      isUser: false,
      options: [
        'Rückerstattung beantragen',
        'Bestellstatus überprüfen',
        'Produktinformationen erhalten',
        'Mit Agent sprechen',
      ],
    });

    this.userInput = '';
    this.isLoading = true;

    this.chatService.sendMessage(text).subscribe({
      next: (response: ChatResponse) => {
        this.messages.push({
          sender: response.sender,
          text: response.text,
          isUser: false,
          intent: response.intent,
          confidence: response.confidence,
        });

        this.isLoading = false;
      },
      error: (error) => {
        console.error('Backend error:', error);

        this.messages.push({
          sender: 'System',
          text: 'Fehler beim Verbinden mit dem Server.',
          isUser: false,
        });

        this.isLoading = false;
      },
    });
  }

  //quando o usuário clica em um botão de resposta rápida
  onQuickReplySelected(optionText: string): void {
    this.userInput = optionText;
    this.sendMessage();
  }
}
