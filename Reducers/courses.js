
let courseIndex = 2;

const initialCourses = [
  {
    id: 0,
    name: "Calculus",
    code: "CALC",
    semester: "Fall"
  },
  {
    id: 1,
    name: "Chemistry",
    code: "CHEM",
    semester: "Fall"
  },
  {
    id: 2,
    name: "Accounting",
    code: "ACCN",
    semester: "Winter"
  }
];

const courses = (state = initialCourses, action) => {

  switch(action.type) {

    case 'ADD_COURSE':
    courseIndex++;
      return [
        ...state, { ...action.course, id: courseIndex }
      ];

    case 'REMOVE_COURSE':
      return state.filter(course => course.id !== action.id);

    default:
      return state;
  }
}

export default courses;
