FROM node:20.17.0 as build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.27.1
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/resume-frontend/browser /usr/share/nginx/html
