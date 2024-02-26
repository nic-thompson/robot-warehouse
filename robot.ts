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

const robot = new Robot();

// Test movement
console.log(`Initial position: (${robot.x}, ${robot.y})`);
robot.move('N');
console.log(`After moving north: (${robot.x}, ${robot.y})`);
robot.move('E');
console.log(`After moving east: (${robot.x}, ${robot.y})`);
robot.move('S');
console.log(`After moving south: (${robot.x}, ${robot.y})`);
robot.move('W');
console.log(`After moving west: (${robot.x}, ${robot.y})`);
robot.move('W');
console.log(`After moving west: (${robot.x}, ${robot.y})`);

// Test crate grabbing
robot.grab(); // Grabbing crate
robot.grab(); // Crate already grabbed
robot.drop(); // Dropping crate
robot.drop(); // No crate to drop
