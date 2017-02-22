import React, { Component,  propTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../../actions/index';
import { Link } from 'react-router';
class ListItem extends Component {
    handleFormSubmit(formProps){
        this.props.createPost(formProps);
    }
    render() {
        const { fields: { title, topic, url, content }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <h3>Create a New Post</h3>
                    <fieldset className="form-group">
                        <label>Title</label>
                        <input {...title} type="text" className="form-control" />
                    </fieldset>
                    <fieldset className="form-group">
                        <label>Category</label>
                        <input {...topic} type="text" className="form-control" />
                    </fieldset>               
                    <fieldset className="form-group">
                        <label>URL</label>
                        <input {...url} type="text" className="form-control" />
                    </fieldset>
                    <fieldset className="form-group">
                        <label>Content</label>
                        <input {...content} type="text" rows="8" className="form-control" />
                    </fieldset>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>                               
            );
    }
}
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'topic', 'url', 'content']
}, null, { createPost })(ListItem);