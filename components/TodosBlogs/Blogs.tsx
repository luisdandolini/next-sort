/* eslint-disable @next/next/no-img-element */
import api from '../../services/api';
import styles from '../../src/styles/blog/Blogs.module.css';
import { useEffect, useState } from 'react';
import { createTheme, Pagination, ThemeProvider } from '@mui/material';

interface AllBlogs {
  id: number;
  title: string;
  content: string;
  media: string;
}

export default function Blogs() {
  const [allBlogs, setAllBlogs] = useState<AllBlogs[]>([]);

  const isBrowser = typeof window !== 'undefined';
  const savedPageBlog = isBrowser ? parseInt(localStorage.getItem('savedPageBlog') || '1', 10) : 1;

  const [page, setPage] = useState(savedPageBlog);
  const [totalPages, setTotalPages] = useState(0);
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3E5E3F',
        contrastText: '#fff',
      },
    },
  });

  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem('savedPageBlog', page.toString());
    }

    api.get(`/blog-posts-paginate?page=${page}`).then((response) => {
      console.log(response.data);
      setAllBlogs(response.data.posts);
      setTotalPages(response.data.totalPages);
    });
  }, [page]);

  return (
    <section className={styles.blog}>
      <h1 className={styles.title}>Confira as notícias do Blog</h1>

      <div className={styles.container}>
        {allBlogs.map((post) => (
          <div key={post.id} className={styles.container_blog}>
            <div className={styles.photo}>
              <img
                src={`https://sort.vps-kinghost.net/media/blog/${post.media}`}
                alt={post.title}
                className={styles.photo}
              />
            </div>
            <div>
              <h2 className={styles.title_blog}>{post.title}</h2>
              <p
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: post.content.replace(/&nbsp;/g, ' ') }}
              ></p>
            </div>
            <p className={styles.link}>Ler mais</p>
          </div>
        ))}
      </div>
      <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <ThemeProvider theme={theme}>
          <Pagination
            count={totalPages} 
            color="primary"
            size="small" 
            page={page}
            style={{margin:'20px 0', display:'flex', justifyContent:'flex-end'}}
            onChange={(event, value) => {
                setPage(value); 
            }}
          />
        </ThemeProvider>
      </div>
    </section>
  );
}
