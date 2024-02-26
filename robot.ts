class Robot {
  x: number;
  y: number;
  hasCrate: boolean;

  constructor() {
    // Initialise the robot's position to the center of the grid
    this.x = 5;
    this.y = 5;
    this.hasCrate = false;
  }

  move(command: string) {
    switch (command) {
      case 'N':
        if (this.y < 10) {
          this.y++;
        }
        break;
      case 'S':
        if (this.y > 1) {
          this.y--;
        }
        break;
      case 'E':
        if (this.x < 10) {
          this.x++;
        }
        break;
      case 'W':
        if (this.x > 1) {
          this.x--;
        }
        break;
      case 'NE':
        if (this.y < 10 && this.x < 10) {
          this.y++;
          this.x++;
        }
        break;
      case 'SE':
        if (this.y > 1 && this.x < 10) {
          this.y--;
          this.x++;
        }
        break;
      case 'SW':
        if (this.y > 1 && this.x > 1) {
          this.y--;
          this.x--;
        }
        break;
      case 'NW':
        if (this.y < 10 && this.x > 1) {
          this.y++;
          this.x--;
        }
        break;
      default:
        console.log('Invalid command');
    }
  }

  grab() {
    if (!this.hasCrate) {
      console.log('Grabbing crate');
      this.hasCrate = true;
    } else {
      console.log('Crate already grabbed');
    }
  }

  drop() {
    if (this.hasCrate) {
      console.log('Dropping crate');
      this.hasCrate = false;
    } else {
      console.log('No crate to drop');
    }
  }
}

export { Robot };
