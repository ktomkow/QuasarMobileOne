export function mark(state, languageCode) {
  state.languages.forEach((x) => (x.active = x.code === languageCode));
}
