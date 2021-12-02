export function set(context, languageCode) {
  const allLanguages = context.state.languages;
  if (allLanguages && allLanguages.some((x) => x.code === languageCode)) {
    context.commit("mark", languageCode);
  }
}
