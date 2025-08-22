FROM harbor.aihujing.com/whisperx/node:v22.6.0
WORKDIR /app/
COPY whisperx.zip /app/
RUN unzip whisperx.zip -d /app  # 相对路径更简洁
EXPOSE 3000
CMD ["pm2-runtime", "start", "npm", "--name", "whisperx", "--", "run", "start:prod"]