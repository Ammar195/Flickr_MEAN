import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: string, ...args: unknown[]): any {
    if (!searchText || searchText == '') return value;
    let searchedVal = "";
    let matchingStatus = false;
    const resultFeeds = [];

    for (const feed of value) {
      if (searchText.length == 1) {
        if (feed.author[0].name[0].charAt(0) == searchText) resultFeeds.push(feed);
      }
      else {
        for (let i = 0; i < feed.author[0].name[0].length; i++) {
          for (var j = 0; j < searchText.length; j++) {
            if (feed.author[0].name[0].charAt(i) == searchText[j]) {
              searchedVal += searchText[j];
              matchingStatus = true;
              break;
            }
            else if (feed.author[0].name[0].charAt(i) != searchText[j]) matchingStatus = false;
          }
          if (searchedVal != "" && searchedVal == searchText && matchingStatus) {
            resultFeeds.push(feed);
          }
          else if (searchedVal != "" && searchedVal != searchText.substr(0, searchedVal.length) && matchingStatus) {
            searchedVal = "";
          }
          else if (!matchingStatus && searchedVal.length > 0) {
            searchedVal = "";
          }
        }
      }
    }
    return resultFeeds;
  }

}
