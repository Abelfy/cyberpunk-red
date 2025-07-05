import CyberPunkRedDataModel from "./base-model.mjs";
import { CPR } from "../helpers/config.mjs";
export default class CyberPunkRedActorBase extends CyberPunkRedDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    
    schema.health = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 10, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 10 })
    });

    schema.power = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 5, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 5 })
    });

    //schema.role = new fields.
    schema.notes = new fields.HTMLField({}); // equivalent to passing ({initial: ""}) for StringFields

    return schema;
  }

}