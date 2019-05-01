import React from 'react';
import ReactDOM from 'react-dom';
import TeacherForm from '../Components/TeacherForm';
import CourseForm from '../Components/CourseForm';
import { connect } from 'react-redux';
import { addTeacher, removeTeacher, toggleForm, addCourse, removeCourse } from '../Actions/index';

class FormContainer extends React.Component {

  render() {
    const {
      teachers,
      courses,
      links,
      toggleForm,
      addTeacher,
      removeTeacher,
      addCourse,
      removeCourse
    } = this.props;
    return(
      <div id="application-cont">
        <div id="page-title">School form</div>
        <div id="links">
          <div className={links === 0? "linkItem active" : "linkItem"} onClick={() => toggleForm(0)}>Teachers</div>
          <div className={links === 1? "linkItem active" : "linkItem"} onClick={() => toggleForm(1)}>Courses</div>
        </div>
        {links === 0 && // if 0, render teacher form/list
          <TeacherForm teachers={teachers} addTeacher={(t) => addTeacher(t)}
            removeTeacher={(id) => removeTeacher(id)} courses={courses} />
        }
        {links === 1 && // if 1, render course form/list
          <CourseForm courses={courses} addCourse={(c) => addCourse(c)}
            removeCourse={(id) => removeCourse(id)} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return(
    {
      teachers: state.teachers, // list of teachers
      courses: state.courses, // list of courses
      links: state.links // Identifying which form is in view
    }
  );
}

const mapDispatchToProps = dispatch => {
  return(
    {
      addTeacher: teacher => { dispatch(addTeacher(teacher)) },
      removeTeacher: id => { dispatch(removeTeacher(id)) },
      toggleForm: id => { dispatch(toggleForm(id)) },
      addCourse: course => { dispatch(addCourse(course)) },
      removeCourse: id => { dispatch(removeCourse(id)) }
    }
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
