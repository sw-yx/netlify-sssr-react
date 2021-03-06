import axios from 'axios';
import path from 'path';

export default {
  siteRoot: 'https://netlify-sssr-react.netlify.com/',
  plugins: ['react-static-plugin-typescript'],
  entry: path.join(__dirname, 'src', 'index.tsx'),
  devServer: {
    proxy: {
      // '/.netlify/functions': { // old
      '/characters': {
        // this doesnt really work :(
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/\\.netlify/functions/react-express-ssr': ''
        }
      }
    }
  },
  getSiteData: () => ({
    title: 'React Static'
  })
  // getRoutes: async () => {
  //   const { data: posts } = await axios.get(
  //     'https://jsonplaceholder.typicode.com/posts'
  //   );
  //   return [
  //     {
  //       path: '/blog',
  //       getData: () => ({
  //         posts
  //       }),
  //       children: posts.map(post => ({
  //         path: `/post/${post.id}`,
  //         component: 'src/containers/Post',
  //         getData: () => ({
  //           post
  //         })
  //       }))
  //     }
  //   ];
  // }
};
