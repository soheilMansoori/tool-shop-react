import React from 'react'
import Container from '@mui/material/Container'

function EndBanners() {
  return (
    <section>
        <Container maxWidth="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img className="rounded-3xl" src="./imgs/Banners/banner-2.png" alt="banner 1/2" />
          </div>
          <div>
            <img className="rounded-3xl" src="./imgs/Banners/banner-3.png" alt="banner 2/2" />
          </div>
        </div>
        </Container>
    </section>
  )
}

export default EndBanners
