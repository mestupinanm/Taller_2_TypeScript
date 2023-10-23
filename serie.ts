export class Serie {

    top: number;
    name: string;
    channel: string;
    seasons: number;
    description : string;
    link: string;
    img: string;
  
    constructor(top:number, name:string, channel:string, seasons:number, description:string, link:string, img:string) {
      this.top = top;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.link = link;
      this.img =img;
    }
}