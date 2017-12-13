export class AddArticleModel {
  constructor (
    public name?: string,
    public author?: string,
    public category?:string,
    public image?: string,
    public text?: string
  ) { }
}
