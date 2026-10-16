/**
 * The language a block's content inherits: the nearest ancestor `lang`,
 * lowercased, or `''` when none is set.
 *
 * @param {Element} node - the block's mount node
 * @returns {string} the inherited language tag, lowercased
 */
export const inheritedLang = (node) =>
  (node.closest('[lang]')?.getAttribute('lang') || '').toLowerCase();

/**
 * The `lang` a value needs: its own language when that differs from the
 * inherited one, otherwise nothing, since the attribute would be redundant.
 *
 * @param {string} [valueLang] - the value's language tag, e.g. from `stmt.getLanguage()`
 * @param {string} inherited - the inherited language, from `inheritedLang`
 * @returns {string|undefined} the tag to set as `lang`, or undefined for none
 */
export const foreignLang = (valueLang, inherited) =>
  valueLang && valueLang.toLowerCase() !== inherited ? valueLang : undefined;
