export class ListResponse {
  constructor(items) {
    this.items = items
    this.count = items.length
    this.more = false
  }
}
