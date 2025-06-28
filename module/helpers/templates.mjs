/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return foundry.applications.handlebars.loadTemplates([
    // Actor partials.
    'systems/cyberpunk-red/templates/actor/parts/actor-features.hbs',
    'systems/cyberpunk-red/templates/actor/parts/actor-items.hbs',
    'systems/cyberpunk-red/templates/actor/parts/actor-spells.hbs',
    'systems/cyberpunk-red/templates/actor/parts/actor-effects.hbs',
    // Item partials
    'systems/cyberpunk-red/templates/item/parts/item-effects.hbs',
  ]);
};
