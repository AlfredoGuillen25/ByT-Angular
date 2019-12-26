import { Component} from '@angular/core';

const HEADER_WINDOW = 'Try to scroll down the page to see the icon:';
const HEADER_ELEMENT = 'Try to scroll down inside the box to see the icon:';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'ByT';
  
  which = 'window';

  get isElement() { return this.which === 'element'; }

  get iconBottom() { 
    return this.isElement ? '45px' : '12px'; 
  }

  get iconColor() { 
    return this.isElement ? 'yellow' : '#333'; 
  }

  get iconFill() { 
    return this.isElement ? 'red' : 'white'; 
  }

  get iconSize() { 
    return this.isElement ? '60px' : '48px'; 
  }

  get iconSizeInner() { 
    return this.isElement ? '32' : '24'; 
  }

  get elementId() {
    return this.isElement ? 'my-scrolling-element-id' : ''; 
  }

  get header() { 
    return this.isElement ? HEADER_ELEMENT : HEADER_WINDOW;
  }

  constructor() { }

  toggle() {
    this.which = this.isElement ? 'window' : 'element';
  }

}