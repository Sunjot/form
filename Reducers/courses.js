
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

    case 'ADD_COURSE': // assign new id and add course to array
    courseIndex++;
      return [
        ...state, { ...action.course, id: courseIndex }
      ];

    case 'REMOVE_COURSE': // remove course from array if id matches
      return state.filter(course => course.id !== action.id);

    default:
      return state;
  }
}

export default courses;
