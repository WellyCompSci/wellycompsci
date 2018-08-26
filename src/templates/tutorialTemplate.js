import React from 'react';

export default class TutorialTemplate extends React.Component{
    render(){
        const { markdownRemark: tutorial} = this.props.data;
        return(
            <div className="body">
                <div dangerouslySetInnerHTML={{__html: tutorial.html}} />
            </div>
        );
    }
}

export const pageQuery = graphql`
query TutorialPageByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path }}){
        html
        frontmatter{
            path
            title
        }
    }
}`