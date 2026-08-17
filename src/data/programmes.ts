export type Programme = {
  code: string
  name: string
  award: string
  institution: string
  region: string
  points: number
  duration: string
  field: string
  capacity: number
  entryRequirements: string
  gradeConditions: {
    subject: string
    condition: string
  }[]
  guidebookPage: number
  dataNote?: string
}

export const programmes: Programme[] = [
  {
    code: "MD001",
    name: "Bachelor of Medicine and Surgery",
    field: "Medicine",
    award: "Doctor of Medicine",
    institution: "Muhimbili University of Health and Allied Sciences",
    region: "Dar es Salaam",
    points: 4,
    duration: "5 years",
    capacity: 120,

    entryRequirements:
      "Candidates must have the required qualifications in the relevant subjects as specified in the official admission guidebook.",

    gradeConditions: [
      {
        subject: "Chemistry",
        condition: "At least C",
      },
      {
        subject: "Biology",
        condition: "At least D",
      },
      {
        subject: "Physics",
        condition: "At least E",
      },
    ],

    guidebookPage: 145,
  },

  {
    code: "CS001",
    name: "Bachelor of Science in Computer Science",
    field: "Computer Science",
    award: "Bachelor Degree",
    institution: "University of Dodoma",
    region: "Dodoma",
    points: 4,
    duration: "3 years",
    capacity: 100,

    entryRequirements:
      "Candidates must meet the required qualifications in the relevant subjects for admission to the programme.",

    gradeConditions: [
      {
        subject: "Mathematics",
        condition: "At least C",
      },
      {
        subject: "Physics",
        condition: "At least D",
      },
    ],

    guidebookPage: 212,
  },

  {
    code: "ENG001",
    name: "Bachelor of Science in Civil Engineering",
    field: "Engineering",
    award: "Bachelor Degree",
    institution: "Ardhi University",
    region: "Dar es Salaam",
    points: 4,
    duration: "4 years",
    capacity: 80,

    entryRequirements:
      "Candidates must satisfy the minimum entry qualifications specified for engineering programmes.",

    gradeConditions: [
      {
        subject: "Mathematics",
        condition: "At least C",
      },
      {
        subject: "Physics",
        condition: "At least D",
      },
      {
        subject: "Chemistry",
        condition: "At least D",
      },
    ],

    guidebookPage: 178,
  },
]