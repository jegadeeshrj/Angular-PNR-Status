import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { PnrService } from '../services/pnr.service';

@Component({
  selector: 'app-pnr-status',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pnr-status.component.html',
  styleUrls: ['./pnr-status.component.css']
})
export class PnrStatusComponent {

  pnrForm;
  pnrData: any = null;
  loading = false;
  error = '';

  constructor(private fb: FormBuilder, private pnrService: PnrService) {
    this.pnrForm = this.fb.group({
      pnr: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  searchPnr() {
    if (this.pnrForm.invalid) return;

    this.loading = true;
    this.error = '';
    this.pnrData = null;

    const pnr = this.pnrForm.value.pnr!;

    this.pnrService.getPnrStatus(pnr).subscribe({
      next: (res) => {
        this.pnrData = res.data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to fetch PNR status';
        this.loading = false;
      }
    });
  }
}