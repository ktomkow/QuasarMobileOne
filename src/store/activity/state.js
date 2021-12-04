export default function () {
  return {
    types: [
      { id: 1, name: "walk", icon: "directions_walk", metrics: [2, 3] },
      { id: 2, name: "run", icon: "directions_run", metrics: [2, 3] },
      { id: 3, name: "bicycle", icon: "directions_bike", metrics: [2, 3] },
      { id: 4, name: "cardio", icon: "timer", metrics: [2, 3] },
      { id: 5, name: "basketball", icon: "sports_basketball", metrics: [3] },
      { id: 6, name: "volleyball", icon: "sports_volleyball", metrics: [3] },
      { id: 7, name: "football", icon: "sports_soccer", metrics: [3] },
      { id: 8, name: "gymnastics", icon: "sports_martial_arts", metrics: [3] },
      { id: 9, name: "gym", icon: "fitness_center", metrics: [1, 3] },
      { id: 10, name: "other", icon: "grain", metrics: [1, 2, 3] },
    ],
    metrics: [
      { id: 1, name: "repeats" },
      { id: 2, name: "distance" },
      { id: 3, name: "time" },
    ],
    myActivites: [],
  };
}
