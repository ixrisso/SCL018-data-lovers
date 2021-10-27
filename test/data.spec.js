import { sortData, filterData } from '../src/data.js';

const test = [
  { id: "1",
  title: "Castle in the Sky",
  director: "Hayao Miyazaki",
  release_date: "1986",
  rt_score: "95",
  },

  {id: "2",
  title: "Grave of the Fireflies",
  director: "Isao Takahata",
  release_date: "1988",
  rt_score: "97",
  },

  { id: "3",
  title: "Whisper of the Heart",
  director: "Yoshifumi Kondō",
  release_date: "1995",
  rt_score: "91",
  }
];

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns test with', () => {
    expect(sortData(test, "date_asc")).toStrictEqual([
  {id: "3",
  title: "Whisper of the Heart",
  director: "Yoshifumi Kondō",
  release_date: "1995",
  rt_score: "91",
  },
  {id: "2",
  title: "Grave of the Fireflies",
  director: "Isao Takahata",
  release_date: "1988",
  rt_score: "97",
  },
  { id: "1",
  title: "Castle in the Sky",
  director: "Hayao Miyazaki",
  release_date: "1986",
  rt_score: "95",
  }
  ]);  });
});


describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns test with ', () => {
    expect(filterData(test, "Hayao Miyazaki")).toStrictEqual([{ id: "1", title: "Castle in the Sky",
    director: "Hayao Miyazaki", release_date: "1986", rt_score: "95" }]);
  });
});
