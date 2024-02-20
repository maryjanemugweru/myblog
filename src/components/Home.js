import BlogList from "./Bloglist";
import useFetch from "./useFetch";

const MyBlog = () => {
    const blogs = useFetch("http://localhost:4000/blogs");

    return (
        <div className="home">
            {blogs &&<BlogList blogs={blogs}/>}
        </div>

    );
}

export default MyBlog;