#!/bin/bash

cd frontend && npm run dev &
cd ..  && docker compose up &&  cd backend && npm run start