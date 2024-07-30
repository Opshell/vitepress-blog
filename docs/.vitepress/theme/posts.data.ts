import { createContentLoader } from 'vitepress'

interface iPost {
    title: string
    url: string
    date: {
      time: number
      string: string
    }
    excerpt: string | undefined
  }

interface iArticleData {
    author: string[];
    tags: string[];
    categories: string[];
    posts: iPost[];
    everyCategoryCount: Record<string, number>;
}

declare const data: iArticleData[];
export { data };

// export default createContentLoader('pages/article/**/*.md', {
//     excerpt: true,
//     transform(raw): Post[] {
//         return raw
//         .map(({ url, frontmatter, excerpt }) => ({
//             title: frontmatter.title,
//             url,
//             excerpt,
//             date: formatDate(frontmatter.date)
//         }))
//         .sort((a, b) => b.date.time - a.date.time)
//     }
// })

export default createContentLoader('pages/article/**/*.md', {
    transform(raw): iArticleData {
        const articleData: iArticleData = {
            author: [],
            tags: [],
            categories: [],
            posts: [],
            everyCategoryCount: {},
        };

        // console.log(raw);

        raw.forEach(({ url, frontmatter, excerpt }) => {
            if (frontmatter.publish == undefined || frontmatter.publish) {
                if (frontmatter.tags) articleData.tags.push(...frontmatter.tags);
                if (frontmatter.categories) {

                    articleData.categories.push(...frontmatter.categories);

                    frontmatter.categories.forEach((category: string) => {
                        if (articleData.everyCategoryCount[category]) {
                            articleData.everyCategoryCount[category]++;
                        } else {
                            articleData.everyCategoryCount[category] = 1;
                        }
                    });
                }
                articleData.posts.push({
                    title: frontmatter.title,
                    url,
                    excerpt,
                    date: formatDate(frontmatter.date),
                    // frontmatter,
                });
            }
        });

        // articleData.tags = removeDuplicates(articleData.tags) as string[];
        // articleData.categories = removeDuplicates(articleData.categories) as string[];
        articleData.posts.sort((a, b) => b.date.time - a.date.time);

        return articleData;
    },
});

// function removeDuplicates(arr) {
//     // 先建立一個叫 seen 的集合，來存下已經有的元素
//     const seen = new Set();
//     // 建立一個叫 output 的陣列，用來輸出最終結果
//     const output = [];

//     // 用迴圈，走過原本的陣列
//     for (let item of arr) {
//         // 判斷當前的元素，是否已經在 seen，如果不在，表示還沒有重複
//         if (!seen.has(item)) {
//             output.push(item); // 所以這時可以放入要被輸出的 output 陣列
//             seen.add(item); // 這時紀錄一下這個項目已經被放入，下次就不會再被放入
//         }
//     }

//     return output; // 最終輸出結果，就大功告成了
// }

function formatDate(raw: string): iPost['date'] {
    const date = new Date(raw)
    date.setUTCHours(12)
    return {
        time: +date,
        string: date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }
}