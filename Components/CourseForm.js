import React from 'react';
import ReactDOM from 'react-dom';
import RadioInput from './RadioInput';

class CourseForm extends React.Component {

  submitForm = (e) => {
    e.preventDefault();

    const { coursename, coursecode, semester } = e.target.elements;
    const course = {
      code: coursecode.value,
      name: coursename.value,
      semester: semester.value
    }
    this.props.addCourse(course);
  }

  removeCourse = (e) => {
    this.props.removeCourse(parseInt(e.target.id));
  }

  render() {
    return(
      <div className="form-cont" onSubmit={(e) => this.submitForm(e)}>
        <form className="form">
          <div className="form-title">Course</div>
          <input type="text" name="coursename" placeholder="Course name" required/>
          <input type="text" name="coursecode" placeholder="Course code" required/>
          <div className="radio">
            <RadioInput title="Fall" value="Fall" name="semester"/>
            <RadioInput title="Winter" value="Winter" name="semester"/>
          </div>
          <input type="submit" value="Add course"/>
        </form>
        <div className="list">
          <div className="title-row" id="course-title-row">
            <div>Course Code</div>
            <div>Course Name</div>
            <div>Semester</div>
            <div>Remove</div>
          </div>
          {this.props.courses.map((c, i) => {
            return(
              <div key={i} className="list-row" id="course-row">
                <div>{c.code}</div>
                <div>{c.name}</div>
                <div>{c.semester}</div>
                <div className="remove-button" id={c.id} onClick={(e) => this.removeCourse(e)}>x</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CourseForm;
