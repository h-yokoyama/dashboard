// import { Avatar, Box, Card, CardHeader, CardMedia } from '@mui/material'
import { Avatar, Box, Card, CardMedia, Grid, Typography } from '@mui/material'

import CircularProgress from '@mui/material/CircularProgress'
import { red } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { defaultNewsProps } from '../../data/NewsRanking'
import { INewsRanking, INews } from '../../interface/News'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const BASE_URL = 'https://lambda-result-bucket.s3.ap-northeast-1.amazonaws.com/'
const URL_RANKING = `${BASE_URL}ynews_ranking.json`
const INTERVAL = 60 * 60 * 2 * 1000 // 2hour
const NEWS_DISPLAY_SIZE = 4

const News: React.FC = () => {
  const [news, setNews] = useState<INewsRanking>(defaultNewsProps)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<boolean>(false)
  const setNewsRanking = () => {
    const promiseNews = fetch(URL_RANKING)
      .then((response) => response.json())
      .catch((error) => Promise.reject(error))

    Promise.all([promiseNews, promiseNews])
      .then(([promiseNewsRes]) => {
        setNews(promiseNewsRes)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    setNewsRanking()
    const interval = setInterval(() => setNewsRanking(), INTERVAL)
    return () => clearInterval(interval)
  }, [])

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  if (loading) {
    return (
      <Box sx={{ display: 'block', margin: 'auto' }}>
        <CircularProgress />
      </Box>
    )
  }

  const NewsItem = (n: INews) => (
    <Card>
      <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs={1}>
          <Avatar
            sx={{
              textAlign: 'center',
              bgcolor: red[500],
              margin: '0 auto',
              color: '#FFF'
            }}
            aria-label='recipe'>
            {n.number}
          </Avatar>
        </Grid>
        <Grid item xs={1}>
          <CardMedia
            component='img'
            sx={{ height: '81px' }}
            image={n.src}
            alt={n.title}
          />
        </Grid>
        <Grid item xs={10}>
          <Grid container direction='column'>
            <Grid item xs={10}>
              <Typography
                align='left'
                sx={{ fontSize: 16, paddingLeft: '8px' }}>
                {n.title}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                align='right'
                variant='subtitle2'
                sx={{
                  paddingRight: '8px'
                }}>{`${n.media} ${n.time}`}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )

  return (
    <div style={{ margin: '0 24px 16px 0' }}>
      <Carousel
        showIndicators={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        transitionTime={500}>
        {news.ranking
          .filter((_n: INews, i: number) => i % NEWS_DISPLAY_SIZE === 0)
          .map((_n: INews, i: number) => (
            <div key={i}>
              {Array.from(Array(NEWS_DISPLAY_SIZE).keys()).map((_v, j) =>
                NewsItem(news.ranking[i * NEWS_DISPLAY_SIZE + j])
              )}
            </div>
          ))}
      </Carousel>
    </div>
  )
}
export default News
