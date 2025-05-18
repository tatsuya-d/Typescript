export {};

type Pitcher1 = {
  throwingspeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinnSasaki: Pitcher1 = {
  throwingspeed:154
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
};

// type TwoWayPlayer = {
//   throwingSpeed:number;
//   battingAverage: number;
// }

type TwoWayPlayer = Pitcher1 & Batter1

const OtaniShouhei: TwoWayPlayer = {
  throwingspeed: 165,
  battingAverage:0.286
};
