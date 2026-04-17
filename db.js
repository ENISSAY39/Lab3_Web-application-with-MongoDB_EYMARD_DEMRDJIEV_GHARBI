db.users.insertMany([
  {
    _id: "ada.lovelace@epf.fr",
    role: "teacher",
    firstname: "Ada",
    lastname: "Lovelace",
    group: ""
  },
  {
    _id: "jean.dupont@epf.fr",
    role: "student",
    firstname: "Jean",
    lastname: "Dupont",
    group: "G1"
  }
]);

// 2. Création du Catalogue Pédagogique (Semestre avec UE1 & UE2)
db.semesters.insertOne({
  _id: "P2025_S4",
  appreciation_scale: ["Outstanding", "Solid", "Basic", "Needs Work", "Resit"],
  ues: [
    {
      id: "UE1",
      name: "Mathématiques Avancées",
      modules: [
        {
          id: "MOD_MATH",
          description: "Algèbre et Analyse",
          ects: 4,
          submodules: [
            {
              id: "SUB_ALG",
              hours: 20,
              name: "Algèbre Linéaire",
              teacher_emails: ["ada.lovelace@epf.fr"],
              evaluations: [
                { id: "COMP_ALG_1", status: "published", evaluated_skill: "Maîtrise des matrices", coef: 2 },
                { id: "COMP_ALG_2", status: "draft", evaluated_skill: "Espaces vectoriels", coef: 1 }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "UE2",
      name: "Informatique",
      modules: [
        {
          id: "MOD_DEV",
          description: "Développement Web",
          ects: 4,
          submodules: [
            {
              id: "SUB_WEB",
              hours: 30,
              name: "Backend Node.js",
              teacher_emails: ["ada.lovelace@epf.fr"],
              evaluations: [
                { id: "COMP_WEB_1", status: "published", evaluated_skill: "Création d'API REST", coef: 3 }
              ]
            }
          ]
        }
      ]
    }
  ]
});

// 3. Création des Appréciations (Notes)
db.appreciations.insertMany([
  {
    student_email: "jean.dupont@epf.fr",
    teacher_email: "ada.lovelace@epf.fr",
    semester_id: "P2025_S4",
    evaluation_id: "COMP_ALG_1",
    value: "A"
  },
  {
    student_email: "jean.dupont@epf.fr",
    teacher_email: "ada.lovelace@epf.fr",
    semester_id: "P2025_S4",
    evaluation_id: "COMP_WEB_1",
    value: "B"
  }
]);