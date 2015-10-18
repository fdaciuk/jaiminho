FROM alpine:3.2

ENV NODE_VERSION v4.2.1

RUN echo "http://nl.alpinelinux.org/alpine/edge/main" | \
  tee /etc/apk/repositories \

  # Install packages
  && apk add --update \
    g++ \
    gcc \
    make \
    bash \
    python \
    git \
    curl \

  # Clear Alpine cache
  && rm -rf /var/cache/apk/* \

  # Install NVM
  && git clone https://github.com/creationix/nvm.git /opt/nvm \
  && cd /opt/nvm \
  && source /opt/nvm/nvm.sh
  # && nvm install $NODE_VERSION \
  # && nvm use $NODE_VERSION \
  # && nvm alias default $NODE_VERSION \
  # && ln -s /opt/nvm/$NODE_VERSION/bin/node /usr/bin/node \
  # && ln -s /opt/nvm/$NODE_VERSION/bin/npm /usr/bin/npm \

 # NodeJS modules
 # && npm i -g \
 #  nodemon \
 #  istanbul

EXPOSE 5858
EXPOSE 3000

# WORKDIR /app
