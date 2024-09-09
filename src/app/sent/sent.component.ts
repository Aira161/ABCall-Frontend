import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SentService } from './sent.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {
  id: string = '1';
  message = 'Estamos procesando su petición';

  constructor(
    private sentService:SentService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Get the id from the route parameters
    this.route.url.subscribe(urlSegments => {
      if (urlSegments.length > 1) {
        this.id = urlSegments[1].path; // Assuming 'somethingelse' is the second segment
      }
    });
  }

  

  refreshStatus(): void {
    // Make a GET request to your backend to check the status
    this.http.get<boolean>(`/api/check-status/${this.id}`).subscribe(response => {
      if (response) {
        this.message = 'Petición procesada correctamente';
      }
    });

    this.sentService.refreshStatus(this.id).subscribe(
      (response: any) => {
        console.log('RESPUESTA RECIBIDA', response);
        if (response.status === 'processed') {
          this.message = 'PQR procesado correctamente';
        } else {
          this.message = 'Estamos procesando su petición';
        }
        
      },
      (error) => {
        console.error('Error al enviar el PQR:', error);
        // Optionally, you can show an error message to the user
      }
    );
  }
}