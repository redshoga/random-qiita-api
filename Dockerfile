FROM node:slim
WORKDIR workspace
COPY /src /workspace
RUN pwd && \
    cd ./set-qiita-urls && \
    npm install && \
    npm install firebase-tools -g && \
    firebase --version
CMD node set-qiita-urls && \
    firebase deploy --token "$FIREBASE_TOKEN"
