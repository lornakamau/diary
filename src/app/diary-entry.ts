export class DiaryEntry {
    showDescription: boolean;
    constructor(public title: string,public entryDate: Date,public entryDescription: string){
    this.showDescription=false;
  }
}
