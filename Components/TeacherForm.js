import React from 'react';
import ReactDOM from 'react-dom';
import RadioInput from './RadioInput';

class TeacherForm extends React.Component {

  submitForm = (e) => {
    e.preventDefault();

    const { firstname, lastname, gender, course } = e.target.elements;
    const teacher = {
      firstName: firstname.value,
      lastName: lastname.value,
      gender: gender.value,
      course: course.value
    }
    this.props.addTeacher(teacher);
  }

  removeTeacher = (e) => {
    this.props.removeTeacher(parseInt(e.target.id));
  }

  render() {
    return(
      <div className="form-cont" onSubmit={(e) => this.submitForm(e)}>
        <form className="form">
          <div className="form-title">Teacher</div>
          <input type="text" name="firstname" placeholder="First name" required/>
          <input type="text" name="lastname" placeholder="Last name" requirdd/>
          <div className="radio">
            <RadioInput title="Male" value="Male" name="gender"/>
            <RadioInput title="Female" value="Female" name="gender"/>
          </div>
          <div id="dropdown-cont">
            <div className="title">Courses:</div>
            <select name="course" id="course-dropdown">
              {this.props.courses.map((c, i) => {
                return(
                  <option value={c.name}>{c.name}</option>
                );
              })}
            </select>
          </div>
          <input type="submit" value="Add teacher"/>
        </form>
        <div className="list">
          <div className="title-row" id="teacher-title-row">
            <div>First Name</div>
            <div>Last Name</div>
            <div>Gender</div>
            <div>Course</div>
            <div>Remove</div>
          </div>
          {this.props.teachers.map((t, i) => {
            return(
              <div key={i} className="list-row" id="teacher-row">
                <div>{t.firstName}</div>
                <div>{t.lastName}</div>
                <div>{t.gender}</div>
                <div>{t.course}</div>
                <div className="remove-button" id={t.id} onClick={(e) => this.removeTeacher(e)}>x</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TeacherForm;
