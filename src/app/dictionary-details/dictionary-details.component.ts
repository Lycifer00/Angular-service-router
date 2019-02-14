import { Component, OnInit } from '@angular/core';
import { IWord, DictionaryService } from '../dictionary.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dictionary-details',
  templateUrl: './dictionary-details.component.html',
  styleUrls: ['./dictionary-details.component.scss']
})
export class DictionaryDetailsComponent implements OnInit {
  
  word: IWord;
  sub: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dictionaryService: DictionaryService) { }
  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const key = paramMap.get('key');
      const meaning = this.dictionaryService.search(key);
      this.word = {
        key: key,
        meaning: meaning
      };
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
