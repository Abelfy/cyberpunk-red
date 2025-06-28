import CyberPunkRedDataModel from "./base-model.mjs";
import { CPR } from "../helpers/config.mjs";
export default class CyberPunkRedActorBase extends CyberPunkRedDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    schema.role = new fields.SchemaField({
      role: new fields.StringField({
        // value: new fields.StringField({ initial: "" }),
        required: true,
        blank: true,
        initial: "",
        label: "CPR.Actor.Role"
      }),
    });
    schema.health = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 10, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 10 })
    });

    schema.power = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 5, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 5 })
    });

    //schema.role = new fields.
    schema.biography = new fields.StringField({ required: true, blank: true }); // equivalent to passing ({initial: ""}) for StringFields

    schema.seriousInjury = new fields.SchemaField({
      value: new fields.BooleanField({ initial: false }),
      description: new fields.StringField({ required: true, blank: true })
    });
    /* console.log("CPR.skills.columns", CPR.skills.columns.flatMap((col) => col))
    schema.skills = new fields.SchemaField({});
    CPR.skills.columns.flatMap((col) => col).forEach((category) => {
      schema.skills[category.title] = new fields.ArrayField({
        items: new fields.SchemaField({})
      }); 
      category.skills.forEach((skill) => {
        schema.skills[category.title].push(new fields.SchemaField({

          lvl: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
          carac: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
          base: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
        }));
      });

    }); */
    console.log("CyberPunkRedActorBase.defineSchema", schema);
    return schema;
  }

}