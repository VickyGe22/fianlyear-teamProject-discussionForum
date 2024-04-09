import type { Post } from '../types'
export default async function getAllPosts(): Promise<Post[]> {
    // const res = await fetch('https://raw.githubusercontent.com/cruip/cruip-dummy/main/job-board-posts.json')

    // if (!res.ok) throw new Error('failed to fetch data')

    // return res.json()
    return [
        {
          "id": 0,
          "sticky": true,
          "title": "Duplicate error-cs-python",
          "status": "",
          "image": "https://user-images.githubusercontent.com/2683512/225010250-6f37a62b-737f-4380-93da-8563a1c3c73f.svg",
          "tag1": "cs",
          "tag2": "python",
          "numberReply": "0 reply"
        },
        {
          "id": 1,
          "sticky": false,
          "title": "xxx-adsa-c++",
          "status": "",
          "image": "https://user-images.githubusercontent.com/2683512/225010338-b0c822c4-0583-491a-8914-826c9515dbaf.svg",
          "tag1": "adsa",
          "tag2": "c++",
          "numberReply": "2 replies"
        },
        {
          "id": 2,
          "sticky": false,
          "title": "xxx-adsa-python",
          "status": "",
          "image": "https://user-images.githubusercontent.com/2683512/225010378-a5ce62f6-0ea3-4b9e-aed1-aee6b32ca6a7.svg",
          "tag1": "adsa",
          "tag2": "python",
          "numberReply": "2 replies"
        },
        {
          "id": 3,
          "sticky": false,
          "title": "xxx-os-c",
          "status": "",
          "image": "https://user-images.githubusercontent.com/2683512/225010410-86af0a77-9db9-40a2-915e-3fdbce9dad1c.svg",
          "tag1": "os",
          "tag2": "c",
          "numberReply": "4 replies"
        },
        {
          "id": 4,
          "sticky": false,
          "title": "xxx-networking-python",
          "status": "",
          "image": "https://user-images.githubusercontent.com/2683512/225010410-86af0a77-9db9-40a2-915e-3fdbce9dad1c.svg",
          "tag1": "networking",
          "tag2": "python",
          "numberReply": "7 repliess"
        },
        {
          "id": 5,
          "sticky": false,
          "title": "xxx-adsa-java",
          "status": "",
          "image": "https://user-images.githubusercontent.com/2683512/225010250-6f37a62b-737f-4380-93da-8563a1c3c73f.svg",
          "tag1": "adsa",
          "tag2": "java",
          "numberReply": "12 replies"
        },
        {
          "id": 6,
          "sticky": false,
          "title": "xxx-miningbigdata-python",
          "status": "",
          "image": "https://user-images.githubusercontent.com/2683512/225010453-77c0b277-db88-45a9-a411-7e8c10d04ec0.svg",
          "tag1": "miningbigdata",
          "tag2": "python",
          "numberReply": "12 replies"
        },
    ]
}