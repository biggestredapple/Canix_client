import React, { useState, useEffect } from 'react';

type Post = {
    title: string
    body: string
    featured_image?: FileList
}

const initialPost: Post = {
    title: "",
    body: "",
}

const PostContainer = () => {
    const [post, setPost] = useState<Post>(initialPost)


    useEffect(() => {
        fetch('http://localhost:3000/scales', {
            method: 'get',
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }, [])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPost({
            ...post,
            [event.target.name]: event.target.value
        })
    }

    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.files);
        setPost({
            ...post,
            featured_image: event.target.files ? event.target.files : undefined
        });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (post.featured_image) {
            const formData = new FormData();

            // console.log("files: ", post.featured_image);

            Array.from(post.featured_image).map((file) => {
                console.log(file);

                formData.append('file', file);

                fetch('http://localhost:3000/upload', {
                    method: 'POST',
                    body: formData
                })
                    .catch(error => console.log(error));
                return file
            });
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={post.title} placeholder="title" onChange={handleChange} />
                <input type="text" name="body" value={post.body} placeholder="body" onChange={handleChange} />
                <input type="file" accept='text/csv' multiple={true} onChange={onImageChange} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default PostContainer;