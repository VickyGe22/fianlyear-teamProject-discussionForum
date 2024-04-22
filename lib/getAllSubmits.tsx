import type { Post } from '../codeinsight/types'
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
          "tag1": "cs",
          "tag2": "python",
          "numberReply": "0 reply"
        },
        {
          "id": 1,
          "sticky": false,
          "title": "xxx-adsa-c++",
          "status": "",
          "tag1": "adsa",
          "tag2": "c++",
          "numberReply": "2 replies"
        },
        {
          "id": 2,
          "sticky": false,
          "title": "xxx-adsa-python",
          "status": "",
          "tag1": "adsa",
          "tag2": "python",
          "numberReply": "2 replies"
        },
        {
          "id": 3,
          "sticky": false,
          "title": "xxx-os-c",
          "status": "",
          "tag1": "os",
          "tag2": "c",
          "numberReply": "4 replies"
        },
        {
          "id": 4,
          "sticky": false,
          "title": "xxx-networking-python",
          "status": "",
          "tag1": "networking",
          "tag2": "python",
          "numberReply": "7 replies"
        },
        {
          "id": 5,
          "sticky": false,
          "title": "xxx-adsa-java",
          "status": "",
          "tag1": "adsa",
          "tag2": "java",
          "numberReply": "12 replies"
        },
        {
          "id": 6,
          "sticky": false,
          "title": "xxx-miningbigdata-python",
          "status": "",
          "tag1": "miningbigdata",
          "tag2": "python",
          "numberReply": "12 replies"
        },
    ]
}