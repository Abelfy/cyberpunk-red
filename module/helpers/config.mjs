export const CPR = {};

/**
 * The set of Ability Scores used within the system.
 * @type {Object}
 */
CPR.abilities = {
  int: 'CPR.Ability.Int.long',
  ref: 'CPR.Ability.Ref.long',
  dex: 'CPR.Ability.Dex.long',
  tech: 'CPR.Ability.Tech.long',
  pres: 'CPR.Ability.Pres.long',
  vol: 'CPR.Ability.Vol.long',
  cha: 'CPR.Ability.Cha.long',
  mouv: 'CPR.Ability.Mouv.long',
  cor: 'CPR.Ability.Cor.long',
  emp: 'CPR.Ability.Emp.long'
};

CPR.abilitiesAbbreviations = {
  int: 'CPR.Ability.Int.abbr',
  ref: 'CPR.Ability.Ref.abbr',
  dex: 'CPR.Ability.Dex.abbr',
  tech: 'CPR.Ability.Tech.abbr',
  pres: 'CPR.Ability.Pres.abbr',
  vol: 'CPR.Ability.Vol.abbr',
  cha: 'CPR.Ability.Cha.abbr',
  mouv: 'CPR.Ability.Mouv.abbr',
  cor: 'CPR.Ability.Cor.abbr',
  emp: 'CPR.Ability.Emp.abbr'
};


CPR.skills = {
  Fighting: "CPR.Skills.Fighting",
  Body: "CPR.Skills.Body",
  Control: "CPR.Skills.Control",
  Educative: "CPR.Skills.Educative",
  Representation: "CPR.Skills.Representation",
  Social: "CPR.Skills.Social",
  Tech: "CPR.Skills.Tech",
  Shooting: "CPR.Skills.Shooting",
  Vigilance: "CPR.Skills.Vigilance"
};
  /* {
    title: "CPR.Skills.Control",
    skills: [
      { title: "Conduite de véhicule terrestre", indexedOn: "RÉF", lvl: 0, carac: 0, base: 0 },
      { title: "Équitation", indexedOn: "RÉF", lvl: 0, carac: 0, base: 0 },
      { title: "Pilotage de véhicule aérien", indexedOn: "RÉF", lvl: 0, carac: 0, base: 0 },
      { title: "Pilotage de véhicule maritime", indexedOn: "RÉF", lvl: 0, carac: 0, base: 0 },
    ]
  },
  {
    title: "CPR.Skills.Figthing",
    skills: [
      { title: "Arme de mêlée", indexedOn: "DEX", lvl: 0, carac: 0, base: 0 },
      { title: "Art martial", indexedOn: "DEX", lvl: 0, carac: 0, base: 0 },
      { title: "Bagarre", indexedOn: "DEX", lvl: 0, carac: 0, base: 0 },
      { title: "Esquive", indexedOn: "DEX", lvl: 0, carac: 0, base: 0 },
    ]
  },
  {
    title: "CPR.Skills.Body",
    skills: [
      { title: "Athlétisme", indexedOn: "DEX", lvl: 0, carac: 0, base: 0 },
      { title: "Contorsion", indexedOn: "DEX", lvl: 0, carac: 0, base: 0 },
      { title: "Danse", indexedOn: "DEX", lvl: 0, carac: 0, base: 0 },
      { title: "Discrétion", indexedOn: "DEX", lvl: 0, carac: 0, base: 0 },
      { title: "Endurance", indexedOn: "VOL", lvl: 0, carac: 0, base: 0 },
      { title: "Résistance à la torture/aux drogues", indexedOn: "VOL", lvl: 0, carac: 0, base: 0 },
    ]
  },
  {
    title: "CPR.Skills.Educative",
    skills: [
      { title: "Bibliothèque", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Bureaucratie", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Composition", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Comptabilité", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Connaissance", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Criminologie", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Cryptographie", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Déduction", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Dressage", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Gestion d’affaires", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Jeux de hasard", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Guide local", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Langue", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Science", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Survie en milieu hostile", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Tactique", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
    ]
  },
  {
    title: "CPR.Skills.Representation",
    skills: [
      { title: "Instrument", indexedOn: "TECH", lvl: 0, carac: 0, base: 0 },
      { title: "Jeu d’acteur", indexedOn: "PRES", lvl: 0, carac: 0, base: 0 },
    ]
  },
  {
    title: "CPR.Skills.Social",
    skills: [
      { title: "Connaissance de la rue", indexedOn: "PRES", lvl: 0, carac: 0, base: 0 },
      { title: "Conversation", indexedOn: "EMP", lvl: 0, carac: 0, base: 0 },
      { title: "Corruption", indexedOn: "PRES", lvl: 0, carac: 0, base: 0 },
      { title: "Habillement et style", indexedOn: "PRES", lvl: 0, carac: 0, base: 0 },
      { title: "Interrogation", indexedOn: "PRES", lvl: 0, carac: 0, base: 0 },
      { title: "Look", indexedOn: "PRES", lvl: 0, carac: 0, base: 0 },
      { title: "Négoc", indexedOn: "PRES", lvl: 0, carac: 0, base: 0 },
      { title: "Persuasion", indexedOn: "PRES", lvl: 0, carac: 0, base: 0 },
      { title: "Psychologie", indexedOn: "EMP", lvl: 0, carac: 0, base: 0 },
    ]
  },

  {
    title: "CPR.Skills.Tech",
    skills: [
      { title: "AéroTech", indexedOn: "TECH", lvl: 0, carac: 0, base: 0 },
      { title: "Armurerie", indexedOn: "TECH", lvl: 0, carac: 0, base: 0 },
      { title: "Arts plastiques", indexedOn: "TECH", lvl: 0, carac: 0, base: 0 },
      { title: "Assistance médicale", indexedOn: "TECH", lvl: 0, carac: 0, base: 0 },
      { title: "Contrefaçon", indexedOn: "TECH", lvl: 0, carac: 0, base: 0 },
      { title: "CrafTech", indexedOn: "TECH", lvl: 0, carac: 0, base: 0 },
      { title: "Cybernétique", indexedOn: "TECH", lvl: 0, carac: 0, base: 0 },
      { title: "Électronique", indexedOn: "TECH", lvl: 0, carac: 0, base: 0 },
      { title: "Explosifs", indexedOn: "TECH", lvl: 0, carac: 0, base: 0 },
      { title: "MaroTech", indexedOn: "TECH", lvl: 0, carac: 0, base: 0 },
      { title: "Photos et films", indexedOn: "TECH", lvl: 0, carac: 0, base: 0 },
      { title: "Pickpocket", indexedOn: "TECH", lvl: 0, carac: 0, base: 0 },
      { title: "Premiers secours", indexedOn: "TECH", lvl: 0, carac: 0, base: 0 },
      { title: "Sécurité électronique", indexedOn: "TECH", lvl: 0, carac: 0, base: 0 },
      { title: "TerrorTech", indexedOn: "TECH", lvl: 0, carac: 0, base: 0 },
    ]
  },
  {
    title: "CPR.Skills.Shooting",
    skills: [
      { title: "Armes d’épaule", indexedOn: "RÉF", lvl: 0, carac: 0, base: 0 },
      { title: "Armes lourdes", indexedOn: "RÉF", lvl: 0, carac: 0, base: 0 },
      { title: "Pistolet", indexedOn: "RÉF", lvl: 0, carac: 0, base: 0 },
      { title: "Tir à l’arc", indexedOn: "RÉF", lvl: 0, carac: 0, base: 0 },
      { title: "Tir automatique", indexedOn: "RÉF", lvl: 0, carac: 0, base: 0 }]
  },
  {
    title: "CPR.Skills.Vigilance",
    skills: [
      { title: "Concentration", indexedOn: "VOL", lvl: 0, carac: 0, base: 0 },
      { title: "Dissimulation/Révélation d’objet", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Lecture sur les lèvres", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Perception", indexedOn: "INT", lvl: 0, carac: 0, base: 0 },
      { title: "Pistage", indexedOn: "INT", lvl: 0, carac: 0, base: 0 }]
  }
} */


