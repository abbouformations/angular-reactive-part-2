import { Component } from '@angular/core';
import { Article } from '../article';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-exemple2',
  templateUrl: './exemple2.component.html',
  styleUrl: './exemple2.component.css',
})
export class Exemple2Component {
  article!: Article;
  form = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', [Validators.required]],
    prix: ['', [Validators.required, Validators.min(0), Validators.max(10000)]],
    quantite: ['', [Validators.required, Validators.minLength(1)]],
  });
  get articles() {
    return this.form.controls;
  }
  constructor(private fb: FormBuilder) {}

  save() {
    let json = JSON.stringify(this.form.value);
    this.article = JSON.parse(json);
  }
}
