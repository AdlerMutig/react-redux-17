import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
// Calling actions in mapDispatchToProps is verbose.
// bindActionCreators instead of manualy wrap action creators in dispatch

class CoursesPage extends React.Component {
    state = {
        course: {
            title: "",
        },
    };

    handleChange = (event) => {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.actions.createCourse(this.state.course);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add course</h3>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.course.title}
                />

                <input type="submit" value="Save"></input>
                {this.props.courses.map((course) => (
                    <div key={course.title}>{course.title}</div>
                ))}
            </form>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return { courses: state.courses };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch),
    };
}

// When declared as a property, each property is automatically bound to dispatch
// const mapDispatchToProps = {
//     createCourse: courseActions.createCourse,
// };

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
