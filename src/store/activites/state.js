export default function () {
  return {
    types: [
      { id: 1, nameKey: "walk", icon: "directions_walk", metrics: [2, 3] },
      { id: 2, nameKey: "run", icon: "directions_walk", metrics: [2, 3] },
      { id: 3, nameKey: "bicycle", icon: "directions_walk", metrics: [2, 3] },
      { id: 4, nameKey: "cardio", icon: "timer", metrics: [2, 3] },
      { id: 5, nameKey: "basketball", icon: "sports_basketball", metrics: [3] },
      { id: 6, nameKey: "volleyball", icon: "sports_volleyball", metrics: [3] },
      { id: 7, nameKey: "football", icon: "sports_soccer", metrics: [3] },
      { id: 8, nameKey: "gymnastics", icon: "sports_gymnastics", metrics: [3] },
      { id: 9, nameKey: "gym", icon: "fitness_center", metrics: [1, 3] },
      { id: 10, nameKey: "other", icon: "grain", metrics: [1, 3] },
    ],
    metrics: [
      { id: 1, nameKey: "repeats" },
      { id: 2, nameKey: "distance" },
      { id: 3, nameKey: "time" },
    ],
    myActivites: [],
  };
}
