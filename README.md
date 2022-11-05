# docker run -p 5050:5050 images-gallery-api
# docker run -p 3000:3000 images-gallery-frontend


alternative method to run container [Any Place]
# docker run -p 5050:5050 -d images-gallery-api

run both containers together
# docker-compose up -d


docker build . -t images-gallery-frontend