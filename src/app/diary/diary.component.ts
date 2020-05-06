import { Component, OnInit } from '@angular/core';
import { DiaryEntry } from '../diary-entry';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diarys:DiaryEntry[] = [
  new DiaryEntry('First date with Alfred',new Date(2019,1,14),'We had dinner at SpringValley oven. I had a burger and he had pizza. The conversation was great. At the end of the date he kissed me! It was the best day of my life!'),
  new DiaryEntry('Went shopping at Gikomba',new Date(2020,0,20),'Went shopping with Grace, Stacy and Ann. Gikomba market is so huge and has a great array of items. I bought so many sundresses and I can\'t wait for summer to get here! >.<' ),
  new DiaryEntry('Started Moringa Core classes',new Date(2020,4,4),'I am excited to develop more skills in software engineering. In week one and two we shall be learning about Angular. Word in the street has it that Angular is tasking and involving but look at what I made with Angular! :)'),
  new DiaryEntry('I baked a cake',new Date(2020,4,6),'I baked a vanilla cake for breakfast. My family loved it so much! I just might be pastry chef extraordinaire! :P'),
  ];
  toggleDescriptions(index){
    this.diarys[index].showDescription = !this.diarys[index].showDescription;
  }
  showingLess(seeLess, index){
    if (seeLess) {
      let toSeeLess = confirm(`Are you sure you want to delete ${this.diarys[index].title}?`)
      if(toSeeLess){
      this.diarys.splice(index,1);
    }
  }
  }
  addDiaryEntry(diary){
    this.diarys.push(diary)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
