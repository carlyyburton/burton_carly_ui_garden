FROM node:16-alpine AS builder
ENV NODE_ENV production
WORKDIR /burton_carly_ui_garden_build_checks
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.23.2-alpine AS production
ENV NODE_ENV production
COPY --from=builder /burton_carly_ui_garden_build_checks/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]