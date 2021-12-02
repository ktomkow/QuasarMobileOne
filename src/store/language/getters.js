export function getActiveCode(state) {
  const current = state.languages.find((x) => x.active);
  if (current) {
    return current.code;
  } else {
    return "";
  }
}

export function getAcitive(state) {
  const current = state.languages.find((x) => x.active);
  if (current) {
    return current;
  } else {
    return null;
  }
}
