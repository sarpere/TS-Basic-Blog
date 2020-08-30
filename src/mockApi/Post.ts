import { Post } from '../store/post/types'
type postsType = Post[]

export async function getPosts(id?: number): Promise<any> {
    const readmePath = require("./markdownexam.md");
    var example: Array<string> = []
    var Posts: postsType = []
    return fetch(readmePath)
        .then(res => res.text())
        .then(source => {
            example = source.split('--next--')
            Posts = example.map((markdown: string, i: number) => {
                var [title, imagePath, content] = markdown.split('--nextContent--')
                return {
                    id: i,
                    title,
                    content,
                    imagePath
                }
            })
            if (typeof id == 'number') {
                return Promise.resolve(Posts.filter(post => post.id === id))
            }
            return Promise.resolve(Posts)
        })
        .catch((err) => {
            console.error(err)
            return Promise.reject("Couldn't find data")
        });

}