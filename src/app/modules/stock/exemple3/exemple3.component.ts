import { Component } from '@angular/core';
import { Article } from '../article';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-exemple3',
  templateUrl: './exemple3.component.html',
  styleUrl: './exemple3.component.css',
})
export class Exemple3Component {
  article!: Article;
  form = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', [Validators.required]],
    prix: ['', [Validators.required, Validators.min(0), Validators.max(10000)]],
    quantite: ['', [Validators.required, Validators.minLength(1)]],
    proprietes: this.fb.group({
      detail: ['', [Validators.required, Validators.minLength(2)]],
      performance: ['', [Validators.required]],
    }),
  });
  get articles() {
    return this.form.controls;
  }
  get proprietes() {
    return (this.form.get('proprietes') as FormGroup).controls;
  }
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
  save() {
    let json = JSON.stringify(this.form.value);
    this.article = JSON.parse(json);
  }
}
