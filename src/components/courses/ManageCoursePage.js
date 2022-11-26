import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

class ManageCoursesPage extends React.Component {
    componentDidMount() {
        const { courses, authors, loadAuthors, loadCourses } = this.props;
        if (courses.length === 0) {
            loadCourses().catch((error) => {
                alert("Loading courses failed" + error);
            });
        }

        if (authors.length === 0) {
            loadAuthors().catch((error) => {
                alert("Loading authors failed" + error);
            });
        }
    }

    render() {
        return (
            <>
                <h2>Manage Course</h2>
            </>
        );
    }
}

ManageCoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        courses: state.courses,
        authors: state.authors,
    };
}

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: {
//             loadCourses: bindActionCreators(
//                 courseActions.loadCourses,
//                 dispatch
//             ),
//             loadAuthors: bindActionCreators(
//                 authorActions.loadAuthors,
//                 dispatch
//             ),
//         },
//     };
// }
const mapDispatchToProps = {
    loadCourses: courseActions.loadCourses,
    loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);
