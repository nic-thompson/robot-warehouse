import { Robot } from './Robot';

describe('Robot', () => {
  let robot: Robot;

  beforeEach(() => {
    robot = new Robot();
  });

  test('should initialize with correct initial position and no crate', () => {
    expect(robot.x).toBe(5);
    expect(robot.y).toBe(5);
    expect(robot.hasCrate).toBe(false);
  });

  test('should move north within bounds', () => {
    robot.move('N');
    expect(robot.y).toBe(6);
  });

  test('should move south within bounds', () => {
    robot.move('S');
    expect(robot.y).toBe(4);
  });

  test('should move east within bounds', () => {
    robot.move('E');
    expect(robot.x).toBe(6);
  });

  test('should move west within bounds', () => {
    robot.move('W');
    expect(robot.x).toBe(4);
  });

  test('should not move north when at the top edge', () => {
    robot.y = 10;
    robot.move('N');
    expect(robot.y).toBe(10);
  });

  test('should not move south when at the bottom edge', () => {
    robot.y = 1;
    robot.move('S');
    expect(robot.y).toBe(1);
  });

  test('should not move east when at the right edge', () => {
    robot.x = 10;
    robot.move('E');
    expect(robot.x).toBe(10);
  });

  test('should not move west when at the left edge', () => {
    robot.x = 1;
    robot.move('W');
    expect(robot.x).toBe(1);
  });

  test('should grab a crate when not already holding one', () => {
    robot.grab();
    expect(robot.hasCrate).toBe(true);
  });

  test('should not grab a crate when already holding one', () => {
    robot.grab();
    robot.grab();
    expect(robot.hasCrate).toBe(true);
  });

  test('should drop a crate when holding one', () => {
    robot.grab();
    robot.drop();
    expect(robot.hasCrate).toBe(false);
  });

  test('should not drop a crate when not holding one', () => {
    robot.drop();
    expect(robot.hasCrate).toBe(false);
  });
});
