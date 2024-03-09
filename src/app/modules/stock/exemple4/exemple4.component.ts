import { Component } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Article } from '../article';

@Component({
  selector: 'app-exemple4',
  templateUrl: './exemple4.component.html',
  styleUrl: './exemple4.component.css',
})
export class Exemple4Component {
  mesarticles: Article[] = [];
  isSaved = false;
  form = this.fb.group({
    articles: this.fb.array([
      this.fb.group({
        id: ['', [Validators.required]],
        description: ['', [Validators.required]],
        prix: ['', [Validators.required]],
        quantite: ['', [Validators.required]],
      }),
    ]),
  });
  constructor(private fb: FormBuilder) {}
  get articles() {
    return this.form.get('articles') as FormArray;
  }

  addArticle() {
    const f = this.fb.group({
      id: ['', [Validators.required]],

      description: ['', [Validators.required]],
      prix: ['', [Validators.required]],
      quantite: ['', [Validators.required]],
    });
    this.articles.push(f);
  }
  removeArticle(i: number) {
    this.articles.removeAt(i);
  }
  save() {
    this.isSaved = true;
    console.log('a', this.form.value.articles);
    const json = JSON.stringify(this.form.value.articles);
    console.log('json', json);
    this.mesarticles = JSON.parse(json);
  }
  addValidatorRule(i: number) {
    (this.articles.at(i) as FormGroup)
      .get('prix')
      ?.setValidators([Validators.required, Validators.max(15000)]);
    (this.articles.at(i) as FormGroup).get('prix')?.updateValueAndValidity();
  }
  prix(i: number) {
    return (this.articles.at(i) as FormGroup).controls['prix'];
  }
  malist(i: number) {
    return (this.articles.at(i) as FormGroup).controls;
  }
}
