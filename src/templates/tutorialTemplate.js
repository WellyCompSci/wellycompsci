import React from 'react';
import Helmet from 'react-helmet';
export default class TutorialTemplate extends React.Component{
    render(){
        const { markdownRemark: tutorial} = this.props.data;
        return(
            <React.Fragment>
                <Helmet title={tutorial.frontmatter.title +" - " + this.props.data.site.siteMetadata.title} />
            <div className="body">
                <div dangerouslySetInnerHTML={{__html: tutorial.html}} />
            </div>
            </React.Fragment>
        );
    }
}

export const pageQuery = graphql`
query TutorialPageByPath($path: String!) {
    site {
        siteMetadata {
            title
            footer
        }
    }
    markdownRemark(frontmatter: {path: {eq: $path }}){
        html
        frontmatter{
            path
            title
        }
    }
}`