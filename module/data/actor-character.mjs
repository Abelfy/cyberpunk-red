import CyberPunkRedActorBase from "./base-actor.mjs";

export default class CyberPunkRedCharacter extends CyberPunkRedActorBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.role = new fields.SchemaField({
      role: new fields.StringField({}),
      capacity: new fields.StringField({}),
      rank: new fields.NumberField({
        required: true,
        integer: true,
        min: 1,
        initial: 1,
      })
    });

    schema.humanity = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 10, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 10 })
    });

    schema.seriousInjury = new fields.NumberField({
      required: true,
      integer: true,
      min: 0,
      initial: 0,
    });
    schema.criticalInjury = new fields.NumberField({
      required: true,
      integer: true,
      min: 0,
      initial: 0,
    });
    schema.deathSaves = new fields.NumberField({
      required: true,
      integer: true,
      min: 0,
      initial: 0,
    });

    // Iterate over ability names and create a new SchemaField for each.
    schema.features = new fields.SchemaField(Object.keys(CONFIG.CPR.features).reduce((obj, feature) => {
      obj[feature] = new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
        // Add a 'max' field only for "cha" or "emp"
      });
      return obj;
    }, {}));
    schema.skills = new fields.SchemaField(Object.keys(CONFIG.CPR.skills).reduce((obj, skill) => {
        obj[skill] = new fields.ArrayField(new fields.SchemaField({
          rank: new fields.NumberField({
            required: true,
            integer: true,
            min: 0,
            initial: 0,
          }),
        }));
        return obj;
      }, {})
    )

    schema.gear = new fields.SchemaField({
      armor: new fields.ArrayField(new fields.SchemaField({
        pa : new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
        penalty : new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
      })),
      weapons: new fields.ArrayField(new fields.SchemaField({
        name: new fields.StringField({ required: true, blank: true }),
        dg: new fields.StringField({ required: true, blank: true }),
        ammo: new fields.StringField({ required: true, blank: true }),
        attPerRound: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
        notes: new fields.StringField({ required: true, blank: true }),
      }))
    })

    return schema;
  }

  prepareDerivedData() {
    // Loop through ability scores, and add their modifiers to our sheet output.
    for (const key in this.features) {

      // Handle ability label localization.
      this.features[key].label = game.i18n.localize(CONFIG.CPR.features[key]) ?? key;
    }
  }

  getRollData() {
    const data = {};
    // Copy the ability scores to the top level, so that rolls can use
    // formulas like `@str.mod + 4`.
    if (this.features) {
      for (let [k, v] of Object.entries(this.features)) {
        data[k] = foundry.utils.deepClone(v);
      }
    }
    //data.lvl = this.attributes.level.value;

    return data
  }
}