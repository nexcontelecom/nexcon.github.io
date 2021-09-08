import { isSafari } from "react-device-detect";
import { safariScroll } from "./safariScroll";

export class Scroll {
  index = 0;
  wheelGage = 0;

  constructor(sections,callback = undefined) {
    this.sections = sections;
    this.callback = callback;
  }

  move = (event) => {
    event.preventDefault();
    this.wheelGage += 1;
    const flag = event.wheelDelta;
    if (this.wheelGage % 7 === 0) {
      this.wheelGage = 0;
      if(flag < 0 && this.index + 1 < this.sections.length) {
        this.scrollDown();
      } else if (flag > 0 && this.index - 1 >= 0){
        this.scrollUp();
      }
    }
  }

  scrollDown() {
    if (this.sections.length - 1 > this.index) {
      const target = window.pageYOffset + this.sections[this.index + 1].getBoundingClientRect().top;
        this.index++;
        if(this.callback !== undefined) {
          this.callback(this.index);
        }
        if(isSafari) {
          const element = this.sections[this.index]
          safariScroll(element);
        } else {
          window.scrollTo({top:target, left:0, behavior: "smooth"});
        }
    }
  }

  scrollUp() {
    if (this.index > 0) {
      const target = window.pageYOffset + this.sections[this.index - 1].getBoundingClientRect().top;
        this.index--;
        if(this.callback !== undefined) {
          this.callback(this.index);
        }
        if(isSafari) {
          const element = this.sections[this.index]
          safariScroll(element);
        } else {
          window.scrollTo({top:target, left:0, behavior: "smooth"});
        }
    }
  }
}